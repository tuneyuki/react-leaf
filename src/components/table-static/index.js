import React, { useState, useEffect } from "react";
 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function TableStatic() {

  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);
  const [data5, setData5] = useState(0);
  const [data6, setData6] = useState(0);
  const [data7, setData7] = useState(0);
  const [data8, setData8] = useState(0);
  const [data9, setData9] = useState(0);
  const [data10, setData10] = useState(0);

  useEffect(() => {
    setData1(data1 + getRandomInt(100));
    setData2(data2 + getRandomInt(100));
    setData3(data3 + getRandomInt(100));
    setData4(data4 + getRandomInt(100));
    setData5(data5 + getRandomInt(100));
    setData6(data6 + getRandomInt(100));
    setData7(data7 + getRandomInt(100));
    setData8(data8 + getRandomInt(100));
    setData9(data9 + getRandomInt(100));
    setData10(data10 + getRandomInt(100));
  }, []);

  return (
    <table class="w-full text-sm text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="text-center py-2">
                </th>
                <th scope="col" class="text-center py-2">
                    Recoverd
                </th>
                <th scope="col" class="text-center py-2">
                    Continue
                </th>
                <th scope="col" class="text-center py-2">
                    Repercussion
                </th>
                <th scope="col" class="text-center py-2">
                    Type 1
                </th>
                <th scope="col" class="text-center py-2">
                    Type 2
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                    Company
                </th>
                <td class="text-center">
	            {data1}
                </td>
                <td class="text-center">
	            {data2}
                </td>
                <td class="text-center">
	            {data3}
                </td>
                <td class="text-center">
	            {data4}
                </td>
                <td class="text-center">
	            {data5}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white">
                    Connection
                </th>
                <td class="text-center">
	            {data6}
                </td>
                <td class="text-center">
	            {data7}
                </td>
                <td class="text-center">
	            {data8}
                </td>
                <td class="text-center">
	            {data9}
                </td>
                <td class="text-center">
	            {data10}
                </td>
            </tr>
        </tbody>
    </table>
  );
};

export default TableStatic;
