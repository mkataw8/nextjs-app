import { type Dispatch, type SetStateAction } from "react";
import "react-calendar/dist/Calendar.css";

type passData = {
  setData: Dispatch<SetStateAction<{ date: string; amount: number }[]>>;
  data: { date: string; amount: number }[];
};

export const MyCalendar = (props: passData) => {
  const { data, setData } = props;

  const removeBox = () => {
    setData([]);
  };

  return (
    <div className="w-72">
      <div className="m-0 p-0">
        <div className="grid grid-cols-12 gap-1">
          {data.map((day) => {
            const { date, amount } = day;

            if (amount > 0) {
              return (
                <button
                  key={date} // Use a unique identifier for the key
                  data-te-toggle="tooltip"
                  title={`Date = ${date}\nP/L = $${amount}`}
                  className="transititext-primary text-primary hover:text-primary-100 focus:text-primary-100 active:text-primary-100 dark:text-primary-100 dark:hover:text-primary-100 dark:focus:text-primary-100 dark:active:text-primary-1 duration-3 h-5 w-5 bg-green-600 ease-in-out"
                >
                  <div></div>
                </button>
              );
            }
            if (amount < 0) {
              return (
                <button
                  key={date} // Use a unique identifier for the key
                  data-te-toggle="tooltip"
                  title={`Date = ${date}\nP/L = $${amount}`}
                  className="transititext-primary text-primary hover:text-primary-100 focus:text-primary-100 active:text-primary-100 dark:text-primary-100 dark:hover:text-primary-100 dark:focus:text-primary-100 dark:active:text-primary-1 duration-3 h-5 w-5 bg-red-600 ease-in-out"
                >
                  <div></div>
                </button>
              );
            }
            if (amount === 0) {
              return (
                <button
                  key={date} // Use a unique identifier for the key
                  data-te-toggle="tooltip"
                  title={`Date = ${date}\nP/L = $${amount}`}
                  className="transititext-primary text-primary hover:text-primary-100 focus:text-primary-100 active:text-primary-100 dark:text-primary-100 dark:hover:text-primary-100 dark:focus:text-primary-100 dark:active:text-primary-1 duration-3 h-5 w-5 bg-blue-400 ease-in-out"
                >
                  <div></div>
                </button>
              );
            }

            return null;
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <button className="mt-5 flex font-bold text-white underline"></button>
      </div>
    </div>
  );
};
