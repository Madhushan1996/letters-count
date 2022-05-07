export const calculator = (inputString) => {
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
  }
  const removeDot = replaceAll(inputString, ".", "");
  const removeLeftBrackets = replaceAll(removeDot, "(", "");
  const removeRightBrackets = replaceAll(removeLeftBrackets, ")", "");
  const removeDash = replaceAll(removeRightBrackets, "-", " ");
  const removeNewLine = replaceAll(removeDash, "\n", " ");
  const wordsArr = removeNewLine.split(" ");

  const inputArr = wordsArr.filter((element) => isNaN(element));

  let lengthArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    const currentWord = inputArr[i];

    const isFound = lengthArr.some((element) => {
      if (element.length === currentWord.length) {
        return true;
      }
      return false;
    });
    if (isFound) {
      lengthArr.find(
        (element) => element.length === currentWord.length
      ).count += 1;
    } else {
      lengthArr.push({
        name: `${currentWord.length} letters words`,
        length: currentWord.length,
        count: 1,
      });
    }

    if (currentWord.length === 20) {
      console.log(currentWord);
    }
  }
  const filterArray = lengthArr.sort((a, b) => {
    return a.length - b.length;
  });

  const finalArray = filterArray.filter((element) => element.length !== 0);

  return finalArray;
};
