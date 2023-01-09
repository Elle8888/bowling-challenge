const BowlingScoreCard = require('./bowlingScoreCard'); // This is the file where the BowlingScoreCard class is defined

it('calculateScore', () => {
  const rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
  const scoreCard = new BowlingScoreCard(rolls);
  expect(scoreCard.calculateScore()).toBe(133);
});

it('calculateScore with gutter game', () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const scoreCard = new BowlingScoreCard(rolls);
  expect(scoreCard.calculateScore()).toBe('Gutter Game');
});

it('calculateScore with perfect game', () => {
  const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  const scoreCard = new BowlingScoreCard(rolls);
  expect(scoreCard.calculateScore()).toBe('Perfect Game');
});

it('calculateScore with strike in the 10th frame', () => {
  const scoreCard = new BowlingScoreCard([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 , 1, 2, 10, 10, 10]);
  const score = scoreCard.calculateScore();
  expect(score).toBe(57);
});

it('calculateScore with spare in the 10th frame', () => {
  const scoreCard = new BowlingScoreCard([1, 2, 3, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 5, 10]);
  const score = scoreCard.calculateScore();
  expect(score).toBe(93);
});

it('calculateScore with the 10th frame that is neither a strike nor spare', () => {
  const scoreCard = new BowlingScoreCard([1, 2, 3, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 10]);
  const score = scoreCard.calculateScore();
  expect(score).toBe(82);
});

it('calculateScore with multiple spares in a row', () => {
    const rolls = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    const scoreCard = new BowlingScoreCard(rolls);
    expect(scoreCard.calculateScore()).toBe(150);
  });

it('calculateScore with all rolls as 1', () => {
    const rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const scoreCard = new BowlingScoreCard(rolls);
    expect(scoreCard.calculateScore()).toBe(20);
  });

it('calculateScore with alternating rolls of 1 and 9', () => {
    const rolls = [1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 9];
    const scoreCard = new BowlingScoreCard(rolls);
    expect(scoreCard.calculateScore()).toBe(118);
  });

it('calculateScore returns nan with missing input from bonus roll', () => {
    const rolls = [1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9];
    const scoreCard = new BowlingScoreCard(rolls);
    expect(scoreCard.calculateScore()).toBe(NaN);
  });