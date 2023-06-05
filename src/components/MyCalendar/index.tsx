import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Dispatch, SetStateAction, useState } from "react";

type passData = {
  getTotals: number[];
  setGetTotals: Dispatch<SetStateAction<number[]>>;
  date: string;
  setData: any;
  data: any;
};
export const MyCalendar = (props: passData) => {
  const { setGetTotals, getTotals, date, data, setData } = props;

  const removeBox = () => {
    setData([]);
  };
  return (
    <div className=" w-72">
      <div className=" m-0  p-0  ">
        <div className="  grid grid-cols-12  gap-1  ">
          {data.map((day: any) => {
            if (day.amount > 0) {
              return (
                <button
                  data-te-toggle="tooltip"
                  title={"Date = " + day.data + "\n" + "P/L = $" + day.amount}
                  className=" transititext-primary  text-primary hover:text-primary-100 focus:text-primary-100 active:text-primary-100 dark:text-primary-100 dark:hover:text-primary-100 dark:focus:text-primary-100 dark:active:text-primary-1 duration-3 h-5 w-5 bg-green-600  ease-in-out "
                >
                  <div></div>
                </button>
              );
            }
            if (day.amount < 0) {
              return (
                <button
                  data-te-toggle="tooltip"
                  title={"Date = " + day.data + "\n" + "P/L = $" + day.amount}
                  className=" transititext-primary  text-primary hover:text-primary-100 focus:text-primary-100 active:text-primary-100 dark:text-primary-100 dark:hover:text-primary-100 dark:focus:text-primary-100 dark:active:text-primary-1 duration-3 h-5 w-5 bg-red-600  ease-in-out "
                >
                  <div></div>
                </button>
              );
            }
            if (day.amount === 0) {
              return (
                <button
                  data-te-toggle="tooltip"
                  title={"Date = " + day.data + "\n" + "P/L = $" + day.amount}
                  className=" transititext-primary  text-primary hover:text-primary-100 focus:text-primary-100 active:text-primary-100 dark:text-primary-100 dark:hover:text-primary-100 dark:focus:text-primary-100 dark:active:text-primary-1 duration-3 h-5 w-5 bg-blue-400  ease-in-out "
                >
                  <div></div>
                </button>
              );
            }
          })}
        </div>
        <div className="flex justify-between">
          <button className="mt-5 flex  font-bold text-white underline "></button>
        </div>
      </div>
    </div>
  );
};
