function Scorecard() {
  const _MAXFRAMES = 10;
  this._totalScore = 0;
  this._currentFrameNumber = 1;
  this._currentRollNumber = 1;
  this._pinsStanding = 10;

/////////////////////////// GETTERS
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


/////////////////////////// QUERIES

  Scorecard.prototype.isStrike = function (pinsDropped) {
    return (this._pinsStanding - pinsDropped  === 0 && this.getCurrentRollNumber() == 1)
  };

  Scorecard.prototype.isSpare = function (pinsDropped) {
    return (this._pinsStanding - pinsDropped  === 0 && this.getCurrentRollNumber() == 2)
  };


/////////////////////////// SETTERS

  Scorecard.prototype.addToTotal = function (pinsDropped) {
    this._totalScore = pinsDropped;
  };

  Scorecard.prototype.roll = function (pinsDropped) {
    if (this.getCurrentRollNumber() + 1 > 2 && this._currentFrameNumber < _MAXFRAMES) {
      this._pinsStanding -= pinsDropped;
      this.resetRollNumber
      this._currentFrameNumber++;
    }
    else {
      this._pinsStanding -= pinsDropped;
      this._currentRollNumber++;
    }
  };

  Scorecard.prototype.resetRollNumber = function () {
    this._currentRollNumber = 1;
  };



}
