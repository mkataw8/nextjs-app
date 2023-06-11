import { useState, type Dispatch, type SetStateAction } from "react";

type AmountProps = {
  setAmount: Dispatch<SetStateAction<number>>;
  getTotals: number[];
  setGetTotals: Dispatch<SetStateAction<number[]>>;
  date: string;
  setData: Dispatch<SetStateAction<{ date: string; amount: number }[]>>;
  data: { date: string; amount: number }[];
  amount: number;
};

export const Input = (props: AmountProps) => {
  const { setAmount, amount, setGetTotals, data, setData, date, getTotals } =
    props;
  const [total, setTotal] = useState<number[]>([]);

  const add = (total: number[], amount: number) => {
    setTotal([...total, amount]);
    setData([...data, { amount, date }]);
    setAmount(amount);
    setGetTotals([...total, amount]);
  };

  const clearTotal = () => {
    setTotal([]);
    setData([]);
  };

  const [value, setValue] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);
    if (!isNaN(inputValue)) {
      setValue(inputValue);
    } else {
      setValue(inputValue);
    }
  };

  return (
    <>
      <div className="mt-1">
        <input
          onChange={handleInputChange}
          type="number"
          className="ml-2 py-2 pl-2"
          placeholder="Enter P/L for the day"
        />
        <button
          onClick={() => {
            if (value !== 0) {
              add(total, value);
            }
          }}
          className="rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700"
        >
          Add
        </button>
        <button
          onClick={clearTotal}
          className="rounded bg-blue-500 px-2 py-2 font-bold text-white hover:bg-blue-700"
        >
          Clear
        </button>
      </div>
    </>
  );
};
