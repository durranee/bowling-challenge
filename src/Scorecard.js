function Scorecard() {
  const _MAXFRAMES = 9; // (0-9) 10 frames for array
  const _ALL_PINS = 10;
  this._scoreBoard = [];
  this._currentFrame = [];
  this._totalScore = 0;
  this._currentFrameNumber = 0; // starting from 0... 0-9 (10 frames)
  this._currentRollNumber = 0; // starting from 0 ... 0-1 (2 rolls)
  this._pinsStanding = _ALL_PINS;

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
    return (this._pinsStanding - pinsDropped  === 0 && this.getCurrentRollNumber() == 0)
  };

  Scorecard.prototype.isSpare = function (pinsDropped) {
    return (this._pinsStanding - pinsDropped  === 0 && this.getCurrentRollNumber() == 1)
  };


/////////////////////////// SETTERS

  Scorecard.prototype.pushRolltoFrame = function (pinsDropped) {
    this._currentFrame.push(pinsDropped);
  };

  Scorecard.prototype.pushFrametoScoreBoard = function (frame) {
    this._scoreBoard.push(frame);
  };

  Scorecard.prototype.addToTotal = function (pinsDropped) {
    this._totalScore += pinsDropped;
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
    this.addToTotal(pinsDropped);
    this.pushRolltoFrame(pinsDropped);
  };

  Scorecard.prototype.roll = function (pinsDropped) {
      // second roll of the frame
    if (this.getCurrentRollNumber() + 1 > 1 && this._currentFrameNumber < _MAXFRAMES) {
      this.deductPinsAndUpdateFrame(pinsDropped);
      this.pushFrametoScoreBoard(this.getCurrentFrame());
      this.resetRollNumber();
      this._currentFrameNumber++;
      this.resetFrameValues();
      this.resetPinsStanding();
    }
    else {
      // first roll of the frame
      this.deductPinsAndUpdateFrame(pinsDropped);
      this._currentRollNumber++;
    }
  };





}


// TODO: strike bonus calc
// spare bonus calculation
//  10th round shinanigan
