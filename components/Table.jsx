"use client";
import { useStore } from "../store/useTasks";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import data from "./data.json";

function Row(props) {
  const difficulty = {
    easy: "bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500",
    medium:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-green-200",
    hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200",
  };

  const done = useStore((state) => state.done);
  const addID = useStore((state) => state.addID);
  const removeID = useStore((state) => state.removeID);

  const [ids, setIDS] = useState([]);
  useEffect(() => {
    setIDS(done);
  }, [done]);
  let { number, name: title, url } = props;
  return (
    <tr>
      <td className="py-3 ps-4">
        <div className="flex items-center h-5">
          <input
            id="hs-table-checkbox-1"
            type="checkbox"
            className="border-gray-600 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            checked={ids.includes(number)}
            onChange={(e) => {
              if (e.target.checked) {
                addID(number);
              } else {
                removeID(number);
              }
            }}
          />
          <label htmlFor="hs-table-checkbox-1" className="sr-only">
            Checkbox
          </label>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {number}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {props.ID}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        <a href={url} className="underline" target="_blank">
          {title}
        </a>
      </td>
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-6 py-3">
          <span
            className={twMerge(
              "py-1 px-3 inline-flex items-center gap-x-1 text-xs font-medium rounded-full",
              difficulty[props.difficulty],
            )}
          >
            {props.difficulty}
          </span>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div className="w-full flex gap-1">
          {props.tags.map((tag, index) => (
            <div key={index + 1} class="p-1">
              <span class="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </td>
    </tr>
  );
}

export default function (props) {
  return (
    <div className="flex flex-col w-full">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Checkbox
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Difficulty
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Tags
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((data, index) => (
                  <Row key={data.ID} number={index + 1} {...data} />
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-emerald-400">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    Congratulations!
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
