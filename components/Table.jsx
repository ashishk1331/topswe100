"use client";
import { getData } from "./data";
import { useStore } from "../store/useTasks";
import { useEffect, useState } from "react";

function Row(props) {
  const done = useStore((state) => state.done);
  const addID = useStore((state) => state.addID);
  const removeID = useStore((state) => state.removeID);

  const [ids, setIDS] = useState([]);
  useEffect(() => {
    setIDS(done);
  }, [done]);
  let { number, name: title, lc_link: url } = props;
  return (
    <tr>
      <td className="py-3 ps-4">
        <div className="flex items-center h-5">
          <input
            id="hs-table-checkbox-1"
            type="checkbox"
            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
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
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        <a href={url} className="underline">
          {title}
        </a>
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
                    Title
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {getData().map((data, index) => (
                  <Row key={index} number={index + 1} {...data} />
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-emerald-400">
                  <td></td>
                  <td></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                    Congratulations!
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
