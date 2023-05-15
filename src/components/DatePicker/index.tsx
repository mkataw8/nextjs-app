import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Calendar from "react-calendar";
import { Dispatch, SetStateAction, useState } from "react";

type DatePickerProps = {
  setDate: Dispatch<SetStateAction<string>>;
  date: string;
};

export const DatePicker = (props: DatePickerProps) => {
  const { setDate, date } = props;

  return (
    <>
      <h1>Select Date : {date} </h1>
      <input type="date" onChange={(e) => setDate(e.target.value)}></input>
    </>
  );
};
