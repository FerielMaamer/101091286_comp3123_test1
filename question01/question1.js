
const mixedArray = ["HALLOWEEN", 10, 25, false, "Carnaval", "Summer"];

const lowerCaseWords = (mixedArray) =>
  new Promise((res, rej) => {
    if (Array.isArray(mixedArray))
      res(
        mixedArray.filter((arr) => isNaN(arr)).map((word) => word.toLowerCase())
      );
    else rej("Error");
  });

lowerCaseWords(mixedArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));