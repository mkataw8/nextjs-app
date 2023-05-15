import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Calendar from "react-calendar";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { any } from "zod";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type DateAdderProps = {
  title: string;
};

export const DateAdder = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div className="w- pt-16">
      <div className="m- md:max-w-1xl w-screen px-4 sm:px-7 md:px-2">
        <h1></h1>
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-10 grid w-screen grid-cols-7 text-center text-xs text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className=" mt-2 grid w-screen grid-cols-7 text-lg">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// function Meeting({ meeting }: any) {
//   const startDateTime = parseISO(meeting.startDatetime);
//   const endDateTime = parseISO(meeting.endDatetime);

//   return (
//     <li className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100">
//       <img
//         src={meeting.imageUrl}
//         alt=""
//         className="h-10 w-10 flex-none rounded-full"
//       />
//       <div className="flex-auto">
//         <p className="text-gray-900">{meeting.name}</p>
//         <p className="mt-0.5">
//           <time dateTime={meeting.startDatetime}>
//             {format(startDateTime, "h:mm a")}
//           </time>{" "}
//           -{" "}
//           <time dateTime={meeting.endDatetime}>
//             {format(endDateTime, "h:mm a")}
//           </time>
//         </p>
//       </div>
//       <Menu
//         as="div"
//         className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
//       >
//         <div>
//           <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
//             <span className="sr-only">Open options</span>
//             <EllipsisHorizontalCircleIcon
//               className="h-6 w-6"
//               aria-hidden="true"
//             />
//           </Menu.Button>
//         </div>

//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <Menu.Item>
//                 {({ active }: { active: boolean }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                       "block px-4 py-2 text-sm"
//                     )}
//                   >
//                     Edit
//                   </a>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                       "block px-4 py-2 text-sm"
//                     )}
//                   >
//                     Cancel
//                   </a>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </li>
//   );
// }

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
