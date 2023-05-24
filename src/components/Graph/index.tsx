import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Calendar from "react-calendar";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { get } from "http";

type getBlock = {
  getTotals: number[];
  setGetTotals: Dispatch<SetStateAction<number[]>>;
  date: string;
};

export const Graph = (props: getBlock) => {
  const { getTotals, setGetTotals, date } = props;
  console.log(getTotals);
  useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            // label: new Date().getFullYear(),
            label: "Current",
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: getTotals,
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Progress",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",

          intersect: false,
        },

        scales: {
          xAxes: [
            {
              ticks: {},
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
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
