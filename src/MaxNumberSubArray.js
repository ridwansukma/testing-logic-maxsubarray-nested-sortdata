function MaxNumberSubArray(params, number) {
  let MaxNumber = 0;
  let TempMaxNumber = 0;

  for (let index = 0; index < number; index++) {
    MaxNumber += params[index];
  }
  TempMaxNumber = MaxNumber;

  for (let index = number; index < params.length; index++) {
    TempMaxNumber = TempMaxNumber - params[index - number] + params[index];
    if (TempMaxNumber > MaxNumber) {
      MaxNumber = TempMaxNumber;
    }
  }

  return MaxNumber;
}

module.exports = MaxNumberSubArray;