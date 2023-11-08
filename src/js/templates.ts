import { sumIfMoreThan } from "./utils";
import hardStar from "../img/photo.png";
import simpleStar from "../img/photo-2.png";
import triangle from "../img/photo_1.png";

export function basic(values: any): string {
  const {
    firstWorkNumber,
    secondWorkNumber,
    thirdWorkNumber,
    fourthWorkNumber,
    fifthWorkNumber,
    sixthWorkNumber,
    firstPairNumber,
    secondPairNumber,
    thirdPairNumber,
    fourthPairNumber,
    fifthPairNumber,
  } = values;

  return `
    <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white bg-gray-900 rounded-3xl">
      <img src="${hardStar}" width="250" height="250">
      <div class="absolute -mt-[260px]">${secondWorkNumber}</div>
      <div class="absolute -ml-[290px] -mt-16">${firstWorkNumber}</div>
      <div class="absolute -mr-[290px] -mt-16">${thirdWorkNumber}</div>
      <div class="absolute -mb-[270px] ml-56">${fourthWorkNumber}</div>
      <div class="absolute -mb-[270px] mr-[170px]">${fifthWorkNumber}</div>
      <div class="absolute mt-16">${sixthWorkNumber}</div>
      <div class="absolute -mt-32 ml-40">${secondPairNumber}</div>
      <div class="absolute mt-36 ml-64">${thirdPairNumber}</div>
      <div class="absolute -mb-80">${fourthPairNumber}</div>
      <div class="absolute mt-36 mr-64">${fifthPairNumber}</div>
      <div class="absolute -mt-32 mr-40">${firstPairNumber}</div>
    </div>
  `;
}

export function description(values: any, desc: any): string {
  const { firstWorkNumber } = values;
  return `
    <div class="flex flex-col gap-4 max-w-[600px] px-6 text-[14px]">
      ${desc[firstWorkNumber]}
    </div>
  `;
}

export function personality(values: any): string {
  const { firstWorkNumber, firstPairNumber, fifthPairNumber } = values;

  let starNumber2 = sumIfMoreThan(fifthPairNumber + firstWorkNumber);
  let starNumber4 = sumIfMoreThan(firstPairNumber + firstWorkNumber);
  let starNumber6 = sumIfMoreThan(firstPairNumber + fifthPairNumber);
  let starNumber7 = sumIfMoreThan(starNumber2 + starNumber4);
  let starNumber8 = sumIfMoreThan(firstWorkNumber + starNumber6);

  return `
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">ТРЕУГОЛЬНИК ЛИЧНОСТИ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${triangle}" width="250" height="250">
        <div class="absolute -mt-[300px] text-purple-600">${firstWorkNumber}</div>
        <div class="absolute -mb-[300px] -ml-[290px] text-cyan-500">${fifthPairNumber}</div>
        <div class="absolute  -mb-[300px] -mr-[290px] text-cyan-500">${firstPairNumber}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${starNumber2}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${starNumber4}</div>
        <div class="absolute -mb-[300px] text-pink-400">${starNumber6}</div>
        <div class="absolute -ml-20 mb-8">${starNumber7}</div>
        <div class="absolute -mr-20 mb-8">${starNumber8}</div>
      </div>
    </div>
  `;
}

export function spirituality(values: any): string {
  const { secondWorkNumber, firstPairNumber, secondPairNumber } = values;

  let starNumber2 = sumIfMoreThan(firstPairNumber + secondWorkNumber);
  let starNumber4 = sumIfMoreThan(secondPairNumber + secondWorkNumber);
  let starNumber6 = sumIfMoreThan(firstPairNumber + secondPairNumber);
  let starNumber7 = sumIfMoreThan(starNumber2 + starNumber4);
  let starNumber8 = sumIfMoreThan(secondWorkNumber + starNumber6);

  return `
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">ТРЕУГОЛЬНИК ДУХОВНОСТИ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${triangle}" width="250" height="250">
        <div class="absolute -mt-[300px] text-green-400">${secondWorkNumber}</div>
        <div class="absolute -mb-[300px] -ml-[290px] text-cyan-500">${firstPairNumber}</div>
        <div class="absolute  -mb-[300px] -mr-[290px] text-cyan-500">${secondPairNumber}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${starNumber2}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${starNumber4}</div>
        <div class="absolute -mb-[300px] text-pink-400">${starNumber6}</div>
        <div class="absolute -ml-20 mb-8">${starNumber7}</div>
        <div class="absolute -mr-20 mb-8">${starNumber8}</div>
      </div>
    </div>
  `;
}

export function money(values: any): string {
  const { thirdWorkNumber, secondPairNumber, thirdPairNumber } = values;

  let starNumber2 = sumIfMoreThan(secondPairNumber + thirdWorkNumber);
  let starNumber4 = sumIfMoreThan(thirdPairNumber + thirdWorkNumber);
  let starNumber6 = sumIfMoreThan(secondPairNumber + thirdPairNumber);
  let starNumber7 = sumIfMoreThan(starNumber2 + starNumber4);
  let starNumber8 = sumIfMoreThan(thirdWorkNumber + starNumber6);

  return `
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">ТРЕУГОЛЬНИК ДЕНЕЖНЫЙ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${triangle}" width="250" height="250">
        <div class="absolute -mt-[300px] text-red-600">${thirdWorkNumber}</div>
        <div class="absolute -mb-[300px] -ml-[290px] text-cyan-500">${secondPairNumber}</div>
        <div class="absolute  -mb-[300px] -mr-[290px] text-cyan-500">${thirdPairNumber}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${starNumber2}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${starNumber4}</div>
        <div class="absolute -mb-[300px] text-pink-400">${starNumber6}</div>
        <div class="absolute -ml-20 mb-8">${starNumber7}</div>
        <div class="absolute -mr-20 mb-8">${starNumber8}</div>
      </div>
    </div>
  `;
}

export function relations(values: any): string {
  const { fourthWorkNumber, thirdPairNumber, fourthPairNumber } = values;

  let starNumber2 = sumIfMoreThan(thirdPairNumber + fourthWorkNumber);
  let starNumber4 = sumIfMoreThan(fourthPairNumber + fourthWorkNumber);
  let starNumber6 = sumIfMoreThan(thirdPairNumber + fourthPairNumber);
  let starNumber7 = sumIfMoreThan(starNumber2 + starNumber4);
  let starNumber8 = sumIfMoreThan(fourthWorkNumber + starNumber6);

  return `
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">ТРЕУГОЛЬНИК ОТНОШЕНИЙ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${triangle}" width="250" height="250">
        <div class="absolute -mt-[300px] text-indigo-500">${fourthWorkNumber}</div>
        <div class="absolute -mb-[300px] -ml-[290px] text-cyan-500">${thirdPairNumber}</div>
        <div class="absolute  -mb-[300px] -mr-[290px] text-cyan-500">${fourthPairNumber}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${starNumber2}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${starNumber4}</div>
        <div class="absolute -mb-[300px] text-pink-400">${starNumber6}</div>
        <div class="absolute -ml-20 mb-8">${starNumber7}</div>
        <div class="absolute -mr-20 mb-8">${starNumber8}</div>
      </div>
    </div>
  `;
}

export function health(values: any): string {
  const { fourthWorkNumber, fifthWorkNumber, thirdPairNumber, fourthPairNumber, fifthPairNumber } = values;

  let starNumber2 = sumIfMoreThan(thirdPairNumber + fourthWorkNumber);
  let starNumber4 = sumIfMoreThan(fourthPairNumber + fourthWorkNumber);
  let starNumber6 = sumIfMoreThan(thirdPairNumber + fourthPairNumber);
  let starNumber7 = sumIfMoreThan(starNumber2 + starNumber4);
  let starNumber8 = sumIfMoreThan(fourthWorkNumber + starNumber6);

  return `
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">ТРЕУГОЛЬНИК ЗДОРОВЬЯ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${triangle}" width="250" height="250">
        <div class="absolute -mt-[300px] text-white">${fifthWorkNumber}</div>
        <div class="absolute -mb-[300px] -ml-[290px] text-cyan-500">${fourthPairNumber}</div>
        <div class="absolute  -mb-[300px] -mr-[290px] text-cyan-500">${fifthPairNumber}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${starNumber2}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${starNumber4}</div>
        <div class="absolute -mb-[300px] text-pink-400">${starNumber6}</div>
        <div class="absolute -ml-20 mb-8">${starNumber7}</div>
        <div class="absolute -mr-20 mb-8">${starNumber8}</div>
      </div>
    </div>
  `;
}

export function mistake(values: any): string {
  const { fourthWorkNumber, fifthWorkNumber } = values;

  let starNumber6 = sumIfMoreThan(fourthWorkNumber + fifthWorkNumber);

  return `
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">РОКОВАЯ ОШИБКА</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${simpleStar}" width="280" height="280">
        <div class="absolute w-6 h-6 -mb-56 -ml-3 rounded-full bg-orange-500"></div>
        <div class="absolute -mb-[210px] text-orange-500">${starNumber6}</div>
      </div>
    </div>
  `;
}

export function chakras(values: any): string {
  const { firstWorkNumber, thirdWorkNumber, firstPairNumber, secondPairNumber } = values;

  let starNumber2 = sumIfMoreThan(firstWorkNumber + firstPairNumber);
  let starNumber4 = sumIfMoreThan(firstPairNumber + secondPairNumber);
  let starNumber6 = sumIfMoreThan(secondPairNumber + thirdWorkNumber);

  return `
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">Чакры</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${simpleStar}" width="280" height="280">
        <div class="absolute -mt-32 -ml-[250px] text-indigo-500">${firstWorkNumber}</div>
        <div class="absolute -mt-32 -ml-[180px] text-white">${starNumber2}</div>
        <div class="absolute -mt-32 -ml-[110px] text-cyan-500">${firstPairNumber}</div>
        <div class="absolute -mt-32 text-red-600">${starNumber4}</div>
        <div class="absolute -mt-32 -mr-[110px] text-cyan-500">${secondPairNumber}</div>
        <div class="absolute -mt-32 -mr-[180px] text-white">${starNumber6}</div>
        <div class="absolute -mt-32 -mr-[250px] text-red-600">${thirdWorkNumber}</div>
      </div>
    </div>
  `;
}

export function soul(values: any): string {
  const {
    firstWorkNumber,
    secondWorkNumber,
    thirdWorkNumber,
    fourthWorkNumber,
    fifthWorkNumber,
    firstPairNumber,
    secondPairNumber,
    thirdPairNumber,
    fourthPairNumber,
    fifthPairNumber,
  } = values;

  let starNumber1 = sumIfMoreThan(firstWorkNumber + secondWorkNumber + thirdWorkNumber + fourthWorkNumber + fifthWorkNumber);
  let starNumber2 = sumIfMoreThan(firstPairNumber + secondPairNumber + thirdPairNumber + fourthPairNumber + fifthPairNumber);
  let starNumber3 = sumIfMoreThan(starNumber1 + starNumber2);

  return `
    <div class="flex flex-col items-center gap-16">
      <div class="text-[18px] text-violet-700 font-bold">КОД ДУШИ</div>
      <div class="relative flex items-center justify-center w-[350px] h-[350px] text-[25px] text-white font-semibold bg-gray-900 rounded-3xl">
        <img src="${simpleStar}" width="280" height="280">
        <div class="absolute w-16 mt-4 -ml-16 text-cyan-500 text-left">${starNumber1}</div>
        <div class="absolute w-16 mt-4 -mr-8 text-cyan-500 text-right">${starNumber3}</div>
        <div class="absolute w-16 -mb-32 -ml-4 text-cyan-500 text-center">${starNumber2}</div>
      </div>
    </div>
  `;
}