import { type Dispatch, type SetStateAction } from "react";

// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(" ");
// }

type DateAdderProps = {
  setDate: Dispatch<SetStateAction<string>>;
  date: string;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
};

export const DateAdder = (props: DateAdderProps) => {
  const { date, amount, setAmount } = props;
  const checkPL = (x: number) => {
    if (x > 0) {
      return <p className="text-green-700 ">${amount}</p>;
    } else {
      return <p className="text-red-700 ">${amount}</p>;
    }
  };
  const removeAll = () => {
    setAmount(0);
  };
  if (!amount || !date) {
    return (
      <div className=" m-5 box-border h-32 w-64 border-4 p-4 text-center"></div>
    );
  }
  return (
    <div className=" m-5 box-border h-32 w-64 border-4 p-4 text-center">
      <p className="text-white">{date}</p>
      <p>{checkPL(amount)}</p>

      <button onClick={removeAll}>Clear</button>
    </div>
  );
};
