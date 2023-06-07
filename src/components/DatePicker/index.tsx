import { type Dispatch, type SetStateAction } from "react";

type DatePickerProps = {
  setDate: Dispatch<SetStateAction<string>>;
};

export const DatePicker = (props: DatePickerProps) => {
  const { setDate } = props;

  return (
    <div className="p-5 ">
      <h1 className="text-4sm font-sans-serif flex text-center font-bold text-blue-600 ">
        Select Date
      </h1>
      <input type="date" onChange={(e) => setDate(e.target.value)}></input>
    </div>
  );
};
