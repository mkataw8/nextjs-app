import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Calendar from "react-calendar";
import { Dispatch, SetStateAction, useState } from "react";
import { ZodNumber } from "zod";
import { val } from "cheerio/lib/api/attributes";

type AmountProps = {
  setAmount: Dispatch<SetStateAction<number>>;
  amount: number;
  getTotals: number[];
  setGetTotals: Dispatch<SetStateAction<number[]>>;
  date: string;
  setData: any;
  data: any;
};

export const Input = (props: AmountProps) => {
  let { setAmount, amount, getTotals, setGetTotals, data, setData, date } =
    props;
  const [total, setTotal] = useState<number[]>([]);

  const add = (total: number[], amount: number) => {
    setTotal([...total, amount]);
    setData([...data, { amount, data: date }]);
    setAmount(amount);
    setGetTotals([...total, amount]);
  };

  const clearTotal = () => {
    setTotal([]);
    setData([]);
  };
  const [value, setValue] = useState(amount);
  return (
    <>
      <div className=" mt-1  ">
        <input
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
          type="number"
          className="ml-2 py-2 pl-2"
          placeholder="Enter P/L for the day"
        ></input>
        <button
          onClick={(e) => {
            if (value) {
              add(total, value);
            }
          }}
          className="rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700 "
        >
          Add
        </button>
        <button
          onClick={clearTotal}
          className="rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700 "
        >
          Clear
        </button>
      </div>
    </>
  );
};
