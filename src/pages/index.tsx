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
      amount: amount,
    },
  ]);

  return (
    <>
      <Profile />
      <main className="min-w-screen flex min-h-screen justify-center  bg-gradient-to-r from-pink-500 to-yellow-500">
        <div className=" mt-10 flex  flex-col items-center ">
          <div>
            <header className="  text-center text-6xl font-bold  text-white motion-safe:animate-pulse sm:text-9xl">
              P&L Journal
            </header>
            <h1 className="text-center  italic text-white  sm:text-2xl ">
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
          <Graph data={data} getTotals={getTotals} date={""} ctx={undefined} />
        </div>
      </main>
    </>
  );
};

export default Home;
