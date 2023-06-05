import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { SetStateAction, useState } from "react";
import Calendar from "react-calendar";
import { number } from "zod";
import { DateAdder } from "~/components/DateAdder";
import { DatePicker } from "~/components/DatePicker";
import { Graph } from "~/components/Graph";
import { Input } from "~/components/Input";
import { Login } from "~/components/Login";
import { MyCalendar } from "~/components/MyCalendar";
import { Profile } from "~/components/Profile";
import { Signup } from "~/components/Signup";
import { initFirebase } from "../Firebase/firebaseapp";
const Home: NextPage = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [getTotals, setGetTotals] = useState([]);

  const [data, setData] = useState([
    {
      date: date,
      amount: null,
    },
  ]);
  const [signIn, setSignIn] = useState(null);

  const app = initFirebase();
  console.log(app);

  return (
    <>
      {/* <Signup /> */}

      {/* <Profile /> */}
      <main className="flex min-h-screen justify-center  bg-gradient-to-r from-pink-500 to-yellow-500">
        <div className=" mt-10 flex  flex-col items-center ">
          <div>
            <header className=" text-9xl  font-bold text-white motion-safe:animate-pulse">
              P&L Journal
            </header>
            <h1 className="text-center text-2xl  italic text-white">
              Track Your Performance in the Market by recording your daily P&L'S
            </h1>
          </div>
          <DatePicker setDate={setDate} date={date} />
          <Input
            setAmount={setAmount}
            amount={amount}
            setGetTotals={setGetTotals}
            getTotals={getTotals}
            data={data}
            setData={setData}
            date={date}
            setDate={setDate}
          />
          <DateAdder
            date={date}
            amount={amount}
            setDate={setDate}
            setAmount={setAmount}
          />
          <MyCalendar
            setGetTotals={setGetTotals}
            getTotals={getTotals}
            date={date}
            data={data}
            setData={setData}
          />
          <Graph
            setGetTotals={setGetTotals}
            getTotals={getTotals}
            data={data}
            setData={setData}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
