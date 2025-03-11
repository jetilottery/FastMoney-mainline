"use strict";

define({
    plaqueMessageSmall: {},
    buttonText: {},
    bonusCardTitle: {
        "fontFamily": "hatten",
        "fontSize": 36,
        "dropShadow": true,
        "dropShadowAngle": 0,
        "dropShadowBlur": 5,
        "dropShadowColor": "#fff77e",
        "dropShadowDistance": 0,
        "fill": ["#b7c0ca", "#ffffff", "#94a3b1", "#ccd2d9", "#ffffff"],
        "fillGradientStops": [0.4, 0.5, 0.5, 0.6],
        "fontWeight": "bold",
        "lineJoin": "round",
        "miterLimit": 18,
        "padding": 10,
        "stroke": "#2b0000",
        "strokeThickness": 5
    },
    winningNumbersTitle: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": "white",
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 35,
        "fontWeight": "bold",
        "stroke": "#000000"
    },
    winningNumbersTitlePortrait: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": "white",
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 35,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    wheelBonusInfo: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 1,
        "dropShadowColor": "#000000",
        "dropShadowDistance": 1,
        "fill": "#ffffff",
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 50,
        "lineJoin": "round",
        "miterLimit": 28,
        "padding": 41,
        //"stroke": "#2d0000",
        //"strokeThickness": 7,
        "align": "center",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    wheelBonusValues: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#5E0000",
        "dropShadowDistance": 0,
        "fill": "#ffffff",
        "fontSize": 60,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "right",
        "stroke": "#5E0000",
        "strokeThickness": 2,
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    wheelBonusValuesGradient: {
        "fill": "#ffffff",
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        //"fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#000000",
        "dropShadowDistance": 0,
        "fontSize": 60,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "right",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    wheelBonusMultiplierValues: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 10,
        "dropShadowColor": "#63180A",
        "dropShadowDistance": 0,
        "fill": ["#ffffff", "#ffeb45", "#faba3b", "#c3963b", "#faba3b", "#ffeb45", "#ffeb45"],
        "fillGradientStops": [0.33, 0.43, 0.47, 0.5, 0.55, 0.7, 0.82],
        "fontSize": 60,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#000000",
        "strokeThickness": 5,
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    defaultPrizeValue: {
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 35,
        "fontFamily": "Oswald",
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    prizeValueNoWin: {
        "fontFamily": "Oswald",
        "fontWeight": "bold",
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 9,
        "dropShadowColor": "#000000",
        "dropShadowDistance": 2,
        "fill": "#ffffff",
        "fontSize": 31,
        "lineJoin": "round",
        "miterLimit": 28,
        "padding": 41,
        "align": "center"
    },
    prizeValueWin: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 28,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    prizeValueWinGradient: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 28,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    prizeValueNoWinMobile: {
        "fontFamily": "Oswald",
        "fontWeight": "bold",
        "dropShadow": true,
        "dropShadowBlur": 2,
        "dropShadowColor": "#000000",
        "dropShadowDistance": 2,
        "fill": "#ffffff",
        //"fontWeight": "normal",
        "fontSize": 30,
        "lineJoin": "round",
        "miterLimit": 28,
        "padding": 41,
        "align": "center"
    },
    prizeValueWinMobile: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 28,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    prizeValueWinGradientMobile: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 28,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    winUpToText: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 45,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    winUpToTextPortrait: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 38,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    winUpToValue: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 45,
        "fontWeight": "bold",
        "stroke": "#fff261",
        "align": "center"
    },
    winUpToValueGradient: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 45,
        "fontWeight": "bold",
        "stroke": "#fff261",
        "align": "center"
    },
    winUpToValuePortrait: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 45,
        "fontWeight": "bold",
        "stroke": "#fff261",
        "align": "center"
    },
    winUpToValueGradientPortrait: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 45,
        "fontWeight": "bold",
        "stroke": "#fff261",
        "align": "center"
    },
    wheelWinUpToLine1Text: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 38,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    wheelWinUpToLine1TextPortrait: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 50,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    wheelWinUpToLine2Text: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 50,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    wheelWinUpToLine2TextPortrait: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": [
            "#ffffc7",
            "#f2b423"
        ],
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 50,
        "fontWeight": "bold",
        "stroke": "#fff261"
    },
    wheelBonusTotalWinLabel: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#000000",
        "dropShadowDistance": 0,
        "fill": "#ffffff",
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 42,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#000000",
        "strokeThickness": 2,
        "align": "left",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    wheelWinMultiplierValue: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#b32c13",
        "dropShadowDistance": 0,
        "fill": ["#ffffff", "#ffeb45", "#faba3b", "#c3963b", "#faba3b", "#ffeb45", "#ffeb45"],
        "fillGradientStops": [0.33, 0.43, 0.47, 0.55, 0.62, 0.7, 0.82],
        "fontSize": 60,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#b32c13",
        "strokeThickness": 1,
        "align": "right",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    wheelWinPrizeValue: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#b32c13",
        "dropShadowDistance": 0,
        "fill": "#ffffff",
        "fontSize": 60,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "right",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    wheelWinPrizeValueGradient: {
        "fill": ["#ffffff", "#ffeb45", "#faba3b", "#c3963b", "#faba3b", "#ffeb45", "#ffeb45"],
        "fillGradientStops": [0.33, 0.43, 0.47, 0.55, 0.62, 0.7, 0.82],
        "fontSize": 60,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#b32c13",
        "strokeThickness": 1,
        "align": "right",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    ticketSelectCostValue: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 1,
        "dropShadowColor": "#b32c13",
        "dropShadowDistance": 1,
        "fill": "#FFFFED",
        "fontFamily": "oswald",
        "fontSize": 35,
        "fontWeight": "normal",
        "lineJoin": "round",
        "miterLimit": 14
    },
    bonusWin6: {
        fontFamily: 'oswald',
        fontSize: 92,
        fontWeight: 'bold',
        align: 'center',
        fill: 'bonusPayTableWinColour'
    },
    bonusNoWin6: {
        fontFamily: 'oswald',
        fontSize: 92,
        fontWeight: 'bold',
        align: 'center',
        fill: 'bonusPayTableNoWinColour'
    },
    bonusWin5: {
        fontFamily: 'oswald',
        fontSize: 82,
        fontWeight: 'bold',
        align: 'center',
        fill: 'bonusPayTableWinColour'
    },
    bonusNoWin5: {
        fontFamily: 'oswald',
        fontSize: 82,
        fontWeight: 'bold',
        align: 'center',
        fill: 'bonusPayTableNoWinColour'
    },
    bonusWin4: {
        fontFamily: 'oswald',
        fontSize: 72,
        fontWeight: 'bold',
        align: 'center',
        fill: 'bonusPayTableWinColour'
    },
    bonusNoWin4: {
        fontFamily: 'oswald',
        fontSize: 72,
        fontWeight: 'bold',
        align: 'center',
        fill: 'bonusPayTableNoWinColour'
    },
    bonusWin3: {
        fontFamily: 'oswald',
        fontSize: 62,
        fontWeight: 'bold',
        align: 'center',
        fill: 'bonusPayTableWinColour'
    },
    bonusNoWin3: {
        fontFamily: 'oswald',
        fontSize: 62,
        fontWeight: 'bold',
        align: 'center',
        fill: 'bonusPayTableNoWinColour'
    },
    bonusWin: {
        fontFamily: 'oswald',
        fontSize: 62,
        fontWeight: 'bold',
        align: 'center',
        fill: 'bonusPayTableWinColour'
    },
    bonusNoWin: {
        fontFamily: 'oswald',
        fontSize: 62,
        fontWeight: 'bold',
        align: 'center',
        fill: 'bonusPayTableNoWinColour'
    },
    losePlaqueBody: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 1,
        "dropShadowColor": "#b32c13",
        "dropShadowDistance": 1,
        "fill": ["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 65,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#2d0000",
        "strokeThickness": 7,
        "align": "center",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    winPlaqueBody: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#5E0000",
        "dropShadowDistance": 0,
        "fill": ["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 50,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#5E0000",
        "strokeThickness": 2,
        "align": "center",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    bonusLabel: {
        fontFamily: 'oswald',
        fontSize: 32,
        fontWeight: 'bold',
        fill: 'fontColourBonusCover'
    },
    bonusFind3ToEnd: {
        fontFamily: 'oswald',
        fontSize: 30,
        fontWeight: 'bold',
        fill: 'bonusFind3ToEndTextColour'
    },
    bonusFind3ToWin: {
        fontFamily: 'oswald',
        fontSize: 30,
        fontWeight: 'bold',
        fill: 'bonusFind3ToWinTextColour'
    },
    buyButtonEnabled: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1,
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    buyButtonDisabled: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1,
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    buyButtonOver: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1,
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    buyButtonPressed: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1,
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    footerLabel: {
        padding: 10,
        fontFamily: 'oswald',
        fill: "#ffc43d"
    },
    footerValue: {
        padding: 10,
        fontFamily: 'oswald',
        fill: "#c5c4c2"
    },
    howToPlayTitle: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 1,
        "dropShadowColor": "#b32c13",
        "dropShadowDistance": 1,
        "fill": ["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 46,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#2d0000",
        "strokeThickness": 7,
        "align": "left",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    howToPlayText: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 1,
        "dropShadowColor": "black",
        "dropShadowDistance": 2,
        "fontSize": 30,
        "fill": '#dddddd',
        "fontFamily": 'oswald',
        "wordWrap": true,
        "padding": 10
    },
    howToPlayTextCenter: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 1,
        "dropShadowColor": "black",
        "dropShadowDistance": 2,
        "fontSize": 30,
        "fill": '#dddddd',
        "fontFamily": 'oswald',
        "align": "center",
        "wordWrap": true,
        "padding": 10
    },
    versionText: {
        fontSize: 18,
        fontFamily: 'oswald',
        fill: '#dddddd',
        padding: 10
    },
    totalWinValue: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#b32c13",
        "dropShadowDistance": 0,
        "fill": "#ffffff",
        "fontSize": 100,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#b32c13",
        "strokeThickness": 2,
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    totalWinValueGradient: {
        "fill": ["#ffffff", "#ffeb45", "#faba3b", "#c3963b", "#faba3b", "#ffeb45", "#ffeb45"],
        "fillGradientStops": [0.33, 0.43, 0.47, 0.55, 0.62, 0.7, 0.82],
        "fontSize": 100,
        "lineJoin": "round",
        "miterLimit": 28,
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    errorMessage: {
        fontFamily: 'oswald',
        fontSize: 30,
        align: 'center',
        fill: '#eeeeee',
        padding: 10,
        lineHeight: 40
    },
    mainButtonEnabled: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1,
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    mainButtonDisabled: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1,
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    mainButtonOver: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1,
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    mainButtonPressed: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1, //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    tutorialOKButtonEnabled: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1, //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    tutorialOKButtonOver: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1, //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    tutorialOKButtonPressed: {
        "fill": "#3b0300",
        "stroke": "#000000",
        "strokeThickness": 1,
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 35,
        "lineJoin": "round",
        "miterLimit": 28,
        "align": "left",
        "fontFamily": "Oswald"
    },
    collectBonusInfo: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#000000",
        "dropShadowDistance": 0,
        "fill": "#ffffff",
        //["#ffffff", "#ffeb45", "#faba3b"],
        //"fillGradientStops": [0.2, 0.5, 0.8],
        "fontSize": 45,
        "lineJoin": "round",
        "miterLimit": 28,
        //"stroke": "#2d0000",
        //"strokeThickness": 2,
        "align": "center",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    collectBonusTotalWin: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#000000",
        "dropShadowDistance": 0,
        "fill": "#ffffff",
        //["#ffffff", "#ffffd1", "#fff9c1", "#d3b57b"],
        "fillGradientStops": [0.4, 0.4, 0.5, 0.7],
        "fontSize": 42,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#000000",
        "strokeThickness": 2,
        "align": "left",
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    collectBonus: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#421500",
        "dropShadowDistance": 0,
        "fill": ["#ffffff", "#ffeb45", "#faba3b", "#c3963b", "#faba3b", "#ffeb45", "#ffeb45"],
        "fillGradientStops": [0.33, 0.43, 0.47, 0.55, 0.62, 0.7, 0.82],
        "fontSize": 50,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#421500",
        "strokeThickness": 2,
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    collectBonusValuePicker: {
        "dropShadow": true,
        "dropShadowAngle": 1.7,
        "dropShadowBlur": 5,
        "dropShadowColor": "#421500",
        "dropShadowDistance": 0,
        "fill": "#ffffff",
        "fontSize": 60,
        "lineJoin": "round",
        "miterLimit": 28,
        "stroke": "#421500",
        "strokeThickness": 2,
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    collectBonusValuePickerGradient: {
        "fill": ["#ffffff", "#ffeb45", "#faba3b", "#c3963b", "#faba3b", "#ffeb45", "#ffeb45"],
        "fillGradientStops": [0.33, 0.43, 0.47, 0.55, 0.62, 0.7, 0.82],
        "fontSize": 60,
        "lineJoin": "round",
        "miterLimit": 28,
        "fontFamily": "Franklin-Gothic-Condensed"
    },
    errorButtonEnabled: {
        fontFamily: 'oswald',
        fontSize: 38,
        fill: '#000000',
        padding: 10
    },
    errorButtonOver: {
        fontFamily: 'oswald',
        fontSize: 38,
        fill: '#000000',
        padding: 10
    },
    errorButtonPressed: {
        fontFamily: 'oswald',
        fontSize: 41,
        fill: '#000000',
        padding: 10
    },
    bonusCards: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": "white",
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 38,
        "fontWeight": "bold",
        "stroke": "#fff261",
        "align": "center"
    },
    bonusCardsPortrait: {
        "fontFamily": "Oswald",
        "dropShadow": true,
        "dropShadowAlpha": 0.8,
        "dropShadowAngle": 1.5,
        "dropShadowColor": "#180301",
        "dropShadowDistance": 3,
        "fill": "white",
        "fillGradientStops": [
            0,
            0.9
        ],
        "fontSize": 28,
        "fontWeight": "bold",
        "stroke": "#fff261",
        "align": "center"
    }
});