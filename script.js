

const app = new PIXI.Application({
    width: Math.round(window.innerHeight * (4/3)),
    height: window.innerHeight
});
document.body.appendChild(app.view);
window.WebFontConfig = {
    google: {
        families: ['Ubuntu'],
    },
    active() {
        init()
    },
};

// include the web-font loader script
(function() {
    const wf = document.createElement('script');
    wf.src = `${document.location.protocol === 'https:' ? 'https' : 'http'
    }://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js`;
    wf.type = 'text/javascript';
    wf.async = 'true';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
}());

app.loader
    .add('image/bg.svg', 'image/bg.svg')
    .add('image/gameBg.jpg', 'image/gameBg.jpg')
    .add('image/book_of_ra.svg', 'image/book_of_ra.svg')
    .add('image/game_butt.svg', 'image/game_butt.svg')
    .add('image/cass_but.svg', 'image/cass_but.svg')
    .add('image/all_screen_butt.svg', 'image/all_screen_butt.svg')
    .add('image/exit_butt.svg', 'image/exit_butt.svg')
    .add('image/minus.svg', 'image/minus.svg')
    .add('image/plus.svg', 'image/plus.svg')
    .add('image/info_butt.svg', 'image/info_butt.svg')
    .add('image/bet_butt.svg', 'image/bet_butt.svg')
    .add('image/double_butt.svg', 'image/double_butt.svg')
    .add('image/hold.svg', 'image/hold.svg')
    .add('image/auto_butt.svg', 'image/auto_butt.svg')
    .add('image/start_butt.svg', 'image/start_butt.svg')
    .add('image/crab.jpg', 'image/crab.jpg')
    .add('image/10.jpg', 'image/10.jpg')
    .add('image/a.jpg', 'image/a.jpg')
    .add('image/cat.jpg', 'image/cat.jpg')
    .add('image/j.jpg', 'image/j.jpg')
    .add('image/k.jpg', 'image/k.jpg')
    .add('image/q.jpg', 'image/q.jpg')
    .add('image/mommy.jpg', 'image/mommy.jpg')
    .add('image/rock.jpg', 'image/rock.jpg')
    .add('image/scorpion.jpg', 'image/scorpion.jpg')
    .add('image/1.svg', 'image/1.svg')
    .add('image/1glow.svg', 'image/1glow.svg')
    .add('image/2.svg', 'image/2.svg')
    .add('image/2glow.svg', 'image/2glow.svg')
    .add('image/3.svg', 'image/3.svg')
    .add('image/3glow.svg', 'image/3glow.svg')
    .add('image/4.svg', 'image/4.svg')
    .add('image/4glow.svg', 'image/4glow.svg')
    .add('image/5.svg', 'image/5.svg')
    .add('image/5glow.svg', 'image/5glow.svg')
    .add('image/6.svg', 'image/6.svg')
    .add('image/6glow.svg', 'image/6glow.svg')
    .add('image/7.svg', 'image/7.svg')
    .add('image/7glow.svg', 'image/7glow.svg')
    .add('image/8.svg', 'image/8.svg')
    .add('image/8glow.svg', 'image/8glow.svg')
    .add('image/9.svg', 'image/9.svg')
    .add('image/9glow.svg', 'image/9glow.svg')
    .add('spriteFrame10', 'image/10frame.jpg')
    .add('spriteFrameBug', 'image/BUGFrame.jpg')
    .add('spriteFrameA', 'image/AFrame.jpg')
    .add('spriteFrameBook', 'image/BOOKFrame.jpg')
    .add('spriteFrameCat', 'image/CATFrame.jpg')
    .add('spriteFrameQ', 'image/QFrame.jpg')
    .add('spriteFrameMummy', 'image/MUMMYFrame.jpg')
    .add('spriteFrameK', 'image/KFrame.jpg')
    .add('spriteFrameJ', 'image/JFrame.jpg')
    .add('spriteFrameScorp', 'image/SCORPFrame.jpg')
    .load(onAssetsLoaded);
    const bgContainer = new PIXI.Container();
    app.stage.addChild(bgContainer);
    const bgTexture = PIXI.Texture.from('image/bg.svg')
    const bgSprite = new PIXI.Sprite(bgTexture)
    bgSprite.width = app.screen.width
    bgSprite.height =  app.screen.height
    bgContainer.addChild(bgSprite)

    const gameBg = new PIXI.Sprite(PIXI.Texture.from('image/gameBg.jpg'))
        gameBg.width = Math.round(app.screen.width- 260)
        gameBg.height = Math.round(app.screen.height/2+280)
        gameBg.x = Math.round(app.screen.width/6 + 5)
        gameBg.y = Math.round(app.screen.height/7 - 120)
        app.stage.addChild(gameBg)

    const gameTitleLogo = new PIXI.Sprite(PIXI.Texture.from('image/book_of_ra.svg'))
    gameTitleLogo.width = Math.round(app.screen.width- 260)
    gameTitleLogo.height = Math.round(app.screen.height/2+280)
    gameTitleLogo.x = 0
    gameTitleLogo.y = 10
        app.stage.addChild(gameTitleLogo)


    const _1Btn = new PIXI.Container()
    const _1BtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/1.svg')) 
    _1BtnSprite.width = Math.round(app.screen.width* 0.0260)
    _1BtnSprite.height = Math.round(app.screen.height*0.0486)
    _1Btn.x = Math.round(app.screen.width/5 - 15)
    _1Btn.y = Math.round(app.screen.height/7)
    _1Btn.addChild(_1BtnSprite)
    app.stage.addChild(_1Btn)

    const _1BtnRight = new PIXI.Container()
    const _1BtnRightSprite = new PIXI.Sprite(PIXI.Texture.from('image/1.svg')) 
    _1BtnRightSprite.width = Math.round(app.screen.width* 0.0260)
    _1BtnRightSprite.height = Math.round(app.screen.height*0.0486)
    _1BtnRight.x = Math.round(app.screen.width - 100)
    _1BtnRight.y = Math.round(app.screen.height/7)
    _1BtnRight.addChild(_1BtnRightSprite)
    app.stage.addChild(_1BtnRight)

    const _2Btn = new PIXI.Container()
    const _2BtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/2.svg')) 
    _2BtnSprite.width = Math.round(app.screen.width* 0.0260)
    _2BtnSprite.height = Math.round(app.screen.height*0.0486)
    _2Btn.x = Math.round(app.screen.width/5 - 15)
    _2Btn.y = Math.round(app.screen.height/6 + 24)
    _2Btn.addChild(_2BtnSprite)
    app.stage.addChild(_2Btn)

    const _2BtnRight = new PIXI.Container()
    const _2BtnRightSprite = new PIXI.Sprite(PIXI.Texture.from('image/2.svg')) 
    _2BtnRightSprite.width = Math.round(app.screen.width* 0.0260)
    _2BtnRightSprite.height = Math.round(app.screen.height*0.0486)
    _2BtnRight.x = Math.round(app.screen.width - 100)
    _2BtnRight.y = Math.round(app.screen.height/6 + 24)
    _2BtnRight.addChild(_2BtnRightSprite)
    app.stage.addChild(_2BtnRight)

    const _3Btn = new PIXI.Container()
    const _3BtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/3.svg')) 
    _3BtnSprite.width = Math.round(app.screen.width* 0.0260)
    _3BtnSprite.height = Math.round(app.screen.height*0.0486)
    _3Btn.x = Math.round(app.screen.width/5 - 15)
    _3Btn.y = Math.round(app.screen.height/4 - 9)
    _3Btn.addChild(_3BtnSprite)
    app.stage.addChild(_3Btn)

    const _3BtnRight = new PIXI.Container()
    const _3BtnRightSprite = new PIXI.Sprite(PIXI.Texture.from('image/7.svg')) 
    _3BtnRightSprite.width = Math.round(app.screen.width* 0.0260)
    _3BtnRightSprite.height = Math.round(app.screen.height*0.0486)
    _3BtnRight.x = Math.round(app.screen.width - 100)
    _3BtnRight.y = Math.round(app.screen.height/4 - 9)
    _3BtnRight.addChild(_3BtnRightSprite)
    app.stage.addChild(_3BtnRight)

    const _4Btn = new PIXI.Container()
    const _4BtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/4.svg')) 
    _4BtnSprite.width = Math.round(app.screen.width* 0.0260)
    _4BtnSprite.height = Math.round(app.screen.height*0.0486)
    _4Btn.x = Math.round(app.screen.width/5 - 15)
    _4Btn.y = Math.round(app.screen.height/3 - 20)
    _4Btn.addChild(_4BtnSprite)
    app.stage.addChild(_4Btn)

    const _4BtnRight = new PIXI.Container()
    const _4BtnRightSprite = new PIXI.Sprite(PIXI.Texture.from('image/4.svg')) 
    _4BtnRightSprite.width = Math.round(app.screen.width* 0.0260)
    _4BtnRightSprite.height = Math.round(app.screen.height*0.0486)
    _4BtnRight.x = Math.round(app.screen.width - 100)
    _4BtnRight.y = Math.round(app.screen.height/3 - 20)
    _4BtnRight.addChild(_4BtnRightSprite)
    app.stage.addChild(_4BtnRight)

    const _5Btn = new PIXI.Container()
    const _5BtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/5.svg')) 
    _5BtnSprite.width = Math.round(app.screen.width* 0.0260)
    _5BtnSprite.height = Math.round(app.screen.height*0.0486)
    _5Btn.x = Math.round(app.screen.width/5 - 15)
    _5Btn.y = Math.round(app.screen.height/3 + 26)
    _5Btn.addChild(_5BtnSprite)
    app.stage.addChild(_5Btn)

    const _5BtnRight = new PIXI.Container()
    const _5BtnRightSprite = new PIXI.Sprite(PIXI.Texture.from('image/5.svg')) 
    _5BtnRightSprite.width = Math.round(app.screen.width* 0.0260)
    _5BtnRightSprite.height = Math.round(app.screen.height*0.0486)
    _5BtnRight.x = Math.round(app.screen.width - 100)
    _5BtnRight.y = Math.round(app.screen.height/3 + 26)
    _5BtnRight.addChild(_5BtnRightSprite)
    app.stage.addChild(_5BtnRight)

    const _6Btn = new PIXI.Container()
    const _6BtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/6.svg')) 
    _6BtnSprite.width = Math.round(app.screen.width* 0.0260)
    _6BtnSprite.height = Math.round(app.screen.height*0.0486)
    _6Btn.x = Math.round(app.screen.width/5 - 15)
    _6Btn.y = Math.round(app.screen.height/3 + 71)
    _6Btn.addChild(_6BtnSprite)
    app.stage.addChild(_6Btn)

    const _6BtnRight = new PIXI.Container()
    const _6BtnRightSprite = new PIXI.Sprite(PIXI.Texture.from('image/6.svg')) 
    _6BtnRightSprite.width = Math.round(app.screen.width* 0.0260)
    _6BtnRightSprite.height = Math.round(app.screen.height*0.0486)
    _6BtnRight.x = Math.round(app.screen.width - 100)
    _6BtnRight.y = Math.round(app.screen.height/3 + 71)
    _6BtnRight.addChild(_6BtnRightSprite)
    app.stage.addChild(_6BtnRight)

    const _7Btn = new PIXI.Container()
    const _7BtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/7.svg')) 
    _7BtnSprite.width = Math.round(app.screen.width* 0.0260)
    _7BtnSprite.height = Math.round(app.screen.height*0.0486)
    _7Btn.x = Math.round(app.screen.width/5 - 15)
    _7Btn.y = Math.round(app.screen.height/2 - 15)
    _7Btn.addChild(_7BtnSprite)
    app.stage.addChild(_7Btn)

    const _7BtnRight = new PIXI.Container()
    const _7BtnRightSprite = new PIXI.Sprite(PIXI.Texture.from('image/3.svg')) 
    _7BtnRightSprite.width = Math.round(app.screen.width* 0.0260)
    _7BtnRightSprite.height = Math.round(app.screen.height*0.0486)
    _7BtnRight.x = Math.round(app.screen.width - 100)
    _7BtnRight.y = Math.round(app.screen.height/2 - 15)
    _7BtnRight.addChild(_7BtnRightSprite)
    app.stage.addChild(_7BtnRight)

    const _8Btn = new PIXI.Container()
    const _8BtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/8.svg')) 
    _8BtnSprite.width = Math.round(app.screen.width* 0.0260)
    _8BtnSprite.height = Math.round(app.screen.height*0.0486)
    _8Btn.x = Math.round(app.screen.width/5 - 15)
    _8Btn.y = Math.round(app.screen.height/2 + 30)
    _8Btn.addChild(_8BtnSprite)
    app.stage.addChild(_8Btn)

    const _8BtnRight = new PIXI.Container()
    const _8BtnRightSprite = new PIXI.Sprite(PIXI.Texture.from('image/8.svg')) 
    _8BtnRightSprite.width = Math.round(app.screen.width* 0.0260)
    _8BtnRightSprite.height = Math.round(app.screen.height*0.0486)
    _8BtnRight.x = Math.round(app.screen.width - 100)
    _8BtnRight.y = Math.round(app.screen.height/2 + 30)
    _8BtnRight.addChild(_8BtnRightSprite)
    app.stage.addChild(_8BtnRight)

    const _9Btn = new PIXI.Container()
    const _9BtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/9.svg')) 
    _9BtnSprite.width = Math.round(app.screen.width* 0.0260)
    _9BtnSprite.height = Math.round(app.screen.height*0.0486)
    _9Btn.x = Math.round(app.screen.width/5 - 15)
    _9Btn.y = Math.round(app.screen.height/2 + 75)
    _9Btn.addChild(_9BtnSprite)
    app.stage.addChild(_9Btn)

    const _9BtnRight = new PIXI.Container()
    const _9BtnRightSprite = new PIXI.Sprite(PIXI.Texture.from('image/9.svg')) 
    _9BtnRightSprite.width = Math.round(app.screen.width* 0.0260)
    _9BtnRightSprite.height = Math.round(app.screen.height*0.0486)
    _9BtnRight.x = Math.round(app.screen.width - 100)
    _9BtnRight.y = Math.round(app.screen.height/2 + 75)
    _9BtnRight.addChild(_9BtnRightSprite)
    app.stage.addChild(_9BtnRight)

    const slotBgContainer = new PIXI.Container()
    slotBgContainer.x = Math.round(app.screen.width/4 - 30)
    slotBgContainer.y = Math.round(app.screen.height/8)
    const slotBgContainerBg = new PIXI.Graphics();
    slotBgContainerBg.beginFill(0x595c7d, 1);
    slotBgContainerBg.drawRect(0, 0, Math.round(app.screen.width*(68.020/100)), Math.round(app.screen.height*(52.083/100)));
    slotBgContainerBg.endFill();
    slotBgContainer.addChild(slotBgContainerBg)
    const slotBgContainerBorder = new PIXI.Graphics()
    slotBgContainerBorder.lineStyle(2, 0x252525, 1);
    slotBgContainerBorder.drawRect(0, 0, Math.round(app.screen.width*(68.020/100)), Math.round(app.screen.height*(52.083/100)));
    slotBgContainer.addChild(slotBgContainerBorder)
    const lineDivider = new PIXI.Graphics()
    lineDivider.lineStyle(3, 0x252525, 1)
    lineDivider.moveTo(Math.round(app.screen.width/9 + 32), Math.round(app.screen.height*(52.083/100)));
    lineDivider.lineTo(Math.round(app.screen.width/9 + 32), 0)
    lineDivider.moveTo(Math.round(app.screen.width/4 + 28), Math.round(app.screen.height*(52.083/100)));
    lineDivider.lineTo(Math.round(app.screen.width/4 + 28), 0)
    lineDivider.moveTo(Math.round(app.screen.width/3 + 95), Math.round(app.screen.height*(52.083/100)));
    lineDivider.lineTo(Math.round(app.screen.width/3 + 95), 0)
    lineDivider.moveTo(Math.round(app.screen.width/2 + 55), Math.round(app.screen.height*(52.083/100)));
    lineDivider.lineTo(Math.round(app.screen.width/2 + 55), 0)
    slotBgContainer.addChild(lineDivider)
    app.stage.addChild(slotBgContainer)

    const gameInfoContainer = new PIXI.Container()
    gameInfoContainer.y = app.screen.height/2 + 142
    gameInfoContainer.x = app.screen.width/5 + 32
    const gameInfoContainerBg = new PIXI.Graphics()
    gameInfoContainerBg.beginFill(0x252525, 1);
    gameInfoContainerBg.drawRect(0, 0, Math.round(app.screen.width*0.6822), Math.round(app.screen.height*0.1319));
    gameInfoContainerBg.endFill();
    const gameStateInfoContainer = new PIXI.Container()
    gameStateInfoContainer.x = 10
    gameStateInfoContainer.y = 10
    const gameStateInfoContainerBg = new PIXI.Graphics()
    gameStateInfoContainerBg.beginFill(0x171717, 1);
    gameStateInfoContainerBg.drawRoundedRect(0, 0, Math.round(app.screen.width*0.3989), Math.round(app.screen.height*0.06944), 10);
    gameStateInfoContainerBg.endFill();
    gameStateInfoContainer.addChild(gameStateInfoContainerBg)
    const creditStateInfoContainer = new PIXI.Container()
    creditStateInfoContainer.x = 80
    creditStateInfoContainer.y = 85
    const creditStateInfoContainerBg = new PIXI.Graphics()
    creditStateInfoContainerBg.beginFill(0x171717, 1);
    creditStateInfoContainerBg.drawRoundedRect(0, 0, Math.round(app.screen.width*0.109375), Math.round(app.screen.height*0.03125), 10);
    creditStateInfoContainerBg.endFill();
    creditStateInfoContainer.addChild(creditStateInfoContainerBg)
    const betStateInfoContainer = new PIXI.Container()
    betStateInfoContainer.x = 770
    betStateInfoContainer.y = 10
    const betStateInfoContainerBg = new PIXI.Graphics()
    betStateInfoContainerBg.beginFill(0x171717, 1);
    betStateInfoContainerBg.drawRoundedRect(0, 0, Math.round(app.screen.width*0.0520833), Math.round(app.screen.height*0.034722), 10);
    betStateInfoContainerBg.drawRoundedRect(0, 36, Math.round(app.screen.width*0.0520833), Math.round(app.screen.height*0.034722), 10);
    betStateInfoContainerBg.drawRoundedRect(0, 73, Math.round(app.screen.width*0.0520833), Math.round(app.screen.height*0.034722), 10);
    betStateInfoContainerBg.endFill();
    betStateInfoContainer.addChild(betStateInfoContainerBg)
    gameInfoContainer.addChild(gameInfoContainerBg,gameStateInfoContainer,creditStateInfoContainer, betStateInfoContainer)
    app.stage.addChild(gameInfoContainer)

    const jackpotContainer = new PIXI.Container()
    jackpotContainer.x = Math.round(app.screen.width/9 -115)
    jackpotContainer.y = Math.round(app.screen.height/30)
    const jackpotContainerBg = new PIXI.Graphics();
    jackpotContainerBg.beginFill(0x15161e, 1);
    jackpotContainerBg.drawRoundedRect(0, 0, Math.round(app.screen.width*(13.020/100)), Math.round(app.screen.height*(13.194/100)), 16);
    jackpotContainerBg.endFill();
    jackpotContainer.addChild(jackpotContainerBg)
    app.stage.addChild(jackpotContainer)

    const balanceContainer = new PIXI.Container()
    balanceContainer.x = Math.round(app.screen.width/9 -115)
    balanceContainer.y = Math.round(app.screen.height/5)
    const balanceContainerBg = new PIXI.Graphics();
    balanceContainerBg.beginFill(0x15161e, 1);
    balanceContainerBg.drawRoundedRect(0, 0, Math.round(app.screen.width*(13.020/100)), Math.round(app.screen.height*(6.94/100)), 16);
    balanceContainerBg.endFill();
    balanceContainer.addChild(balanceContainerBg)
    app.stage.addChild(balanceContainer)

    const choiceBtnContainer = new PIXI.Container();
    const choiceBtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/game_butt.svg'))
    choiceBtnSprite.width = Math.round(app.screen.width*(13.020/100))
    choiceBtnSprite.height = Math.round(app.screen.height*(5.55/100))
    choiceBtnContainer.x = Math.round(app.screen.width/9 -115)
    choiceBtnContainer.y = Math.round(app.screen.height/3 )
    choiceBtnContainer.addChild(choiceBtnSprite)
    app.stage.addChild(choiceBtnContainer)

    const cassBtnContainer = new PIXI.Container();
    const cassBtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/cass_but.svg'))
    cassBtnSprite.width = Math.round(app.screen.width*(13.020/100))
    cassBtnSprite.height = Math.round(app.screen.height*(5.55/100))
    cassBtnContainer.x = Math.round(app.screen.width/9 -115)
    cassBtnContainer.y = Math.round(app.screen.height/3 + 62 )
    cassBtnContainer.addChild(cassBtnSprite)
    app.stage.addChild(cassBtnContainer)

    const allScreenBtnContainer = new PIXI.Container();
    const allScreenBtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/all_screen_butt.svg'))
    allScreenBtnSprite.width = Math.round(app.screen.width*(13.020/100))
    allScreenBtnSprite.height = Math.round(app.screen.height*(5.55/100))
    allScreenBtnContainer.x = Math.round(app.screen.width/9 -115)
    allScreenBtnContainer.y = Math.round(app.screen.height/2 - 32)
    allScreenBtnContainer.addChild(allScreenBtnSprite)
    app.stage.addChild(allScreenBtnContainer )

    const exitBtnContainer = new PIXI.Container();
    const exitBtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/exit_butt.svg'))
    exitBtnSprite.width = Math.round(app.screen.width*(13.020/100))
    exitBtnSprite.height = Math.round(app.screen.height*(5.55/100))
    exitBtnContainer.x = Math.round(app.screen.width/9 -115)
    exitBtnContainer.y = Math.round(app.screen.height/2 + 32)
    exitBtnContainer.addChild(exitBtnSprite)
    app.stage.addChild(exitBtnContainer )

    const denomContainer = new PIXI.Container()
    denomContainer.x = Math.round(app.screen.width/9 -115)
    denomContainer.y = Math.round(app.screen.height/2 + 120)
    const denomContainerBg = new PIXI.Graphics();
    denomContainerBg.beginFill(0x15161e, 1);
    denomContainerBg.drawRoundedRect(0, 0, Math.round(app.screen.width*(13.020/100)), Math.round(app.screen.height*(11.80/100)), 10);
    denomContainerBg.endFill();
    const giftContainer = new PIXI.Container()
    const giftContainerBg = new PIXI.Graphics();
    giftContainerBg.beginFill(0x2e2f40, 1);
    giftContainerBg.drawRoundedRect(0, 0, Math.round(app.screen.width*0.1197), Math.round(app.screen.height*0.0326), 5);
    giftContainerBg.endFill();
    giftContainer.addChild(giftContainerBg)
    giftContainer.x = 6
    giftContainer.y = 10
    denomContainer.addChild(denomContainerBg, giftContainer)

    const minusDenoBtnContainer = new PIXI.Container();
    const minusDenoSprite = new PIXI.Sprite(PIXI.Texture.from('image/minus.svg'))
    minusDenoSprite.width = Math.round(app.screen.width*0.02083)
    minusDenoSprite.height = Math.round(app.screen.height*0.02777)
    minusDenoBtnContainer.x = 6
    minusDenoBtnContainer.y = 75
    minusDenoBtnContainer.addChild(minusDenoSprite)
    const plusDenoBtnContainer = new PIXI.Container();
    const plusDenoSprite = new PIXI.Sprite(PIXI.Texture.from('image/plus.svg'))
    plusDenoSprite.width = Math.round(app.screen.width*0.02083)
    plusDenoSprite.height = Math.round(app.screen.height*0.02777)
    plusDenoBtnContainer.x = 130
    plusDenoBtnContainer.y = 75
    plusDenoBtnContainer.addChild(plusDenoSprite)
    denomContainer.addChild(minusDenoBtnContainer, plusDenoBtnContainer )
    app.stage.addChild(denomContainer)

    const infoBtnContainer = new PIXI.Container();
    const infoBtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/info_butt.svg'))
    infoBtnSprite.width = Math.round(app.screen.width*(13.020/100))
    infoBtnSprite.height = Math.round(app.screen.height*(5.55/100))
    infoBtnContainer.x = Math.round(app.screen.width/9 -115)
    infoBtnContainer.y = Math.round(app.screen.height - 222)
    infoBtnContainer.addChild(infoBtnSprite)
    app.stage.addChild(infoBtnContainer )
        
    const betBtn = new PIXI.Container();
    betBtn.x = Math.round(app.screen.width/9 - 120)
    betBtn.y = Math.round(app.screen.height - 140)
    app.stage.addChild(betBtn)
    const betBtnTexture = PIXI.Texture.from('image/bet_butt.svg')
    const betBtnSprite =  new PIXI.Sprite(betBtnTexture)
    betBtnSprite.width = Math.round(app.screen.width*(9.375/100))
    betBtnSprite.height = Math.round(app.screen.height*(11.11/100))
    betBtn.addChild(betBtnSprite)

    const doubleBtn = new PIXI.Container();
    doubleBtn.x = Math.round(app.screen.width/8 + 10)
    doubleBtn.y = Math.round(app.screen.height - 140)
    app.stage.addChild(doubleBtn)
    const doubleBtnTexture = PIXI.Texture.from('image/double_butt.svg')
    const doubleBtnSprite =  new PIXI.Sprite(doubleBtnTexture)
    doubleBtnSprite.width = Math.round(app.screen.width*(9.375/100))
    doubleBtnSprite.height = Math.round(app.screen.height*(11.11/100))
    doubleBtn.addChild(doubleBtnSprite)


    const holdBtnTexture = PIXI.Texture.from('image/hold.svg')
    const hold1BtnSprite = new PIXI.Sprite(holdBtnTexture)
    hold1BtnSprite.width = Math.round(app.screen.width*(7.291/100))
    hold1BtnSprite.height = Math.round(app.screen.height*(9.722/100))

    const hold1BtnContainer = new PIXI.Container();
    hold1BtnContainer.x = Math.round(app.screen.width/4 + 10)
    hold1BtnContainer.y = Math.round(app.screen.height - 130)
    hold1BtnContainer.addChild(hold1BtnSprite)

    const hold2BtnContainer = new PIXI.Container();
    const hold2BtnSprite = new PIXI.Sprite(holdBtnTexture)
    hold2BtnSprite.width = Math.round(app.screen.width*(7.291/100))
    hold2BtnSprite.height = Math.round(app.screen.height*(9.722/100))
    hold2BtnContainer.x = Math.round(app.screen.width/3 + 30)
    hold2BtnContainer.y = Math.round(app.screen.height - 130)
    hold2BtnContainer.addChild(hold2BtnSprite)

    const hold3BtnContainer = new PIXI.Container();
    const hold3BtnSprite = new PIXI.Sprite(holdBtnTexture)
    hold3BtnSprite.width = Math.round(app.screen.width*(7.291/100))
    hold3BtnSprite.height = Math.round(app.screen.height*(9.722/100))
    hold3BtnContainer.x = Math.round(app.screen.width/2 - 60)
    hold3BtnContainer.y = Math.round(app.screen.height - 130)
    hold3BtnContainer.addChild(hold3BtnSprite)

    const hold4BtnContainer = new PIXI.Container();
    const hold4BtnSprite = new PIXI.Sprite(holdBtnTexture)
    hold4BtnSprite.width = Math.round(app.screen.width*(7.291/100))
    hold4BtnSprite.height = Math.round(app.screen.height*(9.722/100))
    hold4BtnContainer.x = Math.round(app.screen.width/2 + 60)
    hold4BtnContainer.y = Math.round(app.screen.height - 130)
    hold4BtnContainer.addChild(hold4BtnSprite)

    const hold5BtnContainer = new PIXI.Container();
    const hold5BtnSprite = new PIXI.Sprite(holdBtnTexture)
    hold5BtnSprite.width = Math.round(app.screen.width*(7.291/100))
    hold5BtnSprite.height = Math.round(app.screen.height*(9.722/100))
    hold5BtnContainer.x = Math.round(app.screen.width/2 + 180)
    hold5BtnContainer.y = Math.round(app.screen.height - 130)
    hold5BtnContainer.addChild(hold5BtnSprite)

    const autoBtnContainer = new PIXI.Container();
    const autoBtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/auto_butt.svg'))
    autoBtnSprite.width = Math.round(app.screen.width*(5.729/100))
    autoBtnSprite.height = Math.round(app.screen.height*(11.11/100))
    autoBtnContainer.x = Math.round(app.screen.width - 310)
    autoBtnContainer.y = Math.round(app.screen.height - 140)
    autoBtnContainer.addChild(autoBtnSprite)

    const startBtnContainer = new PIXI.Container();
    const startBtnSprite = new PIXI.Sprite(PIXI.Texture.from('image/start_butt.svg'))
    startBtnSprite.width = Math.round(app.screen.width*(13.020/100))
    startBtnSprite.height = Math.round(app.screen.height*(11.11/100))
    startBtnContainer.x = Math.round(app.screen.width - 210)
    startBtnContainer.y = Math.round(app.screen.height - 140)
    startBtnContainer.addChild(startBtnSprite)

    const hold = {
        hold1: false,
        hold2: false,
        hold3: false,
        hold4: false,
        hold5: false,

    }
    function init () {
        const leftBtnTextStyle = new PIXI.TextStyle({
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '500',
        })
        const numberBtnTextStyle = new PIXI.TextStyle({
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.010416),
            fontWeight: '700',
        })
        const holdTextStyle = new PIXI.TextStyle({
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.01875),
            fontWeight: '700',
        })
        const bottomTextStyle1 = new PIXI.TextStyle({
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0208),
            fontWeight: '700',
        })
        const auto_InfoBtnStyle = new PIXI.TextStyle({
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.015625),
            fontWeight: '700',
        })

        const gameStateInfoText = new PIXI.Text('Game Over, place your bet', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.01875),
            fontWeight: '700',
            fill: '#e1ab16'
        })
        gameStateInfoText.x = 100
        gameStateInfoText.y = 15
        gameStateInfoContainer.addChild(gameStateInfoText)

        const creditStateTitle = new PIXI.Text('credit', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '700',
            fill: '#a0a0a0'
        })
        creditStateTitle.x = 30
        creditStateTitle.y = 90
        const creditValue = new PIXI.Text('100000', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '700',
            fill: '#e1ab16'
        })
        creditValue.x = 40
        creditValue.y = 5 
        creditStateInfoContainer.addChild(creditValue)
        const winnerPaidTitle = new PIXI.Text('winner paid', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '500',
            fill: '#ffffff'
        })
        winnerPaidTitle.x = 240
        winnerPaidTitle.y = 90
        gameInfoContainer.addChild(creditStateTitle,winnerPaidTitle)

        const totallosText = new PIXI.Text('Loose : ', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0114166),
            fontWeight: '700',
            fill: '#e1ab16'
        })
        totallosText.x = 10
        totallosText.y = 20
        const totalwinText = new PIXI.Text('Win : ', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0114166),
            fontWeight: '700',
            fill: '#e1ab16'
        })
        totalwinText.x = 10
        totalwinText.y = 50
        const totallosValue = new PIXI.Text('0 ', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0114166),
            fontWeight: '700',
            fill: '#e1ab16'
        })
        totallosValue.x = 60
        totallosValue.y = 20
        const totalWinValue = new PIXI.Text('0 ', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0114166),
            fontWeight: '700',
            fill: '#e1ab16'
        })
        totalWinValue.x = 60
        totalWinValue.y = 50
        jackpotContainer.addChild(totallosText,totalwinText ,totallosValue,totalWinValue)
        const betStateTitle = new PIXI.Text('bet / line', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '700',
            fill: '#a0a0a0'
        })
        betStateTitle.x = 700
        betStateTitle.y = 20
        const betStateText = new PIXI.Text('3', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '700',
            fill: '#ffffff'
        })
        betStateText.x = 28
        betStateText.y = 6
        betStateInfoContainer.addChild(betStateText)
        const lineStateTitle = new PIXI.Text('lines bet', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '700',
            fill: '#a0a0a0'
        })
        lineStateTitle.x = 700
        lineStateTitle.y = 55
        const lineStateText = new PIXI.Text('0', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '700',
            fill: '#31c4c6'
        })
        lineStateText.x = 28
        lineStateText.y = 45
        betStateInfoContainer.addChild(lineStateText)

        hold1BtnContainer.addListener('pointerdown', () => {
            hold.hold1 ? (lineStateText.text = 1, betStateValue.text = parseInt(betStateText.text) * parseInt(lineStateText.text) ) : lineStateText.text = betStateValue.text = 0 
        })
        hold2BtnContainer.addListener('pointerdown', () => {
            hold.hold2 ?(lineStateText.text = 3, betStateValue.text = parseInt(betStateText.text) * parseInt(lineStateText.text) ): lineStateText.text = betStateValue.text = 0
        })
        hold3BtnContainer.addListener('pointerdown', () => {
            hold.hold3 ? (lineStateText.text = 5, betStateValue.text = parseInt(betStateText.text) * parseInt(lineStateText.text) ) : lineStateText.text = betStateValue.text = 0
        })
        hold4BtnContainer.addListener('pointerdown', () => {
            hold.hold4 ? (lineStateText.text = 7, betStateValue.text = parseInt(betStateText.text) * parseInt(lineStateText.text) ) : lineStateText.text = betStateValue.text = 0
        })
        hold5BtnContainer.addListener('pointerdown', () => {
            hold.hold5 ? (lineStateText.text = 9, betStateValue.text = parseInt(betStateText.text) * parseInt(lineStateText.text) ) : lineStateText.text = betStateValue.text = 0
        })

        const betTitle = new PIXI.Text('bet', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '700',
            fill: '#a0a0a0'
        })
        betTitle.x = 730
        betTitle.y = 90
        const betStateValue = new PIXI.Text('0', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '700',
            fill: '#ffffff'
        })
        betStateValue.x = 28
        betStateValue.y = 81
        betStateInfoContainer.addChild(betStateValue)
        gameInfoContainer.addChild(betStateTitle,lineStateTitle,betTitle)

        const balanceTitle = new PIXI.Text('баланс', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.015625),
            fontWeight: '700',
            fill: '#595c7d'
        })
        balanceTitle.x = 45
        balanceTitle.y = 5
        
            const balanceValue = new PIXI.Text('1000', {
                fontFamily: '"Ubuntu", sans-serif',
                fontSize: Math.round(app.screen.width*0.015625),
                fontWeight: '700',
                fill: '#f8ce5a'
            })
            balanceValue.x = 40
            balanceValue.y = 30
            balanceContainer.addChild(balanceTitle,balanceValue)
        const choiceBtnText= new PIXI.Text('выбор игр', leftBtnTextStyle)
        choiceBtnText.x = choiceBtnSprite.width/2 - 22
        choiceBtnText.y = choiceBtnSprite.height/3
        choiceBtnContainer.addChild(choiceBtnText)

        const cassBtnText= new PIXI.Text('касса', leftBtnTextStyle)
        cassBtnText.x = cassBtnSprite.width/2 - 22
        cassBtnText.y = cassBtnSprite.height/3
        cassBtnContainer.addChild(cassBtnText)
        
        const allScreenBtnText= new PIXI.Text('на весь экран', leftBtnTextStyle)
        allScreenBtnText.x = allScreenBtnSprite.width/2 - 22
        allScreenBtnText.y = allScreenBtnSprite.height/3
        allScreenBtnContainer.addChild(allScreenBtnText)

        const exitBtnText= new PIXI.Text('выход', leftBtnTextStyle)
        exitBtnText.x = exitBtnSprite.width/2 - 22
        exitBtnText.y = exitBtnSprite.height/3
        exitBtnContainer.addChild(exitBtnText)

        const giftText= new PIXI.Text('подарок', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '500',
            fill: '#ffffff'
        })
        giftText.x =10
        giftText.y = 6
        const giftNumber= new PIXI.Text('100 000,00', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0104166),
            fontWeight: '500',
            fill: '#f8ce5a'
        })
        giftNumber.x =70
        giftNumber.y = 6
        giftContainer.addChild(giftText, giftNumber)

        const giftTitle= new PIXI.Text('деноминация', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.015625),
            fontWeight: '700',
            fill: '#595c7d'
        })
        giftTitle.x =15
        giftTitle.y = 45
        denomContainer.addChild(giftTitle)

        const denoText= new PIXI.Text(1000, {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0125),
            fontWeight: '700',
            fill: '#ffffff'
        })
        denoText.x = 55
        denoText.y = 75
        denomContainer.addChild(denoText)

        const minusDenoText= new PIXI.Text('-', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0125),
            fontWeight: '700',
            fill: '#2e2f40'
        })
        minusDenoText.x = minusDenoSprite.width/2 - 2
        minusDenoText.y = minusDenoSprite.height/2 - 12
        minusDenoBtnContainer.addChild(minusDenoText)
        const plusDenoText= new PIXI.Text('+', {
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: Math.round(app.screen.width*0.0125),
            fontWeight: '700',
            fill: '#2e2f40'
        })
        plusDenoText.x = plusDenoSprite.width/2 - 4
        plusDenoText.y = plusDenoSprite.height/2 - 12
        plusDenoBtnContainer.addChild(plusDenoText)
        const infoBtnText= new PIXI.Text('info', auto_InfoBtnStyle)
        infoBtnText.x = infoBtnSprite.width/2 - 22
        infoBtnText.y = infoBtnSprite.height/4
        infoBtnContainer.addChild(infoBtnText)

        const _1BtnText= new PIXI.Text('1', numberBtnTextStyle)
        _1BtnText.x = _1BtnSprite.width/2 - 4
        _1BtnText.y = _1BtnSprite.height/3
        _1Btn.addChild(_1BtnText)
        const _1BtnRightText= new PIXI.Text('1', numberBtnTextStyle)
        _1BtnRightText.x = _1BtnRightSprite.width/2 - 4
        _1BtnRightText.y = _1BtnRightSprite.height/3
        _1BtnRight.addChild(_1BtnRightText)

        const _2BtnText= new PIXI.Text('2', numberBtnTextStyle)
        _2BtnText.x = _2BtnSprite.width/2 - 4
        _2BtnText.y = _2BtnSprite.height/3
        _2Btn.addChild(_2BtnText)
        const _2BtnRightText= new PIXI.Text('2', numberBtnTextStyle)
        _2BtnRightText.x = _2BtnRightSprite.width/2 - 4
        _2BtnRightText.y = _2BtnRightSprite.height/3
        _2BtnRight.addChild(_2BtnRightText)

        const _3BtnText= new PIXI.Text('3', numberBtnTextStyle)
        _3BtnText.x = _3BtnSprite.width/2 - 4
        _3BtnText.y = _3BtnSprite.height/3
        _3Btn.addChild(_3BtnText)
        const _3BtnRightText= new PIXI.Text('3', numberBtnTextStyle)
        _3BtnRightText.x = _3BtnRightSprite.width/2 - 4
        _3BtnRightText.y = _3BtnRightSprite.height/3
        _3BtnRight.addChild(_3BtnRightText)

        const _4BtnText= new PIXI.Text('4', numberBtnTextStyle)
        _4BtnText.x = _4BtnSprite.width/2 - 4
        _4BtnText.y = _4BtnSprite.height/3
        _4Btn.addChild(_4BtnText)
        const _4BtnRightText= new PIXI.Text('4', numberBtnTextStyle)
        _4BtnRightText.x = _4BtnRightSprite.width/2 - 4
        _4BtnRightText.y = _4BtnRightSprite.height/3
        _4BtnRight.addChild(_4BtnRightText)

        const _5BtnText= new PIXI.Text('5', numberBtnTextStyle)
        _5BtnText.x = _5BtnSprite.width/2 - 4
        _5BtnText.y = _5BtnSprite.height/3
        _5Btn.addChild(_5BtnText)
        const _5BtnRightText= new PIXI.Text('5', numberBtnTextStyle)
        _5BtnRightText.x = _5BtnRightSprite.width/2 - 4
        _5BtnRightText.y = _5BtnRightSprite.height/3
        _5BtnRight.addChild(_5BtnRightText)

        const _6BtnText= new PIXI.Text('6', numberBtnTextStyle)
        _6BtnText.x = _6BtnSprite.width/2 - 4
        _6BtnText.y = _6BtnSprite.height/3
        _6Btn.addChild(_6BtnText)
        const _6BtnRightText= new PIXI.Text('6', numberBtnTextStyle)
        _6BtnRightText.x = _6BtnRightSprite.width/2 - 4
        _6BtnRightText.y = _6BtnRightSprite.height/3
        _6BtnRight.addChild(_6BtnRightText)

        const _7BtnText= new PIXI.Text('7', numberBtnTextStyle)
        _7BtnText.x = _7BtnSprite.width/2 - 4
        _7BtnText.y = _7BtnSprite.height/3
        _7Btn.addChild(_7BtnText)
        const _7BtnRightText= new PIXI.Text('7', numberBtnTextStyle)
        _7BtnRightText.x = _7BtnRightSprite.width/2 - 4
        _7BtnRightText.y = _7BtnRightSprite.height/3
        _7BtnRight.addChild(_7BtnRightText)

        const _8BtnText= new PIXI.Text('8', numberBtnTextStyle)
        _8BtnText.x = _8BtnSprite.width/2 - 4
        _8BtnText.y = _8BtnSprite.height/3
        _8Btn.addChild(_8BtnText)
        const _8BtnRightText= new PIXI.Text('8', numberBtnTextStyle)
        _8BtnRightText.x = _8BtnRightSprite.width/2 - 4
        _8BtnRightText.y = _8BtnRightSprite.height/3
        _8BtnRight.addChild(_8BtnRightText)

        const _9BtnText= new PIXI.Text('9', numberBtnTextStyle)
        _9BtnText.x = _9BtnSprite.width/2 - 4
        _9BtnText.y = _9BtnSprite.height/3
        _9Btn.addChild(_9BtnText)
        const _9BtnRightText= new PIXI.Text('9', numberBtnTextStyle)
        _9BtnRightText.x = _9BtnRightSprite.width/2 - 4
        _9BtnRightText.y = _9BtnRightSprite.height/3
        _9BtnRight.addChild(_9BtnRightText)

        const betBtnText = new PIXI.Text('bet', bottomTextStyle1)
        betBtnText.x = betBtnSprite.width - 80
        betBtnText.y = betBtnSprite.height/6
        betBtn.addChild(betBtnText)
        betBtn.interactive = true;
        betBtn.buttonMode = true;
        betBtn.addListener('pointerdown', () => {
            betStateValue.text = parseInt(betStateValue.text) * 2
        })

        const doubleBtnText = new PIXI.Text('double', bottomTextStyle1)
        doubleBtnText.x = doubleBtnSprite.width /7
        doubleBtnText.y = doubleBtnSprite.height/6
        doubleBtn.addChild(doubleBtnText)
        doubleBtn.interactive = true;
        doubleBtn.buttonMode = true;
        doubleBtn.addListener('pointerdown', () => {
            betStateValue.text = parseInt(betStateValue.text) * parseInt(betStateValue.text)
        })

        const hold1Text = new PIXI.Text('hold', holdTextStyle)
        hold1Text.x = hold1Text.width - 26
        hold1Text.y = hold1Text.height - 5
        const hold1Number = new PIXI.Text('1', holdTextStyle)
        hold1Number.x = hold1Text.width - 10
        hold1Number.y = hold1Text.height + 20
        hold1BtnContainer.addChild(hold1Text, hold1Number)

        const hold2Text = new PIXI.Text('hold', holdTextStyle)
        hold2Text.x = hold2BtnSprite.width/3 - 10
        hold2Text.y = hold2BtnSprite.height/4
        const hold2Number = new PIXI.Text('2', holdTextStyle)
        hold2Number.x = hold2BtnSprite.width/2 - 5
        hold2Number.y = hold2BtnSprite.height/2
        hold2BtnContainer.addChild(hold2Text, hold2Number)

        const hold3Text = new PIXI.Text('hold', holdTextStyle)
        hold3Text.x = hold3BtnSprite.width/3 - 10
        hold3Text.y = hold3BtnSprite.height/4
        const hold3Number = new PIXI.Text('3', holdTextStyle)
        hold3Number.x = hold3BtnSprite.width/2 - 5
        hold3Number.y = hold3BtnSprite.height/2
        hold3BtnContainer.addChild(hold3Text, hold3Number)

        const hold4Text = new PIXI.Text('hold', holdTextStyle)
        hold4Text.x = hold4BtnSprite.width/3 - 10
        hold4Text.y = hold4BtnSprite.height/4
        const hold4Number = new PIXI.Text('4', holdTextStyle)
        hold4Number.x = hold4BtnSprite.width/2 - 5
        hold4Number.y = hold4BtnSprite.height/2
        hold4BtnContainer.addChild(hold4Text,hold4Number)

        const hold5Text = new PIXI.Text('hold', holdTextStyle)
        hold5Text.x = hold5BtnSprite.width/3 - 10
        hold5Text.y = hold5BtnSprite.height/4
        const hold5Number = new PIXI.Text('5', holdTextStyle)
        hold5Number.x = hold5BtnSprite.width/2 - 5
        hold5Number.y = hold5BtnSprite.height/2
        hold5BtnContainer.addChild(hold5Text,hold5Number)

        const autoBtnText= new PIXI.Text('auto', auto_InfoBtnStyle)
        autoBtnText.x = autoBtnSprite.width/2 - 22
        autoBtnText.y = autoBtnSprite.height/3 + 5
        autoBtnContainer.addChild(autoBtnText)

        const startBtnText= new PIXI.Text('start', bottomTextStyle1)
        startBtnText.x = startBtnSprite.width/3
        startBtnText.y = startBtnSprite.height/3
        startBtnContainer.addChild(startBtnText)

        minusDenoBtnContainer.interactive = true;
        minusDenoBtnContainer.buttonMode = true;
        minusDenoBtnContainer.addListener('pointerdown', () => {
            denoText.text -= 10
        });
        plusDenoBtnContainer.interactive = true;
        plusDenoBtnContainer.buttonMode = true;
        plusDenoBtnContainer.addListener('pointerdown', () => {
            denoText.text = parseInt(denoText.text) + 10
        });
    }

    app.stage.addChild(hold1BtnContainer,hold2BtnContainer,hold3BtnContainer,hold4BtnContainer,hold5BtnContainer, autoBtnContainer, startBtnContainer)

        /*-------------------------------------building lines---------------------------------*/
        const holdLineContainer = new PIXI.Container()
        holdLineContainer.x = Math.round(app.screen.width/5 + 6)
        holdLineContainer.y = Math.round(app.screen.height/8)
        //hold1
        hold1BtnContainer.interactive = true;
        hold1BtnContainer.buttonMode = true;
        const hold1LineContainer = new PIXI.Container()
        hold1BtnContainer.addListener('pointerdown', () => {
            if ( hold.hold1 === false) {
                const hold1Line = new PIXI.Graphics()
                hold.hold1 = true
                hold1Line.lineStyle(3, 0xf8ce5a, 1)
                hold1Line.moveTo(0,40);
                hold1Line.lineTo(70, 40)
                hold1Line.lineTo(445, 415)
                hold1Line.lineTo(820, 40)
                hold1Line.lineTo(900, 40)
                hold1LineContainer.addChild(hold1Line)
                holdLineContainer.removeChild(hold2LineContainer)
                holdLineContainer.removeChild(hold3LineContainer)
                holdLineContainer.removeChild(hold4LineContainer)
                holdLineContainer.removeChild(hold5LineContainer)
                hold.hold2 = hold.hold3 = hold.hold4 = hold.hold5 = false,
                holdLineContainer.addChild(hold1LineContainer)
                console.log(hold1LineContainer)
            }
            else{
                hold.hold1 = false
                holdLineContainer.removeChild(hold1LineContainer)
                console.log('make i false ')
            }
        });
        const hold1LineGlowContainer = new PIXI.Container()
        const _1lineGlow = new PIXI.Sprite( PIXI.Texture.from('image/1glow.svg'))
        _1lineGlow.width = Math.floor(app.screen.width*0.76)
        _1lineGlow.height = gameBg.height/2
        _1lineGlow.y = 32
        _1lineGlow.x = -20
        hold1LineGlowContainer.addChild(_1lineGlow)
        //hold2
        hold2BtnContainer.interactive = true;
        hold2BtnContainer.buttonMode = true;
        const hold2LineContainer = new PIXI.Container()
        hold2BtnContainer.addListener('pointerdown', () => {
            if ( hold.hold2 === false) {
                const hold2Line = new PIXI.Graphics()
                hold.hold2 = true
                hold2Line.lineStyle(3, 0xf8ce5a, 1)
                hold2Line.moveTo(0,40);
                hold2Line.lineTo(70, 40)
                hold2Line.lineTo(445, 415)
                hold2Line.lineTo(820, 40)
                hold2Line.lineTo(900, 40)
                //2btn line
                hold2Line.lineStyle(3, 0xec4242, 1)
                hold2Line.moveTo(0,85);
                hold2Line.lineTo(900, 85)
                //3btn line 
                hold2Line.lineStyle(3, 0xd88a1b, 1)
                hold2Line.moveTo(0,130);
                hold2Line.lineTo(320,130)
                hold2Line.lineTo(555, 365)
                hold2Line.lineTo(897,365)
                hold2LineContainer.addChild(hold2Line)
                    holdLineContainer.removeChild(hold1LineContainer)
                    holdLineContainer.removeChild(hold3LineContainer)
                    holdLineContainer.removeChild(hold4LineContainer)
                    holdLineContainer.removeChild(hold5LineContainer)
                    hold.hold1 = hold.hold3 = hold.hold4 = hold.hold5 = false,
                holdLineContainer.addChild(hold2LineContainer)
            }
            else{
                hold.hold2 = false
                holdLineContainer.removeChild(hold2LineContainer)
                console.log('make i false ')
            }
        });
        const hold2Line1GlowContainer = new PIXI.Container()
        const hold2Line2GlowContainer = new PIXI.Container()
        const _2lineGlow = new PIXI.Sprite( PIXI.Texture.from('image/2glow.svg'))
        const _3lineGlow = new PIXI.Sprite( PIXI.Texture.from('image/3glow.svg'))
        _2lineGlow.width = Math.floor(app.screen.width*0.73)
        _3lineGlow.width =  Math.floor(app.screen.width*0.73)
        _3lineGlow.height =  gameBg.height/2 - 15
        hold2Line2GlowContainer.y = 65
        hold2Line1GlowContainer.y = -200
        hold2Line1GlowContainer.addChild(_2lineGlow)
        hold2Line2GlowContainer.addChild(_3lineGlow)
        
        //hold3
        hold3BtnContainer.interactive = true;
        hold3BtnContainer.buttonMode = true;
        const hold3LineContainer = new PIXI.Container()
        hold3BtnContainer.addListener('pointerdown', () => {
            if ( hold.hold3 === false) {
                const hold3Line = new PIXI.Graphics()
                hold.hold3 = true
                hold3Line.lineStyle(3, 0xf8ce5a, 1)
                hold3Line.moveTo(0,40);
                hold3Line.lineTo(70, 40)
                hold3Line.lineTo(445, 415)
                hold3Line.lineTo(820, 40)
                hold3Line.lineTo(900, 40)
                //2btn line
                hold3Line.lineStyle(3, 0xec4242, 1)
                hold3Line.moveTo(0,85);
                hold3Line.lineTo(900, 85)
                //3btn line 
                hold3Line.lineStyle(3, 0xd88a1b, 1)
                hold3Line.moveTo(0,130);
                hold3Line.lineTo(320,130)
                hold3Line.lineTo(555, 365)
                hold3Line.lineTo(897,365)
                //4btn line
                hold3Line.lineStyle(3, 0xb3bf33, 1)
                hold3Line.moveTo(0,195);
                hold3Line.lineTo(100,195)
                hold3Line.lineTo(330, 425)
                hold3Line.lineTo(570,425)
                hold3Line.lineTo(800,195)
                hold3Line.lineTo(905,195)
                    //5btn line
                hold3Line.lineStyle(3, 0x5060bc, 1)
                hold3Line.moveTo(0,245);
                hold3Line.lineTo(900, 245)
                hold3LineContainer.addChild(hold3Line)
                holdLineContainer.removeChild(hold1LineContainer)
                holdLineContainer.removeChild(hold2LineContainer)
                holdLineContainer.removeChild(hold4LineContainer)
                holdLineContainer.removeChild(hold5LineContainer)
                hold.hold1 = hold.hold2 = hold.hold4 = hold.hold5 = false,
                holdLineContainer.addChild(hold3LineContainer)
            }
            else{
                hold.hold3 = false
                holdLineContainer.removeChild(hold3LineContainer)
                console.log('make i false ')
            }
        });
        const hold3Line1GlowContainer = new PIXI.Container()
        const hold3Line2GlowContainer = new PIXI.Container()
        const _4lineGlow = new PIXI.Sprite( PIXI.Texture.from('image/4glow.svg'))
        const _5lineGlow = new PIXI.Sprite( PIXI.Texture.from('image/5glow.svg'))
        _4lineGlow.width = Math.floor(app.screen.width*0.73)
        _4lineGlow.height = gameBg.height/2 - 15
        _5lineGlow.width =  Math.floor(app.screen.width*0.73)
        hold3Line2GlowContainer.y = - 45
        hold3Line1GlowContainer.y = 140
        hold3Line1GlowContainer.addChild(_4lineGlow)
        hold3Line2GlowContainer.addChild(_5lineGlow)
        //hold4
        hold4BtnContainer.interactive = true;
        hold4BtnContainer.buttonMode = true;
        const hold4LineContainer = new PIXI.Container()
        hold4BtnContainer.addListener('pointerdown', () => {
            if ( hold.hold4 === false) {
                const hold4Line = new PIXI.Graphics()
                hold.hold4 = true
                hold4Line.lineStyle(3, 0xf8ce5a, 1)
                hold4Line.moveTo(0,40);
                hold4Line.lineTo(70, 40)
                hold4Line.lineTo(445, 415)
                hold4Line.lineTo(820, 40)
                hold4Line.lineTo(900, 40)
                //2btn line
                hold4Line.lineStyle(3, 0xec4242, 1)
                hold4Line.moveTo(0,85);
                hold4Line.lineTo(900, 85)
                //3btn line 
                hold4Line.lineStyle(3, 0xd88a1b, 1)
                hold4Line.moveTo(0,130);
                hold4Line.lineTo(320,130)
                hold4Line.lineTo(555, 365)
                hold4Line.lineTo(897,365)
                //4btn line
                hold4Line.lineStyle(3, 0xb3bf33, 1)
                hold4Line.moveTo(0,195);
                hold4Line.lineTo(100,195)
                hold4Line.lineTo(330, 425)
                hold4Line.lineTo(570,425)
                hold4Line.lineTo(800,195)
                hold4Line.lineTo(905,195)
                //5btn line
                hold4Line.lineStyle(3, 0x5060bc, 1)
                hold4Line.moveTo(0,245);
                hold4Line.lineTo(900, 245)
                //6 btn line 
                    hold4Line.lineStyle(3, 0xdcf3f6, 1)
                    hold4Line.moveTo(0,290);
                    hold4Line.lineTo(100,290)
                    hold4Line.lineTo(330, 60)
                    hold4Line.lineTo(570,60)
                    hold4Line.lineTo(800,290)
                    hold4Line.lineTo(905,290)
                 //7btn line
                    hold4Line.lineStyle(3, 0x31c4c6, 1)
                    hold4Line.moveTo(0,365);
                    hold4Line.lineTo(320,365)
                    hold4Line.lineTo(555, 130)
                    hold4Line.lineTo(897,130)
                hold4LineContainer.addChild(hold4Line)
                holdLineContainer.removeChild(hold1LineContainer)
                holdLineContainer.removeChild(hold2LineContainer)
                holdLineContainer.removeChild(hold3LineContainer)
                holdLineContainer.removeChild(hold5LineContainer)
                hold.hold1 = hold.hold2 = hold.hold3 = hold.hold5 = false,
                holdLineContainer.addChild(hold4LineContainer)
            }
            else{
                hold.hold4 = false
                holdLineContainer.removeChild(hold4LineContainer)
                console.log('make i false ')
            }
        });
        const hold4Line1GlowContainer = new PIXI.Container()
        const hold4Line2GlowContainer = new PIXI.Container()
        const _6lineGlow = new PIXI.Sprite( PIXI.Texture.from('image/6glow.svg'))
        const _7lineGlow = new PIXI.Sprite( PIXI.Texture.from('image/7glow.svg'))
        _6lineGlow.width = Math.floor(app.screen.width*0.73)
        _6lineGlow.height = gameBg.height/2 - 15
        _7lineGlow.height = gameBg.height/2 - 15
        _7lineGlow.width =  Math.floor(app.screen.width*0.73)
        hold4Line1GlowContainer.y = -12
        hold4Line2GlowContainer.y = 66
        hold4Line1GlowContainer.addChild(_6lineGlow)
        hold4Line2GlowContainer.addChild(_7lineGlow)
        //hol5
        hold5BtnContainer.interactive = true;
        hold5BtnContainer.buttonMode = true;
        const hold5LineContainer = new PIXI.Container()
        hold5BtnContainer.addListener('pointerdown', () => {
            if ( hold.hold5 === false) {
                const hold5Line = new PIXI.Graphics()
                hold.hold5 = true
                hold5Line.lineStyle(3, 0xf8ce5a, 1)
                hold5Line.moveTo(0,40);
                hold5Line.lineTo(70, 40)
                hold5Line.lineTo(445, 415)
                hold5Line.lineTo(820, 40)
                hold5Line.lineTo(900, 40)
                //2btn line
                hold5Line.lineStyle(3, 0xec4242, 1)
                hold5Line.moveTo(0,85);
                hold5Line.lineTo(900, 85)
                //3btn line 
                hold5Line.lineStyle(3, 0xd88a1b, 1)
                hold5Line.moveTo(0,130);
                hold5Line.lineTo(320,130)
                hold5Line.lineTo(555, 365)
                hold5Line.lineTo(897,365)
                //4btn line
                hold5Line.lineStyle(3, 0xb3bf33, 1)
                hold5Line.moveTo(0,195);
                hold5Line.lineTo(100,195)
                hold5Line.lineTo(330, 425)
                hold5Line.lineTo(570,425)
                hold5Line.lineTo(800,195)
                hold5Line.lineTo(905,195)
                //5btn line
                hold5Line.lineStyle(3, 0x5060bc, 1)
                hold5Line.moveTo(0,245);
                hold5Line.lineTo(900, 245)
                //6 btn line 
                    hold5Line.lineStyle(3, 0xdcf3f6, 1)
                    hold5Line.moveTo(0,290);
                    hold5Line.lineTo(100,290)
                    hold5Line.lineTo(330, 60)
                    hold5Line.lineTo(570,60)
                    hold5Line.lineTo(800,290)
                    hold5Line.lineTo(905,290)
                 //7btn line
                    hold5Line.lineStyle(3, 0x31c4c6, 1)
                    hold5Line.moveTo(0,365);
                    hold5Line.lineTo(320,365)
                    hold5Line.lineTo(555, 130)
                    hold5Line.lineTo(897,130)
                    //8btn line
                    hold5Line.lineStyle(3, 0x2da530, 1)
                    hold5Line.moveTo(0,406);
                    hold5Line.lineTo(900, 406)
                    //9btn line 
                    hold5Line.lineStyle(3, 0xa1749f, 1)
                    hold5Line.moveTo(0,450);
                    hold5Line.lineTo(70, 450)
                    hold5Line.lineTo(445,75)
                    hold5Line.lineTo(820, 450)
                    hold5Line.lineTo(900, 450)
                hold5LineContainer.addChild(hold5Line)
                holdLineContainer.removeChild(hold1LineContainer)
                holdLineContainer.removeChild(hold2LineContainer)
                holdLineContainer.removeChild(hold3LineContainer)
                holdLineContainer.removeChild(hold4LineContainer)
                hold.hold1 = hold.hold2 = hold.hold3 = hold.hold4 = false,
                holdLineContainer.addChild(hold5LineContainer)
            }
            else{
                hold.hold5 = false
                holdLineContainer.removeChild(hold5LineContainer)
                console.log('make i false ')
            }
        });
        const hold5Line1GlowContainer = new PIXI.Container()
        const hold5Line2GlowContainer = new PIXI.Container()
        const _8lineGlow = new PIXI.Sprite( PIXI.Texture.from('image/8glow.svg'))
        const _9lineGlow = new PIXI.Sprite( PIXI.Texture.from('image/9glow.svg'))
        _9lineGlow.width = Math.floor(app.screen.width*0.76)
        _9lineGlow.height = gameBg.height/2 - 15
        _8lineGlow.height = gameBg.height/2 - 15
        _8lineGlow.width =  Math.floor(app.screen.width*0.73)
        hold5Line1GlowContainer.y = 226
        hold5Line2GlowContainer.y = 98
        hold5Line2GlowContainer.x = - 20 
        hold5Line1GlowContainer.addChild(_8lineGlow)
        hold5Line2GlowContainer.addChild(_9lineGlow)
        
    /*-------------------------------------------------------------------------------- */
     /*-------------------------------------glow lines------------------------------------------------------------------------------------------------------------*/
     const glowLineContainer = new PIXI.Container()
     glowLineContainer.x = Math.round(app.screen.width/5 + 6)
     glowLineContainer.y = Math.round(app.screen.height/8)
     app.stage.addChild(glowLineContainer)
      /*---------------------------------------------------------------------------------------------------------------------------------------------------------*/

const REEL_WIDTH = 170;
const SYMBOL_SIZE_X = Math.round(app.screen.width*0.11979);
const SYMBOL_SIZE_Y = Math.round(app.screen.height*0.1597);
const SYMBOL_SIZE = 160
// onAssetsLoaded handler builds the example.
function onAssetsLoaded() {
    const spriteAnimateCreator = (spriteFrame) => {
        animation= new PIXI.extras.MovieClip(getFramesFromSpriteSheet(spriteFrame, 230, 230))
        animation.gotoAndPlay(0);    
        animation.animationSpeed = 0.4
        return animation
    }
    function getFramesFromSpriteSheet(texture, frameWidth, frameHeight) {    
        const frames = [];     
        for(let i = 0; i < texture.width-frameWidth; i+=frameWidth) {       
            const frameTexture =  new PIXI.Texture(texture.baseTexture, new PIXI.Rectangle(i, 0, frameWidth, frameHeight))
            frames.push(frameTexture);
        }  
    return frames;
    }
    // Create different slot symbols.
    const texture = {
        _10 : PIXI.Texture.from('image/10.jpg'),
        Bug : PIXI.Texture.from('image/crab.jpg'),
        A :  PIXI.Texture.from('image/a.jpg'),
        Cat :  PIXI.Texture.from('image/cat.jpg'),
        J : PIXI.Texture.from('image/j.jpg'),
        K : PIXI.Texture.from('image/k.jpg'),
        Q : PIXI.Texture.from('image/q.jpg'),
        Mommy : PIXI.Texture.from('image/mommy.jpg'),
        Rock : PIXI.Texture.from('image/rock.jpg'),
        Scorpion : PIXI.Texture.from('image/scorpion.jpg')
    }
    let slotTextures = [
        PIXI.Texture.from('image/10.jpg'),
        PIXI.Texture.from('image/crab.jpg'),
        PIXI.Texture.from('image/a.jpg'),
        PIXI.Texture.from('image/cat.jpg'),
        PIXI.Texture.from('image/j.jpg'),
        PIXI.Texture.from('image/k.jpg'),
        PIXI.Texture.from('image/q.jpg'),
        PIXI.Texture.from('image/mommy.jpg'),
        PIXI.Texture.from('image/rock.jpg'),
        PIXI.Texture.from('image/scorpion.jpg')
    ]
    // Build the reels
    const reels = [];
    const reelContainer = new PIXI.Container();
    //blackBg building
    const reelBg = new PIXI.Graphics()
    reelBg.beginFill(0x252525);
    reelBg.drawRect(0, 0, SYMBOL_SIZE_X, app.screen.height/2 + 1);
    reelBg.drawRect(SYMBOL_SIZE_X + 20, 0, SYMBOL_SIZE_X, app.screen.height/2 + 1);
    reelBg.drawRect(SYMBOL_SIZE_X + 190, 0, SYMBOL_SIZE_X, app.screen.height/2 + 1);
    reelBg.drawRect(SYMBOL_SIZE_X + 360, 0, SYMBOL_SIZE_X, app.screen.height/2 + 1);
    reelBg.drawRect(SYMBOL_SIZE_X + 530, 0, SYMBOL_SIZE_X, app.screen.height/2 + 1);
    reelContainer.addChild(reelBg) //----------------------------------------------------------------------reel-bg
    for (let i = 0; i < 5; i++) {
        const rc = new PIXI.Container();
        rc.x = i * REEL_WIDTH;
        reelContainer.addChild(rc);
        const slotMask  = new PIXI.Graphics();
        slotMask.beginFill(0x595c7d, 0);
        slotMask.drawRect(0, 0, Math.round(app.screen.width*(68.020/100)), Math.round(app.screen.height*(52.083/100)));
        slotMask.endFill();
        slotBgContainer.addChild(slotMask)
        reelContainer.mask = slotMask
        const reel = {
            container: rc,
            symbols: [],
            position: 0,
            previousPosition: 0,
            blur: new PIXI.filters.BlurFilter(),
        };
        reel.blur.blurX  = 0;
        reel.blur.blurY =  0;
        rc.filters = [reel.blur];
        // Build the symbols
        for (let j = 0; j < 4; j++) {
            const symbol = new PIXI.Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]);
            // Scale the symbol to fit symbol area.
            symbol.y = j * SYMBOL_SIZE;
            symbol.scale.x = Math.min(SYMBOL_SIZE_X / symbol.width)
            symbol.scale.y = Math.min(SYMBOL_SIZE_Y / symbol.height);
            symbol.x = Math.round((SYMBOL_SIZE_X - symbol.width));
            reel.symbols.push(symbol);
            rc.addChild(symbol);
        }
        reels.push(reel);
    }
    app.stage.addChild(reelContainer);
///////////////adding lines to the viewer =========================================
app.stage.addChild(holdLineContainer)


    // Build top & bottom covers and position reelContainer
    const margin = (app.screen.height - SYMBOL_SIZE * 4.3) / 2;
    reelContainer.y = margin;
    reelContainer.x = Math.round(app.screen.width/4 - 20)
 //-----------------------------------------------------------------------------------------------------------------------------
 function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
    let windot = getRandomInt(10)
    let spincount = 1
    const checkWin = (win) => {
        const winSymbol = slotTextures[Math.floor(Math.random() * slotTextures.length)]
        if (win%4 == 0){
            slotTextures = [
                PIXI.Texture.from('image/10.jpg'),
                winSymbol,
                PIXI.Texture.from('image/a.jpg'),
                PIXI.Texture.from('image/cat.jpg'),
                winSymbol,
                PIXI.Texture.from('image/10.jpg'),
                winSymbol,
                PIXI.Texture.from('image/mommy.jpg'),
                winSymbol,
                PIXI.Texture.from('image/10.jpg')
            ]
        }
        else {
            slotTextures = [
                PIXI.Texture.from('image/10.jpg'),
                PIXI.Texture.from('image/crab.jpg'),
                PIXI.Texture.from('image/a.jpg'),
                PIXI.Texture.from('image/cat.jpg'),
                PIXI.Texture.from('image/j.jpg'),
                PIXI.Texture.from('image/k.jpg'),
                PIXI.Texture.from('image/q.jpg'),
                PIXI.Texture.from('image/mommy.jpg'),
                PIXI.Texture.from('image/rock.jpg'),
                PIXI.Texture.from('image/scorpion.jpg')
            ]
        }
    }

   //// settting interactiviteeee
   //////////////////////////////timers///////////////////===-=-=-=-=-=-=-=-=-=-=-=-==-=-=--=-=-=--=-=-=-=-=-==--=-=-=-=
    const winTimers = {
        win1 : {
            start: new EE3Timer.Timer(500),
            end: new EE3Timer.Timer(2500)
        } ,
        win2 : {
            line1 : {
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(6000)
            },
            line2 : {
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(5000)
            },
            line3 : {
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(4000)
            },
        },
        win3 : {
            line1:{
                start: new EE3Timer.Timer(500),
                end:new EE3Timer.Timer(8000)
            },
            line2:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(7000)
            },
            line3:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(6000)
            },
            line4:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(5000)
            },
            line5:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(4000)
            },
        },
        win4: {
            line1: {
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(11000),
            },
            line2: {
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(10000),
            },
            line3: {
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(9000),
            },
            line4: {
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(8000),
            },
            line5: {
                start: new EE3Timer.Timer(500),
                end:  new EE3Timer.Timer(7000),
            },
            line6: {
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(6000),
            },
            line7: {
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(5000),
            },
        },
        win5: {
            line1:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(14000)
            },
            line2:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(13000)
            },
            line3:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(12000)
            },
            line4:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(11000)
            },
            line5:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(10000)
            },
            line6:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(9000)
            },
            line7:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(8000)
            },
            line8:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(7000)
            },
            line9:{
                start: new EE3Timer.Timer(500),
                end: new EE3Timer.Timer(6000)
            },
        }
    }
   ////////////////////////////////////////////////////
    startBtnContainer.interactive = true;
    startBtnContainer.buttonMode = true;
    startBtnContainer.addListener('pointerdown', () => {
        holdLineContainer.children.pop()
        if (parseInt(betStateInfoContainer.children[3]._text) !== 0 ) {
            balanceContainer.children[2].text  = parseInt(balanceContainer.children[2].text ) - parseInt(betStateInfoContainer.children[3]._text)
            gameStateInfoContainer.children[1].text = 'Spinning, good luck !!!'
            console.log(windot)
                checkWin(windot)
                startPlay()
        }
        else{
            gameStateInfoContainer.children[1].text = 'Place a bet please !'
        }
    })

    let running = false;
    // Function to start playing.-----------------------------------------------------------------------------------------------------------------------------------------
    function startPlay() {
        spincount ++
        startBtnContainer.interactive = false
       hold1BtnContainer.interactive = false
       hold2BtnContainer.interactive = false
       hold3BtnContainer.interactive = false
       hold4BtnContainer.interactive = false
       hold5BtnContainer.interactive = false
        reels.forEach(item => {
            for(let symbol of item.symbols ){
                symbol.alpha = reelBg.alpha = 1
                if (symbol.children !== []){
                    symbol.children.pop()
                } 
            }
        })
            winTimers.win1.start.stop()
            winTimers.win1.end.stop()
            for (let i in winTimers.win2){
                for (j in winTimers.win2[i]){
                    winTimers.win2[i][j].stop()
                }
             }
             for (let i in winTimers.win3){
                for (j in winTimers.win3[i]){
                    winTimers.win3[i][j].stop()
                }
             }
             for (let i in winTimers.win4){
                for (j in winTimers.win4[i]){
                    winTimers.win4[i][j].stop()
                }
             }
             for (let i in winTimers.win5){
                for (j in winTimers.win5[i]){
                    winTimers.win5[i][j].stop()
                }
             }
            _1Btn.alpha = 1
            _1BtnRight.alpha = 1
            _2Btn.alpha = 1
            _2BtnRight.alpha = 1
            _3Btn.alpha = 1
            _3BtnRight.alpha = 1
            _4Btn.alpha = 1
            _4BtnRight.alpha = 1
            _5Btn.alpha = 1
            _5BtnRight.alpha = 1
            _6Btn.alpha = 1
            _6BtnRight.alpha = 1
            _7Btn.alpha = 1
            _7BtnRight.alpha = 1
            _8Btn.alpha = 1
            _8BtnRight.alpha = 1
            _9Btn.alpha = 1
            _9BtnRight.alpha = 1
                glowLineContainer.children = []
        if (running) return;
        running = true;
        for (let i = 0; i < reels.length; i++) {
            const r = reels[i];
            const extra = Math.floor(Math.random() * 3) + i;
            const target = r.position + 10 + i * 5 + extra;
            const time = 600 + i * 200 + extra * 200;
            // tweenTo(r, 'position', target , time, Ease.backout(10), null, i === reels.length - 1 ? reelsComplete : null);=========
            tweenTo(r, 'position', target , time, Ease.bounceOut, null, i === reels.length - 1 ? reelsComplete : null);
        }  
    }
    // Reels done handler.
    function reelsComplete() {
        let winstok = 0
        running = false;
        gameStateInfoContainer.children[1].text = 'Game Over, place your bet '
        const win = {
            _10 : 0,
            Bug : 0,
            A : 0,
            Cat : 0,
            J : 0,
            K : 0,
            Q : 0,
            Mommy : 0,
            Rock : 0,
            Scorpion : 0,
            hol1: false,
            hol2: false,
            hol3: false,
            hol4: false,
            hol5: false,
        }
        setTimeout(() => {
        reels.forEach(item => {
            for(let symbol of item.symbols ){
                if (symbol.y > -1 && symbol.y < 321){
                    switch (symbol._texture) {
                        case texture._10:
                                win._10 ++
                            break;
                        case texture.Bug:
                                    win.Bug ++
                            break;
                            case texture.A:
                                        win.A ++              
                            break;
                            case texture.Cat:
                                        win.Cat ++                  
                            break;
                            case texture.J:
                                        win.J ++                    
                            break;
                            case texture.K:
                                        win.K ++                            
                            break;
                            case texture.Q:
                                        win.Q ++                  
                            break;
                            case texture.Mommy:
                                        win.Mommy ++                     
                            break;
                            case texture.Rock:
                                    win.Rock ++
                            break;
                            case texture.Scorpion:
                                        win.Scorpion ++
                            break;
    
                        default:
                            break;
                    }
                }
            }
        }) 
        if(win._10 >= 7 ){
            reels.forEach(item => {
                for(let symbol of item.symbols ){
                    if (symbol._texture=== texture._10){
                        if (hold.hold1){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 510:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 680:
                                    (symbol.y == 0) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break

                                default:
                                    break;
                            }
                            glowLineContainer.addChild(hold1LineGlowContainer)
                            winTimers.win1.start.on('start', () => {
                                    glowLineContainer.children[0].alpha = 0
                                    _1Btn.alpha = 0
                                    _1BtnRight.alpha = 0
                            });
                            winTimers.win1.end.on('start', () => {
                                    glowLineContainer.children[0].alpha = 1
                                    _1Btn.alpha = 1
                                    _1BtnRight.alpha = 1
                            });
                            winTimers.win1.end.on('end', elapsed => {
                            if ( elapsed === 2500 ){
                                winTimers.win1.start.reset()
                                winTimers.win1.end.reset()
                                winTimers.win1.start.time = 500
                                winTimers.win1.end.time = 2500
                                winTimers.win1.start.start()
                                winTimers.win1.end.start()
                            } else{
                                console.log('ended')
                            }
                            },  winTimers.win1.end);
                            winTimers.win1.end.delay = 1000
                            for (let i in winTimers.win1){
                                winTimers.win1[i].start()
                            }
                        }
                        else if  (hold.hold2){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 0 || symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10'))),
                                   winstok++)
                                break;
                                case 510:
                                windot++
                                 symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10')))

                                break;
                                case 680:
                                    (symbol.y == 0 || symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer)
                                    winTimers.win2.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win2.line1.end.on('end', elapsed => {
                                        if ( elapsed === 6000 ){
                                            winTimers.win2.line1.start.reset()
                                            winTimers.win2.line1.end.reset()
                                            winTimers.win2.line1.start.time = 500
                                            winTimers.win2.line1.end.time = 6000
                                            winTimers.win2.line1.start.start()
                                            winTimers.win2.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win2.line1.end);
                                        winTimers.win2.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win2.line2.end.on('end', elapsed => {
                                    if ( elapsed === 5000 ){
                                        winTimers.win2.line2.start.reset()
                                        winTimers.win2.line2.end.reset()
                                        winTimers.win2.line2.start.time = 500
                                        winTimers.win2.line2.end.time = 5000
                                        winTimers.win2.line2.start.start()
                                        winTimers.win2.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line2.end);
                                    winTimers.win2.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win2.line3.end.on('end', elapsed => {
                                    if ( elapsed === 4000 ){
                                        winTimers.win2.line3.start.reset()
                                        winTimers.win2.line3.end.reset()
                                        winTimers.win2.line3.start.time = 500
                                        winTimers.win2.line3.end.time = 4000
                                        winTimers.win2.line3.start.start()
                                        winTimers.win2.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line3.end);
                                    winTimers.win2.line1.end.delay = 4000
                                    winTimers.win2.line2.start.delay = 500
                                    winTimers.win2.line2.end.delay = 5000
                                    winTimers.win2.line3.start.delay = 500
                                    winTimers.win2.line3.end.delay = 6000
                                    for ( let i in winTimers.win2){
                                        for (let j in winTimers.win2[i]){
                                            winTimers.win2[i][j].start()
                                        }
                                    }
                        }
                        else if  (hold.hold3){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0 || symbol.y == 160) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10')))
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10')))
                                break;
                                case 510:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10')))
                                break;
                                case 680:
                                    winstok++ 
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10')))
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer)
                                    winTimers.win3.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win3.line1.end.on('end', elapsed => {
                                        if ( elapsed === 8000 ){
                                            winTimers.win3.line1.start.reset()
                                            winTimers.win3.line1.end.reset()
                                            winTimers.win3.line1.start.time = 500
                                            winTimers.win3.line1.end.time = 8000
                                            winTimers.win3.line1.start.start()
                                            winTimers.win3.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win3.line1.end);
                                        winTimers.win3.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win3.line2.end.on('end', elapsed => {
                                    if ( elapsed === 7000 ){
                                        winTimers.win3.line2.start.reset()
                                        winTimers.win3.line2.end.reset()
                                        winTimers.win3.line2.start.time = 500
                                        winTimers.win3.line2.end.time = 7000
                                        winTimers.win3.line2.start.start()
                                        winTimers.win3.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win3.line2.end);
                                    winTimers.win3.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win3.line3.end.on('end', elapsed => {
                                    if ( elapsed === 6000 ){
                                        winTimers.win3.line3.start.reset()
                                        winTimers.win3.line3.end.reset()
                                        winTimers.win3.line3.start.time = 500
                                        winTimers.win3.line3.end.time = 6000
                                        winTimers.win3.line3.start.start()
                                        winTimers.win3.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win3.line3.end);
                                    winTimers.win3.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win3.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win3.line4.end.on('end', elapsed => {
                                if ( elapsed === 5000 ){
                                    winTimers.win3.line4.start.reset()
                                    winTimers.win3.line4.end.reset()
                                    winTimers.win3.line4.start.time = 500
                                    winTimers.win3.line4.end.time = 5000
                                    winTimers.win3.line4.start.start()
                                    winTimers.win3.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                },  winTimers.win3.line4.end);
                                winTimers.win3.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win3.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win3.line5.end.on('end', elapsed => {
                            if ( elapsed === 4000 ){
                                winTimers.win3.line5.start.reset()
                                winTimers.win3.line5.end.reset()
                                winTimers.win3.line5.start.time = 500
                                winTimers.win3.line5.end.time = 4000
                                winTimers.win3.line5.start.start()
                                winTimers.win3.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win3.line4.end);
                            winTimers.win3.line1.end.delay = 2000
                            winTimers.win3.line2.start.delay = 500
                            winTimers.win3.line2.end.delay = 3000
                            winTimers.win3.line3.start.delay = 500
                            winTimers.win3.line3.end.delay = 4000
                            winTimers.win3.line4.start.delay = 500
                            winTimers.win3.line4.end.delay = 5000
                            winTimers.win3.line5.start.delay = 500
                            winTimers.win3.line5.end.delay = 6000
                            for ( let i in winTimers.win3){
                                for ( let j in winTimers.win3[i]){
                                    winTimers.win3[i][j].start()
                                }
                            }
                        }
                        else if  (hold.hold4){
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer)
                            winTimers.win4.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win4.line1.end.on('end', elapsed => {
                                        if ( elapsed === 11000 ){
                                            winTimers.win4.line1.start.reset()
                                            winTimers.win4.line1.end.reset()
                                            winTimers.win4.line1.start.time = 500
                                            winTimers.win4.line1.end.time = 11000
                                            winTimers.win4.line1.start.start()
                                            winTimers.win4.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        },  winTimers.win4.line1.end);
                                        winTimers.win4.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win4.line2.end.on('end', elapsed => {
                                    if ( elapsed === 10000 ){
                                        winTimers.win4.line2.start.reset()
                                        winTimers.win4.line2.end.reset()
                                        winTimers.win4.line2.start.time = 500
                                        winTimers.win4.line2.end.time = 10000
                                        winTimers.win4.line2.start.start()
                                        winTimers.win4.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win4.line2.end);
                                    winTimers.win4.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win4.line3.end.on('end', elapsed => {
                                    if ( elapsed === 9000 ){
                                        winTimers.win4.line3.start.reset()
                                        winTimers.win4.line3.end.reset()
                                        winTimers.win4.line3.start.time = 500
                                        winTimers.win4.line3.end.time = 9000
                                        winTimers.win4.line3.start.start()
                                        winTimers.win4.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win4.line3.end);
                                    winTimers.win4.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win4.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win4.line4.end.on('end', elapsed => {
                                if ( elapsed === 8000 ){
                                    winTimers.win4.line4.start.reset()
                                    winTimers.win4.line4.end.reset()
                                    winTimers.win4.line4.start.time = 500
                                    winTimers.win4.line4.end.time = 8000
                                    winTimers.win4.line4.start.start()
                                    winTimers.win4.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                }, winTimers.win4.line4.end);
                                winTimers.win4.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win4.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win4.line5.end.on('end', elapsed => {
                            if ( elapsed === 7000 ){
                                winTimers.win4.line5.start.reset()
                                winTimers.win4.line5.end.reset()
                                winTimers.win4.line5.start.time = 500
                                winTimers.win4.line5.end.time = 7000
                                winTimers.win4.line5.start.start()
                                winTimers.win4.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win4.line5.end);
                            winTimers.win4.line6.start.on('start', () => {
                                glowLineContainer.children[5].alpha = 0
                                _6Btn.alpha = 0
                                _6BtnRight.alpha = 0
                        });
                        winTimers.win4.line6.end.on('start', () => {
                            glowLineContainer.children[5].alpha = 1
                            _6Btn.alpha = 1
                            _6BtnRight.alpha = 1
                    });
                    winTimers.win4.line6.end.on('end', elapsed => {
                        if ( elapsed === 6000 ){
                            winTimers.win4.line6.start.reset()
                            winTimers.win4.line6.end.reset()
                            winTimers.win4.line6.start.time = 500
                            winTimers.win4.line6.end.time = 6000
                            winTimers.win4.line6.start.start()
                            winTimers.win4.line6.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win4.line6.end);
                        winTimers.win4.line7.start.on('start', () => {
                            glowLineContainer.children[6].alpha = 0
                            _7Btn.alpha = 0
                            _3BtnRight.alpha = 0
                    });
                    winTimers.win4.line7.end.on('start', () => {
                        glowLineContainer.children[6].alpha = 1
                        _7Btn.alpha = 1
                        _3BtnRight.alpha = 1
                });
                winTimers.win4.line7.end.on('end', elapsed => {
                    if ( elapsed === 5000 ){
                        winTimers.win4.line7.start.reset()
                        winTimers.win4.line7.end.reset()
                        winTimers.win4.line7.start.time = 500
                        winTimers.win4.line7.end.time = 5000
                        winTimers.win4.line7.start.start()
                        winTimers.win4.line7.end.start()
                    } else{
                        console.log('ended')
                    }
                    },   winTimers.win4.line7.end);
                    winTimers.win4.line1.end.delay = 5000
                    winTimers.win4.line2.start.delay = 500
                    winTimers.win4.line2.end.delay = 6000
                    winTimers.win4.line3.start.delay = 500
                    winTimers.win4.line3.end.delay = 7000
                    winTimers.win4.line4.start.delay = 500
                    winTimers.win4.line4.end.delay = 8000
                    winTimers.win4.line5.start.delay = 500
                    winTimers.win4.line5.end.delay = 9000
                    winTimers.win4.line6.start.delay = 500
                    winTimers.win4.line6.end.delay = 10000
                    winTimers.win4.line7.start.delay = 500
                    winTimers.win4.line7.end.delay = 11000
                    for ( let i in winTimers.win4){
                        for ( let j in winTimers.win4[i]){
                            winTimers.win4[i][j].start()
                        }
                    }
                        }
                        else if  (hold.hold5){
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrame10')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer,hold5Line1GlowContainer,hold5Line2GlowContainer)
                            winTimers.win5.line1.start.on('start', () => {
                                glowLineContainer.children[0].alpha = 0
                                _1Btn.alpha = 0
                                _1BtnRight.alpha = 0
                        });
                        winTimers.win5.line1.end.on('start', () => {
                                glowLineContainer.children[0].alpha = 1
                                _1Btn.alpha = 1
                                _1BtnRight.alpha = 1
                        });
                        winTimers.win5.line1.end.on('end', elapsed => {
                            if ( elapsed === 14000 ){
                                winTimers.win5.line1.start.reset()
                                winTimers.win5.line1.end.reset()
                                winTimers.win5.line1.start.time = 500
                                winTimers.win5.line1.end.time = 14000
                                winTimers.win5.line1.start.start()
                                winTimers.win5.line1.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win5.line1.end);
                            winTimers.win5.line2.start.on('start', () => {
                                glowLineContainer.children[1].alpha = 0
                                _2Btn.alpha = 0
                                _2BtnRight.alpha = 0
                        });
                        winTimers.win5.line2.end.on('start', () => {
                            glowLineContainer.children[1].alpha = 1
                            _2Btn.alpha = 1
                            _2BtnRight.alpha = 1
                    });
                    winTimers.win5.line2.end.on('end', elapsed => {
                        if ( elapsed === 13000 ){
                            winTimers.win5.line2.start.reset()
                            winTimers.win5.line2.end.reset()
                            winTimers.win5.line2.start.time = 500
                            winTimers.win5.line2.end.time = 13000
                            winTimers.win5.line2.start.start()
                            winTimers.win5.line2.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line2.end);
                        winTimers.win5.line3.start.on('start', () => {
                                glowLineContainer.children[2].alpha = 0
                                _3Btn.alpha = 0
                                _7BtnRight.alpha = 0
                        });
                        winTimers.win5.line3.end.on('start', () => {
                            glowLineContainer.children[2].alpha = 1
                            _3Btn.alpha = 1
                            _7BtnRight.alpha = 1
                    });
                    winTimers.win5.line3.end.on('end', elapsed => {
                        if ( elapsed === 12000 ){
                            winTimers.win5.line3.start.reset()
                            winTimers.win5.line3.end.reset()
                            winTimers.win5.line3.start.time = 500
                            winTimers.win5.line3.end.time = 12000
                            winTimers.win5.line3.start.start()
                            winTimers.win5.line3.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line3.end);
                        winTimers.win5.line4.start.on('start', () => {
                            glowLineContainer.children[3].alpha = 0
                            _4Btn.alpha = 0
                            _4BtnRight.alpha = 0
                    });
                    winTimers.win5.line4.end.on('start', () => {
                        glowLineContainer.children[3].alpha = 1
                        _4Btn.alpha = 1
                        _4BtnRight.alpha = 1
                });
                winTimers.win5.line4.end.on('end', elapsed => {
                    if ( elapsed === 11000 ){
                        winTimers.win5.line4.start.reset()
                        winTimers.win5.line4.end.reset()
                        winTimers.win5.line4.start.time = 500
                        winTimers.win5.line4.end.time = 11000
                        winTimers.win5.line4.start.start()
                        winTimers.win5.line4.end.start()
                    } else{
                        console.log('ended')
                    }
                    }, winTimers.win5.line4.end);
                    winTimers.win5.line5.start.on('start', () => {
                        glowLineContainer.children[4].alpha = 0
                        _5Btn.alpha = 0
                        _5BtnRight.alpha = 0
                });
                winTimers.win5.line5.end.on('start', () => {
                    glowLineContainer.children[4].alpha = 1
                    _5Btn.alpha = 1
                    _5BtnRight.alpha = 1
            });
            winTimers.win5.line5.end.on('end', elapsed => {
                if ( elapsed === 10000 ){
                    winTimers.win5.line5.start.reset()
                    winTimers.win5.line5.end.reset()
                    winTimers.win5.line5.start.time = 500
                    winTimers.win5.line5.end.time = 10000
                    winTimers.win5.line5.start.start()
                    winTimers.win5.line5.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line5.end);
                winTimers.win5.line6.start.on('start', () => {
                    glowLineContainer.children[5].alpha = 0
                    _6Btn.alpha = 0
                            _6BtnRight.alpha = 0
                    });
                    winTimers.win5.line6.end.on('start', () => {
                        glowLineContainer.children[5].alpha = 1
                        _6Btn.alpha = 1
                        _6BtnRight.alpha = 1
                });
            winTimers.win5.line6.end.on('end', elapsed => {
                if ( elapsed === 9000 ){
                    winTimers.win5.line6.start.reset()
                    winTimers.win5.line6.end.reset()
                    winTimers.win5.line6.start.time = 500
                    winTimers.win5.line6.end.time = 9000
                    winTimers.win5.line6.start.start()
                    winTimers.win5.line6.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line6.end);
                winTimers.win5.line7.start.on('start', () => {
                    glowLineContainer.children[6].alpha = 0
                    _7Btn.alpha = 0
                    _3BtnRight.alpha = 0
            });
                winTimers.win5.line7.end.on('start', () => {
                    glowLineContainer.children[6].alpha = 1
                    _7Btn.alpha = 1
                    _3BtnRight.alpha = 1
            });
            winTimers.win5.line7.end.on('end', elapsed => {
                if ( elapsed === 8000 ){
                    winTimers.win5.line7.start.reset()
                    winTimers.win5.line7.end.reset()
                    winTimers.win5.line7.start.time = 500
                    winTimers.win5.line7.end.time = 8000
                    winTimers.win5.line7.start.start()
                    winTimers.win5.line7.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line7.end);
                winTimers.win5.line8.start.on('start', () => {
                    glowLineContainer.children[7].alpha = 0
                    _8Btn.alpha = 0
                    _8BtnRight.alpha = 0
            });
            winTimers.win5.line8.end.on('start', () => {
                glowLineContainer.children[7].alpha = 1
                _8Btn.alpha = 1
                _8BtnRight.alpha = 1
            });
            winTimers.win5.line8.end.on('end', elapsed => {
                if ( elapsed === 7000 ){
                    winTimers.win5.line8.start.reset()
                    winTimers.win5.line8.end.reset()
                    winTimers.win5.line8.start.time = 500
                    winTimers.win5.line8.end.time = 7000
                    winTimers.win5.line8.start.start()
                    winTimers.win5.line8.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line8.end);
                winTimers.win5.line9.start.on('start', () => {
                    glowLineContainer.children[8].alpha = 0
                    _9Btn.alpha = 0
                    _9BtnRight.alpha = 0
            });
            winTimers.win5.line9.end.on('start', () => {
                glowLineContainer.children[8].alpha = 1
                _9Btn.alpha = 1
                _9BtnRight.alpha = 1
            });
            winTimers.win5.line9.end.on('end', elapsed => {
            if ( elapsed === 6000 ){
                winTimers.win5.line9.start.reset()
                winTimers.win5.line9.end.reset()
                winTimers.win5.line9.start.time = 500
                winTimers.win5.line9.end.time = 6000
                winTimers.win5.line9.start.start()
                winTimers.win5.line9.end.start()
            } else{
                console.log('ended')
            }
            }, winTimers.win5.line9.end);
            winTimers.win5.line1.end.delay = 6000
            winTimers.win5.line2.start.delay = 500
            winTimers.win5.line2.end.delay = 7000
            winTimers.win5.line3.start.delay = 500
            winTimers.win5.line3.end.delay = 8000
            winTimers.win5.line4.start.delay = 500
            winTimers.win5.line4.end.delay = 9000
            winTimers.win5.line5.start.delay = 500
            winTimers.win5.line5.end.delay = 10000
            winTimers.win5.line6.start.delay = 500
            winTimers.win5.line6.end.delay = 11000
            winTimers.win5.line7.start.delay = 500
            winTimers.win5.line7.end.delay = 12000
            winTimers.win5.line8.start.delay = 500
            winTimers.win5.line8.end.delay = 13000
            winTimers.win5.line9.start.delay = 500
            winTimers.win5.line9.end.delay = 14000
                for ( let i in winTimers.win5){
                    for ( let j in winTimers.win5[i]){
                        winTimers.win5[i][j].start()
                    }
                }
                        }
                        gameStateInfoContainer.children[1].text = 'WINNN!!!!'
                    } 
                    else{
                        symbol.alpha = 0.5
                    }
                }
            })
        }
         if(win.Bug >= 7 ){
            reels.forEach(item => {
                for(let symbol of item.symbols ){
                    if (symbol._texture=== texture.Bug){
                        if (hold.hold1){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 510:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 680:
                                    (symbol.y == 0) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break

                                default:
                                    break;
                            }
                            glowLineContainer.addChild(hold1LineGlowContainer)
                            winTimers.win1.start.on('start', () => {
                                    glowLineContainer.children[0].alpha = 0
                                    _1Btn.alpha = 0
                                    _1BtnRight.alpha = 0
                            });
                            winTimers.win1.end.on('start', () => {
                                    glowLineContainer.children[0].alpha = 1
                                    _1Btn.alpha = 1
                                    _1BtnRight.alpha = 1
                            });
                            winTimers.win1.end.on('end', elapsed => {
                            if ( elapsed === 2500 ){
                                winTimers.win1.start.reset()
                                winTimers.win1.end.reset()
                                winTimers.win1.start.time = 500
                                winTimers.win1.end.time = 2500
                                winTimers.win1.start.start()
                                winTimers.win1.end.start()
                            } else{
                                console.log('ended')
                            }
                            },  winTimers.win1.end);
                            winTimers.win1.end.delay = 1000
                            for (let i in winTimers.win1){
                                winTimers.win1[i].start()
                            }
                        }
                        else if  (hold.hold2){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 0 || symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug')))
                                break;
                                case 510:
                                    winstok++
                                 symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug')))

                                break;
                                case 680:
                                    (symbol.y == 0 || symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer)
                                    winTimers.win2.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win2.line1.end.on('end', elapsed => {
                                        if ( elapsed === 6000 ){
                                            winTimers.win2.line1.start.reset()
                                            winTimers.win2.line1.end.reset()
                                            winTimers.win2.line1.start.time = 500
                                            winTimers.win2.line1.end.time = 6000
                                            winTimers.win2.line1.start.start()
                                            winTimers.win2.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win2.line1.end);
                                        winTimers.win2.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win2.line2.end.on('end', elapsed => {
                                    if ( elapsed === 5000 ){
                                        winTimers.win2.line2.start.reset()
                                        winTimers.win2.line2.end.reset()
                                        winTimers.win2.line2.start.time = 500
                                        winTimers.win2.line2.end.time = 5000
                                        winTimers.win2.line2.start.start()
                                        winTimers.win2.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line2.end);
                                    winTimers.win2.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win2.line3.end.on('end', elapsed => {
                                    if ( elapsed === 4000 ){
                                        winTimers.win2.line3.start.reset()
                                        winTimers.win2.line3.end.reset()
                                        winTimers.win2.line3.start.time = 500
                                        winTimers.win2.line3.end.time = 4000
                                        winTimers.win2.line3.start.start()
                                        winTimers.win2.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line3.end);
                                    winTimers.win2.line1.end.delay = 4000
                                    winTimers.win2.line2.start.delay = 500
                                    winTimers.win2.line2.end.delay = 5000
                                    winTimers.win2.line3.start.delay = 500
                                    winTimers.win2.line3.end.delay = 6000
                                    for ( let i in winTimers.win2){
                                        for (let j in winTimers.win2[i]){
                                            winTimers.win2[i][j].start()
                                        }
                                    }
                        }
                        else if  (hold.hold3){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0 || symbol.y == 160) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug')))
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug')))
                                break;
                                case 510:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug')))
                                break;
                                case 680:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug')))
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer)
                                    winTimers.win3.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win3.line1.end.on('end', elapsed => {
                                        if ( elapsed === 8000 ){
                                            winTimers.win3.line1.start.reset()
                                            winTimers.win3.line1.end.reset()
                                            winTimers.win3.line1.start.time = 500
                                            winTimers.win3.line1.end.time = 8000
                                            winTimers.win3.line1.start.start()
                                            winTimers.win3.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win3.line1.end);
                                        winTimers.win3.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win3.line2.end.on('end', elapsed => {
                                    if ( elapsed === 7000 ){
                                        winTimers.win3.line2.start.reset()
                                        winTimers.win3.line2.end.reset()
                                        winTimers.win3.line2.start.time = 500
                                        winTimers.win3.line2.end.time = 7000
                                        winTimers.win3.line2.start.start()
                                        winTimers.win3.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win3.line2.end);
                                    winTimers.win3.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win3.line3.end.on('end', elapsed => {
                                    if ( elapsed === 6000 ){
                                        winTimers.win3.line3.start.reset()
                                        winTimers.win3.line3.end.reset()
                                        winTimers.win3.line3.start.time = 500
                                        winTimers.win3.line3.end.time = 6000
                                        winTimers.win3.line3.start.start()
                                        winTimers.win3.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win3.line3.end);
                                    winTimers.win3.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win3.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win3.line4.end.on('end', elapsed => {
                                if ( elapsed === 5000 ){
                                    winTimers.win3.line4.start.reset()
                                    winTimers.win3.line4.end.reset()
                                    winTimers.win3.line4.start.time = 500
                                    winTimers.win3.line4.end.time = 5000
                                    winTimers.win3.line4.start.start()
                                    winTimers.win3.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                },  winTimers.win3.line4.end);
                                winTimers.win3.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win3.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win3.line5.end.on('end', elapsed => {
                            if ( elapsed === 4000 ){
                                winTimers.win3.line5.start.reset()
                                winTimers.win3.line5.end.reset()
                                winTimers.win3.line5.start.time = 500
                                winTimers.win3.line5.end.time = 4000
                                winTimers.win3.line5.start.start()
                                winTimers.win3.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win3.line4.end);
                            winTimers.win3.line1.end.delay = 2000
                            winTimers.win3.line2.start.delay = 500
                            winTimers.win3.line2.end.delay = 3000
                            winTimers.win3.line3.start.delay = 500
                            winTimers.win3.line3.end.delay = 4000
                            winTimers.win3.line4.start.delay = 500
                            winTimers.win3.line4.end.delay = 5000
                            winTimers.win3.line5.start.delay = 500
                            winTimers.win3.line5.end.delay = 6000
                            for ( let i in winTimers.win3){
                                for ( let j in winTimers.win3[i]){
                                    winTimers.win3[i][j].start()
                                }
                            }
                        }
                        else if  (hold.hold4){
                            winstok += 10
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer)
                            winTimers.win4.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win4.line1.end.on('end', elapsed => {
                                        if ( elapsed === 11000 ){
                                            winTimers.win4.line1.start.reset()
                                            winTimers.win4.line1.end.reset()
                                            winTimers.win4.line1.start.time = 500
                                            winTimers.win4.line1.end.time = 11000
                                            winTimers.win4.line1.start.start()
                                            winTimers.win4.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        },  winTimers.win4.line1.end);
                                        winTimers.win4.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win4.line2.end.on('end', elapsed => {
                                    if ( elapsed === 10000 ){
                                        winTimers.win4.line2.start.reset()
                                        winTimers.win4.line2.end.reset()
                                        winTimers.win4.line2.start.time = 500
                                        winTimers.win4.line2.end.time = 10000
                                        winTimers.win4.line2.start.start()
                                        winTimers.win4.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win4.line2.end);
                                    winTimers.win4.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win4.line3.end.on('end', elapsed => {
                                    if ( elapsed === 9000 ){
                                        winTimers.win4.line3.start.reset()
                                        winTimers.win4.line3.end.reset()
                                        winTimers.win4.line3.start.time = 500
                                        winTimers.win4.line3.end.time = 9000
                                        winTimers.win4.line3.start.start()
                                        winTimers.win4.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win4.line3.end);
                                    winTimers.win4.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win4.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win4.line4.end.on('end', elapsed => {
                                if ( elapsed === 8000 ){
                                    winTimers.win4.line4.start.reset()
                                    winTimers.win4.line4.end.reset()
                                    winTimers.win4.line4.start.time = 500
                                    winTimers.win4.line4.end.time = 8000
                                    winTimers.win4.line4.start.start()
                                    winTimers.win4.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                }, winTimers.win4.line4.end);
                                winTimers.win4.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win4.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win4.line5.end.on('end', elapsed => {
                            if ( elapsed === 7000 ){
                                winTimers.win4.line5.start.reset()
                                winTimers.win4.line5.end.reset()
                                winTimers.win4.line5.start.time = 500
                                winTimers.win4.line5.end.time = 7000
                                winTimers.win4.line5.start.start()
                                winTimers.win4.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win4.line5.end);
                            winTimers.win4.line6.start.on('start', () => {
                                glowLineContainer.children[5].alpha = 0
                                _6Btn.alpha = 0
                                _6BtnRight.alpha = 0
                        });
                        winTimers.win4.line6.end.on('start', () => {
                            glowLineContainer.children[5].alpha = 1
                            _6Btn.alpha = 1
                            _6BtnRight.alpha = 1
                    });
                    winTimers.win4.line6.end.on('end', elapsed => {
                        if ( elapsed === 6000 ){
                            winTimers.win4.line6.start.reset()
                            winTimers.win4.line6.end.reset()
                            winTimers.win4.line6.start.time = 500
                            winTimers.win4.line6.end.time = 6000
                            winTimers.win4.line6.start.start()
                            winTimers.win4.line6.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win4.line6.end);
                        winTimers.win4.line7.start.on('start', () => {
                            glowLineContainer.children[6].alpha = 0
                            _7Btn.alpha = 0
                            _3BtnRight.alpha = 0
                    });
                    winTimers.win4.line7.end.on('start', () => {
                        glowLineContainer.children[6].alpha = 1
                        _7Btn.alpha = 1
                        _3BtnRight.alpha = 1
                });
                winTimers.win4.line7.end.on('end', elapsed => {
                    if ( elapsed === 5000 ){
                        winTimers.win4.line7.start.reset()
                        winTimers.win4.line7.end.reset()
                        winTimers.win4.line7.start.time = 500
                        winTimers.win4.line7.end.time = 5000
                        winTimers.win4.line7.start.start()
                        winTimers.win4.line7.end.start()
                    } else{
                        console.log('ended')
                    }
                    },   winTimers.win4.line7.end);
                    winTimers.win4.line1.end.delay = 5000
                    winTimers.win4.line2.start.delay = 500
                    winTimers.win4.line2.end.delay = 6000
                    winTimers.win4.line3.start.delay = 500
                    winTimers.win4.line3.end.delay = 7000
                    winTimers.win4.line4.start.delay = 500
                    winTimers.win4.line4.end.delay = 8000
                    winTimers.win4.line5.start.delay = 500
                    winTimers.win4.line5.end.delay = 9000
                    winTimers.win4.line6.start.delay = 500
                    winTimers.win4.line6.end.delay = 10000
                    winTimers.win4.line7.start.delay = 500
                    winTimers.win4.line7.end.delay = 11000
                    for ( let i in winTimers.win4){
                        for ( let j in winTimers.win4[i]){
                            winTimers.win4[i][j].start()
                        }
                    }
                        }
                        else if  (hold.hold5){
                            win += 15
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBug')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer,hold5Line1GlowContainer,hold5Line2GlowContainer)
                            winTimers.win5.line1.start.on('start', () => {
                                glowLineContainer.children[0].alpha = 0
                                _1Btn.alpha = 0
                                _1BtnRight.alpha = 0
                        });
                        winTimers.win5.line1.end.on('start', () => {
                                glowLineContainer.children[0].alpha = 1
                                _1Btn.alpha = 1
                                _1BtnRight.alpha = 1
                        });
                        winTimers.win5.line1.end.on('end', elapsed => {
                            if ( elapsed === 14000 ){
                                winTimers.win5.line1.start.reset()
                                winTimers.win5.line1.end.reset()
                                winTimers.win5.line1.start.time = 500
                                winTimers.win5.line1.end.time = 14000
                                winTimers.win5.line1.start.start()
                                winTimers.win5.line1.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win5.line1.end);
                            winTimers.win5.line2.start.on('start', () => {
                                glowLineContainer.children[1].alpha = 0
                                _2Btn.alpha = 0
                                _2BtnRight.alpha = 0
                        });
                        winTimers.win5.line2.end.on('start', () => {
                            glowLineContainer.children[1].alpha = 1
                            _2Btn.alpha = 1
                            _2BtnRight.alpha = 1
                    });
                    winTimers.win5.line2.end.on('end', elapsed => {
                        if ( elapsed === 13000 ){
                            winTimers.win5.line2.start.reset()
                            winTimers.win5.line2.end.reset()
                            winTimers.win5.line2.start.time = 500
                            winTimers.win5.line2.end.time = 13000
                            winTimers.win5.line2.start.start()
                            winTimers.win5.line2.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line2.end);
                        winTimers.win5.line3.start.on('start', () => {
                                glowLineContainer.children[2].alpha = 0
                                _3Btn.alpha = 0
                                _7BtnRight.alpha = 0
                        });
                        winTimers.win5.line3.end.on('start', () => {
                            glowLineContainer.children[2].alpha = 1
                            _3Btn.alpha = 1
                            _7BtnRight.alpha = 1
                    });
                    winTimers.win5.line3.end.on('end', elapsed => {
                        if ( elapsed === 12000 ){
                            winTimers.win5.line3.start.reset()
                            winTimers.win5.line3.end.reset()
                            winTimers.win5.line3.start.time = 500
                            winTimers.win5.line3.end.time = 12000
                            winTimers.win5.line3.start.start()
                            winTimers.win5.line3.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line3.end);
                        winTimers.win5.line4.start.on('start', () => {
                            glowLineContainer.children[3].alpha = 0
                            _4Btn.alpha = 0
                            _4BtnRight.alpha = 0
                    });
                    winTimers.win5.line4.end.on('start', () => {
                        glowLineContainer.children[3].alpha = 1
                        _4Btn.alpha = 1
                        _4BtnRight.alpha = 1
                });
                winTimers.win5.line4.end.on('end', elapsed => {
                    if ( elapsed === 11000 ){
                        winTimers.win5.line4.start.reset()
                        winTimers.win5.line4.end.reset()
                        winTimers.win5.line4.start.time = 500
                        winTimers.win5.line4.end.time = 11000
                        winTimers.win5.line4.start.start()
                        winTimers.win5.line4.end.start()
                    } else{
                        console.log('ended')
                    }
                    }, winTimers.win5.line4.end);
                    winTimers.win5.line5.start.on('start', () => {
                        glowLineContainer.children[4].alpha = 0
                        _5Btn.alpha = 0
                        _5BtnRight.alpha = 0
                });
                winTimers.win5.line5.end.on('start', () => {
                    glowLineContainer.children[4].alpha = 1
                    _5Btn.alpha = 1
                    _5BtnRight.alpha = 1
            });
            winTimers.win5.line5.end.on('end', elapsed => {
                if ( elapsed === 10000 ){
                    winTimers.win5.line5.start.reset()
                    winTimers.win5.line5.end.reset()
                    winTimers.win5.line5.start.time = 500
                    winTimers.win5.line5.end.time = 10000
                    winTimers.win5.line5.start.start()
                    winTimers.win5.line5.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line5.end);
                winTimers.win5.line6.start.on('start', () => {
                    glowLineContainer.children[5].alpha = 0
                    _6Btn.alpha = 0
                            _6BtnRight.alpha = 0
                    });
                    winTimers.win5.line6.end.on('start', () => {
                        glowLineContainer.children[5].alpha = 1
                        _6Btn.alpha = 1
                        _6BtnRight.alpha = 1
                });
            winTimers.win5.line6.end.on('end', elapsed => {
                if ( elapsed === 9000 ){
                    winTimers.win5.line6.start.reset()
                    winTimers.win5.line6.end.reset()
                    winTimers.win5.line6.start.time = 500
                    winTimers.win5.line6.end.time = 9000
                    winTimers.win5.line6.start.start()
                    winTimers.win5.line6.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line6.end);
                winTimers.win5.line7.start.on('start', () => {
                    glowLineContainer.children[6].alpha = 0
                    _7Btn.alpha = 0
                    _3BtnRight.alpha = 0
            });
                winTimers.win5.line7.end.on('start', () => {
                    glowLineContainer.children[6].alpha = 1
                    _7Btn.alpha = 1
                    _3BtnRight.alpha = 1
            });
            winTimers.win5.line7.end.on('end', elapsed => {
                if ( elapsed === 8000 ){
                    winTimers.win5.line7.start.reset()
                    winTimers.win5.line7.end.reset()
                    winTimers.win5.line7.start.time = 500
                    winTimers.win5.line7.end.time = 8000
                    winTimers.win5.line7.start.start()
                    winTimers.win5.line7.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line7.end);
                winTimers.win5.line8.start.on('start', () => {
                    glowLineContainer.children[7].alpha = 0
                    _8Btn.alpha = 0
                    _8BtnRight.alpha = 0
            });
            winTimers.win5.line8.end.on('start', () => {
                glowLineContainer.children[7].alpha = 1
                _8Btn.alpha = 1
                _8BtnRight.alpha = 1
            });
            winTimers.win5.line8.end.on('end', elapsed => {
                if ( elapsed === 7000 ){
                    winTimers.win5.line8.start.reset()
                    winTimers.win5.line8.end.reset()
                    winTimers.win5.line8.start.time = 500
                    winTimers.win5.line8.end.time = 7000
                    winTimers.win5.line8.start.start()
                    winTimers.win5.line8.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line8.end);
                winTimers.win5.line9.start.on('start', () => {
                    glowLineContainer.children[8].alpha = 0
                    _9Btn.alpha = 0
                    _9BtnRight.alpha = 0
            });
            winTimers.win5.line9.end.on('start', () => {
                glowLineContainer.children[8].alpha = 1
                _9Btn.alpha = 1
                _9BtnRight.alpha = 1
            });
            winTimers.win5.line9.end.on('end', elapsed => {
            if ( elapsed === 6000 ){
                winTimers.win5.line9.start.reset()
                winTimers.win5.line9.end.reset()
                winTimers.win5.line9.start.time = 500
                winTimers.win5.line9.end.time = 6000
                winTimers.win5.line9.start.start()
                winTimers.win5.line9.end.start()
            } else{
                console.log('ended')
            }
            }, winTimers.win5.line9.end);
            winTimers.win5.line1.end.delay = 6000
            winTimers.win5.line2.start.delay = 500
            winTimers.win5.line2.end.delay = 7000
            winTimers.win5.line3.start.delay = 500
            winTimers.win5.line3.end.delay = 8000
            winTimers.win5.line4.start.delay = 500
            winTimers.win5.line4.end.delay = 9000
            winTimers.win5.line5.start.delay = 500
            winTimers.win5.line5.end.delay = 10000
            winTimers.win5.line6.start.delay = 500
            winTimers.win5.line6.end.delay = 11000
            winTimers.win5.line7.start.delay = 500
            winTimers.win5.line7.end.delay = 12000
            winTimers.win5.line8.start.delay = 500
            winTimers.win5.line8.end.delay = 13000
            winTimers.win5.line9.start.delay = 500
            winTimers.win5.line9.end.delay = 14000
                for ( let i in winTimers.win5){
                    for ( let j in winTimers.win5[i]){
                        winTimers.win5[i][j].start()
                    }
                }
                        }
                        gameStateInfoContainer.children[1].text = 'WINNN!!!!'
                    } 
                    else{
                        symbol.alpha = 0.5
                    }
                }
            })
        }
        if(win.A >= 7 ){
            reels.forEach(item => {
                for(let symbol of item.symbols ){
                    if (symbol._texture=== texture.A){
                        if (hold.hold1){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 510:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 680:
                                    (symbol.y == 0) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break

                                default:
                                    break;
                            }
                            glowLineContainer.addChild(hold1LineGlowContainer)
                            winTimers.win1.start.on('start', () => {
                                    glowLineContainer.children[0].alpha = 0
                                    _1Btn.alpha = 0
                                    _1BtnRight.alpha = 0
                            });
                            winTimers.win1.end.on('start', () => {
                                    glowLineContainer.children[0].alpha = 1
                                    _1Btn.alpha = 1
                                    _1BtnRight.alpha = 1
                            });
                            winTimers.win1.end.on('end', elapsed => {
                            if ( elapsed === 2500 ){
                                winTimers.win1.start.reset()
                                winTimers.win1.end.reset()
                                winTimers.win1.start.time = 500
                                winTimers.win1.end.time = 2500
                                winTimers.win1.start.start()
                                winTimers.win1.end.start()
                            } else{
                                console.log('ended')
                            }
                            },  winTimers.win1.end);
                            winTimers.win1.end.delay = 1000
                            for (let i in winTimers.win1){
                                winTimers.win1[i].start()
                            }
                        }
                        else if  (hold.hold2){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 0 || symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA')))
                                break;
                                case 510:
                                    winstok++
                                 symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA')))

                                break;
                                case 680:
                                    (symbol.y == 0 || symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer)
                                    winTimers.win2.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win2.line1.end.on('end', elapsed => {
                                        if ( elapsed === 6000 ){
                                            winTimers.win2.line1.start.reset()
                                            winTimers.win2.line1.end.reset()
                                            winTimers.win2.line1.start.time = 500
                                            winTimers.win2.line1.end.time = 6000
                                            winTimers.win2.line1.start.start()
                                            winTimers.win2.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win2.line1.end);
                                        winTimers.win2.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win2.line2.end.on('end', elapsed => {
                                    if ( elapsed === 5000 ){
                                        winTimers.win2.line2.start.reset()
                                        winTimers.win2.line2.end.reset()
                                        winTimers.win2.line2.start.time = 500
                                        winTimers.win2.line2.end.time = 5000
                                        winTimers.win2.line2.start.start()
                                        winTimers.win2.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line2.end);
                                    winTimers.win2.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win2.line3.end.on('end', elapsed => {
                                    if ( elapsed === 4000 ){
                                        winTimers.win2.line3.start.reset()
                                        winTimers.win2.line3.end.reset()
                                        winTimers.win2.line3.start.time = 500
                                        winTimers.win2.line3.end.time = 4000
                                        winTimers.win2.line3.start.start()
                                        winTimers.win2.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line3.end);
                                    winTimers.win2.line1.end.delay = 4000
                                    winTimers.win2.line2.start.delay = 500
                                    winTimers.win2.line2.end.delay = 5000
                                    winTimers.win2.line3.start.delay = 500
                                    winTimers.win2.line3.end.delay = 6000
                                    for ( let i in winTimers.win2){
                                        for (let j in winTimers.win2[i]){
                                            winTimers.win2[i][j].start()
                                        }
                                    }
                        }
                        else if  (hold.hold3){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0 || symbol.y == 160) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA')))
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA')))
                                break;
                                case 510:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA')))
                                break;
                                case 680:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA')))
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer)
                                    winTimers.win3.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win3.line1.end.on('end', elapsed => {
                                        if ( elapsed === 8000 ){
                                            winTimers.win3.line1.start.reset()
                                            winTimers.win3.line1.end.reset()
                                            winTimers.win3.line1.start.time = 500
                                            winTimers.win3.line1.end.time = 8000
                                            winTimers.win3.line1.start.start()
                                            winTimers.win3.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win3.line1.end);
                                        winTimers.win3.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win3.line2.end.on('end', elapsed => {
                                    if ( elapsed === 7000 ){
                                        winTimers.win3.line2.start.reset()
                                        winTimers.win3.line2.end.reset()
                                        winTimers.win3.line2.start.time = 500
                                        winTimers.win3.line2.end.time = 7000
                                        winTimers.win3.line2.start.start()
                                        winTimers.win3.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win3.line2.end);
                                    winTimers.win3.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win3.line3.end.on('end', elapsed => {
                                    if ( elapsed === 6000 ){
                                        winTimers.win3.line3.start.reset()
                                        winTimers.win3.line3.end.reset()
                                        winTimers.win3.line3.start.time = 500
                                        winTimers.win3.line3.end.time = 6000
                                        winTimers.win3.line3.start.start()
                                        winTimers.win3.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win3.line3.end);
                                    winTimers.win3.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win3.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win3.line4.end.on('end', elapsed => {
                                if ( elapsed === 5000 ){
                                    winTimers.win3.line4.start.reset()
                                    winTimers.win3.line4.end.reset()
                                    winTimers.win3.line4.start.time = 500
                                    winTimers.win3.line4.end.time = 5000
                                    winTimers.win3.line4.start.start()
                                    winTimers.win3.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                },  winTimers.win3.line4.end);
                                winTimers.win3.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win3.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win3.line5.end.on('end', elapsed => {
                            if ( elapsed === 4000 ){
                                winTimers.win3.line5.start.reset()
                                winTimers.win3.line5.end.reset()
                                winTimers.win3.line5.start.time = 500
                                winTimers.win3.line5.end.time = 4000
                                winTimers.win3.line5.start.start()
                                winTimers.win3.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win3.line4.end);
                            winTimers.win3.line1.end.delay = 2000
                            winTimers.win3.line2.start.delay = 500
                            winTimers.win3.line2.end.delay = 3000
                            winTimers.win3.line3.start.delay = 500
                            winTimers.win3.line3.end.delay = 4000
                            winTimers.win3.line4.start.delay = 500
                            winTimers.win3.line4.end.delay = 5000
                            winTimers.win3.line5.start.delay = 500
                            winTimers.win3.line5.end.delay = 6000
                            for ( let i in winTimers.win3){
                                for ( let j in winTimers.win3[i]){
                                    winTimers.win3[i][j].start()
                                }
                            }
                        }
                        else if  (hold.hold4){
                            winstok += 10
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer)
                            winTimers.win4.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win4.line1.end.on('end', elapsed => {
                                        if ( elapsed === 11000 ){
                                            winTimers.win4.line1.start.reset()
                                            winTimers.win4.line1.end.reset()
                                            winTimers.win4.line1.start.time = 500
                                            winTimers.win4.line1.end.time = 11000
                                            winTimers.win4.line1.start.start()
                                            winTimers.win4.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        },  winTimers.win4.line1.end);
                                        winTimers.win4.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win4.line2.end.on('end', elapsed => {
                                    if ( elapsed === 10000 ){
                                        winTimers.win4.line2.start.reset()
                                        winTimers.win4.line2.end.reset()
                                        winTimers.win4.line2.start.time = 500
                                        winTimers.win4.line2.end.time = 10000
                                        winTimers.win4.line2.start.start()
                                        winTimers.win4.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win4.line2.end);
                                    winTimers.win4.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win4.line3.end.on('end', elapsed => {
                                    if ( elapsed === 9000 ){
                                        winTimers.win4.line3.start.reset()
                                        winTimers.win4.line3.end.reset()
                                        winTimers.win4.line3.start.time = 500
                                        winTimers.win4.line3.end.time = 9000
                                        winTimers.win4.line3.start.start()
                                        winTimers.win4.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win4.line3.end);
                                    winTimers.win4.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win4.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win4.line4.end.on('end', elapsed => {
                                if ( elapsed === 8000 ){
                                    winTimers.win4.line4.start.reset()
                                    winTimers.win4.line4.end.reset()
                                    winTimers.win4.line4.start.time = 500
                                    winTimers.win4.line4.end.time = 8000
                                    winTimers.win4.line4.start.start()
                                    winTimers.win4.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                }, winTimers.win4.line4.end);
                                winTimers.win4.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win4.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win4.line5.end.on('end', elapsed => {
                            if ( elapsed === 7000 ){
                                winTimers.win4.line5.start.reset()
                                winTimers.win4.line5.end.reset()
                                winTimers.win4.line5.start.time = 500
                                winTimers.win4.line5.end.time = 7000
                                winTimers.win4.line5.start.start()
                                winTimers.win4.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win4.line5.end);
                            winTimers.win4.line6.start.on('start', () => {
                                glowLineContainer.children[5].alpha = 0
                                _6Btn.alpha = 0
                                _6BtnRight.alpha = 0
                        });
                        winTimers.win4.line6.end.on('start', () => {
                            glowLineContainer.children[5].alpha = 1
                            _6Btn.alpha = 1
                            _6BtnRight.alpha = 1
                    });
                    winTimers.win4.line6.end.on('end', elapsed => {
                        if ( elapsed === 6000 ){
                            winTimers.win4.line6.start.reset()
                            winTimers.win4.line6.end.reset()
                            winTimers.win4.line6.start.time = 500
                            winTimers.win4.line6.end.time = 6000
                            winTimers.win4.line6.start.start()
                            winTimers.win4.line6.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win4.line6.end);
                        winTimers.win4.line7.start.on('start', () => {
                            glowLineContainer.children[6].alpha = 0
                            _7Btn.alpha = 0
                            _3BtnRight.alpha = 0
                    });
                    winTimers.win4.line7.end.on('start', () => {
                        glowLineContainer.children[6].alpha = 1
                        _7Btn.alpha = 1
                        _3BtnRight.alpha = 1
                });
                winTimers.win4.line7.end.on('end', elapsed => {
                    if ( elapsed === 5000 ){
                        winTimers.win4.line7.start.reset()
                        winTimers.win4.line7.end.reset()
                        winTimers.win4.line7.start.time = 500
                        winTimers.win4.line7.end.time = 5000
                        winTimers.win4.line7.start.start()
                        winTimers.win4.line7.end.start()
                    } else{
                        console.log('ended')
                    }
                    },   winTimers.win4.line7.end);
                    winTimers.win4.line1.end.delay = 5000
                    winTimers.win4.line2.start.delay = 500
                    winTimers.win4.line2.end.delay = 6000
                    winTimers.win4.line3.start.delay = 500
                    winTimers.win4.line3.end.delay = 7000
                    winTimers.win4.line4.start.delay = 500
                    winTimers.win4.line4.end.delay = 8000
                    winTimers.win4.line5.start.delay = 500
                    winTimers.win4.line5.end.delay = 9000
                    winTimers.win4.line6.start.delay = 500
                    winTimers.win4.line6.end.delay = 10000
                    winTimers.win4.line7.start.delay = 500
                    winTimers.win4.line7.end.delay = 11000
                    for ( let i in winTimers.win4){
                        for ( let j in winTimers.win4[i]){
                            winTimers.win4[i][j].start()
                        }
                    }
                        }
                        else if  (hold.hold5){
                            winstok += 15
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameA')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer,hold5Line1GlowContainer,hold5Line2GlowContainer)
                            winTimers.win5.line1.start.on('start', () => {
                                glowLineContainer.children[0].alpha = 0
                                _1Btn.alpha = 0
                                _1BtnRight.alpha = 0
                        });
                        winTimers.win5.line1.end.on('start', () => {
                                glowLineContainer.children[0].alpha = 1
                                _1Btn.alpha = 1
                                _1BtnRight.alpha = 1
                        });
                        winTimers.win5.line1.end.on('end', elapsed => {
                            if ( elapsed === 14000 ){
                                winTimers.win5.line1.start.reset()
                                winTimers.win5.line1.end.reset()
                                winTimers.win5.line1.start.time = 500
                                winTimers.win5.line1.end.time = 14000
                                winTimers.win5.line1.start.start()
                                winTimers.win5.line1.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win5.line1.end);
                            winTimers.win5.line2.start.on('start', () => {
                                glowLineContainer.children[1].alpha = 0
                                _2Btn.alpha = 0
                                _2BtnRight.alpha = 0
                        });
                        winTimers.win5.line2.end.on('start', () => {
                            glowLineContainer.children[1].alpha = 1
                            _2Btn.alpha = 1
                            _2BtnRight.alpha = 1
                    });
                    winTimers.win5.line2.end.on('end', elapsed => {
                        if ( elapsed === 13000 ){
                            winTimers.win5.line2.start.reset()
                            winTimers.win5.line2.end.reset()
                            winTimers.win5.line2.start.time = 500
                            winTimers.win5.line2.end.time = 13000
                            winTimers.win5.line2.start.start()
                            winTimers.win5.line2.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line2.end);
                        winTimers.win5.line3.start.on('start', () => {
                                glowLineContainer.children[2].alpha = 0
                                _3Btn.alpha = 0
                                _7BtnRight.alpha = 0
                        });
                        winTimers.win5.line3.end.on('start', () => {
                            glowLineContainer.children[2].alpha = 1
                            _3Btn.alpha = 1
                            _7BtnRight.alpha = 1
                    });
                    winTimers.win5.line3.end.on('end', elapsed => {
                        if ( elapsed === 12000 ){
                            winTimers.win5.line3.start.reset()
                            winTimers.win5.line3.end.reset()
                            winTimers.win5.line3.start.time = 500
                            winTimers.win5.line3.end.time = 12000
                            winTimers.win5.line3.start.start()
                            winTimers.win5.line3.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line3.end);
                        winTimers.win5.line4.start.on('start', () => {
                            glowLineContainer.children[3].alpha = 0
                            _4Btn.alpha = 0
                            _4BtnRight.alpha = 0
                    });
                    winTimers.win5.line4.end.on('start', () => {
                        glowLineContainer.children[3].alpha = 1
                        _4Btn.alpha = 1
                        _4BtnRight.alpha = 1
                });
                winTimers.win5.line4.end.on('end', elapsed => {
                    if ( elapsed === 11000 ){
                        winTimers.win5.line4.start.reset()
                        winTimers.win5.line4.end.reset()
                        winTimers.win5.line4.start.time = 500
                        winTimers.win5.line4.end.time = 11000
                        winTimers.win5.line4.start.start()
                        winTimers.win5.line4.end.start()
                    } else{
                        console.log('ended')
                    }
                    }, winTimers.win5.line4.end);
                    winTimers.win5.line5.start.on('start', () => {
                        glowLineContainer.children[4].alpha = 0
                        _5Btn.alpha = 0
                        _5BtnRight.alpha = 0
                });
                winTimers.win5.line5.end.on('start', () => {
                    glowLineContainer.children[4].alpha = 1
                    _5Btn.alpha = 1
                    _5BtnRight.alpha = 1
            });
            winTimers.win5.line5.end.on('end', elapsed => {
                if ( elapsed === 10000 ){
                    winTimers.win5.line5.start.reset()
                    winTimers.win5.line5.end.reset()
                    winTimers.win5.line5.start.time = 500
                    winTimers.win5.line5.end.time = 10000
                    winTimers.win5.line5.start.start()
                    winTimers.win5.line5.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line5.end);
                winTimers.win5.line6.start.on('start', () => {
                    glowLineContainer.children[5].alpha = 0
                    _6Btn.alpha = 0
                            _6BtnRight.alpha = 0
                    });
                    winTimers.win5.line6.end.on('start', () => {
                        glowLineContainer.children[5].alpha = 1
                        _6Btn.alpha = 1
                        _6BtnRight.alpha = 1
                });
            winTimers.win5.line6.end.on('end', elapsed => {
                if ( elapsed === 9000 ){
                    winTimers.win5.line6.start.reset()
                    winTimers.win5.line6.end.reset()
                    winTimers.win5.line6.start.time = 500
                    winTimers.win5.line6.end.time = 9000
                    winTimers.win5.line6.start.start()
                    winTimers.win5.line6.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line6.end);
                winTimers.win5.line7.start.on('start', () => {
                    glowLineContainer.children[6].alpha = 0
                    _7Btn.alpha = 0
                    _3BtnRight.alpha = 0
            });
                winTimers.win5.line7.end.on('start', () => {
                    glowLineContainer.children[6].alpha = 1
                    _7Btn.alpha = 1
                    _3BtnRight.alpha = 1
            });
            winTimers.win5.line7.end.on('end', elapsed => {
                if ( elapsed === 8000 ){
                    winTimers.win5.line7.start.reset()
                    winTimers.win5.line7.end.reset()
                    winTimers.win5.line7.start.time = 500
                    winTimers.win5.line7.end.time = 8000
                    winTimers.win5.line7.start.start()
                    winTimers.win5.line7.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line7.end);
                winTimers.win5.line8.start.on('start', () => {
                    glowLineContainer.children[7].alpha = 0
                    _8Btn.alpha = 0
                    _8BtnRight.alpha = 0
            });
            winTimers.win5.line8.end.on('start', () => {
                glowLineContainer.children[7].alpha = 1
                _8Btn.alpha = 1
                _8BtnRight.alpha = 1
            });
            winTimers.win5.line8.end.on('end', elapsed => {
                if ( elapsed === 7000 ){
                    winTimers.win5.line8.start.reset()
                    winTimers.win5.line8.end.reset()
                    winTimers.win5.line8.start.time = 500
                    winTimers.win5.line8.end.time = 7000
                    winTimers.win5.line8.start.start()
                    winTimers.win5.line8.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line8.end);
                winTimers.win5.line9.start.on('start', () => {
                    glowLineContainer.children[8].alpha = 0
                    _9Btn.alpha = 0
                    _9BtnRight.alpha = 0
            });
            winTimers.win5.line9.end.on('start', () => {
                glowLineContainer.children[8].alpha = 1
                _9Btn.alpha = 1
                _9BtnRight.alpha = 1
            });
            winTimers.win5.line9.end.on('end', elapsed => {
            if ( elapsed === 6000 ){
                winTimers.win5.line9.start.reset()
                winTimers.win5.line9.end.reset()
                winTimers.win5.line9.start.time = 500
                winTimers.win5.line9.end.time = 6000
                winTimers.win5.line9.start.start()
                winTimers.win5.line9.end.start()
            } else{
                console.log('ended')
            }
            }, winTimers.win5.line9.end);
            winTimers.win5.line1.end.delay = 6000
            winTimers.win5.line2.start.delay = 500
            winTimers.win5.line2.end.delay = 7000
            winTimers.win5.line3.start.delay = 500
            winTimers.win5.line3.end.delay = 8000
            winTimers.win5.line4.start.delay = 500
            winTimers.win5.line4.end.delay = 9000
            winTimers.win5.line5.start.delay = 500
            winTimers.win5.line5.end.delay = 10000
            winTimers.win5.line6.start.delay = 500
            winTimers.win5.line6.end.delay = 11000
            winTimers.win5.line7.start.delay = 500
            winTimers.win5.line7.end.delay = 12000
            winTimers.win5.line8.start.delay = 500
            winTimers.win5.line8.end.delay = 13000
            winTimers.win5.line9.start.delay = 500
            winTimers.win5.line9.end.delay = 14000
                for ( let i in winTimers.win5){
                    for ( let j in winTimers.win5[i]){
                        winTimers.win5[i][j].start()
                    }
                }
                        }
                        gameStateInfoContainer.children[1].text = 'WINNN!!!!'
                    } 
                    else{
                        symbol.alpha = 0.5
                    }
                }
            })
        }
        if(win.Cat >= 7 ){
            reels.forEach(item => {
                for(let symbol of item.symbols ){
                    if (symbol._texture=== texture.Cat){

                        if (hold.hold1){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 510:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 680:
                                    (symbol.y == 0) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break

                                default:
                                    break;
                            }
                            glowLineContainer.addChild(hold1LineGlowContainer)
                            winTimers.win1.start.on('start', () => {
                                    glowLineContainer.children[0].alpha = 0
                                    _1Btn.alpha = 0
                                    _1BtnRight.alpha = 0
                            });
                            winTimers.win1.end.on('start', () => {
                                    glowLineContainer.children[0].alpha = 1
                                    _1Btn.alpha = 1
                                    _1BtnRight.alpha = 1
                            });
                            winTimers.win1.end.on('end', elapsed => {
                            if ( elapsed === 2500 ){
                                winTimers.win1.start.reset()
                                winTimers.win1.end.reset()
                                winTimers.win1.start.time = 500
                                winTimers.win1.end.time = 2500
                                winTimers.win1.start.start()
                                winTimers.win1.end.start()
                            } else{
                                console.log('ended')
                            }
                            },  winTimers.win1.end);
                            winTimers.win1.end.delay = 1000
                            for (let i in winTimers.win1){
                                winTimers.win1[i].start()
                            }
                        }
                        else if  (hold.hold2){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 0 || symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat')))
                                break;
                                case 510:
                                    winstok++
                                 symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat')))

                                break;
                                case 680:
                                    (symbol.y == 0 || symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer)
                                    winTimers.win2.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win2.line1.end.on('end', elapsed => {
                                        if ( elapsed === 6000 ){
                                            winTimers.win2.line1.start.reset()
                                            winTimers.win2.line1.end.reset()
                                            winTimers.win2.line1.start.time = 500
                                            winTimers.win2.line1.end.time = 6000
                                            winTimers.win2.line1.start.start()
                                            winTimers.win2.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win2.line1.end);
                                        winTimers.win2.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win2.line2.end.on('end', elapsed => {
                                    if ( elapsed === 5000 ){
                                        winTimers.win2.line2.start.reset()
                                        winTimers.win2.line2.end.reset()
                                        winTimers.win2.line2.start.time = 500
                                        winTimers.win2.line2.end.time = 5000
                                        winTimers.win2.line2.start.start()
                                        winTimers.win2.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line2.end);
                                    winTimers.win2.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win2.line3.end.on('end', elapsed => {
                                    if ( elapsed === 4000 ){
                                        winTimers.win2.line3.start.reset()
                                        winTimers.win2.line3.end.reset()
                                        winTimers.win2.line3.start.time = 500
                                        winTimers.win2.line3.end.time = 4000
                                        winTimers.win2.line3.start.start()
                                        winTimers.win2.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line3.end);
                                    winTimers.win2.line1.end.delay = 4000
                                    winTimers.win2.line2.start.delay = 500
                                    winTimers.win2.line2.end.delay = 5000
                                    winTimers.win2.line3.start.delay = 500
                                    winTimers.win2.line3.end.delay = 6000
                                    for ( let i in winTimers.win2){
                                        for (let j in winTimers.win2[i]){
                                            winTimers.win2[i][j].start()
                                        }
                                    }
                        }
                        else if  (hold.hold3){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0 || symbol.y == 160) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat')))
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat')))
                                break;
                                case 510:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat')))
                                break;
                                case 680:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat')))
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer)
                                    winTimers.win3.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win3.line1.end.on('end', elapsed => {
                                        if ( elapsed === 8000 ){
                                            winTimers.win3.line1.start.reset()
                                            winTimers.win3.line1.end.reset()
                                            winTimers.win3.line1.start.time = 500
                                            winTimers.win3.line1.end.time = 8000
                                            winTimers.win3.line1.start.start()
                                            winTimers.win3.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win3.line1.end);
                                        winTimers.win3.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win3.line2.end.on('end', elapsed => {
                                    if ( elapsed === 7000 ){
                                        winTimers.win3.line2.start.reset()
                                        winTimers.win3.line2.end.reset()
                                        winTimers.win3.line2.start.time = 500
                                        winTimers.win3.line2.end.time = 7000
                                        winTimers.win3.line2.start.start()
                                        winTimers.win3.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win3.line2.end);
                                    winTimers.win3.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win3.line3.end.on('end', elapsed => {
                                    if ( elapsed === 6000 ){
                                        winTimers.win3.line3.start.reset()
                                        winTimers.win3.line3.end.reset()
                                        winTimers.win3.line3.start.time = 500
                                        winTimers.win3.line3.end.time = 6000
                                        winTimers.win3.line3.start.start()
                                        winTimers.win3.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win3.line3.end);
                                    winTimers.win3.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win3.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win3.line4.end.on('end', elapsed => {
                                if ( elapsed === 5000 ){
                                    winTimers.win3.line4.start.reset()
                                    winTimers.win3.line4.end.reset()
                                    winTimers.win3.line4.start.time = 500
                                    winTimers.win3.line4.end.time = 5000
                                    winTimers.win3.line4.start.start()
                                    winTimers.win3.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                },  winTimers.win3.line4.end);
                                winTimers.win3.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win3.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win3.line5.end.on('end', elapsed => {
                            if ( elapsed === 4000 ){
                                winTimers.win3.line5.start.reset()
                                winTimers.win3.line5.end.reset()
                                winTimers.win3.line5.start.time = 500
                                winTimers.win3.line5.end.time = 4000
                                winTimers.win3.line5.start.start()
                                winTimers.win3.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win3.line4.end);
                            winTimers.win3.line1.end.delay = 2000
                            winTimers.win3.line2.start.delay = 500
                            winTimers.win3.line2.end.delay = 3000
                            winTimers.win3.line3.start.delay = 500
                            winTimers.win3.line3.end.delay = 4000
                            winTimers.win3.line4.start.delay = 500
                            winTimers.win3.line4.end.delay = 5000
                            winTimers.win3.line5.start.delay = 500
                            winTimers.win3.line5.end.delay = 6000
                            for ( let i in winTimers.win3){
                                for ( let j in winTimers.win3[i]){
                                    winTimers.win3[i][j].start()
                                }
                            }
                        }
                        else if  (hold.hold4){
                            winstok+=10
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer)
                            winTimers.win4.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win4.line1.end.on('end', elapsed => {
                                        if ( elapsed === 11000 ){
                                            winTimers.win4.line1.start.reset()
                                            winTimers.win4.line1.end.reset()
                                            winTimers.win4.line1.start.time = 500
                                            winTimers.win4.line1.end.time = 11000
                                            winTimers.win4.line1.start.start()
                                            winTimers.win4.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        },  winTimers.win4.line1.end);
                                        winTimers.win4.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win4.line2.end.on('end', elapsed => {
                                    if ( elapsed === 10000 ){
                                        winTimers.win4.line2.start.reset()
                                        winTimers.win4.line2.end.reset()
                                        winTimers.win4.line2.start.time = 500
                                        winTimers.win4.line2.end.time = 10000
                                        winTimers.win4.line2.start.start()
                                        winTimers.win4.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win4.line2.end);
                                    winTimers.win4.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win4.line3.end.on('end', elapsed => {
                                    if ( elapsed === 9000 ){
                                        winTimers.win4.line3.start.reset()
                                        winTimers.win4.line3.end.reset()
                                        winTimers.win4.line3.start.time = 500
                                        winTimers.win4.line3.end.time = 9000
                                        winTimers.win4.line3.start.start()
                                        winTimers.win4.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win4.line3.end);
                                    winTimers.win4.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win4.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win4.line4.end.on('end', elapsed => {
                                if ( elapsed === 8000 ){
                                    winTimers.win4.line4.start.reset()
                                    winTimers.win4.line4.end.reset()
                                    winTimers.win4.line4.start.time = 500
                                    winTimers.win4.line4.end.time = 8000
                                    winTimers.win4.line4.start.start()
                                    winTimers.win4.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                }, winTimers.win4.line4.end);
                                winTimers.win4.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win4.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win4.line5.end.on('end', elapsed => {
                            if ( elapsed === 7000 ){
                                winTimers.win4.line5.start.reset()
                                winTimers.win4.line5.end.reset()
                                winTimers.win4.line5.start.time = 500
                                winTimers.win4.line5.end.time = 7000
                                winTimers.win4.line5.start.start()
                                winTimers.win4.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win4.line5.end);
                            winTimers.win4.line6.start.on('start', () => {
                                glowLineContainer.children[5].alpha = 0
                                _6Btn.alpha = 0
                                _6BtnRight.alpha = 0
                        });
                        winTimers.win4.line6.end.on('start', () => {
                            glowLineContainer.children[5].alpha = 1
                            _6Btn.alpha = 1
                            _6BtnRight.alpha = 1
                    });
                    winTimers.win4.line6.end.on('end', elapsed => {
                        if ( elapsed === 6000 ){
                            winTimers.win4.line6.start.reset()
                            winTimers.win4.line6.end.reset()
                            winTimers.win4.line6.start.time = 500
                            winTimers.win4.line6.end.time = 6000
                            winTimers.win4.line6.start.start()
                            winTimers.win4.line6.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win4.line6.end);
                        winTimers.win4.line7.start.on('start', () => {
                            glowLineContainer.children[6].alpha = 0
                            _7Btn.alpha = 0
                            _3BtnRight.alpha = 0
                    });
                    winTimers.win4.line7.end.on('start', () => {
                        glowLineContainer.children[6].alpha = 1
                        _7Btn.alpha = 1
                        _3BtnRight.alpha = 1
                });
                winTimers.win4.line7.end.on('end', elapsed => {
                    if ( elapsed === 5000 ){
                        winTimers.win4.line7.start.reset()
                        winTimers.win4.line7.end.reset()
                        winTimers.win4.line7.start.time = 500
                        winTimers.win4.line7.end.time = 5000
                        winTimers.win4.line7.start.start()
                        winTimers.win4.line7.end.start()
                    } else{
                        console.log('ended')
                    }
                    },   winTimers.win4.line7.end);
                    winTimers.win4.line1.end.delay = 5000
                    winTimers.win4.line2.start.delay = 500
                    winTimers.win4.line2.end.delay = 6000
                    winTimers.win4.line3.start.delay = 500
                    winTimers.win4.line3.end.delay = 7000
                    winTimers.win4.line4.start.delay = 500
                    winTimers.win4.line4.end.delay = 8000
                    winTimers.win4.line5.start.delay = 500
                    winTimers.win4.line5.end.delay = 9000
                    winTimers.win4.line6.start.delay = 500
                    winTimers.win4.line6.end.delay = 10000
                    winTimers.win4.line7.start.delay = 500
                    winTimers.win4.line7.end.delay = 11000
                    for ( let i in winTimers.win4){
                        for ( let j in winTimers.win4[i]){
                            winTimers.win4[i][j].start()
                        }
                    }
                        }
                        else if  (hold.hold5){
                            winstok+=15
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameCat')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer,hold5Line1GlowContainer,hold5Line2GlowContainer)
                            winTimers.win5.line1.start.on('start', () => {
                                glowLineContainer.children[0].alpha = 0
                                _1Btn.alpha = 0
                                _1BtnRight.alpha = 0
                        });
                        winTimers.win5.line1.end.on('start', () => {
                                glowLineContainer.children[0].alpha = 1
                                _1Btn.alpha = 1
                                _1BtnRight.alpha = 1
                        });
                        winTimers.win5.line1.end.on('end', elapsed => {
                            if ( elapsed === 14000 ){
                                winTimers.win5.line1.start.reset()
                                winTimers.win5.line1.end.reset()
                                winTimers.win5.line1.start.time = 500
                                winTimers.win5.line1.end.time = 14000
                                winTimers.win5.line1.start.start()
                                winTimers.win5.line1.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win5.line1.end);
                            winTimers.win5.line2.start.on('start', () => {
                                glowLineContainer.children[1].alpha = 0
                                _2Btn.alpha = 0
                                _2BtnRight.alpha = 0
                        });
                        winTimers.win5.line2.end.on('start', () => {
                            glowLineContainer.children[1].alpha = 1
                            _2Btn.alpha = 1
                            _2BtnRight.alpha = 1
                    });
                    winTimers.win5.line2.end.on('end', elapsed => {
                        if ( elapsed === 13000 ){
                            winTimers.win5.line2.start.reset()
                            winTimers.win5.line2.end.reset()
                            winTimers.win5.line2.start.time = 500
                            winTimers.win5.line2.end.time = 13000
                            winTimers.win5.line2.start.start()
                            winTimers.win5.line2.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line2.end);
                        winTimers.win5.line3.start.on('start', () => {
                                glowLineContainer.children[2].alpha = 0
                                _3Btn.alpha = 0
                                _7BtnRight.alpha = 0
                        });
                        winTimers.win5.line3.end.on('start', () => {
                            glowLineContainer.children[2].alpha = 1
                            _3Btn.alpha = 1
                            _7BtnRight.alpha = 1
                    });
                    winTimers.win5.line3.end.on('end', elapsed => {
                        if ( elapsed === 12000 ){
                            winTimers.win5.line3.start.reset()
                            winTimers.win5.line3.end.reset()
                            winTimers.win5.line3.start.time = 500
                            winTimers.win5.line3.end.time = 12000
                            winTimers.win5.line3.start.start()
                            winTimers.win5.line3.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line3.end);
                        winTimers.win5.line4.start.on('start', () => {
                            glowLineContainer.children[3].alpha = 0
                            _4Btn.alpha = 0
                            _4BtnRight.alpha = 0
                    });
                    winTimers.win5.line4.end.on('start', () => {
                        glowLineContainer.children[3].alpha = 1
                        _4Btn.alpha = 1
                        _4BtnRight.alpha = 1
                });
                winTimers.win5.line4.end.on('end', elapsed => {
                    if ( elapsed === 11000 ){
                        winTimers.win5.line4.start.reset()
                        winTimers.win5.line4.end.reset()
                        winTimers.win5.line4.start.time = 500
                        winTimers.win5.line4.end.time = 11000
                        winTimers.win5.line4.start.start()
                        winTimers.win5.line4.end.start()
                    } else{
                        console.log('ended')
                    }
                    }, winTimers.win5.line4.end);
                    winTimers.win5.line5.start.on('start', () => {
                        glowLineContainer.children[4].alpha = 0
                        _5Btn.alpha = 0
                        _5BtnRight.alpha = 0
                });
                winTimers.win5.line5.end.on('start', () => {
                    glowLineContainer.children[4].alpha = 1
                    _5Btn.alpha = 1
                    _5BtnRight.alpha = 1
            });
            winTimers.win5.line5.end.on('end', elapsed => {
                if ( elapsed === 10000 ){
                    winTimers.win5.line5.start.reset()
                    winTimers.win5.line5.end.reset()
                    winTimers.win5.line5.start.time = 500
                    winTimers.win5.line5.end.time = 10000
                    winTimers.win5.line5.start.start()
                    winTimers.win5.line5.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line5.end);
                winTimers.win5.line6.start.on('start', () => {
                    glowLineContainer.children[5].alpha = 0
                    _6Btn.alpha = 0
                            _6BtnRight.alpha = 0
                    });
                    winTimers.win5.line6.end.on('start', () => {
                        glowLineContainer.children[5].alpha = 1
                        _6Btn.alpha = 1
                        _6BtnRight.alpha = 1
                });
            winTimers.win5.line6.end.on('end', elapsed => {
                if ( elapsed === 9000 ){
                    winTimers.win5.line6.start.reset()
                    winTimers.win5.line6.end.reset()
                    winTimers.win5.line6.start.time = 500
                    winTimers.win5.line6.end.time = 9000
                    winTimers.win5.line6.start.start()
                    winTimers.win5.line6.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line6.end);
                winTimers.win5.line7.start.on('start', () => {
                    glowLineContainer.children[6].alpha = 0
                    _7Btn.alpha = 0
                    _3BtnRight.alpha = 0
            });
                winTimers.win5.line7.end.on('start', () => {
                    glowLineContainer.children[6].alpha = 1
                    _7Btn.alpha = 1
                    _3BtnRight.alpha = 1
            });
            winTimers.win5.line7.end.on('end', elapsed => {
                if ( elapsed === 8000 ){
                    winTimers.win5.line7.start.reset()
                    winTimers.win5.line7.end.reset()
                    winTimers.win5.line7.start.time = 500
                    winTimers.win5.line7.end.time = 8000
                    winTimers.win5.line7.start.start()
                    winTimers.win5.line7.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line7.end);
                winTimers.win5.line8.start.on('start', () => {
                    glowLineContainer.children[7].alpha = 0
                    _8Btn.alpha = 0
                    _8BtnRight.alpha = 0
            });
            winTimers.win5.line8.end.on('start', () => {
                glowLineContainer.children[7].alpha = 1
                _8Btn.alpha = 1
                _8BtnRight.alpha = 1
            });
            winTimers.win5.line8.end.on('end', elapsed => {
                if ( elapsed === 7000 ){
                    winTimers.win5.line8.start.reset()
                    winTimers.win5.line8.end.reset()
                    winTimers.win5.line8.start.time = 500
                    winTimers.win5.line8.end.time = 7000
                    winTimers.win5.line8.start.start()
                    winTimers.win5.line8.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line8.end);
                winTimers.win5.line9.start.on('start', () => {
                    glowLineContainer.children[8].alpha = 0
                    _9Btn.alpha = 0
                    _9BtnRight.alpha = 0
            });
            winTimers.win5.line9.end.on('start', () => {
                glowLineContainer.children[8].alpha = 1
                _9Btn.alpha = 1
                _9BtnRight.alpha = 1
            });
            winTimers.win5.line9.end.on('end', elapsed => {
            if ( elapsed === 6000 ){
                winTimers.win5.line9.start.reset()
                winTimers.win5.line9.end.reset()
                winTimers.win5.line9.start.time = 500
                winTimers.win5.line9.end.time = 6000
                winTimers.win5.line9.start.start()
                winTimers.win5.line9.end.start()
            } else{
                console.log('ended')
            }
            }, winTimers.win5.line9.end);
            winTimers.win5.line1.end.delay = 6000
            winTimers.win5.line2.start.delay = 500
            winTimers.win5.line2.end.delay = 7000
            winTimers.win5.line3.start.delay = 500
            winTimers.win5.line3.end.delay = 8000
            winTimers.win5.line4.start.delay = 500
            winTimers.win5.line4.end.delay = 9000
            winTimers.win5.line5.start.delay = 500
            winTimers.win5.line5.end.delay = 10000
            winTimers.win5.line6.start.delay = 500
            winTimers.win5.line6.end.delay = 11000
            winTimers.win5.line7.start.delay = 500
            winTimers.win5.line7.end.delay = 12000
            winTimers.win5.line8.start.delay = 500
            winTimers.win5.line8.end.delay = 13000
            winTimers.win5.line9.start.delay = 500
            winTimers.win5.line9.end.delay = 14000
                for ( let i in winTimers.win5){
                    for ( let j in winTimers.win5[i]){
                        winTimers.win5[i][j].start()
                    }
                }
                        }
                        gameStateInfoContainer.children[1].text = 'WINNN!!!!'
                    } 
                    else{
                        symbol.alpha = 0.5
                    }
                }
            })
        }
        if(win.J >= 7 ){
            reels.forEach(item => {
                for(let symbol of item.symbols ){
                    if (symbol._texture=== texture.J){
                        (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ'))))
                        if (hold.hold1){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 510:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 680:
                                    (symbol.y == 0) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break

                                default:
                                    break;
                            }
                            glowLineContainer.addChild(hold1LineGlowContainer)
                            winTimers.win1.start.on('start', () => {
                                    glowLineContainer.children[0].alpha = 0
                                    _1Btn.alpha = 0
                                    _1BtnRight.alpha = 0
                            });
                            winTimers.win1.end.on('start', () => {
                                    glowLineContainer.children[0].alpha = 1
                                    _1Btn.alpha = 1
                                    _1BtnRight.alpha = 1
                            });
                            winTimers.win1.end.on('end', elapsed => {
                            if ( elapsed === 2500 ){
                                winTimers.win1.start.reset()
                                winTimers.win1.end.reset()
                                winTimers.win1.start.time = 500
                                winTimers.win1.end.time = 2500
                                winTimers.win1.start.start()
                                winTimers.win1.end.start()
                            } else{
                                console.log('ended')
                            }
                            },  winTimers.win1.end);
                            winTimers.win1.end.delay = 1000
                            for (let i in winTimers.win1){
                                winTimers.win1[i].start()
                            }
                        }
                        else if  (hold.hold2){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 0 || symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ')))
                                break;
                                case 510:
                                    winstok++
                                 symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ')))

                                break;
                                case 680:
                                    (symbol.y == 0 || symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer)
                                    winTimers.win2.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win2.line1.end.on('end', elapsed => {
                                        if ( elapsed === 6000 ){
                                            winTimers.win2.line1.start.reset()
                                            winTimers.win2.line1.end.reset()
                                            winTimers.win2.line1.start.time = 500
                                            winTimers.win2.line1.end.time = 6000
                                            winTimers.win2.line1.start.start()
                                            winTimers.win2.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win2.line1.end);
                                        winTimers.win2.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win2.line2.end.on('end', elapsed => {
                                    if ( elapsed === 5000 ){
                                        winTimers.win2.line2.start.reset()
                                        winTimers.win2.line2.end.reset()
                                        winTimers.win2.line2.start.time = 500
                                        winTimers.win2.line2.end.time = 5000
                                        winTimers.win2.line2.start.start()
                                        winTimers.win2.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line2.end);
                                    winTimers.win2.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win2.line3.end.on('end', elapsed => {
                                    if ( elapsed === 4000 ){
                                        winTimers.win2.line3.start.reset()
                                        winTimers.win2.line3.end.reset()
                                        winTimers.win2.line3.start.time = 500
                                        winTimers.win2.line3.end.time = 4000
                                        winTimers.win2.line3.start.start()
                                        winTimers.win2.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line3.end);
                                    winTimers.win2.line1.end.delay = 4000
                                    winTimers.win2.line2.start.delay = 500
                                    winTimers.win2.line2.end.delay = 5000
                                    winTimers.win2.line3.start.delay = 500
                                    winTimers.win2.line3.end.delay = 6000
                                    for ( let i in winTimers.win2){
                                        for (let j in winTimers.win2[i]){
                                            winTimers.win2[i][j].start()
                                        }
                                    }
                        }
                        else if  (hold.hold3){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0 || symbol.y == 160) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ')))
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ')))
                                break;
                                case 510:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ')))
                                break;
                                case 680:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ')))
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer)
                                    winTimers.win3.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win3.line1.end.on('end', elapsed => {
                                        if ( elapsed === 8000 ){
                                            winTimers.win3.line1.start.reset()
                                            winTimers.win3.line1.end.reset()
                                            winTimers.win3.line1.start.time = 500
                                            winTimers.win3.line1.end.time = 8000
                                            winTimers.win3.line1.start.start()
                                            winTimers.win3.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win3.line1.end);
                                        winTimers.win3.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win3.line2.end.on('end', elapsed => {
                                    if ( elapsed === 7000 ){
                                        winTimers.win3.line2.start.reset()
                                        winTimers.win3.line2.end.reset()
                                        winTimers.win3.line2.start.time = 500
                                        winTimers.win3.line2.end.time = 7000
                                        winTimers.win3.line2.start.start()
                                        winTimers.win3.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win3.line2.end);
                                    winTimers.win3.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win3.line3.end.on('end', elapsed => {
                                    if ( elapsed === 6000 ){
                                        winTimers.win3.line3.start.reset()
                                        winTimers.win3.line3.end.reset()
                                        winTimers.win3.line3.start.time = 500
                                        winTimers.win3.line3.end.time = 6000
                                        winTimers.win3.line3.start.start()
                                        winTimers.win3.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win3.line3.end);
                                    winTimers.win3.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win3.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win3.line4.end.on('end', elapsed => {
                                if ( elapsed === 5000 ){
                                    winTimers.win3.line4.start.reset()
                                    winTimers.win3.line4.end.reset()
                                    winTimers.win3.line4.start.time = 500
                                    winTimers.win3.line4.end.time = 5000
                                    winTimers.win3.line4.start.start()
                                    winTimers.win3.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                },  winTimers.win3.line4.end);
                                winTimers.win3.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win3.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win3.line5.end.on('end', elapsed => {
                            if ( elapsed === 4000 ){
                                winTimers.win3.line5.start.reset()
                                winTimers.win3.line5.end.reset()
                                winTimers.win3.line5.start.time = 500
                                winTimers.win3.line5.end.time = 4000
                                winTimers.win3.line5.start.start()
                                winTimers.win3.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win3.line4.end);
                            winTimers.win3.line1.end.delay = 2000
                            winTimers.win3.line2.start.delay = 500
                            winTimers.win3.line2.end.delay = 3000
                            winTimers.win3.line3.start.delay = 500
                            winTimers.win3.line3.end.delay = 4000
                            winTimers.win3.line4.start.delay = 500
                            winTimers.win3.line4.end.delay = 5000
                            winTimers.win3.line5.start.delay = 500
                            winTimers.win3.line5.end.delay = 6000
                            for ( let i in winTimers.win3){
                                for ( let j in winTimers.win3[i]){
                                    winTimers.win3[i][j].start()
                                }
                            }
                        }
                        else if  (hold.hold4){
                            winstok+=10
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer)
                            winTimers.win4.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win4.line1.end.on('end', elapsed => {
                                        if ( elapsed === 11000 ){
                                            winTimers.win4.line1.start.reset()
                                            winTimers.win4.line1.end.reset()
                                            winTimers.win4.line1.start.time = 500
                                            winTimers.win4.line1.end.time = 11000
                                            winTimers.win4.line1.start.start()
                                            winTimers.win4.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        },  winTimers.win4.line1.end);
                                        winTimers.win4.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win4.line2.end.on('end', elapsed => {
                                    if ( elapsed === 10000 ){
                                        winTimers.win4.line2.start.reset()
                                        winTimers.win4.line2.end.reset()
                                        winTimers.win4.line2.start.time = 500
                                        winTimers.win4.line2.end.time = 10000
                                        winTimers.win4.line2.start.start()
                                        winTimers.win4.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win4.line2.end);
                                    winTimers.win4.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win4.line3.end.on('end', elapsed => {
                                    if ( elapsed === 9000 ){
                                        winTimers.win4.line3.start.reset()
                                        winTimers.win4.line3.end.reset()
                                        winTimers.win4.line3.start.time = 500
                                        winTimers.win4.line3.end.time = 9000
                                        winTimers.win4.line3.start.start()
                                        winTimers.win4.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win4.line3.end);
                                    winTimers.win4.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win4.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win4.line4.end.on('end', elapsed => {
                                if ( elapsed === 8000 ){
                                    winTimers.win4.line4.start.reset()
                                    winTimers.win4.line4.end.reset()
                                    winTimers.win4.line4.start.time = 500
                                    winTimers.win4.line4.end.time = 8000
                                    winTimers.win4.line4.start.start()
                                    winTimers.win4.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                }, winTimers.win4.line4.end);
                                winTimers.win4.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win4.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win4.line5.end.on('end', elapsed => {
                            if ( elapsed === 7000 ){
                                winTimers.win4.line5.start.reset()
                                winTimers.win4.line5.end.reset()
                                winTimers.win4.line5.start.time = 500
                                winTimers.win4.line5.end.time = 7000
                                winTimers.win4.line5.start.start()
                                winTimers.win4.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win4.line5.end);
                            winTimers.win4.line6.start.on('start', () => {
                                glowLineContainer.children[5].alpha = 0
                                _6Btn.alpha = 0
                                _6BtnRight.alpha = 0
                        });
                        winTimers.win4.line6.end.on('start', () => {
                            glowLineContainer.children[5].alpha = 1
                            _6Btn.alpha = 1
                            _6BtnRight.alpha = 1
                    });
                    winTimers.win4.line6.end.on('end', elapsed => {
                        if ( elapsed === 6000 ){
                            winTimers.win4.line6.start.reset()
                            winTimers.win4.line6.end.reset()
                            winTimers.win4.line6.start.time = 500
                            winTimers.win4.line6.end.time = 6000
                            winTimers.win4.line6.start.start()
                            winTimers.win4.line6.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win4.line6.end);
                        winTimers.win4.line7.start.on('start', () => {
                            glowLineContainer.children[6].alpha = 0
                            _7Btn.alpha = 0
                            _3BtnRight.alpha = 0
                    });
                    winTimers.win4.line7.end.on('start', () => {
                        glowLineContainer.children[6].alpha = 1
                        _7Btn.alpha = 1
                        _3BtnRight.alpha = 1
                });
                winTimers.win4.line7.end.on('end', elapsed => {
                    if ( elapsed === 5000 ){
                        winTimers.win4.line7.start.reset()
                        winTimers.win4.line7.end.reset()
                        winTimers.win4.line7.start.time = 500
                        winTimers.win4.line7.end.time = 5000
                        winTimers.win4.line7.start.start()
                        winTimers.win4.line7.end.start()
                    } else{
                        console.log('ended')
                    }
                    },   winTimers.win4.line7.end);
                    winTimers.win4.line1.end.delay = 5000
                    winTimers.win4.line2.start.delay = 500
                    winTimers.win4.line2.end.delay = 6000
                    winTimers.win4.line3.start.delay = 500
                    winTimers.win4.line3.end.delay = 7000
                    winTimers.win4.line4.start.delay = 500
                    winTimers.win4.line4.end.delay = 8000
                    winTimers.win4.line5.start.delay = 500
                    winTimers.win4.line5.end.delay = 9000
                    winTimers.win4.line6.start.delay = 500
                    winTimers.win4.line6.end.delay = 10000
                    winTimers.win4.line7.start.delay = 500
                    winTimers.win4.line7.end.delay = 11000
                    for ( let i in winTimers.win4){
                        for ( let j in winTimers.win4[i]){
                            winTimers.win4[i][j].start()
                        }
                    }
                        }
                        else if  (hold.hold5){
                            winstok+=15
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameJ')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer,hold5Line1GlowContainer,hold5Line2GlowContainer)
                            winTimers.win5.line1.start.on('start', () => {
                                glowLineContainer.children[0].alpha = 0
                                _1Btn.alpha = 0
                                _1BtnRight.alpha = 0
                        });
                        winTimers.win5.line1.end.on('start', () => {
                                glowLineContainer.children[0].alpha = 1
                                _1Btn.alpha = 1
                                _1BtnRight.alpha = 1
                        });
                        winTimers.win5.line1.end.on('end', elapsed => {
                            if ( elapsed === 14000 ){
                                winTimers.win5.line1.start.reset()
                                winTimers.win5.line1.end.reset()
                                winTimers.win5.line1.start.time = 500
                                winTimers.win5.line1.end.time = 14000
                                winTimers.win5.line1.start.start()
                                winTimers.win5.line1.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win5.line1.end);
                            winTimers.win5.line2.start.on('start', () => {
                                glowLineContainer.children[1].alpha = 0
                                _2Btn.alpha = 0
                                _2BtnRight.alpha = 0
                        });
                        winTimers.win5.line2.end.on('start', () => {
                            glowLineContainer.children[1].alpha = 1
                            _2Btn.alpha = 1
                            _2BtnRight.alpha = 1
                    });
                    winTimers.win5.line2.end.on('end', elapsed => {
                        if ( elapsed === 13000 ){
                            winTimers.win5.line2.start.reset()
                            winTimers.win5.line2.end.reset()
                            winTimers.win5.line2.start.time = 500
                            winTimers.win5.line2.end.time = 13000
                            winTimers.win5.line2.start.start()
                            winTimers.win5.line2.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line2.end);
                        winTimers.win5.line3.start.on('start', () => {
                                glowLineContainer.children[2].alpha = 0
                                _3Btn.alpha = 0
                                _7BtnRight.alpha = 0
                        });
                        winTimers.win5.line3.end.on('start', () => {
                            glowLineContainer.children[2].alpha = 1
                            _3Btn.alpha = 1
                            _7BtnRight.alpha = 1
                    });
                    winTimers.win5.line3.end.on('end', elapsed => {
                        if ( elapsed === 12000 ){
                            winTimers.win5.line3.start.reset()
                            winTimers.win5.line3.end.reset()
                            winTimers.win5.line3.start.time = 500
                            winTimers.win5.line3.end.time = 12000
                            winTimers.win5.line3.start.start()
                            winTimers.win5.line3.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line3.end);
                        winTimers.win5.line4.start.on('start', () => {
                            glowLineContainer.children[3].alpha = 0
                            _4Btn.alpha = 0
                            _4BtnRight.alpha = 0
                    });
                    winTimers.win5.line4.end.on('start', () => {
                        glowLineContainer.children[3].alpha = 1
                        _4Btn.alpha = 1
                        _4BtnRight.alpha = 1
                });
                winTimers.win5.line4.end.on('end', elapsed => {
                    if ( elapsed === 11000 ){
                        winTimers.win5.line4.start.reset()
                        winTimers.win5.line4.end.reset()
                        winTimers.win5.line4.start.time = 500
                        winTimers.win5.line4.end.time = 11000
                        winTimers.win5.line4.start.start()
                        winTimers.win5.line4.end.start()
                    } else{
                        console.log('ended')
                    }
                    }, winTimers.win5.line4.end);
                    winTimers.win5.line5.start.on('start', () => {
                        glowLineContainer.children[4].alpha = 0
                        _5Btn.alpha = 0
                        _5BtnRight.alpha = 0
                });
                winTimers.win5.line5.end.on('start', () => {
                    glowLineContainer.children[4].alpha = 1
                    _5Btn.alpha = 1
                    _5BtnRight.alpha = 1
            });
            winTimers.win5.line5.end.on('end', elapsed => {
                if ( elapsed === 10000 ){
                    winTimers.win5.line5.start.reset()
                    winTimers.win5.line5.end.reset()
                    winTimers.win5.line5.start.time = 500
                    winTimers.win5.line5.end.time = 10000
                    winTimers.win5.line5.start.start()
                    winTimers.win5.line5.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line5.end);
                winTimers.win5.line6.start.on('start', () => {
                    glowLineContainer.children[5].alpha = 0
                    _6Btn.alpha = 0
                            _6BtnRight.alpha = 0
                    });
                    winTimers.win5.line6.end.on('start', () => {
                        glowLineContainer.children[5].alpha = 1
                        _6Btn.alpha = 1
                        _6BtnRight.alpha = 1
                });
            winTimers.win5.line6.end.on('end', elapsed => {
                if ( elapsed === 9000 ){
                    winTimers.win5.line6.start.reset()
                    winTimers.win5.line6.end.reset()
                    winTimers.win5.line6.start.time = 500
                    winTimers.win5.line6.end.time = 9000
                    winTimers.win5.line6.start.start()
                    winTimers.win5.line6.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line6.end);
                winTimers.win5.line7.start.on('start', () => {
                    glowLineContainer.children[6].alpha = 0
                    _7Btn.alpha = 0
                    _3BtnRight.alpha = 0
            });
                winTimers.win5.line7.end.on('start', () => {
                    glowLineContainer.children[6].alpha = 1
                    _7Btn.alpha = 1
                    _3BtnRight.alpha = 1
            });
            winTimers.win5.line7.end.on('end', elapsed => {
                if ( elapsed === 8000 ){
                    winTimers.win5.line7.start.reset()
                    winTimers.win5.line7.end.reset()
                    winTimers.win5.line7.start.time = 500
                    winTimers.win5.line7.end.time = 8000
                    winTimers.win5.line7.start.start()
                    winTimers.win5.line7.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line7.end);
                winTimers.win5.line8.start.on('start', () => {
                    glowLineContainer.children[7].alpha = 0
                    _8Btn.alpha = 0
                    _8BtnRight.alpha = 0
            });
            winTimers.win5.line8.end.on('start', () => {
                glowLineContainer.children[7].alpha = 1
                _8Btn.alpha = 1
                _8BtnRight.alpha = 1
            });
            winTimers.win5.line8.end.on('end', elapsed => {
                if ( elapsed === 7000 ){
                    winTimers.win5.line8.start.reset()
                    winTimers.win5.line8.end.reset()
                    winTimers.win5.line8.start.time = 500
                    winTimers.win5.line8.end.time = 7000
                    winTimers.win5.line8.start.start()
                    winTimers.win5.line8.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line8.end);
                winTimers.win5.line9.start.on('start', () => {
                    glowLineContainer.children[8].alpha = 0
                    _9Btn.alpha = 0
                    _9BtnRight.alpha = 0
            });
            winTimers.win5.line9.end.on('start', () => {
                glowLineContainer.children[8].alpha = 1
                _9Btn.alpha = 1
                _9BtnRight.alpha = 1
            });
            winTimers.win5.line9.end.on('end', elapsed => {
            if ( elapsed === 6000 ){
                winTimers.win5.line9.start.reset()
                winTimers.win5.line9.end.reset()
                winTimers.win5.line9.start.time = 500
                winTimers.win5.line9.end.time = 6000
                winTimers.win5.line9.start.start()
                winTimers.win5.line9.end.start()
            } else{
                console.log('ended')
            }
            }, winTimers.win5.line9.end);
            winTimers.win5.line1.end.delay = 6000
            winTimers.win5.line2.start.delay = 500
            winTimers.win5.line2.end.delay = 7000
            winTimers.win5.line3.start.delay = 500
            winTimers.win5.line3.end.delay = 8000
            winTimers.win5.line4.start.delay = 500
            winTimers.win5.line4.end.delay = 9000
            winTimers.win5.line5.start.delay = 500
            winTimers.win5.line5.end.delay = 10000
            winTimers.win5.line6.start.delay = 500
            winTimers.win5.line6.end.delay = 11000
            winTimers.win5.line7.start.delay = 500
            winTimers.win5.line7.end.delay = 12000
            winTimers.win5.line8.start.delay = 500
            winTimers.win5.line8.end.delay = 13000
            winTimers.win5.line9.start.delay = 500
            winTimers.win5.line9.end.delay = 14000
                for ( let i in winTimers.win5){
                    for ( let j in winTimers.win5[i]){
                        winTimers.win5[i][j].start()
                    }
                }
                        }
                        gameStateInfoContainer.children[1].text = 'WINNN!!!!'
                    } 
                    else{
                        symbol.alpha = 0.5
                    }
                }
            })
        }
        if(win.K >= 7 ){
            reels.forEach(item => {
                for(let symbol of item.symbols ){
                    if (symbol._texture=== texture.K){
                        if (hold.hold1){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 510:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 680:
                                    (symbol.y == 0) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break

                                default:
                                    break;
                            }
                            glowLineContainer.addChild(hold1LineGlowContainer)
                            winTimers.win1.start.on('start', () => {
                                    glowLineContainer.children[0].alpha = 0
                                    _1Btn.alpha = 0
                                    _1BtnRight.alpha = 0
                            });
                            winTimers.win1.end.on('start', () => {
                                    glowLineContainer.children[0].alpha = 1
                                    _1Btn.alpha = 1
                                    _1BtnRight.alpha = 1
                            });
                            winTimers.win1.end.on('end', elapsed => {
                            if ( elapsed === 2500 ){
                                winTimers.win1.start.reset()
                                winTimers.win1.end.reset()
                                winTimers.win1.start.time = 500
                                winTimers.win1.end.time = 2500
                                winTimers.win1.start.start()
                                winTimers.win1.end.start()
                            } else{
                                console.log('ended')
                            }
                            },  winTimers.win1.end);
                            winTimers.win1.end.delay = 1000
                            for (let i in winTimers.win1){
                                winTimers.win1[i].start()
                            }
                        }
                        else if  (hold.hold2){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 0 || symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK')))
                                break;
                                case 510:
                                    winstok++
                                 symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK')))

                                break;
                                case 680:
                                    (symbol.y == 0 || symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer)
                                    winTimers.win2.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win2.line1.end.on('end', elapsed => {
                                        if ( elapsed === 6000 ){
                                            winTimers.win2.line1.start.reset()
                                            winTimers.win2.line1.end.reset()
                                            winTimers.win2.line1.start.time = 500
                                            winTimers.win2.line1.end.time = 6000
                                            winTimers.win2.line1.start.start()
                                            winTimers.win2.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win2.line1.end);
                                        winTimers.win2.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win2.line2.end.on('end', elapsed => {
                                    if ( elapsed === 5000 ){
                                        winTimers.win2.line2.start.reset()
                                        winTimers.win2.line2.end.reset()
                                        winTimers.win2.line2.start.time = 500
                                        winTimers.win2.line2.end.time = 5000
                                        winTimers.win2.line2.start.start()
                                        winTimers.win2.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line2.end);
                                    winTimers.win2.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win2.line3.end.on('end', elapsed => {
                                    if ( elapsed === 4000 ){
                                        winTimers.win2.line3.start.reset()
                                        winTimers.win2.line3.end.reset()
                                        winTimers.win2.line3.start.time = 500
                                        winTimers.win2.line3.end.time = 4000
                                        winTimers.win2.line3.start.start()
                                        winTimers.win2.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line3.end);
                                    winTimers.win2.line1.end.delay = 4000
                                    winTimers.win2.line2.start.delay = 500
                                    winTimers.win2.line2.end.delay = 5000
                                    winTimers.win2.line3.start.delay = 500
                                    winTimers.win2.line3.end.delay = 6000
                                    for ( let i in winTimers.win2){
                                        for (let j in winTimers.win2[i]){
                                            winTimers.win2[i][j].start()
                                        }
                                    }
                        }
                        else if  (hold.hold3){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0 || symbol.y == 160) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK')))
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK')))
                                break;
                                case 510:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK')))
                                break;
                                case 680:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK')))
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer)
                                    winTimers.win3.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win3.line1.end.on('end', elapsed => {
                                        if ( elapsed === 8000 ){
                                            winTimers.win3.line1.start.reset()
                                            winTimers.win3.line1.end.reset()
                                            winTimers.win3.line1.start.time = 500
                                            winTimers.win3.line1.end.time = 8000
                                            winTimers.win3.line1.start.start()
                                            winTimers.win3.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win3.line1.end);
                                        winTimers.win3.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win3.line2.end.on('end', elapsed => {
                                    if ( elapsed === 7000 ){
                                        winTimers.win3.line2.start.reset()
                                        winTimers.win3.line2.end.reset()
                                        winTimers.win3.line2.start.time = 500
                                        winTimers.win3.line2.end.time = 7000
                                        winTimers.win3.line2.start.start()
                                        winTimers.win3.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win3.line2.end);
                                    winTimers.win3.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win3.line3.end.on('end', elapsed => {
                                    if ( elapsed === 6000 ){
                                        winTimers.win3.line3.start.reset()
                                        winTimers.win3.line3.end.reset()
                                        winTimers.win3.line3.start.time = 500
                                        winTimers.win3.line3.end.time = 6000
                                        winTimers.win3.line3.start.start()
                                        winTimers.win3.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win3.line3.end);
                                    winTimers.win3.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win3.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win3.line4.end.on('end', elapsed => {
                                if ( elapsed === 5000 ){
                                    winTimers.win3.line4.start.reset()
                                    winTimers.win3.line4.end.reset()
                                    winTimers.win3.line4.start.time = 500
                                    winTimers.win3.line4.end.time = 5000
                                    winTimers.win3.line4.start.start()
                                    winTimers.win3.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                },  winTimers.win3.line4.end);
                                winTimers.win3.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win3.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win3.line5.end.on('end', elapsed => {
                            if ( elapsed === 4000 ){
                                winTimers.win3.line5.start.reset()
                                winTimers.win3.line5.end.reset()
                                winTimers.win3.line5.start.time = 500
                                winTimers.win3.line5.end.time = 4000
                                winTimers.win3.line5.start.start()
                                winTimers.win3.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win3.line4.end);
                            winTimers.win3.line1.end.delay = 2000
                            winTimers.win3.line2.start.delay = 500
                            winTimers.win3.line2.end.delay = 3000
                            winTimers.win3.line3.start.delay = 500
                            winTimers.win3.line3.end.delay = 4000
                            winTimers.win3.line4.start.delay = 500
                            winTimers.win3.line4.end.delay = 5000
                            winTimers.win3.line5.start.delay = 500
                            winTimers.win3.line5.end.delay = 6000
                            for ( let i in winTimers.win3){
                                for ( let j in winTimers.win3[i]){
                                    winTimers.win3[i][j].start()
                                }
                            }
                        }
                        else if  (hold.hold4){
                            winstok += 10
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer)
                            winTimers.win4.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win4.line1.end.on('end', elapsed => {
                                        if ( elapsed === 11000 ){
                                            winTimers.win4.line1.start.reset()
                                            winTimers.win4.line1.end.reset()
                                            winTimers.win4.line1.start.time = 500
                                            winTimers.win4.line1.end.time = 11000
                                            winTimers.win4.line1.start.start()
                                            winTimers.win4.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        },  winTimers.win4.line1.end);
                                        winTimers.win4.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win4.line2.end.on('end', elapsed => {
                                    if ( elapsed === 10000 ){
                                        winTimers.win4.line2.start.reset()
                                        winTimers.win4.line2.end.reset()
                                        winTimers.win4.line2.start.time = 500
                                        winTimers.win4.line2.end.time = 10000
                                        winTimers.win4.line2.start.start()
                                        winTimers.win4.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win4.line2.end);
                                    winTimers.win4.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win4.line3.end.on('end', elapsed => {
                                    if ( elapsed === 9000 ){
                                        winTimers.win4.line3.start.reset()
                                        winTimers.win4.line3.end.reset()
                                        winTimers.win4.line3.start.time = 500
                                        winTimers.win4.line3.end.time = 9000
                                        winTimers.win4.line3.start.start()
                                        winTimers.win4.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win4.line3.end);
                                    winTimers.win4.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win4.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win4.line4.end.on('end', elapsed => {
                                if ( elapsed === 8000 ){
                                    winTimers.win4.line4.start.reset()
                                    winTimers.win4.line4.end.reset()
                                    winTimers.win4.line4.start.time = 500
                                    winTimers.win4.line4.end.time = 8000
                                    winTimers.win4.line4.start.start()
                                    winTimers.win4.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                }, winTimers.win4.line4.end);
                                winTimers.win4.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win4.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win4.line5.end.on('end', elapsed => {
                            if ( elapsed === 7000 ){
                                winTimers.win4.line5.start.reset()
                                winTimers.win4.line5.end.reset()
                                winTimers.win4.line5.start.time = 500
                                winTimers.win4.line5.end.time = 7000
                                winTimers.win4.line5.start.start()
                                winTimers.win4.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win4.line5.end);
                            winTimers.win4.line6.start.on('start', () => {
                                glowLineContainer.children[5].alpha = 0
                                _6Btn.alpha = 0
                                _6BtnRight.alpha = 0
                        });
                        winTimers.win4.line6.end.on('start', () => {
                            glowLineContainer.children[5].alpha = 1
                            _6Btn.alpha = 1
                            _6BtnRight.alpha = 1
                    });
                    winTimers.win4.line6.end.on('end', elapsed => {
                        if ( elapsed === 6000 ){
                            winTimers.win4.line6.start.reset()
                            winTimers.win4.line6.end.reset()
                            winTimers.win4.line6.start.time = 500
                            winTimers.win4.line6.end.time = 6000
                            winTimers.win4.line6.start.start()
                            winTimers.win4.line6.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win4.line6.end);
                        winTimers.win4.line7.start.on('start', () => {
                            glowLineContainer.children[6].alpha = 0
                            _7Btn.alpha = 0
                            _3BtnRight.alpha = 0
                    });
                    winTimers.win4.line7.end.on('start', () => {
                        glowLineContainer.children[6].alpha = 1
                        _7Btn.alpha = 1
                        _3BtnRight.alpha = 1
                });
                winTimers.win4.line7.end.on('end', elapsed => {
                    if ( elapsed === 5000 ){
                        winTimers.win4.line7.start.reset()
                        winTimers.win4.line7.end.reset()
                        winTimers.win4.line7.start.time = 500
                        winTimers.win4.line7.end.time = 5000
                        winTimers.win4.line7.start.start()
                        winTimers.win4.line7.end.start()
                    } else{
                        console.log('ended')
                    }
                    },   winTimers.win4.line7.end);
                    winTimers.win4.line1.end.delay = 5000
                    winTimers.win4.line2.start.delay = 500
                    winTimers.win4.line2.end.delay = 6000
                    winTimers.win4.line3.start.delay = 500
                    winTimers.win4.line3.end.delay = 7000
                    winTimers.win4.line4.start.delay = 500
                    winTimers.win4.line4.end.delay = 8000
                    winTimers.win4.line5.start.delay = 500
                    winTimers.win4.line5.end.delay = 9000
                    winTimers.win4.line6.start.delay = 500
                    winTimers.win4.line6.end.delay = 10000
                    winTimers.win4.line7.start.delay = 500
                    winTimers.win4.line7.end.delay = 11000
                    for ( let i in winTimers.win4){
                        for ( let j in winTimers.win4[i]){
                            winTimers.win4[i][j].start()
                        }
                    }
                        }
                        else if  (hold.hold5){
                            winstok += 15
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameK')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer,hold5Line1GlowContainer,hold5Line2GlowContainer)
                            winTimers.win5.line1.start.on('start', () => {
                                glowLineContainer.children[0].alpha = 0
                                _1Btn.alpha = 0
                                _1BtnRight.alpha = 0
                        });
                        winTimers.win5.line1.end.on('start', () => {
                                glowLineContainer.children[0].alpha = 1
                                _1Btn.alpha = 1
                                _1BtnRight.alpha = 1
                        });
                        winTimers.win5.line1.end.on('end', elapsed => {
                            if ( elapsed === 14000 ){
                                winTimers.win5.line1.start.reset()
                                winTimers.win5.line1.end.reset()
                                winTimers.win5.line1.start.time = 500
                                winTimers.win5.line1.end.time = 14000
                                winTimers.win5.line1.start.start()
                                winTimers.win5.line1.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win5.line1.end);
                            winTimers.win5.line2.start.on('start', () => {
                                glowLineContainer.children[1].alpha = 0
                                _2Btn.alpha = 0
                                _2BtnRight.alpha = 0
                        });
                        winTimers.win5.line2.end.on('start', () => {
                            glowLineContainer.children[1].alpha = 1
                            _2Btn.alpha = 1
                            _2BtnRight.alpha = 1
                    });
                    winTimers.win5.line2.end.on('end', elapsed => {
                        if ( elapsed === 13000 ){
                            winTimers.win5.line2.start.reset()
                            winTimers.win5.line2.end.reset()
                            winTimers.win5.line2.start.time = 500
                            winTimers.win5.line2.end.time = 13000
                            winTimers.win5.line2.start.start()
                            winTimers.win5.line2.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line2.end);
                        winTimers.win5.line3.start.on('start', () => {
                                glowLineContainer.children[2].alpha = 0
                                _3Btn.alpha = 0
                                _7BtnRight.alpha = 0
                        });
                        winTimers.win5.line3.end.on('start', () => {
                            glowLineContainer.children[2].alpha = 1
                            _3Btn.alpha = 1
                            _7BtnRight.alpha = 1
                    });
                    winTimers.win5.line3.end.on('end', elapsed => {
                        if ( elapsed === 12000 ){
                            winTimers.win5.line3.start.reset()
                            winTimers.win5.line3.end.reset()
                            winTimers.win5.line3.start.time = 500
                            winTimers.win5.line3.end.time = 12000
                            winTimers.win5.line3.start.start()
                            winTimers.win5.line3.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line3.end);
                        winTimers.win5.line4.start.on('start', () => {
                            glowLineContainer.children[3].alpha = 0
                            _4Btn.alpha = 0
                            _4BtnRight.alpha = 0
                    });
                    winTimers.win5.line4.end.on('start', () => {
                        glowLineContainer.children[3].alpha = 1
                        _4Btn.alpha = 1
                        _4BtnRight.alpha = 1
                });
                winTimers.win5.line4.end.on('end', elapsed => {
                    if ( elapsed === 11000 ){
                        winTimers.win5.line4.start.reset()
                        winTimers.win5.line4.end.reset()
                        winTimers.win5.line4.start.time = 500
                        winTimers.win5.line4.end.time = 11000
                        winTimers.win5.line4.start.start()
                        winTimers.win5.line4.end.start()
                    } else{
                        console.log('ended')
                    }
                    }, winTimers.win5.line4.end);
                    winTimers.win5.line5.start.on('start', () => {
                        glowLineContainer.children[4].alpha = 0
                        _5Btn.alpha = 0
                        _5BtnRight.alpha = 0
                });
                winTimers.win5.line5.end.on('start', () => {
                    glowLineContainer.children[4].alpha = 1
                    _5Btn.alpha = 1
                    _5BtnRight.alpha = 1
            });
            winTimers.win5.line5.end.on('end', elapsed => {
                if ( elapsed === 10000 ){
                    winTimers.win5.line5.start.reset()
                    winTimers.win5.line5.end.reset()
                    winTimers.win5.line5.start.time = 500
                    winTimers.win5.line5.end.time = 10000
                    winTimers.win5.line5.start.start()
                    winTimers.win5.line5.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line5.end);
                winTimers.win5.line6.start.on('start', () => {
                    glowLineContainer.children[5].alpha = 0
                    _6Btn.alpha = 0
                            _6BtnRight.alpha = 0
                    });
                    winTimers.win5.line6.end.on('start', () => {
                        glowLineContainer.children[5].alpha = 1
                        _6Btn.alpha = 1
                        _6BtnRight.alpha = 1
                });
            winTimers.win5.line6.end.on('end', elapsed => {
                if ( elapsed === 9000 ){
                    winTimers.win5.line6.start.reset()
                    winTimers.win5.line6.end.reset()
                    winTimers.win5.line6.start.time = 500
                    winTimers.win5.line6.end.time = 9000
                    winTimers.win5.line6.start.start()
                    winTimers.win5.line6.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line6.end);
                winTimers.win5.line7.start.on('start', () => {
                    glowLineContainer.children[6].alpha = 0
                    _7Btn.alpha = 0
                    _3BtnRight.alpha = 0
            });
                winTimers.win5.line7.end.on('start', () => {
                    glowLineContainer.children[6].alpha = 1
                    _7Btn.alpha = 1
                    _3BtnRight.alpha = 1
            });
            winTimers.win5.line7.end.on('end', elapsed => {
                if ( elapsed === 8000 ){
                    winTimers.win5.line7.start.reset()
                    winTimers.win5.line7.end.reset()
                    winTimers.win5.line7.start.time = 500
                    winTimers.win5.line7.end.time = 8000
                    winTimers.win5.line7.start.start()
                    winTimers.win5.line7.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line7.end);
                winTimers.win5.line8.start.on('start', () => {
                    glowLineContainer.children[7].alpha = 0
                    _8Btn.alpha = 0
                    _8BtnRight.alpha = 0
            });
            winTimers.win5.line8.end.on('start', () => {
                glowLineContainer.children[7].alpha = 1
                _8Btn.alpha = 1
                _8BtnRight.alpha = 1
            });
            winTimers.win5.line8.end.on('end', elapsed => {
                if ( elapsed === 7000 ){
                    winTimers.win5.line8.start.reset()
                    winTimers.win5.line8.end.reset()
                    winTimers.win5.line8.start.time = 500
                    winTimers.win5.line8.end.time = 7000
                    winTimers.win5.line8.start.start()
                    winTimers.win5.line8.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line8.end);
                winTimers.win5.line9.start.on('start', () => {
                    glowLineContainer.children[8].alpha = 0
                    _9Btn.alpha = 0
                    _9BtnRight.alpha = 0
            });
            winTimers.win5.line9.end.on('start', () => {
                glowLineContainer.children[8].alpha = 1
                _9Btn.alpha = 1
                _9BtnRight.alpha = 1
            });
            winTimers.win5.line9.end.on('end', elapsed => {
            if ( elapsed === 6000 ){
                winTimers.win5.line9.start.reset()
                winTimers.win5.line9.end.reset()
                winTimers.win5.line9.start.time = 500
                winTimers.win5.line9.end.time = 6000
                winTimers.win5.line9.start.start()
                winTimers.win5.line9.end.start()
            } else{
                console.log('ended')
            }
            }, winTimers.win5.line9.end);
            winTimers.win5.line1.end.delay = 6000
            winTimers.win5.line2.start.delay = 500
            winTimers.win5.line2.end.delay = 7000
            winTimers.win5.line3.start.delay = 500
            winTimers.win5.line3.end.delay = 8000
            winTimers.win5.line4.start.delay = 500
            winTimers.win5.line4.end.delay = 9000
            winTimers.win5.line5.start.delay = 500
            winTimers.win5.line5.end.delay = 10000
            winTimers.win5.line6.start.delay = 500
            winTimers.win5.line6.end.delay = 11000
            winTimers.win5.line7.start.delay = 500
            winTimers.win5.line7.end.delay = 12000
            winTimers.win5.line8.start.delay = 500
            winTimers.win5.line8.end.delay = 13000
            winTimers.win5.line9.start.delay = 500
            winTimers.win5.line9.end.delay = 14000
                for ( let i in winTimers.win5){
                    for ( let j in winTimers.win5[i]){
                        winTimers.win5[i][j].start()
                    }
                }
                        }
                        gameStateInfoContainer.children[1].text = 'WINNN!!!!'
                    } 
                    else{
                        symbol.alpha = 0.5
                    }
                }
            })
        }
        if(win.Q >= 7 ){
            reels.forEach(item => {
                for(let symbol of item.symbols ){
                    if (symbol._texture=== texture.Q){
                        if (hold.hold1){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 510:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 680:
                                    (symbol.y == 0) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break

                                default:
                                    break;
                            }
                            glowLineContainer.addChild(hold1LineGlowContainer)
                            winTimers.win1.start.on('start', () => {
                                    glowLineContainer.children[0].alpha = 0
                                    _1Btn.alpha = 0
                                    _1BtnRight.alpha = 0
                            });
                            winTimers.win1.end.on('start', () => {
                                    glowLineContainer.children[0].alpha = 1
                                    _1Btn.alpha = 1
                                    _1BtnRight.alpha = 1
                            });
                            winTimers.win1.end.on('end', elapsed => {
                            if ( elapsed === 2500 ){
                                winTimers.win1.start.reset()
                                winTimers.win1.end.reset()
                                winTimers.win1.start.time = 500
                                winTimers.win1.end.time = 2500
                                winTimers.win1.start.start()
                                winTimers.win1.end.start()
                            } else{
                                console.log('ended')
                            }
                            },  winTimers.win1.end);
                            winTimers.win1.end.delay = 1000
                            for (let i in winTimers.win1){
                                winTimers.win1[i].start()
                            }
                        }
                        else if  (hold.hold2){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 0 || symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ')))
                                break;
                                case 510:
                                    winstok++
                                 symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ')))

                                break;
                                case 680:
                                    (symbol.y == 0 || symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer)
                                    winTimers.win2.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win2.line1.end.on('end', elapsed => {
                                        if ( elapsed === 6000 ){
                                            winTimers.win2.line1.start.reset()
                                            winTimers.win2.line1.end.reset()
                                            winTimers.win2.line1.start.time = 500
                                            winTimers.win2.line1.end.time = 6000
                                            winTimers.win2.line1.start.start()
                                            winTimers.win2.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win2.line1.end);
                                        winTimers.win2.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win2.line2.end.on('end', elapsed => {
                                    if ( elapsed === 5000 ){
                                        winTimers.win2.line2.start.reset()
                                        winTimers.win2.line2.end.reset()
                                        winTimers.win2.line2.start.time = 500
                                        winTimers.win2.line2.end.time = 5000
                                        winTimers.win2.line2.start.start()
                                        winTimers.win2.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line2.end);
                                    winTimers.win2.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win2.line3.end.on('end', elapsed => {
                                    if ( elapsed === 4000 ){
                                        winTimers.win2.line3.start.reset()
                                        winTimers.win2.line3.end.reset()
                                        winTimers.win2.line3.start.time = 500
                                        winTimers.win2.line3.end.time = 4000
                                        winTimers.win2.line3.start.start()
                                        winTimers.win2.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line3.end);
                                    winTimers.win2.line1.end.delay = 4000
                                    winTimers.win2.line2.start.delay = 500
                                    winTimers.win2.line2.end.delay = 5000
                                    winTimers.win2.line3.start.delay = 500
                                    winTimers.win2.line3.end.delay = 6000
                                    for ( let i in winTimers.win2){
                                        for (let j in winTimers.win2[i]){
                                            winTimers.win2[i][j].start()
                                        }
                                    }
                        }
                        else if  (hold.hold3){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0 || symbol.y == 160) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    winstok ++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ')))
                                break;
                                case 340:
                                    winstok ++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ')))
                                break;
                                case 510:
                                    winstok ++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ')))
                                break;
                                case 680:
                                    winstokk ++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ')))
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer)
                                    winTimers.win3.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win3.line1.end.on('end', elapsed => {
                                        if ( elapsed === 8000 ){
                                            winTimers.win3.line1.start.reset()
                                            winTimers.win3.line1.end.reset()
                                            winTimers.win3.line1.start.time = 500
                                            winTimers.win3.line1.end.time = 8000
                                            winTimers.win3.line1.start.start()
                                            winTimers.win3.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win3.line1.end);
                                        winTimers.win3.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win3.line2.end.on('end', elapsed => {
                                    if ( elapsed === 7000 ){
                                        winTimers.win3.line2.start.reset()
                                        winTimers.win3.line2.end.reset()
                                        winTimers.win3.line2.start.time = 500
                                        winTimers.win3.line2.end.time = 7000
                                        winTimers.win3.line2.start.start()
                                        winTimers.win3.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win3.line2.end);
                                    winTimers.win3.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win3.line3.end.on('end', elapsed => {
                                    if ( elapsed === 6000 ){
                                        winTimers.win3.line3.start.reset()
                                        winTimers.win3.line3.end.reset()
                                        winTimers.win3.line3.start.time = 500
                                        winTimers.win3.line3.end.time = 6000
                                        winTimers.win3.line3.start.start()
                                        winTimers.win3.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win3.line3.end);
                                    winTimers.win3.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win3.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win3.line4.end.on('end', elapsed => {
                                if ( elapsed === 5000 ){
                                    winTimers.win3.line4.start.reset()
                                    winTimers.win3.line4.end.reset()
                                    winTimers.win3.line4.start.time = 500
                                    winTimers.win3.line4.end.time = 5000
                                    winTimers.win3.line4.start.start()
                                    winTimers.win3.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                },  winTimers.win3.line4.end);
                                winTimers.win3.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win3.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win3.line5.end.on('end', elapsed => {
                            if ( elapsed === 4000 ){
                                winTimers.win3.line5.start.reset()
                                winTimers.win3.line5.end.reset()
                                winTimers.win3.line5.start.time = 500
                                winTimers.win3.line5.end.time = 4000
                                winTimers.win3.line5.start.start()
                                winTimers.win3.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win3.line4.end);
                            winTimers.win3.line1.end.delay = 2000
                            winTimers.win3.line2.start.delay = 500
                            winTimers.win3.line2.end.delay = 3000
                            winTimers.win3.line3.start.delay = 500
                            winTimers.win3.line3.end.delay = 4000
                            winTimers.win3.line4.start.delay = 500
                            winTimers.win3.line4.end.delay = 5000
                            winTimers.win3.line5.start.delay = 500
                            winTimers.win3.line5.end.delay = 6000
                            for ( let i in winTimers.win3){
                                for ( let j in winTimers.win3[i]){
                                    winTimers.win3[i][j].start()
                                }
                            }
                        }
                        else if  (hold.hold4){
                            winstok += 10
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer)
                            winTimers.win4.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win4.line1.end.on('end', elapsed => {
                                        if ( elapsed === 11000 ){
                                            winTimers.win4.line1.start.reset()
                                            winTimers.win4.line1.end.reset()
                                            winTimers.win4.line1.start.time = 500
                                            winTimers.win4.line1.end.time = 11000
                                            winTimers.win4.line1.start.start()
                                            winTimers.win4.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        },  winTimers.win4.line1.end);
                                        winTimers.win4.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win4.line2.end.on('end', elapsed => {
                                    if ( elapsed === 10000 ){
                                        winTimers.win4.line2.start.reset()
                                        winTimers.win4.line2.end.reset()
                                        winTimers.win4.line2.start.time = 500
                                        winTimers.win4.line2.end.time = 10000
                                        winTimers.win4.line2.start.start()
                                        winTimers.win4.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win4.line2.end);
                                    winTimers.win4.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win4.line3.end.on('end', elapsed => {
                                    if ( elapsed === 9000 ){
                                        winTimers.win4.line3.start.reset()
                                        winTimers.win4.line3.end.reset()
                                        winTimers.win4.line3.start.time = 500
                                        winTimers.win4.line3.end.time = 9000
                                        winTimers.win4.line3.start.start()
                                        winTimers.win4.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win4.line3.end);
                                    winTimers.win4.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win4.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win4.line4.end.on('end', elapsed => {
                                if ( elapsed === 8000 ){
                                    winTimers.win4.line4.start.reset()
                                    winTimers.win4.line4.end.reset()
                                    winTimers.win4.line4.start.time = 500
                                    winTimers.win4.line4.end.time = 8000
                                    winTimers.win4.line4.start.start()
                                    winTimers.win4.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                }, winTimers.win4.line4.end);
                                winTimers.win4.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win4.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win4.line5.end.on('end', elapsed => {
                            if ( elapsed === 7000 ){
                                winTimers.win4.line5.start.reset()
                                winTimers.win4.line5.end.reset()
                                winTimers.win4.line5.start.time = 500
                                winTimers.win4.line5.end.time = 7000
                                winTimers.win4.line5.start.start()
                                winTimers.win4.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win4.line5.end);
                            winTimers.win4.line6.start.on('start', () => {
                                glowLineContainer.children[5].alpha = 0
                                _6Btn.alpha = 0
                                _6BtnRight.alpha = 0
                        });
                        winTimers.win4.line6.end.on('start', () => {
                            glowLineContainer.children[5].alpha = 1
                            _6Btn.alpha = 1
                            _6BtnRight.alpha = 1
                    });
                    winTimers.win4.line6.end.on('end', elapsed => {
                        if ( elapsed === 6000 ){
                            winTimers.win4.line6.start.reset()
                            winTimers.win4.line6.end.reset()
                            winTimers.win4.line6.start.time = 500
                            winTimers.win4.line6.end.time = 6000
                            winTimers.win4.line6.start.start()
                            winTimers.win4.line6.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win4.line6.end);
                        winTimers.win4.line7.start.on('start', () => {
                            glowLineContainer.children[6].alpha = 0
                            _7Btn.alpha = 0
                            _3BtnRight.alpha = 0
                    });
                    winTimers.win4.line7.end.on('start', () => {
                        glowLineContainer.children[6].alpha = 1
                        _7Btn.alpha = 1
                        _3BtnRight.alpha = 1
                });
                winTimers.win4.line7.end.on('end', elapsed => {
                    if ( elapsed === 5000 ){
                        winTimers.win4.line7.start.reset()
                        winTimers.win4.line7.end.reset()
                        winTimers.win4.line7.start.time = 500
                        winTimers.win4.line7.end.time = 5000
                        winTimers.win4.line7.start.start()
                        winTimers.win4.line7.end.start()
                    } else{
                        console.log('ended')
                    }
                    },   winTimers.win4.line7.end);
                    winTimers.win4.line1.end.delay = 5000
                    winTimers.win4.line2.start.delay = 500
                    winTimers.win4.line2.end.delay = 6000
                    winTimers.win4.line3.start.delay = 500
                    winTimers.win4.line3.end.delay = 7000
                    winTimers.win4.line4.start.delay = 500
                    winTimers.win4.line4.end.delay = 8000
                    winTimers.win4.line5.start.delay = 500
                    winTimers.win4.line5.end.delay = 9000
                    winTimers.win4.line6.start.delay = 500
                    winTimers.win4.line6.end.delay = 10000
                    winTimers.win4.line7.start.delay = 500
                    winTimers.win4.line7.end.delay = 11000
                    for ( let i in winTimers.win4){
                        for ( let j in winTimers.win4[i]){
                            winTimers.win4[i][j].start()
                        }
                    }
                        }
                        else if  (hold.hold5){
                            winstok += 15
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameQ')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer,hold5Line1GlowContainer,hold5Line2GlowContainer)
                            winTimers.win5.line1.start.on('start', () => {
                                glowLineContainer.children[0].alpha = 0
                                _1Btn.alpha = 0
                                _1BtnRight.alpha = 0
                        });
                        winTimers.win5.line1.end.on('start', () => {
                                glowLineContainer.children[0].alpha = 1
                                _1Btn.alpha = 1
                                _1BtnRight.alpha = 1
                        });
                        winTimers.win5.line1.end.on('end', elapsed => {
                            if ( elapsed === 14000 ){
                                winTimers.win5.line1.start.reset()
                                winTimers.win5.line1.end.reset()
                                winTimers.win5.line1.start.time = 500
                                winTimers.win5.line1.end.time = 14000
                                winTimers.win5.line1.start.start()
                                winTimers.win5.line1.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win5.line1.end);
                            winTimers.win5.line2.start.on('start', () => {
                                glowLineContainer.children[1].alpha = 0
                                _2Btn.alpha = 0
                                _2BtnRight.alpha = 0
                        });
                        winTimers.win5.line2.end.on('start', () => {
                            glowLineContainer.children[1].alpha = 1
                            _2Btn.alpha = 1
                            _2BtnRight.alpha = 1
                    });
                    winTimers.win5.line2.end.on('end', elapsed => {
                        if ( elapsed === 13000 ){
                            winTimers.win5.line2.start.reset()
                            winTimers.win5.line2.end.reset()
                            winTimers.win5.line2.start.time = 500
                            winTimers.win5.line2.end.time = 13000
                            winTimers.win5.line2.start.start()
                            winTimers.win5.line2.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line2.end);
                        winTimers.win5.line3.start.on('start', () => {
                                glowLineContainer.children[2].alpha = 0
                                _3Btn.alpha = 0
                                _7BtnRight.alpha = 0
                        });
                        winTimers.win5.line3.end.on('start', () => {
                            glowLineContainer.children[2].alpha = 1
                            _3Btn.alpha = 1
                            _7BtnRight.alpha = 1
                    });
                    winTimers.win5.line3.end.on('end', elapsed => {
                        if ( elapsed === 12000 ){
                            winTimers.win5.line3.start.reset()
                            winTimers.win5.line3.end.reset()
                            winTimers.win5.line3.start.time = 500
                            winTimers.win5.line3.end.time = 12000
                            winTimers.win5.line3.start.start()
                            winTimers.win5.line3.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line3.end);
                        winTimers.win5.line4.start.on('start', () => {
                            glowLineContainer.children[3].alpha = 0
                            _4Btn.alpha = 0
                            _4BtnRight.alpha = 0
                    });
                    winTimers.win5.line4.end.on('start', () => {
                        glowLineContainer.children[3].alpha = 1
                        _4Btn.alpha = 1
                        _4BtnRight.alpha = 1
                });
                winTimers.win5.line4.end.on('end', elapsed => {
                    if ( elapsed === 11000 ){
                        winTimers.win5.line4.start.reset()
                        winTimers.win5.line4.end.reset()
                        winTimers.win5.line4.start.time = 500
                        winTimers.win5.line4.end.time = 11000
                        winTimers.win5.line4.start.start()
                        winTimers.win5.line4.end.start()
                    } else{
                        console.log('ended')
                    }
                    }, winTimers.win5.line4.end);
                    winTimers.win5.line5.start.on('start', () => {
                        glowLineContainer.children[4].alpha = 0
                        _5Btn.alpha = 0
                        _5BtnRight.alpha = 0
                });
                winTimers.win5.line5.end.on('start', () => {
                    glowLineContainer.children[4].alpha = 1
                    _5Btn.alpha = 1
                    _5BtnRight.alpha = 1
            });
            winTimers.win5.line5.end.on('end', elapsed => {
                if ( elapsed === 10000 ){
                    winTimers.win5.line5.start.reset()
                    winTimers.win5.line5.end.reset()
                    winTimers.win5.line5.start.time = 500
                    winTimers.win5.line5.end.time = 10000
                    winTimers.win5.line5.start.start()
                    winTimers.win5.line5.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line5.end);
                winTimers.win5.line6.start.on('start', () => {
                    glowLineContainer.children[5].alpha = 0
                    _6Btn.alpha = 0
                            _6BtnRight.alpha = 0
                    });
                    winTimers.win5.line6.end.on('start', () => {
                        glowLineContainer.children[5].alpha = 1
                        _6Btn.alpha = 1
                        _6BtnRight.alpha = 1
                });
            winTimers.win5.line6.end.on('end', elapsed => {
                if ( elapsed === 9000 ){
                    winTimers.win5.line6.start.reset()
                    winTimers.win5.line6.end.reset()
                    winTimers.win5.line6.start.time = 500
                    winTimers.win5.line6.end.time = 9000
                    winTimers.win5.line6.start.start()
                    winTimers.win5.line6.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line6.end);
                winTimers.win5.line7.start.on('start', () => {
                    glowLineContainer.children[6].alpha = 0
                    _7Btn.alpha = 0
                    _3BtnRight.alpha = 0
            });
                winTimers.win5.line7.end.on('start', () => {
                    glowLineContainer.children[6].alpha = 1
                    _7Btn.alpha = 1
                    _3BtnRight.alpha = 1
            });
            winTimers.win5.line7.end.on('end', elapsed => {
                if ( elapsed === 8000 ){
                    winTimers.win5.line7.start.reset()
                    winTimers.win5.line7.end.reset()
                    winTimers.win5.line7.start.time = 500
                    winTimers.win5.line7.end.time = 8000
                    winTimers.win5.line7.start.start()
                    winTimers.win5.line7.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line7.end);
                winTimers.win5.line8.start.on('start', () => {
                    glowLineContainer.children[7].alpha = 0
                    _8Btn.alpha = 0
                    _8BtnRight.alpha = 0
            });
            winTimers.win5.line8.end.on('start', () => {
                glowLineContainer.children[7].alpha = 1
                _8Btn.alpha = 1
                _8BtnRight.alpha = 1
            });
            winTimers.win5.line8.end.on('end', elapsed => {
                if ( elapsed === 7000 ){
                    winTimers.win5.line8.start.reset()
                    winTimers.win5.line8.end.reset()
                    winTimers.win5.line8.start.time = 500
                    winTimers.win5.line8.end.time = 7000
                    winTimers.win5.line8.start.start()
                    winTimers.win5.line8.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line8.end);
                winTimers.win5.line9.start.on('start', () => {
                    glowLineContainer.children[8].alpha = 0
                    _9Btn.alpha = 0
                    _9BtnRight.alpha = 0
            });
            winTimers.win5.line9.end.on('start', () => {
                glowLineContainer.children[8].alpha = 1
                _9Btn.alpha = 1
                _9BtnRight.alpha = 1
            });
            winTimers.win5.line9.end.on('end', elapsed => {
            if ( elapsed === 6000 ){
                winTimers.win5.line9.start.reset()
                winTimers.win5.line9.end.reset()
                winTimers.win5.line9.start.time = 500
                winTimers.win5.line9.end.time = 6000
                winTimers.win5.line9.start.start()
                winTimers.win5.line9.end.start()
            } else{
                console.log('ended')
            }
            }, winTimers.win5.line9.end);
            winTimers.win5.line1.end.delay = 6000
            winTimers.win5.line2.start.delay = 500
            winTimers.win5.line2.end.delay = 7000
            winTimers.win5.line3.start.delay = 500
            winTimers.win5.line3.end.delay = 8000
            winTimers.win5.line4.start.delay = 500
            winTimers.win5.line4.end.delay = 9000
            winTimers.win5.line5.start.delay = 500
            winTimers.win5.line5.end.delay = 10000
            winTimers.win5.line6.start.delay = 500
            winTimers.win5.line6.end.delay = 11000
            winTimers.win5.line7.start.delay = 500
            winTimers.win5.line7.end.delay = 12000
            winTimers.win5.line8.start.delay = 500
            winTimers.win5.line8.end.delay = 13000
            winTimers.win5.line9.start.delay = 500
            winTimers.win5.line9.end.delay = 14000
                for ( let i in winTimers.win5){
                    for ( let j in winTimers.win5[i]){
                        winTimers.win5[i][j].start()
                    }
                }
                        }
                        gameStateInfoContainer.children[1].text = 'WINNN!!!!'
                    } 
                    else{
                        symbol.alpha = 0.5
                    }
                }
            })
        }
        if(win.Mommy >= 7 ){
            reels.forEach(item => {
                for(let symbol of item.symbols ){
                    if (symbol._texture=== texture.Mommy){
                        if (hold.hold1){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 510:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 680:
                                    (symbol.y == 0) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break

                                default:
                                    break;
                            }
                            glowLineContainer.addChild(hold1LineGlowContainer)
                            winTimers.win1.start.on('start', () => {
                                    glowLineContainer.children[0].alpha = 0
                                    _1Btn.alpha = 0
                                    _1BtnRight.alpha = 0
                            });
                            winTimers.win1.end.on('start', () => {
                                    glowLineContainer.children[0].alpha = 1
                                    _1Btn.alpha = 1
                                    _1BtnRight.alpha = 1
                            });
                            winTimers.win1.end.on('end', elapsed => {
                            if ( elapsed === 2500 ){
                                winTimers.win1.start.reset()
                                winTimers.win1.end.reset()
                                winTimers.win1.start.time = 500
                                winTimers.win1.end.time = 2500
                                winTimers.win1.start.start()
                                winTimers.win1.end.start()
                            } else{
                                console.log('ended')
                            }
                            },  winTimers.win1.end);
                            winTimers.win1.end.delay = 1000
                            for (let i in winTimers.win1){
                                winTimers.win1[i].start()
                            }
                        }
                        else if  (hold.hold2){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 0 || symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    winstok ++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy')))
                                break;
                                case 510:
                                    winstok ++
                                 symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy')))

                                break;
                                case 680:
                                    (symbol.y == 0 || symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer)
                                    winTimers.win2.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win2.line1.end.on('end', elapsed => {
                                        if ( elapsed === 6000 ){
                                            winTimers.win2.line1.start.reset()
                                            winTimers.win2.line1.end.reset()
                                            winTimers.win2.line1.start.time = 500
                                            winTimers.win2.line1.end.time = 6000
                                            winTimers.win2.line1.start.start()
                                            winTimers.win2.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win2.line1.end);
                                        winTimers.win2.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win2.line2.end.on('end', elapsed => {
                                    if ( elapsed === 5000 ){
                                        winTimers.win2.line2.start.reset()
                                        winTimers.win2.line2.end.reset()
                                        winTimers.win2.line2.start.time = 500
                                        winTimers.win2.line2.end.time = 5000
                                        winTimers.win2.line2.start.start()
                                        winTimers.win2.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line2.end);
                                    winTimers.win2.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win2.line3.end.on('end', elapsed => {
                                    if ( elapsed === 4000 ){
                                        winTimers.win2.line3.start.reset()
                                        winTimers.win2.line3.end.reset()
                                        winTimers.win2.line3.start.time = 500
                                        winTimers.win2.line3.end.time = 4000
                                        winTimers.win2.line3.start.start()
                                        winTimers.win2.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line3.end);
                                    winTimers.win2.line1.end.delay = 4000
                                    winTimers.win2.line2.start.delay = 500
                                    winTimers.win2.line2.end.delay = 5000
                                    winTimers.win2.line3.start.delay = 500
                                    winTimers.win2.line3.end.delay = 6000
                                    for ( let i in winTimers.win2){
                                        for (let j in winTimers.win2[i]){
                                            winTimers.win2[i][j].start()
                                        }
                                    }
                        }
                        else if  (hold.hold3){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0 || symbol.y == 160) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy')))
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy')))
                                break;
                                case 510:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy')))
                                break;
                                case 680:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy')))
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer)
                                    winTimers.win3.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win3.line1.end.on('end', elapsed => {
                                        if ( elapsed === 8000 ){
                                            winTimers.win3.line1.start.reset()
                                            winTimers.win3.line1.end.reset()
                                            winTimers.win3.line1.start.time = 500
                                            winTimers.win3.line1.end.time = 8000
                                            winTimers.win3.line1.start.start()
                                            winTimers.win3.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win3.line1.end);
                                        winTimers.win3.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win3.line2.end.on('end', elapsed => {
                                    if ( elapsed === 7000 ){
                                        winTimers.win3.line2.start.reset()
                                        winTimers.win3.line2.end.reset()
                                        winTimers.win3.line2.start.time = 500
                                        winTimers.win3.line2.end.time = 7000
                                        winTimers.win3.line2.start.start()
                                        winTimers.win3.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win3.line2.end);
                                    winTimers.win3.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win3.line3.end.on('end', elapsed => {
                                    if ( elapsed === 6000 ){
                                        winTimers.win3.line3.start.reset()
                                        winTimers.win3.line3.end.reset()
                                        winTimers.win3.line3.start.time = 500
                                        winTimers.win3.line3.end.time = 6000
                                        winTimers.win3.line3.start.start()
                                        winTimers.win3.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win3.line3.end);
                                    winTimers.win3.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win3.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win3.line4.end.on('end', elapsed => {
                                if ( elapsed === 5000 ){
                                    winTimers.win3.line4.start.reset()
                                    winTimers.win3.line4.end.reset()
                                    winTimers.win3.line4.start.time = 500
                                    winTimers.win3.line4.end.time = 5000
                                    winTimers.win3.line4.start.start()
                                    winTimers.win3.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                },  winTimers.win3.line4.end);
                                winTimers.win3.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win3.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win3.line5.end.on('end', elapsed => {
                            if ( elapsed === 4000 ){
                                winTimers.win3.line5.start.reset()
                                winTimers.win3.line5.end.reset()
                                winTimers.win3.line5.start.time = 500
                                winTimers.win3.line5.end.time = 4000
                                winTimers.win3.line5.start.start()
                                winTimers.win3.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win3.line4.end);
                            winTimers.win3.line1.end.delay = 2000
                            winTimers.win3.line2.start.delay = 500
                            winTimers.win3.line2.end.delay = 3000
                            winTimers.win3.line3.start.delay = 500
                            winTimers.win3.line3.end.delay = 4000
                            winTimers.win3.line4.start.delay = 500
                            winTimers.win3.line4.end.delay = 5000
                            winTimers.win3.line5.start.delay = 500
                            winTimers.win3.line5.end.delay = 6000
                            for ( let i in winTimers.win3){
                                for ( let j in winTimers.win3[i]){
                                    winTimers.win3[i][j].start()
                                }
                            }
                        }
                        else if  (hold.hold4){
                            winstok += 10
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer)
                            winTimers.win4.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win4.line1.end.on('end', elapsed => {
                                        if ( elapsed === 11000 ){
                                            winTimers.win4.line1.start.reset()
                                            winTimers.win4.line1.end.reset()
                                            winTimers.win4.line1.start.time = 500
                                            winTimers.win4.line1.end.time = 11000
                                            winTimers.win4.line1.start.start()
                                            winTimers.win4.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        },  winTimers.win4.line1.end);
                                        winTimers.win4.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win4.line2.end.on('end', elapsed => {
                                    if ( elapsed === 10000 ){
                                        winTimers.win4.line2.start.reset()
                                        winTimers.win4.line2.end.reset()
                                        winTimers.win4.line2.start.time = 500
                                        winTimers.win4.line2.end.time = 10000
                                        winTimers.win4.line2.start.start()
                                        winTimers.win4.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win4.line2.end);
                                    winTimers.win4.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win4.line3.end.on('end', elapsed => {
                                    if ( elapsed === 9000 ){
                                        winTimers.win4.line3.start.reset()
                                        winTimers.win4.line3.end.reset()
                                        winTimers.win4.line3.start.time = 500
                                        winTimers.win4.line3.end.time = 9000
                                        winTimers.win4.line3.start.start()
                                        winTimers.win4.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win4.line3.end);
                                    winTimers.win4.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win4.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win4.line4.end.on('end', elapsed => {
                                if ( elapsed === 8000 ){
                                    winTimers.win4.line4.start.reset()
                                    winTimers.win4.line4.end.reset()
                                    winTimers.win4.line4.start.time = 500
                                    winTimers.win4.line4.end.time = 8000
                                    winTimers.win4.line4.start.start()
                                    winTimers.win4.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                }, winTimers.win4.line4.end);
                                winTimers.win4.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win4.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win4.line5.end.on('end', elapsed => {
                            if ( elapsed === 7000 ){
                                winTimers.win4.line5.start.reset()
                                winTimers.win4.line5.end.reset()
                                winTimers.win4.line5.start.time = 500
                                winTimers.win4.line5.end.time = 7000
                                winTimers.win4.line5.start.start()
                                winTimers.win4.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win4.line5.end);
                            winTimers.win4.line6.start.on('start', () => {
                                glowLineContainer.children[5].alpha = 0
                                _6Btn.alpha = 0
                                _6BtnRight.alpha = 0
                        });
                        winTimers.win4.line6.end.on('start', () => {
                            glowLineContainer.children[5].alpha = 1
                            _6Btn.alpha = 1
                            _6BtnRight.alpha = 1
                    });
                    winTimers.win4.line6.end.on('end', elapsed => {
                        if ( elapsed === 6000 ){
                            winTimers.win4.line6.start.reset()
                            winTimers.win4.line6.end.reset()
                            winTimers.win4.line6.start.time = 500
                            winTimers.win4.line6.end.time = 6000
                            winTimers.win4.line6.start.start()
                            winTimers.win4.line6.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win4.line6.end);
                        winTimers.win4.line7.start.on('start', () => {
                            glowLineContainer.children[6].alpha = 0
                            _7Btn.alpha = 0
                            _3BtnRight.alpha = 0
                    });
                    winTimers.win4.line7.end.on('start', () => {
                        glowLineContainer.children[6].alpha = 1
                        _7Btn.alpha = 1
                        _3BtnRight.alpha = 1
                });
                winTimers.win4.line7.end.on('end', elapsed => {
                    if ( elapsed === 5000 ){
                        winTimers.win4.line7.start.reset()
                        winTimers.win4.line7.end.reset()
                        winTimers.win4.line7.start.time = 500
                        winTimers.win4.line7.end.time = 5000
                        winTimers.win4.line7.start.start()
                        winTimers.win4.line7.end.start()
                    } else{
                        console.log('ended')
                    }
                    },   winTimers.win4.line7.end);
                    winTimers.win4.line1.end.delay = 5000
                    winTimers.win4.line2.start.delay = 500
                    winTimers.win4.line2.end.delay = 6000
                    winTimers.win4.line3.start.delay = 500
                    winTimers.win4.line3.end.delay = 7000
                    winTimers.win4.line4.start.delay = 500
                    winTimers.win4.line4.end.delay = 8000
                    winTimers.win4.line5.start.delay = 500
                    winTimers.win4.line5.end.delay = 9000
                    winTimers.win4.line6.start.delay = 500
                    winTimers.win4.line6.end.delay = 10000
                    winTimers.win4.line7.start.delay = 500
                    winTimers.win4.line7.end.delay = 11000
                    for ( let i in winTimers.win4){
                        for ( let j in winTimers.win4[i]){
                            winTimers.win4[i][j].start()
                        }
                    }
                        }
                        else if  (hold.hold5){
                            winstok += 15
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameMummy')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer,hold5Line1GlowContainer,hold5Line2GlowContainer)
                            winTimers.win5.line1.start.on('start', () => {
                                glowLineContainer.children[0].alpha = 0
                                _1Btn.alpha = 0
                                _1BtnRight.alpha = 0
                        });
                        winTimers.win5.line1.end.on('start', () => {
                                glowLineContainer.children[0].alpha = 1
                                _1Btn.alpha = 1
                                _1BtnRight.alpha = 1
                        });
                        winTimers.win5.line1.end.on('end', elapsed => {
                            if ( elapsed === 14000 ){
                                winTimers.win5.line1.start.reset()
                                winTimers.win5.line1.end.reset()
                                winTimers.win5.line1.start.time = 500
                                winTimers.win5.line1.end.time = 14000
                                winTimers.win5.line1.start.start()
                                winTimers.win5.line1.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win5.line1.end);
                            winTimers.win5.line2.start.on('start', () => {
                                glowLineContainer.children[1].alpha = 0
                                _2Btn.alpha = 0
                                _2BtnRight.alpha = 0
                        });
                        winTimers.win5.line2.end.on('start', () => {
                            glowLineContainer.children[1].alpha = 1
                            _2Btn.alpha = 1
                            _2BtnRight.alpha = 1
                    });
                    winTimers.win5.line2.end.on('end', elapsed => {
                        if ( elapsed === 13000 ){
                            winTimers.win5.line2.start.reset()
                            winTimers.win5.line2.end.reset()
                            winTimers.win5.line2.start.time = 500
                            winTimers.win5.line2.end.time = 13000
                            winTimers.win5.line2.start.start()
                            winTimers.win5.line2.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line2.end);
                        winTimers.win5.line3.start.on('start', () => {
                                glowLineContainer.children[2].alpha = 0
                                _3Btn.alpha = 0
                                _7BtnRight.alpha = 0
                        });
                        winTimers.win5.line3.end.on('start', () => {
                            glowLineContainer.children[2].alpha = 1
                            _3Btn.alpha = 1
                            _7BtnRight.alpha = 1
                    });
                    winTimers.win5.line3.end.on('end', elapsed => {
                        if ( elapsed === 12000 ){
                            winTimers.win5.line3.start.reset()
                            winTimers.win5.line3.end.reset()
                            winTimers.win5.line3.start.time = 500
                            winTimers.win5.line3.end.time = 12000
                            winTimers.win5.line3.start.start()
                            winTimers.win5.line3.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line3.end);
                        winTimers.win5.line4.start.on('start', () => {
                            glowLineContainer.children[3].alpha = 0
                            _4Btn.alpha = 0
                            _4BtnRight.alpha = 0
                    });
                    winTimers.win5.line4.end.on('start', () => {
                        glowLineContainer.children[3].alpha = 1
                        _4Btn.alpha = 1
                        _4BtnRight.alpha = 1
                });
                winTimers.win5.line4.end.on('end', elapsed => {
                    if ( elapsed === 11000 ){
                        winTimers.win5.line4.start.reset()
                        winTimers.win5.line4.end.reset()
                        winTimers.win5.line4.start.time = 500
                        winTimers.win5.line4.end.time = 11000
                        winTimers.win5.line4.start.start()
                        winTimers.win5.line4.end.start()
                    } else{
                        console.log('ended')
                    }
                    }, winTimers.win5.line4.end);
                    winTimers.win5.line5.start.on('start', () => {
                        glowLineContainer.children[4].alpha = 0
                        _5Btn.alpha = 0
                        _5BtnRight.alpha = 0
                });
                winTimers.win5.line5.end.on('start', () => {
                    glowLineContainer.children[4].alpha = 1
                    _5Btn.alpha = 1
                    _5BtnRight.alpha = 1
            });
            winTimers.win5.line5.end.on('end', elapsed => {
                if ( elapsed === 10000 ){
                    winTimers.win5.line5.start.reset()
                    winTimers.win5.line5.end.reset()
                    winTimers.win5.line5.start.time = 500
                    winTimers.win5.line5.end.time = 10000
                    winTimers.win5.line5.start.start()
                    winTimers.win5.line5.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line5.end);
                winTimers.win5.line6.start.on('start', () => {
                    glowLineContainer.children[5].alpha = 0
                    _6Btn.alpha = 0
                            _6BtnRight.alpha = 0
                    });
                    winTimers.win5.line6.end.on('start', () => {
                        glowLineContainer.children[5].alpha = 1
                        _6Btn.alpha = 1
                        _6BtnRight.alpha = 1
                });
            winTimers.win5.line6.end.on('end', elapsed => {
                if ( elapsed === 9000 ){
                    winTimers.win5.line6.start.reset()
                    winTimers.win5.line6.end.reset()
                    winTimers.win5.line6.start.time = 500
                    winTimers.win5.line6.end.time = 9000
                    winTimers.win5.line6.start.start()
                    winTimers.win5.line6.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line6.end);
                winTimers.win5.line7.start.on('start', () => {
                    glowLineContainer.children[6].alpha = 0
                    _7Btn.alpha = 0
                    _3BtnRight.alpha = 0
            });
                winTimers.win5.line7.end.on('start', () => {
                    glowLineContainer.children[6].alpha = 1
                    _7Btn.alpha = 1
                    _3BtnRight.alpha = 1
            });
            winTimers.win5.line7.end.on('end', elapsed => {
                if ( elapsed === 8000 ){
                    winTimers.win5.line7.start.reset()
                    winTimers.win5.line7.end.reset()
                    winTimers.win5.line7.start.time = 500
                    winTimers.win5.line7.end.time = 8000
                    winTimers.win5.line7.start.start()
                    winTimers.win5.line7.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line7.end);
                winTimers.win5.line8.start.on('start', () => {
                    glowLineContainer.children[7].alpha = 0
                    _8Btn.alpha = 0
                    _8BtnRight.alpha = 0
            });
            winTimers.win5.line8.end.on('start', () => {
                glowLineContainer.children[7].alpha = 1
                _8Btn.alpha = 1
                _8BtnRight.alpha = 1
            });
            winTimers.win5.line8.end.on('end', elapsed => {
                if ( elapsed === 7000 ){
                    winTimers.win5.line8.start.reset()
                    winTimers.win5.line8.end.reset()
                    winTimers.win5.line8.start.time = 500
                    winTimers.win5.line8.end.time = 7000
                    winTimers.win5.line8.start.start()
                    winTimers.win5.line8.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line8.end);
                winTimers.win5.line9.start.on('start', () => {
                    glowLineContainer.children[8].alpha = 0
                    _9Btn.alpha = 0
                    _9BtnRight.alpha = 0
            });
            winTimers.win5.line9.end.on('start', () => {
                glowLineContainer.children[8].alpha = 1
                _9Btn.alpha = 1
                _9BtnRight.alpha = 1
            });
            winTimers.win5.line9.end.on('end', elapsed => {
            if ( elapsed === 6000 ){
                winTimers.win5.line9.start.reset()
                winTimers.win5.line9.end.reset()
                winTimers.win5.line9.start.time = 500
                winTimers.win5.line9.end.time = 6000
                winTimers.win5.line9.start.start()
                winTimers.win5.line9.end.start()
            } else{
                console.log('ended')
            }
            }, winTimers.win5.line9.end);
            winTimers.win5.line1.end.delay = 6000
            winTimers.win5.line2.start.delay = 500
            winTimers.win5.line2.end.delay = 7000
            winTimers.win5.line3.start.delay = 500
            winTimers.win5.line3.end.delay = 8000
            winTimers.win5.line4.start.delay = 500
            winTimers.win5.line4.end.delay = 9000
            winTimers.win5.line5.start.delay = 500
            winTimers.win5.line5.end.delay = 10000
            winTimers.win5.line6.start.delay = 500
            winTimers.win5.line6.end.delay = 11000
            winTimers.win5.line7.start.delay = 500
            winTimers.win5.line7.end.delay = 12000
            winTimers.win5.line8.start.delay = 500
            winTimers.win5.line8.end.delay = 13000
            winTimers.win5.line9.start.delay = 500
            winTimers.win5.line9.end.delay = 14000
                for ( let i in winTimers.win5){
                    for ( let j in winTimers.win5[i]){
                        winTimers.win5[i][j].start()
                    }
                }
                        }
                        gameStateInfoContainer.children[1].text = 'WINNN!!!!'
                    } 
                    else{
                        symbol.alpha = 0.5
                    }
                }
            })
        }
        if(win.Rock >= 7 ){
            reels.forEach(item => {
                for(let symbol of item.symbols ){
                    if (symbol._texture=== texture.Rock){
                        if (hold.hold1){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 510:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 680:
                                    (symbol.y == 0) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break

                                default:
                                    break;
                            }
                            glowLineContainer.addChild(hold1LineGlowContainer)
                            winTimers.win1.start.on('start', () => {
                                    glowLineContainer.children[0].alpha = 0
                                    _1Btn.alpha = 0
                                    _1BtnRight.alpha = 0
                            });
                            winTimers.win1.end.on('start', () => {
                                    glowLineContainer.children[0].alpha = 1
                                    _1Btn.alpha = 1
                                    _1BtnRight.alpha = 1
                            });
                            winTimers.win1.end.on('end', elapsed => {
                            if ( elapsed === 2500 ){
                                winTimers.win1.start.reset()
                                winTimers.win1.end.reset()
                                winTimers.win1.start.time = 500
                                winTimers.win1.end.time = 2500
                                winTimers.win1.start.start()
                                winTimers.win1.end.start()
                            } else{
                                console.log('ended')
                            }
                            },  winTimers.win1.end);
                            winTimers.win1.end.delay = 1000
                            for (let i in winTimers.win1){
                                winTimers.win1[i].start()
                            }
                        }
                        else if  (hold.hold2){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 0 || symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    winstok ++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook')))
                                break;
                                case 510:
                                winstok ++
                                 symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook')))

                                break;
                                case 680:
                                    (symbol.y == 0 || symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer)
                                    winTimers.win2.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win2.line1.end.on('end', elapsed => {
                                        if ( elapsed === 6000 ){
                                            winTimers.win2.line1.start.reset()
                                            winTimers.win2.line1.end.reset()
                                            winTimers.win2.line1.start.time = 500
                                            winTimers.win2.line1.end.time = 6000
                                            winTimers.win2.line1.start.start()
                                            winTimers.win2.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win2.line1.end);
                                        winTimers.win2.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win2.line2.end.on('end', elapsed => {
                                    if ( elapsed === 5000 ){
                                        winTimers.win2.line2.start.reset()
                                        winTimers.win2.line2.end.reset()
                                        winTimers.win2.line2.start.time = 500
                                        winTimers.win2.line2.end.time = 5000
                                        winTimers.win2.line2.start.start()
                                        winTimers.win2.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line2.end);
                                    winTimers.win2.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win2.line3.end.on('end', elapsed => {
                                    if ( elapsed === 4000 ){
                                        winTimers.win2.line3.start.reset()
                                        winTimers.win2.line3.end.reset()
                                        winTimers.win2.line3.start.time = 500
                                        winTimers.win2.line3.end.time = 4000
                                        winTimers.win2.line3.start.start()
                                        winTimers.win2.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line3.end);
                                    winTimers.win2.line1.end.delay = 4000
                                    winTimers.win2.line2.start.delay = 500
                                    winTimers.win2.line2.end.delay = 5000
                                    winTimers.win2.line3.start.delay = 500
                                    winTimers.win2.line3.end.delay = 6000
                                    for ( let i in winTimers.win2){
                                        for (let j in winTimers.win2[i]){
                                            winTimers.win2[i][j].start()
                                        }
                                    }
                        }
                        else if  (hold.hold3){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0 || symbol.y == 160) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook')))
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook')))
                                break;
                                case 510:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook')))
                                break;
                                case 680:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook')))
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer)
                                    winTimers.win3.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win3.line1.end.on('end', elapsed => {
                                        if ( elapsed === 8000 ){
                                            winTimers.win3.line1.start.reset()
                                            winTimers.win3.line1.end.reset()
                                            winTimers.win3.line1.start.time = 500
                                            winTimers.win3.line1.end.time = 8000
                                            winTimers.win3.line1.start.start()
                                            winTimers.win3.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win3.line1.end);
                                        winTimers.win3.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win3.line2.end.on('end', elapsed => {
                                    if ( elapsed === 7000 ){
                                        winTimers.win3.line2.start.reset()
                                        winTimers.win3.line2.end.reset()
                                        winTimers.win3.line2.start.time = 500
                                        winTimers.win3.line2.end.time = 7000
                                        winTimers.win3.line2.start.start()
                                        winTimers.win3.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win3.line2.end);
                                    winTimers.win3.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win3.line3.end.on('end', elapsed => {
                                    if ( elapsed === 6000 ){
                                        winTimers.win3.line3.start.reset()
                                        winTimers.win3.line3.end.reset()
                                        winTimers.win3.line3.start.time = 500
                                        winTimers.win3.line3.end.time = 6000
                                        winTimers.win3.line3.start.start()
                                        winTimers.win3.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win3.line3.end);
                                    winTimers.win3.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win3.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win3.line4.end.on('end', elapsed => {
                                if ( elapsed === 5000 ){
                                    winTimers.win3.line4.start.reset()
                                    winTimers.win3.line4.end.reset()
                                    winTimers.win3.line4.start.time = 500
                                    winTimers.win3.line4.end.time = 5000
                                    winTimers.win3.line4.start.start()
                                    winTimers.win3.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                },  winTimers.win3.line4.end);
                                winTimers.win3.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win3.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win3.line5.end.on('end', elapsed => {
                            if ( elapsed === 4000 ){
                                winTimers.win3.line5.start.reset()
                                winTimers.win3.line5.end.reset()
                                winTimers.win3.line5.start.time = 500
                                winTimers.win3.line5.end.time = 4000
                                winTimers.win3.line5.start.start()
                                winTimers.win3.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win3.line4.end);
                            winTimers.win3.line1.end.delay = 2000
                            winTimers.win3.line2.start.delay = 500
                            winTimers.win3.line2.end.delay = 3000
                            winTimers.win3.line3.start.delay = 500
                            winTimers.win3.line3.end.delay = 4000
                            winTimers.win3.line4.start.delay = 500
                            winTimers.win3.line4.end.delay = 5000
                            winTimers.win3.line5.start.delay = 500
                            winTimers.win3.line5.end.delay = 6000
                            for ( let i in winTimers.win3){
                                for ( let j in winTimers.win3[i]){
                                    winTimers.win3[i][j].start()
                                }
                            }
                        }
                        else if  (hold.hold4){
                            winstok+=10
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer)
                            winTimers.win4.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win4.line1.end.on('end', elapsed => {
                                        if ( elapsed === 11000 ){
                                            winTimers.win4.line1.start.reset()
                                            winTimers.win4.line1.end.reset()
                                            winTimers.win4.line1.start.time = 500
                                            winTimers.win4.line1.end.time = 11000
                                            winTimers.win4.line1.start.start()
                                            winTimers.win4.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        },  winTimers.win4.line1.end);
                                        winTimers.win4.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win4.line2.end.on('end', elapsed => {
                                    if ( elapsed === 10000 ){
                                        winTimers.win4.line2.start.reset()
                                        winTimers.win4.line2.end.reset()
                                        winTimers.win4.line2.start.time = 500
                                        winTimers.win4.line2.end.time = 10000
                                        winTimers.win4.line2.start.start()
                                        winTimers.win4.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win4.line2.end);
                                    winTimers.win4.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win4.line3.end.on('end', elapsed => {
                                    if ( elapsed === 9000 ){
                                        winTimers.win4.line3.start.reset()
                                        winTimers.win4.line3.end.reset()
                                        winTimers.win4.line3.start.time = 500
                                        winTimers.win4.line3.end.time = 9000
                                        winTimers.win4.line3.start.start()
                                        winTimers.win4.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win4.line3.end);
                                    winTimers.win4.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win4.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win4.line4.end.on('end', elapsed => {
                                if ( elapsed === 8000 ){
                                    winTimers.win4.line4.start.reset()
                                    winTimers.win4.line4.end.reset()
                                    winTimers.win4.line4.start.time = 500
                                    winTimers.win4.line4.end.time = 8000
                                    winTimers.win4.line4.start.start()
                                    winTimers.win4.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                }, winTimers.win4.line4.end);
                                winTimers.win4.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win4.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win4.line5.end.on('end', elapsed => {
                            if ( elapsed === 7000 ){
                                winTimers.win4.line5.start.reset()
                                winTimers.win4.line5.end.reset()
                                winTimers.win4.line5.start.time = 500
                                winTimers.win4.line5.end.time = 7000
                                winTimers.win4.line5.start.start()
                                winTimers.win4.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win4.line5.end);
                            winTimers.win4.line6.start.on('start', () => {
                                glowLineContainer.children[5].alpha = 0
                                _6Btn.alpha = 0
                                _6BtnRight.alpha = 0
                        });
                        winTimers.win4.line6.end.on('start', () => {
                            glowLineContainer.children[5].alpha = 1
                            _6Btn.alpha = 1
                            _6BtnRight.alpha = 1
                    });
                    winTimers.win4.line6.end.on('end', elapsed => {
                        if ( elapsed === 6000 ){
                            winTimers.win4.line6.start.reset()
                            winTimers.win4.line6.end.reset()
                            winTimers.win4.line6.start.time = 500
                            winTimers.win4.line6.end.time = 6000
                            winTimers.win4.line6.start.start()
                            winTimers.win4.line6.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win4.line6.end);
                        winTimers.win4.line7.start.on('start', () => {
                            glowLineContainer.children[6].alpha = 0
                            _7Btn.alpha = 0
                            _3BtnRight.alpha = 0
                    });
                    winTimers.win4.line7.end.on('start', () => {
                        glowLineContainer.children[6].alpha = 1
                        _7Btn.alpha = 1
                        _3BtnRight.alpha = 1
                });
                winTimers.win4.line7.end.on('end', elapsed => {
                    if ( elapsed === 5000 ){
                        winTimers.win4.line7.start.reset()
                        winTimers.win4.line7.end.reset()
                        winTimers.win4.line7.start.time = 500
                        winTimers.win4.line7.end.time = 5000
                        winTimers.win4.line7.start.start()
                        winTimers.win4.line7.end.start()
                    } else{
                        console.log('ended')
                    }
                    },   winTimers.win4.line7.end);
                    winTimers.win4.line1.end.delay = 5000
                    winTimers.win4.line2.start.delay = 500
                    winTimers.win4.line2.end.delay = 6000
                    winTimers.win4.line3.start.delay = 500
                    winTimers.win4.line3.end.delay = 7000
                    winTimers.win4.line4.start.delay = 500
                    winTimers.win4.line4.end.delay = 8000
                    winTimers.win4.line5.start.delay = 500
                    winTimers.win4.line5.end.delay = 9000
                    winTimers.win4.line6.start.delay = 500
                    winTimers.win4.line6.end.delay = 10000
                    winTimers.win4.line7.start.delay = 500
                    winTimers.win4.line7.end.delay = 11000
                    for ( let i in winTimers.win4){
                        for ( let j in winTimers.win4[i]){
                            winTimers.win4[i][j].start()
                        }
                    }
                        }
                        else if  (hold.hold5){
                            winstok+=15
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameBook')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer,hold5Line1GlowContainer,hold5Line2GlowContainer)
                            winTimers.win5.line1.start.on('start', () => {
                                glowLineContainer.children[0].alpha = 0
                                _1Btn.alpha = 0
                                _1BtnRight.alpha = 0
                        });
                        winTimers.win5.line1.end.on('start', () => {
                                glowLineContainer.children[0].alpha = 1
                                _1Btn.alpha = 1
                                _1BtnRight.alpha = 1
                        });
                        winTimers.win5.line1.end.on('end', elapsed => {
                            if ( elapsed === 14000 ){
                                winTimers.win5.line1.start.reset()
                                winTimers.win5.line1.end.reset()
                                winTimers.win5.line1.start.time = 500
                                winTimers.win5.line1.end.time = 14000
                                winTimers.win5.line1.start.start()
                                winTimers.win5.line1.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win5.line1.end);
                            winTimers.win5.line2.start.on('start', () => {
                                glowLineContainer.children[1].alpha = 0
                                _2Btn.alpha = 0
                                _2BtnRight.alpha = 0
                        });
                        winTimers.win5.line2.end.on('start', () => {
                            glowLineContainer.children[1].alpha = 1
                            _2Btn.alpha = 1
                            _2BtnRight.alpha = 1
                    });
                    winTimers.win5.line2.end.on('end', elapsed => {
                        if ( elapsed === 13000 ){
                            winTimers.win5.line2.start.reset()
                            winTimers.win5.line2.end.reset()
                            winTimers.win5.line2.start.time = 500
                            winTimers.win5.line2.end.time = 13000
                            winTimers.win5.line2.start.start()
                            winTimers.win5.line2.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line2.end);
                        winTimers.win5.line3.start.on('start', () => {
                                glowLineContainer.children[2].alpha = 0
                                _3Btn.alpha = 0
                                _7BtnRight.alpha = 0
                        });
                        winTimers.win5.line3.end.on('start', () => {
                            glowLineContainer.children[2].alpha = 1
                            _3Btn.alpha = 1
                            _7BtnRight.alpha = 1
                    });
                    winTimers.win5.line3.end.on('end', elapsed => {
                        if ( elapsed === 12000 ){
                            winTimers.win5.line3.start.reset()
                            winTimers.win5.line3.end.reset()
                            winTimers.win5.line3.start.time = 500
                            winTimers.win5.line3.end.time = 12000
                            winTimers.win5.line3.start.start()
                            winTimers.win5.line3.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line3.end);
                        winTimers.win5.line4.start.on('start', () => {
                            glowLineContainer.children[3].alpha = 0
                            _4Btn.alpha = 0
                            _4BtnRight.alpha = 0
                    });
                    winTimers.win5.line4.end.on('start', () => {
                        glowLineContainer.children[3].alpha = 1
                        _4Btn.alpha = 1
                        _4BtnRight.alpha = 1
                });
                winTimers.win5.line4.end.on('end', elapsed => {
                    if ( elapsed === 11000 ){
                        winTimers.win5.line4.start.reset()
                        winTimers.win5.line4.end.reset()
                        winTimers.win5.line4.start.time = 500
                        winTimers.win5.line4.end.time = 11000
                        winTimers.win5.line4.start.start()
                        winTimers.win5.line4.end.start()
                    } else{
                        console.log('ended')
                    }
                    }, winTimers.win5.line4.end);
                    winTimers.win5.line5.start.on('start', () => {
                        glowLineContainer.children[4].alpha = 0
                        _5Btn.alpha = 0
                        _5BtnRight.alpha = 0
                });
                winTimers.win5.line5.end.on('start', () => {
                    glowLineContainer.children[4].alpha = 1
                    _5Btn.alpha = 1
                    _5BtnRight.alpha = 1
            });
            winTimers.win5.line5.end.on('end', elapsed => {
                if ( elapsed === 10000 ){
                    winTimers.win5.line5.start.reset()
                    winTimers.win5.line5.end.reset()
                    winTimers.win5.line5.start.time = 500
                    winTimers.win5.line5.end.time = 10000
                    winTimers.win5.line5.start.start()
                    winTimers.win5.line5.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line5.end);
                winTimers.win5.line6.start.on('start', () => {
                    glowLineContainer.children[5].alpha = 0
                    _6Btn.alpha = 0
                            _6BtnRight.alpha = 0
                    });
                    winTimers.win5.line6.end.on('start', () => {
                        glowLineContainer.children[5].alpha = 1
                        _6Btn.alpha = 1
                        _6BtnRight.alpha = 1
                });
            winTimers.win5.line6.end.on('end', elapsed => {
                if ( elapsed === 9000 ){
                    winTimers.win5.line6.start.reset()
                    winTimers.win5.line6.end.reset()
                    winTimers.win5.line6.start.time = 500
                    winTimers.win5.line6.end.time = 9000
                    winTimers.win5.line6.start.start()
                    winTimers.win5.line6.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line6.end);
                winTimers.win5.line7.start.on('start', () => {
                    glowLineContainer.children[6].alpha = 0
                    _7Btn.alpha = 0
                    _3BtnRight.alpha = 0
            });
                winTimers.win5.line7.end.on('start', () => {
                    glowLineContainer.children[6].alpha = 1
                    _7Btn.alpha = 1
                    _3BtnRight.alpha = 1
            });
            winTimers.win5.line7.end.on('end', elapsed => {
                if ( elapsed === 8000 ){
                    winTimers.win5.line7.start.reset()
                    winTimers.win5.line7.end.reset()
                    winTimers.win5.line7.start.time = 500
                    winTimers.win5.line7.end.time = 8000
                    winTimers.win5.line7.start.start()
                    winTimers.win5.line7.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line7.end);
                winTimers.win5.line8.start.on('start', () => {
                    glowLineContainer.children[7].alpha = 0
                    _8Btn.alpha = 0
                    _8BtnRight.alpha = 0
            });
            winTimers.win5.line8.end.on('start', () => {
                glowLineContainer.children[7].alpha = 1
                _8Btn.alpha = 1
                _8BtnRight.alpha = 1
            });
            winTimers.win5.line8.end.on('end', elapsed => {
                if ( elapsed === 7000 ){
                    winTimers.win5.line8.start.reset()
                    winTimers.win5.line8.end.reset()
                    winTimers.win5.line8.start.time = 500
                    winTimers.win5.line8.end.time = 7000
                    winTimers.win5.line8.start.start()
                    winTimers.win5.line8.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line8.end);
                winTimers.win5.line9.start.on('start', () => {
                    glowLineContainer.children[8].alpha = 0
                    _9Btn.alpha = 0
                    _9BtnRight.alpha = 0
            });
            winTimers.win5.line9.end.on('start', () => {
                glowLineContainer.children[8].alpha = 1
                _9Btn.alpha = 1
                _9BtnRight.alpha = 1
            });
            winTimers.win5.line9.end.on('end', elapsed => {
            if ( elapsed === 6000 ){
                winTimers.win5.line9.start.reset()
                winTimers.win5.line9.end.reset()
                winTimers.win5.line9.start.time = 500
                winTimers.win5.line9.end.time = 6000
                winTimers.win5.line9.start.start()
                winTimers.win5.line9.end.start()
            } else{
                console.log('ended')
            }
            }, winTimers.win5.line9.end);
            winTimers.win5.line1.end.delay = 6000
            winTimers.win5.line2.start.delay = 500
            winTimers.win5.line2.end.delay = 7000
            winTimers.win5.line3.start.delay = 500
            winTimers.win5.line3.end.delay = 8000
            winTimers.win5.line4.start.delay = 500
            winTimers.win5.line4.end.delay = 9000
            winTimers.win5.line5.start.delay = 500
            winTimers.win5.line5.end.delay = 10000
            winTimers.win5.line6.start.delay = 500
            winTimers.win5.line6.end.delay = 11000
            winTimers.win5.line7.start.delay = 500
            winTimers.win5.line7.end.delay = 12000
            winTimers.win5.line8.start.delay = 500
            winTimers.win5.line8.end.delay = 13000
            winTimers.win5.line9.start.delay = 500
            winTimers.win5.line9.end.delay = 14000
                for ( let i in winTimers.win5){
                    for ( let j in winTimers.win5[i]){
                        winTimers.win5[i][j].start()
                    }
                }
                        }
                        gameStateInfoContainer.children[1].text = 'WINNN!!!!'
                    } 
                    else{
                        symbol.alpha = 0.5
                    }
                }
            })
        }
        if(win.Scorpion >= 7 ){
            reels.forEach(item => {
                console.log(item.container.x)
                for(let symbol of item.symbols ){
                    if (symbol._texture === texture.Scorpion){
                        if (hold.hold1){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    (symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 510:
                                    (symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 680:
                                    (symbol.y == 0) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break

                                default:
                                    break;
                            }
                            glowLineContainer.addChild(hold1LineGlowContainer)
                            winTimers.win1.start.on('start', () => {
                                    glowLineContainer.children[0].alpha = 0
                                    _1Btn.alpha = 0
                                    _1BtnRight.alpha = 0
                            });
                            winTimers.win1.end.on('start', () => {
                                    glowLineContainer.children[0].alpha = 1
                                    _1Btn.alpha = 1
                                    _1BtnRight.alpha = 1
                            });
                            winTimers.win1.end.on('end', elapsed => {
                            if ( elapsed === 2500 ){
                                winTimers.win1.start.reset()
                                winTimers.win1.end.reset()
                                winTimers.win1.start.time = 500
                                winTimers.win1.end.time = 2500
                                winTimers.win1.start.start()
                                winTimers.win1.end.start()
                            } else{
                                console.log('ended')
                            }
                            },  winTimers.win1.end);
                            winTimers.win1.end.delay = 1000
                            for (let i in winTimers.win1){
                                winTimers.win1[i].start()
                            }
                        }
                        else if  (hold.hold2){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    (symbol.y == 0 || symbol.y == 160) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp'))),
                                    winstok++)
                                     : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 340:
                                    winstok ++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp')))
                                break;
                                case 510:
                                    winstok ++
                                 symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp')))

                                break;
                                case 680:
                                    (symbol.y == 0 || symbol.y == 320) 
                                    ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp'))),
                                    winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer)
                                    winTimers.win2.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win2.line1.end.on('end', elapsed => {
                                        if ( elapsed === 6000 ){
                                            winTimers.win2.line1.start.reset()
                                            winTimers.win2.line1.end.reset()
                                            winTimers.win2.line1.start.time = 500
                                            winTimers.win2.line1.end.time = 6000
                                            winTimers.win2.line1.start.start()
                                            winTimers.win2.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win2.line1.end);
                                        winTimers.win2.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win2.line2.end.on('end', elapsed => {
                                    if ( elapsed === 5000 ){
                                        winTimers.win2.line2.start.reset()
                                        winTimers.win2.line2.end.reset()
                                        winTimers.win2.line2.start.time = 500
                                        winTimers.win2.line2.end.time = 5000
                                        winTimers.win2.line2.start.start()
                                        winTimers.win2.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line2.end);
                                    winTimers.win2.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win2.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win2.line3.end.on('end', elapsed => {
                                    if ( elapsed === 4000 ){
                                        winTimers.win2.line3.start.reset()
                                        winTimers.win2.line3.end.reset()
                                        winTimers.win2.line3.start.time = 500
                                        winTimers.win2.line3.end.time = 4000
                                        winTimers.win2.line3.start.start()
                                        winTimers.win2.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win2.line3.end);
                                    winTimers.win2.line1.end.delay = 4000
                                    winTimers.win2.line2.start.delay = 500
                                    winTimers.win2.line2.end.delay = 5000
                                    winTimers.win2.line3.start.delay = 500
                                    winTimers.win2.line3.end.delay = 6000
                                    for ( let i in winTimers.win2){
                                        for (let j in winTimers.win2[i]){
                                            winTimers.win2[i][j].start()
                                        }
                                    }
                        }
                        else if  (hold.hold3){
                            switch (item.container.x) {
                                case 0:
                                   (symbol.y == 0 || symbol.y == 160) 
                                   ? (symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp'))),
                                   winstok++)
                                    : symbol.alpha = reelBg.alpha = 0.1
                                break;
                                case 170:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp')))
                                break;
                                case 340:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp')))
                                break;
                                case 510:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp')))
                                break;
                                case 680:
                                    winstok++
                                    symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp')))
                                break
    
                                default:
                                    break;
                            }
                                    glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer)
                                    winTimers.win3.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win3.line1.end.on('end', elapsed => {
                                        if ( elapsed === 8000 ){
                                            winTimers.win3.line1.start.reset()
                                            winTimers.win3.line1.end.reset()
                                            winTimers.win3.line1.start.time = 500
                                            winTimers.win3.line1.end.time = 8000
                                            winTimers.win3.line1.start.start()
                                            winTimers.win3.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        }, winTimers.win3.line1.end);
                                        winTimers.win3.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win3.line2.end.on('end', elapsed => {
                                    if ( elapsed === 7000 ){
                                        winTimers.win3.line2.start.reset()
                                        winTimers.win3.line2.end.reset()
                                        winTimers.win3.line2.start.time = 500
                                        winTimers.win3.line2.end.time = 7000
                                        winTimers.win3.line2.start.start()
                                        winTimers.win3.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win3.line2.end);
                                    winTimers.win3.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win3.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win3.line3.end.on('end', elapsed => {
                                    if ( elapsed === 6000 ){
                                        winTimers.win3.line3.start.reset()
                                        winTimers.win3.line3.end.reset()
                                        winTimers.win3.line3.start.time = 500
                                        winTimers.win3.line3.end.time = 6000
                                        winTimers.win3.line3.start.start()
                                        winTimers.win3.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win3.line3.end);
                                    winTimers.win3.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win3.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win3.line4.end.on('end', elapsed => {
                                if ( elapsed === 5000 ){
                                    winTimers.win3.line4.start.reset()
                                    winTimers.win3.line4.end.reset()
                                    winTimers.win3.line4.start.time = 500
                                    winTimers.win3.line4.end.time = 5000
                                    winTimers.win3.line4.start.start()
                                    winTimers.win3.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                },  winTimers.win3.line4.end);
                                winTimers.win3.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win3.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win3.line5.end.on('end', elapsed => {
                            if ( elapsed === 4000 ){
                                winTimers.win3.line5.start.reset()
                                winTimers.win3.line5.end.reset()
                                winTimers.win3.line5.start.time = 500
                                winTimers.win3.line5.end.time = 4000
                                winTimers.win3.line5.start.start()
                                winTimers.win3.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win3.line4.end);
                            winTimers.win3.line1.end.delay = 2000
                            winTimers.win3.line2.start.delay = 500
                            winTimers.win3.line2.end.delay = 3000
                            winTimers.win3.line3.start.delay = 500
                            winTimers.win3.line3.end.delay = 4000
                            winTimers.win3.line4.start.delay = 500
                            winTimers.win3.line4.end.delay = 5000
                            winTimers.win3.line5.start.delay = 500
                            winTimers.win3.line5.end.delay = 6000
                            for ( let i in winTimers.win3){
                                for ( let j in winTimers.win3[i]){
                                    winTimers.win3[i][j].start()
                                }
                            }
                        }
                        else if  (hold.hold4){
                            winstok += 10
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer)
                            winTimers.win4.line1.start.on('start', () => {
                                            glowLineContainer.children[0].alpha = 0
                                            _1Btn.alpha = 0
                                            _1BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line1.end.on('start', () => {
                                            glowLineContainer.children[0].alpha = 1
                                            _1Btn.alpha = 1
                                            _1BtnRight.alpha = 1
                                    });
                                    winTimers.win4.line1.end.on('end', elapsed => {
                                        if ( elapsed === 11000 ){
                                            winTimers.win4.line1.start.reset()
                                            winTimers.win4.line1.end.reset()
                                            winTimers.win4.line1.start.time = 500
                                            winTimers.win4.line1.end.time = 11000
                                            winTimers.win4.line1.start.start()
                                            winTimers.win4.line1.end.start()
                                        } else{
                                            console.log('ended')
                                        }
                                        },  winTimers.win4.line1.end);
                                        winTimers.win4.line2.start.on('start', () => {
                                            glowLineContainer.children[1].alpha = 0
                                            _2Btn.alpha = 0
                                            _2BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line2.end.on('start', () => {
                                        glowLineContainer.children[1].alpha = 1
                                        _2Btn.alpha = 1
                                        _2BtnRight.alpha = 1
                                });
                                winTimers.win4.line2.end.on('end', elapsed => {
                                    if ( elapsed === 10000 ){
                                        winTimers.win4.line2.start.reset()
                                        winTimers.win4.line2.end.reset()
                                        winTimers.win4.line2.start.time = 500
                                        winTimers.win4.line2.end.time = 10000
                                        winTimers.win4.line2.start.start()
                                        winTimers.win4.line2.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    },  winTimers.win4.line2.end);
                                    winTimers.win4.line3.start.on('start', () => {
                                            glowLineContainer.children[2].alpha = 0
                                            _3Btn.alpha = 0
                                            _7BtnRight.alpha = 0
                                    });
                                    winTimers.win4.line3.end.on('start', () => {
                                        glowLineContainer.children[2].alpha = 1
                                        _3Btn.alpha = 1
                                        _7BtnRight.alpha = 1
                                });
                                winTimers.win4.line3.end.on('end', elapsed => {
                                    if ( elapsed === 9000 ){
                                        winTimers.win4.line3.start.reset()
                                        winTimers.win4.line3.end.reset()
                                        winTimers.win4.line3.start.time = 500
                                        winTimers.win4.line3.end.time = 9000
                                        winTimers.win4.line3.start.start()
                                        winTimers.win4.line3.end.start()
                                    } else{
                                        console.log('ended')
                                    }
                                    }, winTimers.win4.line3.end);
                                    winTimers.win4.line4.start.on('start', () => {
                                        glowLineContainer.children[3].alpha = 0
                                        _4Btn.alpha = 0
                                        _4BtnRight.alpha = 0
                                });
                                winTimers.win4.line4.end.on('start', () => {
                                    glowLineContainer.children[3].alpha = 1
                                    _4Btn.alpha = 1
                                    _4BtnRight.alpha = 1
                            });
                            winTimers.win4.line4.end.on('end', elapsed => {
                                if ( elapsed === 8000 ){
                                    winTimers.win4.line4.start.reset()
                                    winTimers.win4.line4.end.reset()
                                    winTimers.win4.line4.start.time = 500
                                    winTimers.win4.line4.end.time = 8000
                                    winTimers.win4.line4.start.start()
                                    winTimers.win4.line4.end.start()
                                } else{
                                    console.log('ended')
                                }
                                }, winTimers.win4.line4.end);
                                winTimers.win4.line5.start.on('start', () => {
                                    glowLineContainer.children[4].alpha = 0
                                    _5Btn.alpha = 0
                                    _5BtnRight.alpha = 0
                            });
                            winTimers.win4.line5.end.on('start', () => {
                                glowLineContainer.children[4].alpha = 1
                                _5Btn.alpha = 1
                                _5BtnRight.alpha = 1
                        });
                        winTimers.win4.line5.end.on('end', elapsed => {
                            if ( elapsed === 7000 ){
                                winTimers.win4.line5.start.reset()
                                winTimers.win4.line5.end.reset()
                                winTimers.win4.line5.start.time = 500
                                winTimers.win4.line5.end.time = 7000
                                winTimers.win4.line5.start.start()
                                winTimers.win4.line5.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win4.line5.end);
                            winTimers.win4.line6.start.on('start', () => {
                                glowLineContainer.children[5].alpha = 0
                                _6Btn.alpha = 0
                                _6BtnRight.alpha = 0
                        });
                        winTimers.win4.line6.end.on('start', () => {
                            glowLineContainer.children[5].alpha = 1
                            _6Btn.alpha = 1
                            _6BtnRight.alpha = 1
                    });
                    winTimers.win4.line6.end.on('end', elapsed => {
                        if ( elapsed === 6000 ){
                            winTimers.win4.line6.start.reset()
                            winTimers.win4.line6.end.reset()
                            winTimers.win4.line6.start.time = 500
                            winTimers.win4.line6.end.time = 6000
                            winTimers.win4.line6.start.start()
                            winTimers.win4.line6.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win4.line6.end);
                        winTimers.win4.line7.start.on('start', () => {
                            glowLineContainer.children[6].alpha = 0
                            _7Btn.alpha = 0
                            _3BtnRight.alpha = 0
                    });
                    winTimers.win4.line7.end.on('start', () => {
                        glowLineContainer.children[6].alpha = 1
                        _7Btn.alpha = 1
                        _3BtnRight.alpha = 1
                });
                winTimers.win4.line7.end.on('end', elapsed => {
                    if ( elapsed === 5000 ){
                        winTimers.win4.line7.start.reset()
                        winTimers.win4.line7.end.reset()
                        winTimers.win4.line7.start.time = 500
                        winTimers.win4.line7.end.time = 5000
                        winTimers.win4.line7.start.start()
                        winTimers.win4.line7.end.start()
                    } else{
                        console.log('ended')
                    }
                    },   winTimers.win4.line7.end);
                    winTimers.win4.line1.end.delay = 5000
                    winTimers.win4.line2.start.delay = 500
                    winTimers.win4.line2.end.delay = 6000
                    winTimers.win4.line3.start.delay = 500
                    winTimers.win4.line3.end.delay = 7000
                    winTimers.win4.line4.start.delay = 500
                    winTimers.win4.line4.end.delay = 8000
                    winTimers.win4.line5.start.delay = 500
                    winTimers.win4.line5.end.delay = 9000
                    winTimers.win4.line6.start.delay = 500
                    winTimers.win4.line6.end.delay = 10000
                    winTimers.win4.line7.start.delay = 500
                    winTimers.win4.line7.end.delay = 11000
                    for ( let i in winTimers.win4){
                        for ( let j in winTimers.win4[i]){
                            winTimers.win4[i][j].start()
                        }
                    }
                        }
                        else if  (hold.hold5){
                            winstok += 15
                            symbol.addChild(spriteAnimateCreator(PIXI.Texture.from('spriteFrameScorp')))
                            glowLineContainer.addChild(hold1LineGlowContainer, hold2Line1GlowContainer,hold2Line2GlowContainer, hold3Line1GlowContainer, hold3Line2GlowContainer,hold4Line1GlowContainer,hold4Line2GlowContainer,hold5Line1GlowContainer,hold5Line2GlowContainer)
                            winTimers.win5.line1.start.on('start', () => {
                                glowLineContainer.children[0].alpha = 0
                                _1Btn.alpha = 0
                                _1BtnRight.alpha = 0
                        });
                        winTimers.win5.line1.end.on('start', () => {
                                glowLineContainer.children[0].alpha = 1
                                _1Btn.alpha = 1
                                _1BtnRight.alpha = 1
                        });
                        winTimers.win5.line1.end.on('end', elapsed => {
                            if ( elapsed === 14000 ){
                                winTimers.win5.line1.start.reset()
                                winTimers.win5.line1.end.reset()
                                winTimers.win5.line1.start.time = 500
                                winTimers.win5.line1.end.time = 14000
                                winTimers.win5.line1.start.start()
                                winTimers.win5.line1.end.start()
                            } else{
                                console.log('ended')
                            }
                            }, winTimers.win5.line1.end);
                            winTimers.win5.line2.start.on('start', () => {
                                glowLineContainer.children[1].alpha = 0
                                _2Btn.alpha = 0
                                _2BtnRight.alpha = 0
                        });
                        winTimers.win5.line2.end.on('start', () => {
                            glowLineContainer.children[1].alpha = 1
                            _2Btn.alpha = 1
                            _2BtnRight.alpha = 1
                    });
                    winTimers.win5.line2.end.on('end', elapsed => {
                        if ( elapsed === 13000 ){
                            winTimers.win5.line2.start.reset()
                            winTimers.win5.line2.end.reset()
                            winTimers.win5.line2.start.time = 500
                            winTimers.win5.line2.end.time = 13000
                            winTimers.win5.line2.start.start()
                            winTimers.win5.line2.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line2.end);
                        winTimers.win5.line3.start.on('start', () => {
                                glowLineContainer.children[2].alpha = 0
                                _3Btn.alpha = 0
                                _7BtnRight.alpha = 0
                        });
                        winTimers.win5.line3.end.on('start', () => {
                            glowLineContainer.children[2].alpha = 1
                            _3Btn.alpha = 1
                            _7BtnRight.alpha = 1
                    });
                    winTimers.win5.line3.end.on('end', elapsed => {
                        if ( elapsed === 12000 ){
                            winTimers.win5.line3.start.reset()
                            winTimers.win5.line3.end.reset()
                            winTimers.win5.line3.start.time = 500
                            winTimers.win5.line3.end.time = 12000
                            winTimers.win5.line3.start.start()
                            winTimers.win5.line3.end.start()
                        } else{
                            console.log('ended')
                        }
                        }, winTimers.win5.line3.end);
                        winTimers.win5.line4.start.on('start', () => {
                            glowLineContainer.children[3].alpha = 0
                            _4Btn.alpha = 0
                            _4BtnRight.alpha = 0
                    });
                    winTimers.win5.line4.end.on('start', () => {
                        glowLineContainer.children[3].alpha = 1
                        _4Btn.alpha = 1
                        _4BtnRight.alpha = 1
                });
                winTimers.win5.line4.end.on('end', elapsed => {
                    if ( elapsed === 11000 ){
                        winTimers.win5.line4.start.reset()
                        winTimers.win5.line4.end.reset()
                        winTimers.win5.line4.start.time = 500
                        winTimers.win5.line4.end.time = 11000
                        winTimers.win5.line4.start.start()
                        winTimers.win5.line4.end.start()
                    } else{
                        console.log('ended')
                    }
                    }, winTimers.win5.line4.end);
                    winTimers.win5.line5.start.on('start', () => {
                        glowLineContainer.children[4].alpha = 0
                        _5Btn.alpha = 0
                        _5BtnRight.alpha = 0
                });
                winTimers.win5.line5.end.on('start', () => {
                    glowLineContainer.children[4].alpha = 1
                    _5Btn.alpha = 1
                    _5BtnRight.alpha = 1
            });
            winTimers.win5.line5.end.on('end', elapsed => {
                if ( elapsed === 10000 ){
                    winTimers.win5.line5.start.reset()
                    winTimers.win5.line5.end.reset()
                    winTimers.win5.line5.start.time = 500
                    winTimers.win5.line5.end.time = 10000
                    winTimers.win5.line5.start.start()
                    winTimers.win5.line5.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line5.end);
                winTimers.win5.line6.start.on('start', () => {
                    glowLineContainer.children[5].alpha = 0
                    _6Btn.alpha = 0
                            _6BtnRight.alpha = 0
                    });
                    winTimers.win5.line6.end.on('start', () => {
                        glowLineContainer.children[5].alpha = 1
                        _6Btn.alpha = 1
                        _6BtnRight.alpha = 1
                });
            winTimers.win5.line6.end.on('end', elapsed => {
                if ( elapsed === 9000 ){
                    winTimers.win5.line6.start.reset()
                    winTimers.win5.line6.end.reset()
                    winTimers.win5.line6.start.time = 500
                    winTimers.win5.line6.end.time = 9000
                    winTimers.win5.line6.start.start()
                    winTimers.win5.line6.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line6.end);
                winTimers.win5.line7.start.on('start', () => {
                    glowLineContainer.children[6].alpha = 0
                    _7Btn.alpha = 0
                    _3BtnRight.alpha = 0
            });
                winTimers.win5.line7.end.on('start', () => {
                    glowLineContainer.children[6].alpha = 1
                    _7Btn.alpha = 1
                    _3BtnRight.alpha = 1
            });
            winTimers.win5.line7.end.on('end', elapsed => {
                if ( elapsed === 8000 ){
                    winTimers.win5.line7.start.reset()
                    winTimers.win5.line7.end.reset()
                    winTimers.win5.line7.start.time = 500
                    winTimers.win5.line7.end.time = 8000
                    winTimers.win5.line7.start.start()
                    winTimers.win5.line7.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line7.end);
                winTimers.win5.line8.start.on('start', () => {
                    glowLineContainer.children[7].alpha = 0
                    _8Btn.alpha = 0
                    _8BtnRight.alpha = 0
            });
            winTimers.win5.line8.end.on('start', () => {
                glowLineContainer.children[7].alpha = 1
                _8Btn.alpha = 1
                _8BtnRight.alpha = 1
            });
            winTimers.win5.line8.end.on('end', elapsed => {
                if ( elapsed === 7000 ){
                    winTimers.win5.line8.start.reset()
                    winTimers.win5.line8.end.reset()
                    winTimers.win5.line8.start.time = 500
                    winTimers.win5.line8.end.time = 7000
                    winTimers.win5.line8.start.start()
                    winTimers.win5.line8.end.start()
                } else{
                    console.log('ended')
                }
                }, winTimers.win5.line8.end);
                winTimers.win5.line9.start.on('start', () => {
                    glowLineContainer.children[8].alpha = 0
                    _9Btn.alpha = 0
                    _9BtnRight.alpha = 0
            });
            winTimers.win5.line9.end.on('start', () => {
                glowLineContainer.children[8].alpha = 1
                _9Btn.alpha = 1
                _9BtnRight.alpha = 1
            });
            winTimers.win5.line9.end.on('end', elapsed => {
            if ( elapsed === 6000 ){
                winTimers.win5.line9.start.reset()
                winTimers.win5.line9.end.reset()
                winTimers.win5.line9.start.time = 500
                winTimers.win5.line9.end.time = 6000
                winTimers.win5.line9.start.start()
                winTimers.win5.line9.end.start()
            } else{
                console.log('ended')
            }
            }, winTimers.win5.line9.end);
            winTimers.win5.line1.end.delay = 6000
            winTimers.win5.line2.start.delay = 500
            winTimers.win5.line2.end.delay = 7000
            winTimers.win5.line3.start.delay = 500
            winTimers.win5.line3.end.delay = 8000
            winTimers.win5.line4.start.delay = 500
            winTimers.win5.line4.end.delay = 9000
            winTimers.win5.line5.start.delay = 500
            winTimers.win5.line5.end.delay = 10000
            winTimers.win5.line6.start.delay = 500
            winTimers.win5.line6.end.delay = 11000
            winTimers.win5.line7.start.delay = 500
            winTimers.win5.line7.end.delay = 12000
            winTimers.win5.line8.start.delay = 500
            winTimers.win5.line8.end.delay = 13000
            winTimers.win5.line9.start.delay = 500
            winTimers.win5.line9.end.delay = 14000
                for ( let i in winTimers.win5){
                    for ( let j in winTimers.win5[i]){
                        winTimers.win5[i][j].start()
                    }
                }
                        }
                        gameStateInfoContainer.children[1].text = 'WINNN!!!!'
                    } 
                    else{
                        symbol.alpha  = 0.1
                        reelBg.alpha = 0
                    }
                }
            })
        }
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------//
        console.log(winstok)
        jackpotContainer.children[3].text = parseInt(jackpotContainer.children[3].text ) + parseInt(betStateInfoContainer.children[3]._text)
        jackpotContainer.children[4].text = parseInt(jackpotContainer.children[4].text ) + Math.floor((winstok * spincount) / parseInt(betStateInfoContainer.children[3]._text))
        //-------------------------------------------------------------------------------------------------------------------------------------------------------------//
        hold1BtnContainer.interactive = true
        hold2BtnContainer.interactive = true
        hold3BtnContainer.interactive = true
        hold4BtnContainer.interactive = true
        hold5BtnContainer.interactive = true
        startBtnContainer.interactive = true

        console.log('============================')
        console.log('10 ==> ',win._10)
        console.log('bug ==> ',win.Bug)
        console.log('cat ==> ',win.Cat)
        console.log('j ==> ',win.J)
        console.log('A ==> ',win.A)
        console.log('k ==> ',win.K)
        console.log('q ==> ',win.Q)
        console.log('mommy ==> ',win.Mommy)
        console.log('rock ==> ',win.Rock)
        console.log('scorpion ==> ',win.Scorpion)
        console.log('============================')
    }, 600)
    }
    // Listen for animate update.
    app.ticker.add((delta) => {
             winTimers.win1.start.timerManager.update(app.ticker.elapsedMS);
             for (let i in winTimers.win2){
                winTimers.win2[i].start.timerManager.update(app.ticker.elapsedMS);
             }
             for (let i in winTimers.win3){
                winTimers.win3[i].start.timerManager.update(app.ticker.elapsedMS);
             }
             for (let i in winTimers.win4){
                winTimers.win4[i].start.timerManager.update(app.ticker.elapsedMS);
             }
             for (let i in winTimers.win5){
                winTimers.win5[i].start.timerManager.update(app.ticker.elapsedMS);
             }
    // Update the slots.
        for (let i = 0; i < reels.length; i++) {
            const r = reels[i];
            // Update blur filter y amount based on speed.
            // This would be better if calculated with time in mind also. Now blur depends on frame rate.
            r.blur.blurY =(r.position - r.previousPosition) * 8;
            r.previousPosition =  r.position;
            // Update symbol positions on reel.
            for (let j = 0; j < r.symbols.length; j++) {
                const s = r.symbols[j];
                const prevy = s.y;
                s.y =((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;
                if (s.y < 0 && prevy > SYMBOL_SIZE) { 
                    // Detect going over and swap a texture.
                    // This should in proper product be determined from some logical reel.
                    s.texture = slotTextures[Math.floor(Math.random() * slotTextures.length)];
                    s.scale.x =   Math.min(SYMBOL_SIZE_X / s.texture.width)
                    s.scale.y =  Math.min(SYMBOL_SIZE_Y / s.texture.height);
                    s.x = Math.round(SYMBOL_SIZE_X - s.width);
                    //=============================---------------------------------------------------------------------------
                }
            }
        }
    }, this);
}

// Very simple tweening utility function. This should be replaced with a proper tweening library in a real product.
const tweening = [];
function tweenTo(object, property, target,  time, easing, onchange, oncomplete) {
    const tween = {
        object,
        property,
        propertyBeginValue: object[property],
        target,
        easing,
        time,
        change: onchange,
        complete: oncomplete,
        start: Date.now(),
    };

    tweening.push(tween);
    return tween;
}
// Listen for animate update.
app.ticker.add((delta) => {
    const now = Date.now();
    const remove = [];
    for (let i = 0; i < tweening.length; i++) {
        const t = tweening[i];
        const phase = Math.min(1, (now -t.start) / t.time);

        t.object[t.property] = lerp(t.propertyBeginValue, t.target, t.easing(phase));
        if (t.change) t.change(t);
        if (phase === 1) {
            t.object[t.property] = t.target;
            if (t.complete) t.complete(t);
            remove.push(t);
        }
    }
    for (let i = 0; i < remove.length; i++) {
        tweening.splice(tweening.indexOf(remove[i]), 1);
    }
});

// Basic lerp funtion.
function lerp(a1, a2, t) {
    return a1 * (1 - t) + a2 * t;
}

// Backout function from tweenjs.
// https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js
const Ease = {
    backout : (amount) => {
        return t => (--t * t * ((amount + 1) * t + amount) + 1);
    },
    bounceIn : (t) => {
        return 1-Ease.bounceOut(1-t);
    },
    bounceOut : (t) => {
        if (t < 1/2.75) {
            return (7.5625*t*t);
        } else if (t < 2/2.75) {
            return (7.5625*(t-=1.5/2.75)*t+0.75);
        } else if (t < 2.5/2.75) {
            return (7.5625*(t-=2.25/2.75)*t+0.9375);
        } else {
            return (7.5625*(t-=2.625/2.75)*t +0.984375);
        }
    },
    bounceInOut: (t) => {
        if (t<0.5) return Ease.bounceIn (t*2) * .5;
		return Ease.bounceOut(t*2-1)*0.5+0.5
    }
}
