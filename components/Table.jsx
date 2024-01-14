"use client";
import { useStore } from "../store/useTasks";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import data from "./data.json";

function Checkbox({ number }) {
  const done = useStore((state) => state.done);
  const addID = useStore((state) => state.addID);
  const removeID = useStore((state) => state.removeID);

  const [ids, setIDS] = useState([]);
  useEffect(() => {
    setIDS(done);
  }, [done]);

  return (
    <div className="flex items-center h-5 m-auto">
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
  );
}

function sortByLength(array){
  return array.sort((a, b) => {
    if(a.length > b.length) return 1;
    else if(a.length === b.length) return 0;
    return -1;
  })
}

function Row(props) {
  const difficulty = {
    easy: "bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500",
    medium:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-green-200",
    hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200",
  };

  let { number, name, url, difficulty: diff, ID, tags } = props;
  tags = sortByLength(tags);
  return (
    <tr>
      <td className="py-3 ps-4 flex">
        <Checkbox number={number} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {number}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {ID}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200 flex items-center space-x-3">
        <span
          className={twMerge(
            "py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full",
            difficulty[diff],
          )}
        >
          {diff}
        </span>
        <a href={url} className="underline" target="_blank">
          {name}
        </a>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div className="flex space-x-1">
          {tags.slice(0, 3).map((tag, index) => (
            <div key={index + 1} class="p-1">
              <span class="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                {tag.replaceAll("-", " ")}
              </span>
            </div>
          ))}
          {tags.length > 3 && (
            <div key={4} class="p-1">
              <span class="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                +{tags.length - 3}
              </span>
            </div>
          )}
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
