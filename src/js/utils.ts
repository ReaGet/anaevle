export function calculate(date: string) {
  let $date = date.split(".").map(Number);

  let firstWorkNumber: number,
      secondWorkNumber: number,
      thirdWorkNumber: number,
      fourthWorkNumber: number,
      fifthWorkNumber: number,
      sixthWorkNumber: number;

  let firstPairNumber: number,
      secondPairNumber: number,
      thirdPairNumber: number,
      fourthPairNumber: number,
      fifthPairNumber: number;


  firstWorkNumber = $date[0];
  secondWorkNumber = $date[1];
  thirdWorkNumber = ('' + $date[2]).split('').map(Number).reduce((a, b) => a + b);

  // Check if value is higher than 22
  firstWorkNumber = sumIfMoreThan(firstWorkNumber);
  thirdWorkNumber = sumIfMoreThan(thirdWorkNumber);

  fourthWorkNumber = firstWorkNumber + secondWorkNumber + thirdWorkNumber;
  fourthWorkNumber = sumIfMoreThan(fourthWorkNumber);

  fifthWorkNumber = firstWorkNumber + secondWorkNumber + thirdWorkNumber + fourthWorkNumber;
  fifthWorkNumber = sumIfMoreThan(fifthWorkNumber);

  sixthWorkNumber = firstWorkNumber + secondWorkNumber + thirdWorkNumber + fourthWorkNumber + fifthWorkNumber;
  sixthWorkNumber = sumIfMoreThan(sixthWorkNumber);

  firstPairNumber = sumIfMoreThan(firstWorkNumber + secondWorkNumber);
  secondPairNumber = sumIfMoreThan(secondWorkNumber + thirdWorkNumber);
  thirdPairNumber = sumIfMoreThan(thirdWorkNumber + fourthWorkNumber);
  fourthPairNumber = sumIfMoreThan(fourthWorkNumber + fifthWorkNumber);
  fifthPairNumber = sumIfMoreThan(fifthWorkNumber + firstWorkNumber);

  return [
    firstWorkNumber, secondWorkNumber, thirdWorkNumber, fourthWorkNumber, fifthWorkNumber, sixthWorkNumber,
    firstPairNumber, secondPairNumber, thirdPairNumber, fourthPairNumber, fifthPairNumber,
  ];
}

export function sumIfMoreThan(value: number, moreThan: number = 22): number {
  if (value > moreThan) {
      value = ('' + value).split('').map(Number).reduce((a, b) => a + b);
  }
  return value;
}