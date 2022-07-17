import Fuse from "fuse.js";

let fuse;

export const initFuse = (dataset) => {
  fuse = new Fuse(dataset, {
    keys: ["name"],
    includeScore: true,
    minMatchCharLength: 3,
  });
};

const parseSearchText = (text) =>
  text
    .replaceAll(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .filter((w) => w.length);

const getScoresFromSearch = ({ fuse, termsArray }) => {
  const scores = {};
  termsArray.forEach((term) => {
    const searchResults = fuse.search(term);

    searchResults.forEach((result) => {
      const { item, score: resultScore } = result;
      const { name } = item;

      if (scores[name]) {
        const { score, appearances } = scores[name];
        scores[name] = {
          ...scores[name],
          appearances: appearances + 1,
          score: score + resultScore,
        };
      } else {
        scores[name] = {
          score: resultScore,
          item,
          appearances: 1,
        };
      }
    });
  });

  return scores;
};

const findBestScoreTest = (scores) => {
  let minScore = Number.MAX_VALUE;
  let testItem = null;
  Object.values(scores).forEach(({ score, appearances, item }) => {
    const avgScore = score / appearances;
    if (avgScore < minScore) {
      minScore = avgScore;
      testItem = item;
    }
  });
  return testItem;
};

const analyzeTestResult = ({ testResult, threshold, range = 0.2 }) => {
  const lowerLimit = threshold - threshold * range;
  const upperLimit = threshold + threshold * range;
  if (testResult >= lowerLimit && testResult <= upperLimit) {
    return "Good";
  } else {
    return "Bad";
  }
};

export const getTestAnalyze = ({ testName, testResult }) => {
  if (!fuse) {
    return "Unknown";
  }

  const termsArray = parseSearchText(testName);
  const scores = getScoresFromSearch({ fuse, termsArray });
  const bestScoredTestItem = findBestScoreTest(scores);

  if (bestScoredTestItem) {
    const { name, threshold } = bestScoredTestItem;
    const testAnalyzedResult = analyzeTestResult({
      testResult,
      threshold,
    });
    return `${name} is ${testAnalyzedResult}!`;
  } else {
    return "Unknown";
  }
};
