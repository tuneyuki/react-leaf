import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Number", "Name"];
 
const TABLE_ROWS = [
  {
    name: "aaa社",
    number: "100",
  },
  {
    name: "bbb社",
    number: "90",
  },
  {
    name: "ccc社",
    number: "80",
  },
  {
    name: "ddd社",
    number: "70",
  },
  {
    name: "eee社",
    number: "60",
  },
  {
    name: "vvv社",
    number: "50",
  },
  {
    name: "www社",
    number: "40",
  },
  {
    name: "xxx社",
    number: "30",
  },
  {
    name: "yyy社",
    number: "20",
  },
  {
    name: "xxx社",
    number: "10",
  },
];
 
function Table1() {
  return (
    <Card className="h-full w-full">
      <CardBody>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
	      {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-gray-100 bg-gray-100 p-2 transition-colors hover:bg-gray-200"
                >
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{(<ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />)}
                  </Typography>
                </th>
	      ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ number, name }, index) => (
              <tr key={name} className="even:bg-gray-50/50">
                <td className="p-1">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {number}
                  </Typography>
                </td>
                <td className="p-1">
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="h-12 flex items-center justify-between p-2 my-1">
      </CardFooter>
    </Card>
  );
};

export default Table1;
