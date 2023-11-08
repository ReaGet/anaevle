import "./css/index.css";
import { setupCalculation } from "./js/calculation";

// const _date = "03.04.1998";

// const values = calculate(_date);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="flex flex-col items-center gap-40 min-h-screen py-40">
    <div class="w-full max-w-[350px]">
      <form class="flex flex-col gap-4 w-full">
        <input
          class="p-6 rounded-lg text-2xl outline-none focus:ring-4 focus:ring-indigo-100"
          type="date"
          placeholder="dd.mm.yyyy"
          pattern="\d{2}.\d{2}.\d{4}"
        >
        <button class="p-6 rounded-lg text-2xl text-white bg-indigo-500">Расчитать</button>
      </form>
    </div>
    <div class="flex flex-col items-center gap-40" data-type="content"></div>
  </div>
`;

setupCalculation(document.querySelector("form")!);