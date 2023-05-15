import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Calendar from "react-calendar";
import { useState } from "react";

type InputProps = {
  date: string;
};

export const Input = (props: InputProps) => {
  const [total, setTotal] = useState<number[]>([1200, 4500, 300]);
  const [amount, setAmount] = useState<number>();
  const add = (total: number[], amount: number) => {
    setTotal([...total, amount]);
  };

  const { date } = props;

  return (
    <>
      <div className=" mt-10  ">
        <input
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          type="number"
          className="py-2"
          placeholder="Enter P/L for the day"
        ></input>
        <button
          onClick={() => {
            if (amount) {
              add(total, amount);
            }
          }}
          className="rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700 "
        >
          Add
        </button>
        {date}
      </div>
    </>
  );
};
