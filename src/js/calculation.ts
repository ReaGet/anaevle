import { calculate } from "./utils";
import { basic, chakras, health, mistake, money, personality, relations, soul, spirituality } from "./templates";

const formatter = new Intl.DateTimeFormat(["ru-RU"]);

export function setupCalculation(element: HTMLFormElement) {
  element.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = element.querySelector("input")!;
    if (input.value) {
      const content = document.querySelector("[data-type=content]")!;
      content.innerHTML = getMarkup(
        formatter.format(new Date(input?.value))
      );
    }
  });
}

function getMarkup(date: string) {
  const values = calculate(date);

  return `
    ${basic(values)}
    ${personality(values)}
    ${spirituality(values)}
    ${money(values)}
    ${relations(values)}
    ${health(values)}
    ${mistake(values)}
    ${chakras(values)}
    ${soul(values)}
  `;
}