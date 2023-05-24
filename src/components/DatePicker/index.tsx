import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Calendar from "react-calendar";
import { Dispatch, SetStateAction, useState, useEffect } from "react";

type DatePickerProps = {
  setDate: Dispatch<SetStateAction<string>>;
  date: string;
};

export const DatePicker = (props: DatePickerProps) => {
  const { setDate, date } = props;

  return (
    <div className="p-5 ">
      <h1 className="text-4sm font-sans-serif flex text-center font-bold text-blue-600 ">
        Select Date
      </h1>
      <input type="date" onChange={(e) => setDate(e.target.value)}></input>
    </div>
  );
};
