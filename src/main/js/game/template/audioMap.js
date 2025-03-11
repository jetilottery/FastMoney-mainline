define({
  // IMPLEMENT: Map SFX to channels

  /* 
   * If audio assets are named nicely you can do:
   * {
   *  fileName: channelNumber
   * }
   * 
   * Otherwise use a nice name for the keys and include the filename and channel as an array:
   * {
   *  soundName: ['Ugly_sound_file_V2-final', channelNumber]
   * }
   */

  music: ['BackgroundMusicLoop', 0],
  bonusMusic: ['BonusMusicLoop', 0],

  numberMatch_1: ['NumberMatch', 1],
  numberMatch_2: ['NumberMatch', 2],
  numberMatch_3: ['NumberMatch', 11],

  winTerminator: ['BackgroundMusicTerm_WIN', 1],
  loseTerminator: ['BackgroundMusicTerm_LOSE', 1],
  click: ['UI_Click', 4],
  costDown: ['BetDown', 1],
  costUp: ['BetUp', 2],
  buy: ['BuyButton', 2],
  costMax: ['BetMax', 3],

  /*
   * Audio groups
   * A game can include multiple variations of each of these sounds. Ensure each variation starts
   * with the same name plus some kind of ordered suffix. Each time a sound group plays the next 
   * item in the group will be used.
   */
  playerNumber_1: ['LuckyNumberSelect_1', 3],
  playerNumber_2: ['LuckyNumberSelect_2', 4],
  playerNumber_3: ['LuckyNumberSelect_3', 5],
  playerNumber_4: ['LuckyNumberSelect_4', 6],
  playerNumber_5: ['LuckyNumberSelect_5', 7],

  winningNumber_1: ['YourNumberSelect_1', 3],
  winningNumber_2: ['YourNumberSelect_2', 4],
  winningNumber_3: ['YourNumberSelect_3', 5],
  winningNumber_4: ['YourNumberSelect_4', 6],
  winningNumber_5: ['YourNumberSelect_5', 7],

  revealAllLuckyNumbers: ['LuckyNumberSelect__RevealAll', 8],
  revealAllYourNumbers: ['YourNumberSelect_RevealAll', 6],

  instantWin: ['InstantWin', 9],
  instantWin2X: ['InstantWin2x', 10],

  //wheel spin audio for the bonus wheel
  spinStart: ['SpinButton', 1],
  spinSustain: ['SpinLoop', 2],
  spinStop: ['SpinStop', 3],

  transition: ['Transition', 4],

  wheelBonusTransition: ['WheelBonusTransition', 5],
  wheelBonusRevealed: ['WheelBonusReveal', 7],
  wheelBonusTriggered: ['WheelBonusTriggered', 6],

  prizeBonusTransition: ['PrizeBonusTransition', 8],
  prizeBonusRevealed: ['PrizeBonusReveal', 9],
  prizeBonusTriggered: ['PrizeBonusTriggered', 9],

  prizeWin: ['PrizeWin', 11],

  goldBarSelect: ['Collect', 1],
  collect: ['Collect', 1],
  MultiplierWin: ['MultiplierWin', 8],

  /*
   * Optional audio
   * The following audio is optional and will be ignored if not included
   */

  //  buy: ['BuyButton', 4],
  //  revealAll: ['RevealAllButton', 4],
});