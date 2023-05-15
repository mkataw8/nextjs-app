import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
import { number } from "zod";
import { DateAdder } from "~/components/DateAdder";
import { DatePicker } from "~/components/DatePicker";
import { Input } from "~/components/Input";

const Home: NextPage = () => {
  const [date, setDate] = useState("");

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500">
        <DatePicker setDate={setDate} date={date} />
        <Input date={date} />
      </main>
    </>
  );
};

export default Home;
