import "./css/index.css";
import { calculate } from "./js/utils";
import { basic, personality } from "./js/templates";

const _date = "03.04.1998";

const values = calculate(_date);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="flex flex-col items-center gap-40 min-h-screen bg-gray-950">
    ${basic(values)}
    ${personality([values[0], values[6], values[10]])}
  </div>
`;