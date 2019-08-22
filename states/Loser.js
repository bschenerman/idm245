gameObj.Loser = function (game) {};

gameObj.Loser.prototype = {
  create: function () {
    console.log('State - Loser');
    
    this.stage.backgroundColor = '#000';
    
    // this.add.sprite(291, 300, 'jumbotron');
    let loserScreen = this.add.sprite(this.world.centerX, this.world.centerY, 'jumbotron');
    loserScreen.anchor.setTo(0.5, 0.5);

    let replay = this.add.sprite(this.world.centerX, 539, 'replay');
    replay.anchor.setTo(0.5, 0);

    let deadEskimo = this.add.sprite(700, 140, 'deadEskimo');
    
    //The numbers given in parameters are the indexes of the frames, in this order: OVER, OUT, DOWN
    var btReplay = this.add.button(9, 600, 'replayButton', this.replayFun, this, 1, 0, 2);

    let labelStyle = {
      fill: '#272727',
      font: 'Press Start 2P',
      fontSize: 18
    }

    let gameInfoStyle = {
      fill: '#272727',
      font: 'Press Start 2P',
      fontSize: 24
    }

    let msgStyle = {
      fill: '#545454',
      font: 'Press Start 2P',
      fontSize: 20
    };
    
    let timerLabel = this.add.text(406, 313, 'Time', labelStyle);
    let scoreLabel = this.add.text(407, 389, 'Hits', labelStyle);

    timer = this.add.text(640, 313, gameObj.gTime, gameInfoStyle);
    score = this.add.text(640, 383, gameObj.gScore, gameInfoStyle);

    timer.anchor.setTo(1, 0);
    score.anchor.setTo(1, 0);
  
    let msg = this.add.text(this.world.centerX, 100, 'Could be better...', msgStyle);
    msg.anchor.setTo(0.5, 0);

  },
  replayFun: function () {
    console.log('replayFun called');
    this.state.start('Play');
  }
};
