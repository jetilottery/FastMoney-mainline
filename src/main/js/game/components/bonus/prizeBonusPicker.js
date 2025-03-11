define(require => {

    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const PIXI = require('com/pixijs/pixi');
    const Pressable = require('skbJet/componentManchester/standardIW/components/pressable');
    const prizeBonusButton = require('game/components/bonus/prizeBonusButton');
    const resLib = require('skbJet/component/resourceLoader/resourceLib');
    const textStyles = require('skbJet/componentManchester/standardIW/textStyles');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const meterData = require('skbJet/componentManchester/standardIW/meterData');
    const prizeData = require('skbJet/componentManchester/standardIW/prizeData');
    const gameConfig = require('skbJet/componentManchester/standardIW/gameConfig');
    const resources = require('skbJet/component/pixiResourceLoader/pixiResourceLoader');
    const FittedText = require('skbJet/componentManchester/standardIW/components/fittedText');


    require('com/gsap/TweenLite');
    require('com/gsap/easing/EasePack');

    const Tween = window.TweenLite;

    class PrizeBonus extends Pressable {

        constructor(props) {
            super(props);
            this.prefix = props.prefix;
            this.container = props.container;
            this.index = props.index;

            this.coverContainer = new PIXI.Container();
            this.FittedTextContainer = new PIXI.Container();
            this.backgroundSpineAnimContainer = new PIXI.Container();
            this.coinAnimContainer = new PIXI.Container();

            this.coinAnimContainer.x = 10;

            this.backgroundSpineAnimContainer.scale.set(0.9);

            this.value = null;

            this.valueTexts = [
                new FittedText(''),
                new FittedText('')
            ];

            this.valueTexts.forEach(function (valueText, index) {
                var textStyle = !index ? 'collectBonusValuePicker' : 'collectBonusValuePickerGradient';
                valueText.style = textStyles.parse(textStyle);
                valueText.y = -10;
                valueText.maxWidth = 148;
                valueText.anchor.set(0.5);
            });

            this.interactive = false;

            this.hitAreaBounds = new PIXI.Rectangle(-100, -65,
                200,
                120
            );

            this.hitArea = this.hitAreaBounds;

            this.addChild(this.backgroundSpineAnimContainer, this.coinAnimContainer, this.coverContainer);
            this.container.addChild(this, this.valueTexts[0], this.valueTexts[1]);

            this.reveal = undefined;

            this.initSpine();


            // this.coverAnim.stateData.setMix('PrizeBonus/GoldBar' + this.prefix + '_mouseover', 'PrizeBonus/GoldBar' + this.prefix + '_loop', 0.2);
            // this.coverAnim.stateData.setMix('PrizeBonus/GoldBar' + this.prefix + '_loop', 'PrizeBonus/GoldBar' + this.prefix + '_mouseover', 0.2);
        }

        initSpine() {
            const _this = this;
            this.coverAnim = new PIXI.spine.Spine(resLib.spine['Bonuses'].spineData);
            this.coverAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_loop', true);
            this.coverContainer.addChild(_this.coverAnim);

            this.backgroundAnim = new PIXI.spine.Spine(resLib.spine['Bonuses'].spineData);
            this.backgroundSpineAnimContainer.addChild(_this.backgroundAnim);

            this.coinAnim = new PIXI.spine.Spine(resLib.spine['Bonuses'].spineData);
            this.coinAnim.state.setAnimation(0, 'PrizeBonus/CoinStackLoop', true);
            this.coinAnimContainer.addChild(_this.coinAnim);

            this.coverContainer.renderable = false;
            this.backgroundSpineAnimContainer.renderable = false;
            this.coinAnimContainer.renderable = false;
            this.backgroundSpineAnimContainer.alpha = 0;
        }

        setToStaticAnimation() {
            if (this.value === null) {
                this.onHoverOut();
            }
        }

        intro() {
            return new Promise(resolve => {

                Tween.delayedCall(gameConfig.collectBonusIntroDelay * this.index, () => {
                    this.coverAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_intro', false);
                    this.coverAnim.state.addAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_loop', false, 0);
                    this.coverContainer.renderable = true;

                    Tween.delayedCall(1, () => {
                        if (this.index === 9) {
                            prizeBonusButton.enableButton();
                        }
                        resolve();
                    }, null, this);
                });
            });
        }

        enable() {
            return new Promise(resolve => {
                this.reveal = resolve;
                this.setEvents(true);
            }).then(() => {
                this.enabled = false;
                this.setEvents(false);
            });
        }

        showValue(value) {
            const _this = this;
            return new Promise(resolve => {
                this.value = value;
                if (this.coverAnim.state.tracks[1]) {
                    this.coverAnim.state.setEmptyAnimation(1, 0);
                }

                this.coverAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_reveal', false);
                this.backgroundAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_revealed_BLUE', false);

                let backgroundSpineAnimContainer = this.backgroundSpineAnimContainer;

                let text;

                if (this.value === "Z") {
                    prizeBonusButton.softDisable();
                    msgBus.publish('game.collect.disable');

                    text = new FittedText(resources.i18n.Game.collect, textStyles.parse('collectBonus'));
                    //text.style = textStyles.parse('collectBonus');
                    //text = new PIXI.Text(resources.i18n.Game.collect, textStyles.parse('collectBonus'));
                    //text.maxWidth = 300;
                    text.alpha = 0;
                    text.maxWidth = 230;
                    text.anchor.set(0.5);
                    text.scale.y = -1;
                    text.y = 2;

                    this.FittedTextContainer.scale.y = -1;
                    this.coinAnim.slotContainers[this.coinAnim.spineData.findSlotIndex("Collect_Text")].addChild(text);
                    //text.scale.x = 1;
                }

                // Tween.delayedCall((this.coverAnim.spineData.animations[20].duration / 4), () => {
                if (this.value === "Z") {
                    prizeBonusButton.disableButton();

                    // make the plaque, star an animation to be in front of everything. :)
                    this.coinAnimContainer.y = 4;
                    this.coinAnimContainer.renderable = true;
                    // show the coin roll animation paused at the start
                    this.coinAnim.state.setAnimation(0, 'PrizeBonus/CoinStackReveal', false);
                    this.coinAnim.state.timeScale = 0;
                    // once the reveal anim has finished play the anim then roll into the loop
                    this.coinAnim.state.timeScale = 1;
                    this.coinAnim.state.addAnimation(0, 'PrizeBonus/CoinStackLoop', true, 0);

                    msgBus.publish('game.collect.end');

                    //Tween.delayedCall(1,()=>{

                    text.alpha = 1;

                    //});

                } else {
                    this.valueTexts.forEach(function (valueText) {
                        valueText.alpha = 0;
                        valueText.text = SKBeInstant.formatCurrency(prizeData.prizeTable[_this.value]).formattedAmount;

                        backgroundSpineAnimContainer.renderable = true;
                        Tween.delayedCall(0.8, () => {
                            Tween.to(backgroundSpineAnimContainer, 0.25, {
                                alpha: 1
                            });
                            Tween.to(valueText, 0.25, {
                                alpha: 1,
                            });
                        });
                    });

                    Tween.delayedCall(0.8, () => {
                        msgBus.publish('game.collect.addToTotal', prizeData.prizeTable[this.value]);
                        resolve();
                    });
                }
            });
        }

        addToTotal() {
            meterData.win += prizeData.prizeTable[this.value];
        }

        reset() {
            this.setEvents(false);
            this.coverContainer.renderable = false;
            this.backgroundSpineAnimContainer.renderable = false;
            this.backgroundSpineAnimContainer.alpha = 0;
            this.coinAnimContainer.renderable = false;
            this.value = null;
            this.valueTexts.forEach(function (valueText) {
                valueText.text = '';
            });
            this.reveal = undefined;
            this.coverAnim.state.clearTrack(0);
            this.coverAnim.skeleton.setToSetupPose();
            this.coverAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_loop', true);
            this.coinAnim.state.setAnimation(0, 'PrizeBonus/CoinStackLoop', true);

            this.coverContainer.scale.set(1);
        }

        disable(delayToShowDisbaled) {
            this.interactive = false;
            this.reveal = undefined;
            this.enabled = false;
            Tween.delayedCall(delayToShowDisbaled, () => {
                if (this.value === null) {
                    this.coverAnim.state.setAnimation(0, 'PrizeBonus/GoldBar' + this.prefix + '_desaturates', false);
                }
            });
        }

        onPress() {
            this.reveal();
        }

        onHover() {
            // set the mouseover animation to play on track 1, then set the "alpha" of track 1 to 0 and tween it in - blends the animation on track 1 with the loop already playing on track 0
            this.coverAnim.state.setAnimation(1, 'PrizeBonus/GoldBar' + this.prefix + '_mouseover', true);
            this.coverAnim.state.tracks[1].alpha = 0;
            Tween.to(this.coverContainer.scale, 0.3, {
                x: 1.2,
                y: 1.2
            });
            Tween.to(this.coverAnim.state.tracks[1], 0.2, {
                alpha: 1
            });
        }

        onHoverOut() {
            Tween.to(this.coverContainer.scale, 0.3, {
                x: 1,
                y: 1
            });
            // blend out the mouseover animation
            if (this.coverAnim.state.tracks[1]) {
                Tween.to(this.coverAnim.state.tracks[1], 0.2, {
                    alpha: 0
                });
            }
        }

        setEvents(bool) {
            if (bool) {
                this.on('press', this.onPress);
                this.on('pointerover', this.onHover);
                this.on('pointerout', this.onHoverOut);
            } else {
                this.off('press', this.onPress);
                this.off('pointerover', this.onHover);
                this.off('pointerout', this.onHoverOut);
            }
        }
    }

    return PrizeBonus;

});