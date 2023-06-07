import { type NextPage } from "next";

import { useState } from "react";
import { DateAdder } from "~/components/DateAdder";
import { DatePicker } from "~/components/DatePicker";
import { Graph } from "~/components/Graph";
import { Input } from "~/components/Input";
import { MyCalendar } from "~/components/MyCalendar";
import { Profile } from "~/components/Profile";
const Home: NextPage = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [getTotals, setGetTotals] = useState([0]);

  const [data, setData] = useState([
    {
      date: date,
      amount: 0,
    },
  ]);

  return (
    <>
      <Profile />
      <main className="flex min-h-screen justify-center  bg-gradient-to-r from-pink-500 to-yellow-500">
        <div className=" mt-10 flex  flex-col items-center ">
          <div>
            <header className=" text-9xl  font-bold text-white motion-safe:animate-pulse">
              P&L Journal
            </header>
            <h1 className="text-center text-2xl  italic text-white">
              Track Your Performance in the Market by recording your daily
              P&L&apos;S
            </h1>
          </div>
          <DatePicker setDate={setDate} />
          <Input
            setAmount={setAmount}
            amount={amount}
            getTotals={getTotals}
            data={data}
            setData={setData}
            date={date}
            setGetTotals={setGetTotals}
          />
          <DateAdder
            date={date}
            amount={amount}
            setDate={setDate}
            setAmount={setAmount}
          />
          <MyCalendar data={data} setData={setData} />
          <Graph getTotals={getTotals} date={""} ctx={undefined} />
        </div>
      </main>
    </>
  );
};

export default Home;
