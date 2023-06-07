import { Chart, registerables, type ChartConfiguration } from "chart.js";
import { useEffect } from "react";

type getBlock = {
  getTotals: number[];
  date: string;
  ctx: any;
};

export const Graph = (props: getBlock) => {
  let chart: Chart;
  Chart.register(...registerables);
  const { getTotals, date } = props;
  console.log(getTotals);
  useEffect(() => {
    const config: ChartConfiguration<"line"> = {
      type: "line",
      data: {
        labels: [
          "September",
          "October",
          "November",
          "December",
          "April",
          "March",
          "May",
        ],
        datasets: [
          {
            label: "Current",
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: getTotals,
            fill: false,
          },
        ],
      },
      options: {
        // ...chart options
      },
    };

    const element = document.getElementById("line-chart") as HTMLCanvasElement;
    if (!element) {
      return;
    }

    const ctx = element.getContext("2d");
    if (!ctx) {
      return;
    }

    chart = new Chart(ctx, config);

    return () => {
      chart.destroy(); // Cleanup chart instance on component unmount
    };
  }, [getTotals]);

  return (
    <div className="bg-blueGray-700 relative mb-6 flex w-full min-w-0 flex-col break-words rounded shadow-lg">
      <div className="mb-0 rounded-t bg-transparent px-4 py-3">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-1 flex-grow">
            <h6 className="text-blueGray-100 mb-1 text-xs font-semibold uppercase">
              Overview
            </h6>
            <h2 className="text-xl font-semibold text-white"> Progress</h2>
          </div>
        </div>
      </div>

      <div className="flex-auto p-4">
        <div className="h-350-px relative">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  );
};
