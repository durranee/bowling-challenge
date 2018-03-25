function Scorecard() {
  this._totalScore = 0;
  this._frameNumber = 1;
  this._rollNumber = 1;

Scorecard.prototype.getTotalScore = function () {
  return this._totalScore;
};

Scorecard.prototype.getFrameNumber = function () {
  return this._frameNumber;
};

Scorecard.prototype.getRollNumber = function () {
  return this._rollNumber = 1;
};


}
