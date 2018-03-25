describe("Scorecard", function() {
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it("Should return total score", function(){
    expect (scorecard.getTotalScore()).toEqual(0);
  });

  it("should return the current frame number", function(){
    expect(scorecard.getFrameNumber()).toEqual(1);
  })
});
