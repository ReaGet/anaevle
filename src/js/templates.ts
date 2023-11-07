import { sumIfMoreThan } from "./utils";
import basicStar from "../img/photo.png";
import triangle from "../img/photo_1.png";

export function basic(values: number[]): string {
  const [wn1, wn2, wn3, wn4, wn5, wn6, pn1, pn2, pn3, pn4, pn5] = values;

  return `
    <div class="relative flex items-center justify-center w-[300px] h-[300px] text-[25px] text-white">
      <img src="${basicStar}" width="250" height="250">
      <div class="absolute top-[110px] left-0">${wn1}</div>
      <div class="absolute top-0">${wn2}</div>
      <div class="absolute top-[110px] right-0">${wn3}</div>
      <div class="absolute bottom-0 right-24">${wn4}</div>
      <div class="absolute bottom-0 left-24">${wn5}</div>
      <div class="absolute mt-16">${wn6}</div>
      <div class="absolute -mt-32 ml-40">${pn1}</div>
      <div class="absolute mt-36 ml-64">${pn2}</div>
      <div class="absolute bottom-16">${pn3}</div>
      <div class="absolute mt-36 mr-64">${pn4}</div>
      <div class="absolute -mt-32 mr-40">${pn5}</div>
    </div>
  `;
}

export function personality(values: number[]): string {
  const [wn1, wn2, wn3, wn4, wn5, wn6, pn1, pn2, pn3, pn4, pn5] = values;
  let starNumber2 = sumIfMoreThan(pn5 + wn1);
  let starNumber4 = sumIfMoreThan(pn1 + wn1);
  let starNumber6 = sumIfMoreThan(pn1 + pn5);
  let starNumber7 = sumIfMoreThan(starNumber2 + starNumber4);
  let starNumber8 = sumIfMoreThan(wn1 + starNumber6);

  return `
    <div class="flex flex-col items-center gap-16">
      <div class="text-[28px] text-white">ТРЕУГОЛЬНИК ЛИЧНОСТИ</div>
      <div class="relative flex items-center justify-center w-[300px] h-[300px] text-[25px] text-white">
        <img src="${triangle}" width="250" height="250">
        <div class="absolute -top-8 text-purple-600">${wn1}</div>
        <div class="absolute -bottom-6 -left-2 text-cyan-500">${pn5}</div>
        <div class="absolute  -bottom-6 -right-2 text-cyan-500">${pn1}</div>

        <div class="absolute mt-6 mr-[190px] text-pink-400">${starNumber2}</div>
        <div class="absolute mt-6 ml-[190px] text-pink-400">${starNumber4}</div>
        <div class="absolute -bottom-6 text-pink-400">${starNumber6}</div>
        <div class="absolute -ml-20 mb-8">${starNumber7}</div>
        <div class="absolute -mr-20 mb-8">${starNumber8}</div>
      </div>
    </div>
  `;
}