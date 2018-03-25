function Scorecard() {
  const _TOTALFRAMES = 10;
  this._totalScore = 0;
  this._currentFrameNumber = 1;
  this._currentRollNumber = 1;

  Scorecard.prototype.getTotalScore = function () {
    return this._totalScore;
  };

  Scorecard.prototype.getCurrentFrameNumber = function () {
    return this._currentFrameNumber;
  };

  Scorecard.prototype.getCurrentRollNumber = function () {
    return this._currentRollNumber;
  };

  Scorecard.prototype.addToTotal = function (pinsDropped) {
    this._totalScore = pinsDropped;
  };

  Scorecard.prototype.roll = function (pinsDropped) {
    this._currentRollNumber++;
    if (this._currentRollNumber > 2 && this._currentFrameNumber < 10) {
      this.resetRollNumber
      this._currentFrameNumber++;
    }
  };

  Scorecard.prototype.resetRollNumber = function () {
    this._currentRollNumber = 1;
  };

  Scorecard.prototype.isStrike = function (pinsDropped) {
    return (pinsDropped  === 10 && this.getCurrentRollNumber() == 1)
  };
}
