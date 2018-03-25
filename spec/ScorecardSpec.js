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
    expect(scorecard.getTotalScore()).toEqual(5);
  });

  it("should increase roll number by 1", function(){
    scorecard.roll(5);
    expect(scorecard.getCurrentRollNumber()).toEqual(2);
  });

  it("should reset roll number back to 1", function(){
    scorecard.roll(10);
    scorecard.resetRollNumber();
    expect(scorecard.getCurrentRollNumber()).toEqual(1);
  });

  it("should increase frame number by 1 after 2 rolls", function(){
    scorecard.roll(1);
    scorecard.roll(1);
    expect(scorecard.getCurrentFrameNumber()).toEqual(2);
  });

  it("shoud not increase frame number after 10 frames", function(){
    for (var i = 0; i < 30; i++)
      scorecard.roll(1);
    expect(scorecard.getCurrentFrameNumber()).toEqual(10);
  });

  it("should return true if there's a strike", function(){
    expect(scorecard.isStrike(10)).toEqual(true);
  });

  it("should return false if no strike", function(){
    expect(scorecard.isStrike(8)).toEqual(false);
  });


});
