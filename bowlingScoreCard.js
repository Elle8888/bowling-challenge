class BowlingScoreCard {
  constructor(rolls) {
    this.rolls = rolls;
    this.score = 0;
    this.rollIndex = 0;
  }

  calculateScore = () => {
    const maxFrames = 10;

    // Loop over each frame
    for (let frame = 0; frame < maxFrames; frame++) {
      let isTenthFrame = frame === maxFrames - 1;
      let frameScore = 0;

      if (isTenthFrame) {
        frameScore = this.calculateLastFrameScore();
      } else {
        frameScore = this.calculateOtherFrameScore();
      }

      this.score += frameScore;
    }

    return this.getGameResult();
  }

  calculateOtherFrameScore() {
    // Check for strike
    if (this.rolls[this.rollIndex] === 10) {
      this.rollIndex++;
      return 10 + this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
    }
    // Check for spare
    if (this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] === 10) {
      this.rollIndex += 2;
      return 10 + this.rolls[this.rollIndex];
    }
    // Otherwise, just add the score of the rolls for this frame
    this.rollIndex += 2;
    return this.rolls[this.rollIndex - 2] + this.rolls[this.rollIndex - 1];
  }

  calculateLastFrameScore = () => {
    // Check for strike in the 10th frame
    if (this.rolls[this.rollIndex] === 10) {
      this.rollIndex++;
      return 10 + this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
    }
    // Check for spare in the 10th frame
    if (this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] === 10) {
      this.rollIndex += 2;
      return 10 + this.rolls[this.rollIndex];
    }
    // Otherwise, just add the score of the three rolls for the 10th frame
    this.rollIndex += 3;
    return this.rolls[this.rollIndex - 3] + this.rolls[this.rollIndex - 2] + this.rolls[this.rollIndex - 1];
  }

  getGameResult = () => {
    // Check for gutter game
    if (this.score === 0) {
      return 'Gutter Game';
    }
    // Check for perfect game
    if (this.score === 300) {
      return 'Perfect Game';
    }
    //
  }
}
