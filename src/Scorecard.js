function Scorecard() {
  this._totalScore = 0;
  this._frameNumber = 1;

Scorecard.prototype.getTotalScore = function () {
  return this._totalScore;
};

Scorecard.prototype.getFrameNumber = function () {
  return this._frameNumber;
};



}
