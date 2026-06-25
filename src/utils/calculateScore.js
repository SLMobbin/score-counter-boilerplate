function calculateScore(points) {
  return points.reduce((a, b) => a + b, 0);
}
module.exports = calculateScore;
