import { IFormInteres } from "./FormInteres/IFormInteres";

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export const roundToTwo = (num: number): number => {
  return Math.round(num * 100) / 100;
};

export const CalculateLabels = (length: number): string[] => {
  const res = Array(Number(length))
    .fill(0)
    .map((el, index) => index + 1 + "year(s)");

  return res;
};

export const CalculateInvertion = (
  data: IFormInteres
): { WithInvertion: number[]; WithoutInvertion: number[] } => {
  const valuesWithInvertion: number[] = new Array();
  const valuesWithoutInvertion: number[] = new Array();

  let totalWithoutInvertion: number = Number(data.initialValue);
  let totalWithInvertion: number = data.initialValue;

  for (let i = 0; i < data.years; i++) {
    //calculate without invertion
    totalWithoutInvertion += Number(roundToTwo(data.anualAddition));
    valuesWithoutInvertion.push(totalWithoutInvertion);

    //calculate with invertion
    totalWithInvertion = roundToTwo(
      Number(totalWithInvertion + Number(data.anualAddition)) *
        (data.anualInterest / 100 + 1)
    );

    valuesWithInvertion.push(totalWithInvertion);
  }

  return {
    WithInvertion: valuesWithInvertion,
    WithoutInvertion: valuesWithoutInvertion,
  };
};
