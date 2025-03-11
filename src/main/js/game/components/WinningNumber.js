define((require) => {
    const PIXI = require('com/pixijs/pixi');
    const resLib = require('skbJet/component/resourceLoader/resourceLib');
    const utils = require('game/components/utils/utils');
    const NumberCard = require('./NumberCard');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
    const Tween = window.TweenMax;
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');

    require('com/gsap/TimelineMax');
    require('com/gsap/easing/EasePack');

    const WIDTH = 96;
    const HEIGHT = 114;

    class WinningNumber extends NumberCard {
        constructor(index) {
            super(WIDTH, HEIGHT);
            this.firstPlay = true;
            this.bagIndex = index;
            this.pickPointType = 'Lucky';
            this.defaultState = 'LuckySTATIC';
            this.introTimeLine = null;
            this.initSpine();
            this.reset();
            this.coverContainer.renderable = true;
            this.playingWinIdle = false;
            this.matchNumber = null;

            msgBus.subscribe('game.winningNumber.resetBagDropFlag', () => {
                this.bagDrop = false;
            });
        }

        enable() {
            return new Promise(resolve => {
                this.reveal = resolve;
                this.enabled = true;
                if (this.revealed) {
                    resolve();
                }
                if (gameConfig.forcedLuckyNumberReveal === true) {
                    this.inGame = true;
                    this.introTimeLine.restart();
                }
            }).then(() => {
                this.enabled = false;
            });
        }

        initSpine() {
            const _this = this;
            this.coverAnim = new PIXI.spine.Spine(resLib.spine['CoverAnims'].spineData);
            this.setSpineCoverState({
                state: 'DEFAULT',
                loop: false
            });
            this.coverContainer.addChild(_this.coverAnim);
            // Now init the resultAnim spine, we're doing this on init rather than populate, we add both
            // and then just show the relevant one (no bonus triggers on Winning Numbers)
            this.resultAnims[0] = new PIXI.spine.Spine(resLib.spine['GoldNumbers'].spineData);
            this.resultAnims[0].scale.set(0.8);
            this.resultAnims[1] = new PIXI.spine.Spine(resLib.spine['SilverNumbers'].spineData);
            this.resultAnims[1].scale.set(0.8);
            // Set renderable on all of them to false
            this.resultAnims.forEach((anim) => {
                anim.renderable = false;
            });
            // Add to result container
            this.resultContainer.addChild(this.resultAnims[0], this.resultAnims[1]);
        }

        populate(number) {
            this.number = number;
            this.assetNumber = number < 10 ? '0' + number : '' + number;
            super.populate(this.number); // Always pass through GOLD for te Lucky numbers

            // We're not using super.populate() any more
            // Show the relevant spine anim - this.resultAnims[0] is Gold
            this.resultAnimIndex = 0;
            this.resultAnims[this.resultAnimIndex].renderable = true;

            this.matchNumber = number;
        }

        prompt() {
            const resultAnim = this.resultAnims[this.resultAnimIndex];
            if (gameConfig.forcedLuckyNumberReveal === false || gameConfig.forcedLuckyNumberReveal === undefined) {
                if (resultAnim) {
                    if (!resultAnim.state.tracks[0].animation.name === "GoldMATCHED_REVEAL") {
                        super.prompt();
                    }
                }
            }
        }

        presentWin(delayPresentation) {
            let _this = this;
            let presentationDelay = delayPresentation ? 0.6 : 0;
            const resultAnim = this.resultAnims[this.resultAnimIndex];
            _this.bringToFront();
            if (!_this.playingWinIdle) {
                audio.playSequential('numberMatch');
            }

            return new Promise((resolve) => {
                Tween.delayedCall(presentationDelay, () => {
                    Tween.fromTo(
                        _this.resultContainer.scale,
                        0.75, {
                            x: 0.666,
                            y: 0.666
                        }, {
                            x: 1,
                            y: 1,
                            ease: window.Elastic.easeOut.config(
                                gameConfig.matchAnimAmplitude,
                                gameConfig.matchAnimPeriod
                            ),
                            onStart: function () {
                                Tween.delayedCall(0.28, function () {
                                    /*if (!_this.playingWinIdle) {
                                        resultAnim.autoUpdate = true;
                                        if (!resultAnim.state.tracks[0].animation.name === "GoldMATCHED_REVEAL") {
                                            resultAnim.state.setAnimation(0, 'GoldMATCHED_IDLE', true);
                                        } else {
                                            resultAnim.state.addAnimation(0, 'GoldMATCHED_IDLE', true);
                                        }
                                        _this.playingWinIdle = true;
                                    }*/
                                    if (!_this.playingWinIdle) {
                                        utils.stopSpineAnim(resultAnim);
                                        resultAnim.renderable = true;
                                        resultAnim.autoUpdate = true;
                                        resultAnim.skeleton.setSkin(null);
                                        resultAnim.skeleton.setSkinByName('GOLD/GF' + _this.assetNumber);
                                        resultAnim.state.setAnimation(0, 'GoldMATCHED_IDLE', true);
                                        _this.playingWinIdle = true;
                                    }
                                });
                            },
                            onComplete: function () {
                                // Pause the spine animation
                                if (!_this.playingWinIdle) {
                                    resultAnim.state.tracks[0].time = 0;
                                    resultAnim.state.tracks[0].timeScale = 1;
                                }
                                resolve();
                            },
                        }
                    );
                });
            });
        }

        setSpineCoverState(data) {
            let nextState;
            let doLoop = data.loop || false;
            let syncTime = data.sync || 0;

            switch (data.state) {
                case 'DEFAULT':
                    nextState = 'LuckySTATIC';
                    break;
                case 'IDLE':
                    nextState = 'LuckyIDLE';
                    break;
                case 'REVEAL':
                    nextState = 'LuckyREVEAL';
                    break;
                case 'ROLLOVER':
                    nextState = 'LuckySTATIC';
                    break;
                case 'ROLLOUT':
                    nextState = 'LuckySTATIC';
                    break;
                case 'OFF':
                    nextState = this.defaultState;
                    break;
                default:
                    nextState = this.defaultState;
                    break;
            }

            // If we're already in a rollout state, we don't want to be forcing the state back to default
            // as this would interrupt the rollout animation, so if we're going back to default, don't do anything
            if (this.interactionState === 'ROLLOUT' && nextState === this.defaultState) {
                return;
            }

            // Store the interaction state
            this.interactionState = data.state;

            this.coverAnim.renderable = data.state !== 'OFF';
            this.coverAnim.state.setAnimation(syncTime, nextState, doLoop);

            let globalScope = this;
            if (data.state === 'REVEAL') {
                Tween.delayedCall(0.2, function startResultAnimation() {
                    globalScope.setSpineResultState();
                });
            }
        }

        rollover() {
            super.rollover();

            if (this.enabled && this.interactionState === 'ROLLOVER') {
                this.coverAnim.state.setAnimation(0, 'LuckyMOUSEOVER', false);
            }

        }

        stopRollover() {
            super.stopRollover();

            if (this.enabled && this.interactionState === 'ROLLOUT') {
                this.coverAnim.state.setAnimation(0, 'LuckyMOUSEOUT', false);
            }
        }

        setSpineResultState() {
            let _this = this;
            const resultAnim = this.resultAnims[this.resultAnimIndex];
            resultAnim.skeleton.setSkin(null);

            resultAnim.state.addListener({
                start: function (entry) {
                    if (entry.animation.name.indexOf('GoldIDLE') > -1) {
                        if (!_this.matched) {

                            resultAnim.state.tracks[0].timeScale = 0;
                            resultAnim.state.tracks[0].time = 2;
                        } else {
                            resultAnim.state.setAnimation(0, 'GoldMATCHED', false);
                            resultAnim.state.addAnimation(0, 'GoldMATCHED_IDLE', false, 0);
                            resultAnim.state.tracks[0].timeScale = 1;
                        }
                        utils.removeSpineListeners(resultAnim);
                    }
                }
            });

            resultAnim.skeleton.setSkinByName('GOLD/GF' + this.assetNumber);
            resultAnim.state.setAnimation(0, 'GoldREVEAL', false);
            resultAnim.state.addAnimation(0, 'GoldIDLE', true, 0);
        }

        reset() {
            super.reset();
            this.playingWinIdle = false;
            if (gameConfig.forcedLuckyNumberReveal === true) {
                if (this.firstPlay === false) {
                    if (this.bagDrop === false) {
                        this.coverContainer.renderable = false;
                        this.coverAnim.state.setAnimation(0, 'LuckyRESET', false);
                        this.coverAnim.state.tracks[0].timeScale = 0;
                    }
                    this.introTimeLine.restart();
                }
            }
        }

        static fromContainer(container, index) {
            const card = new WinningNumber(index);
            container.addChild(card);
            return card;
        }
    }

    return WinningNumber;
});