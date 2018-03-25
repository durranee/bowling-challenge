describe("Scorecard", function() {
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it("Should start with empty score board", function(){
    expect (scorecard.getScoreBoard()).toEqual([]);
  });

  it("Should start with total score of 0", function(){
    expect (scorecard.getTotalScore()).toEqual(0);
  });

  it("should return the current frame number", function(){
    expect(scorecard.getCurrentFrameNumber()).toEqual(0);
  });

  it("should return current roll number", function() {
    expect(scorecard.getCurrentRollNumber()).toEqual(0);
  });

  it("Should add frame score to total score", function(){
    scorecard.addFrameScoreToTotal([2,3]);
    expect(scorecard.getTotalScore()).toEqual(5);
  });

  it("should increase roll number by 1", function(){
    scorecard.roll(5);
    expect(scorecard.getCurrentRollNumber()).toEqual(1);
  });

  it("should reset roll number back to 0", function(){
    scorecard.roll(10);
    // scorecard.resetRollNumber();
    expect(scorecard.getCurrentRollNumber()).toEqual(0);
  });

  it("should increase frame number by 1 after 2 rolls", function(){
    scorecard.roll(1);
    scorecard.roll(1);
    expect(scorecard.getCurrentFrameNumber()).toEqual(1);
  });

  it("shoud not increase frame number after 10 frames", function(){
    for (var i = 0; i < 30; i++)
      scorecard.roll(1);
    expect(scorecard.getCurrentFrameNumber()).toEqual(9);
  });

  it("should return true if there's a strike", function(){
    expect(scorecard.isStrike(10)).toEqual(true);
  });

  it("should return false if no strike", function(){
    expect(scorecard.isStrike(8)).toEqual(false);
  });

  it("should deduct correct pins from pins remaining after roll", function(){
    scorecard.roll(4);
    expect(scorecard.getPinsStanding()).toEqual(6);
  });

  it("should turn _spareMode on", function(){
    scorecard.roll(6)
    scorecard.roll(4)
    expect(scorecard._spareMode).toEqual(true);
  });

  it("should return false if no spare", function(){
    scorecard.roll(5)
    expect(scorecard.isSpare(4)).toEqual(false);
  });

  it("should reset pins standing after every frame", function(){
    scorecard.roll(2);
    scorecard.roll(3);
    expect(scorecard.getPinsStanding()).toEqual(10);
  });

  it("should push current roll to current frame", function(){
    scorecard.pushRolltoFrame(2);
    expect(scorecard.getCurrentFrame()).toContain(2);
  });

  it("should push frame score card to scoreboard", function(){
    scorecard.pushFrametoScoreBoard([2, 5]);
    expect(scorecard.getScoreBoard()).toContain([2, 5]);
  });

  it("should reset current frame values after 2 rolls", function(){
    scorecard.roll(2);
    scorecard.roll(3);
    expect(scorecard.getCurrentFrame()).toEqual([]);
  });

  it("should prepare normal frame before adding to the scoreboard", function(){
    scorecard.roll(5);
    scorecard.roll(2);
    expect(scorecard.getScoreBoard()).toEqual([[5, 2]]);
  });

  it("should prepare spare frame before adding to the scoreboard", function(){
    scorecard.roll(2);
    scorecard.roll(8);
    expect(scorecard.getScoreBoard()).toEqual([[2, "/"]]);
  });

  it("should prepare strike frame before adding to the scoreboard", function(){
    scorecard.roll(10);
    expect(scorecard.getScoreBoard()).toEqual([["X"]]);
  });

  it("should reset deduct correct pins from standing pins", function(){
    scorecard.roll(3);
    expect(scorecard._pinsStanding).toEqual(7);
  });

  it("should reset current frame values", function() {
    scorecard.roll(3);
    scorecard.roll(2);
    expect(scorecard.getCurrentFrame()).toEqual([]);
  });

});
