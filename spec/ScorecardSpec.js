describe("Scorecard", function() {
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it("Should return total score", function(){
    expect (scorecard.getTotalScore()).toEqual(0);
  });

  it("should return the current frame number", function(){
    expect(scorecard.getCurrentFrameNumber()).toEqual(1);
  });

  it("should return current roll number", function() {
    expect(scorecard.getCurrentRollNumber()).toEqual(1);
  });

  it("Should add to total score", function(){
    scorecard.addToTotal(5);
    expect (scorecard.getTotalScore()).toEqual(5);
  });


});
