class BowlingScoreCard {
  constructor(rolls) {
    this.rolls = rolls;
    this.score = 0;
    this.rollIndex = 0;
  }

  calculateScore = () => {
    const maxFrames = 10;

    // Loop over each frame until the 10th frame
    for (let frame = 0; frame < maxFrames; frame++) {
      let frameScore = 0;

      frameScore = frame === maxFrames - 1
      ? this.calculateLastFrameScore()
      : this.calculateOtherFrameScore();

      this.score += frameScore;
    }

    return this.getGameResult();
  }


calculateOtherFrameScore = () => {
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
  const score = this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
  this.rollIndex += 2;
  return score;
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
    const score = this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] + this.rolls[this.rollIndex + 2];
    this.rollIndex += 3;
    return score;
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
    return this.score;
  }

  // getGameResult() {
  //   if (this.score === 300) {
  //     return { score: this.score, result: "strike" };
  //   } else if (this.score < 300 && this.score % 10 === 0) {
  //     return { score: this.score, result: "spare" };
  //   } else {
  //     return { score: this.score, result: "open" };
  //   }
  // }
}

module.exports = BowlingScoreCard