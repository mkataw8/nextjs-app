import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Dispatch, SetStateAction, useState } from "react";
import { mock } from "node:test";
import { Mouse } from "puppeteer";
import { get } from "http";

type passData = {
  getTotals: number[];
  setGetTotals: Dispatch<SetStateAction<number[]>>;
  date: string;
  setData: any;
  data: any;
};
export const MyCalendar = (props: passData) => {
  const { setGetTotals, getTotals, date, data, setData } = props;

  // const [mockData, setMockData] = useState([
  //   {
  //     date: "12/12/2012",
  //     amount: 100,
  //   },
  //   {
  //     date: "12/13/2012",
  //     amount: -100,
  //   },
  //   {
  //     date: "12/14/2012",
  //     amount: 200,
  //   },
  //   {
  //     date: "12/15/2012",
  //     amount: 500,
  //   },
  // ]);

  const removeBox = () => {
    setGetTotals([]);
  };
  return (
    <div className="flex-col gap-1 space-x-4 ">
      <div className="flex space-x-1 ">
        {data.map((day) => {
          if (day.amount > 0) {
            return (
              <button
                data-te-toggle="tooltip"
                title={"Date = " + day.thedate + "\n" + "P/L = $" + day.amount}
                className=" transititext-primary  text-primary hover:text-primary-100 focus:text-primary-100 active:text-primary-100 dark:text-primary-100 dark:hover:text-primary-100 dark:focus:text-primary-100 dark:active:text-primary-1 duration-3 h-5 w-5 bg-green-600  ease-in-out "
              >
                <div></div>
              </button>
            );
          }
          if (day.amount < 0) {
            return <div className="h-5 w-5 bg-red-600 "></div>;
          }

          return <div className="h-5 w-5 bg-gray-400 "></div>;
        })}
      </div>
      <div className="flex justify-between">
        <button
          onClick={removeBox}
          className="mt-5 flex rounded  font-bold text-white underline  "
        >
          Clear
        </button>

        <button className="mt-5 flex  font-bold text-white underline "></button>
      </div>
    </div>
  );
};
