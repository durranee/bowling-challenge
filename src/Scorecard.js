function Scorecard() {
  const _MAXFRAMES = 9; // (0-9) 10 frames for array
  const _ALL_PINS = 10;
  this._scoreBoard = [];
  this._currentFrame = [];
  this._totalScore = 0;
  this._currentFrameNumber = 0; // starting from 0... 0-9 (10 frames)
  this._currentRollNumber = 0; // starting from 0 ... 0-1 (2 rolls)
  this._pinsStanding = _ALL_PINS;
  this._strikeMode = false;
  this._spareMode = false;

/////////////////////////// GETTERS

  Scorecard.prototype.getScoreBoard = function () {
    return this._scoreBoard;
  };

  Scorecard.prototype.getTotalScore = function () {
    return this._totalScore;
  };

  Scorecard.prototype.getCurrentFrameNumber = function () {
    return this._currentFrameNumber;
  };

  Scorecard.prototype.getCurrentRollNumber = function () {
    return this._currentRollNumber;
  };


  Scorecard.prototype.getPinsStanding = function () {
    return this._pinsStanding;
  };

  Scorecard.prototype.getCurrentFrame = function () {
    return this._currentFrame;
  };
/////////////////////////// QUERIES

  Scorecard.prototype.isStrike = function (pinsDropped) {
    return (_ALL_PINS === pinsDropped && this.getCurrentRollNumber() == 0)
  };

  Scorecard.prototype.isSpare = function (pinsDropped) {
    return (this._pinsStanding - pinsDropped  === 0 && this.getCurrentRollNumber() == 1)
  };


/////////////////////////// SETTERS

  Scorecard.prototype.pushRolltoFrame = function (pinsDropped) {
    this._currentFrame.push(pinsDropped);
  };

  Scorecard.prototype.pushFrametoScoreBoard = function (frame) {
    console.log
    this._scoreBoard.push(frame);
  };

  Scorecard.prototype.addFrameScoreToTotal = function (frame) {
    this._totalScore += frame.reduce((a, b) => a + b, 0);
  };

  Scorecard.prototype.resetPinsStanding = function () {
    this._pinsStanding = _ALL_PINS;
  };

  Scorecard.prototype.resetRollNumber = function () {
    this._currentRollNumber = 0;
  };

  Scorecard.prototype.resetFrameValues = function () {
    this._currentFrame = [];
  };

  Scorecard.prototype.deductPinsAndUpdateFrame = function (pinsDropped) {
    this._pinsStanding -= pinsDropped;
    // this.addFrameScoreToTotal(pinsDropped);
    this.pushRolltoFrame(pinsDropped);
  };

  Scorecard.prototype.prepareForNextFrame = function (pinsDropped) {
    // this.deductPinsAndUpdateFrame(pinsDropped);
    this.pushFrametoScoreBoard(this.getCurrentFrame());
    this.resetRollNumber();
    this._currentFrameNumber++;
    this.resetFrameValues();
    this.resetPinsStanding();
  };

  Scorecard.prototype.roll = function (pinsDropped) {

    // still under 9 frames
    if (this._currentFrameNumber < _MAXFRAMES) {

      // second roll or strike or spare (something that'll trigger new frame)
      if (this.getCurrentRollNumber() + 1 > 1 || this.isStrike(pinsDropped) || this.isSpare(pinsDropped) ) {

        this.deductPinsAndUpdateFrame(pinsDropped);

        if(this.isStrike(pinsDropped))
          this._strikeMode = true;
        if (this.isSpare(pinsDropped))
          this._spareMode = true


        if(this._strikeMode && this.getCurrentRollNumber() + 1 > 1){
          this.addFrameScoreToTotal(this._currentFrame);
          this._strikeMode = false;
        }

        // if(this._spareMode && this.getCurrentRollNumber() + 1 > 1){
        //   console.log("we're in SPARE mode")
        //   this.addFrameScoreToTotal(this._currentFrame[0]);
        //   this._spareMode = false;
        // }

        this.addFrameScoreToTotal(this._currentFrame);
        this.prepareForNextFrame(pinsDropped);
      }
      else {
        // normal boring first roll
        this.deductPinsAndUpdateFrame(pinsDropped);
        this._currentRollNumber++;
      }

    }

  }

}


// TODO:
// spare bonus calculation
//  10th round shinanigan

//  some thoughts
 // have a method for frame finishing, which switches to new frame
 //  something like prepare for nest frame
 //  save total only after frame ends and not after every roll
