const minimizeHunger = (arr) => {
  let sandwhiches = arr.shift();
  const totalDiff = (arr) => arr.reduce((prev, cur, index) => (index === 0 ? 0 : prev + Math.abs(cur - arr[index - 1])), 0);
  let finalDiff = totalDiff(arr);

  if (sandwhiches < arr.length && finalDiff === 0) return 0;

  while (sandwhiches > 0 && finalDiff > 0) {
    let possibilities = arr.map((_, index) => {
      let possibility = [...arr];
      possibility[index]--;
      return possibility;
    });

    arr = possibilities.reduce((prev, cur) => (totalDiff(prev) < totalDiff(cur) ? prev : cur));
    finalDiff = totalDiff(arr);
    sandwhiches--;
  }

  return finalDiff;
};
