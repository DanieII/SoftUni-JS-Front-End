function loadingBar(progress) {
  const progressSymbolsCount = progress / 10;
  const remainingSymbolsCount = 10 - progressSymbolsCount;

  if (progress >= 100) {
    console.log("100% Complete!");
  } else {
    console.log(
      `${progress}% [${"%".repeat(progressSymbolsCount)}${".".repeat(
        remainingSymbolsCount,
      )}]\nStill loading...`,
    );
  }
}
