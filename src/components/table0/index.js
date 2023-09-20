import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { PageButton } from '../../shared/Button';
 
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
];
 
function Table0() {
  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-x-auto">
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
      <CardFooter className="flex items-center justify-center mt-1">
            <PageButton className="rounded-l-md">
              <span className="sr-only">First</span>
              <ChevronDoubleLeftIcon className="h-3 w-3 text-gray-400" aria-hidden="true" />
            </PageButton>
            <PageButton>
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-3 w-3 text-gray-400" aria-hidden="true" />
            </PageButton>
	    <div className="p-2">
	      page 1 of 10
	    </div>
            <PageButton>
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-3 w-3 text-gray-400" aria-hidden="true" />
            </PageButton>
            <PageButton className="rounded-r-md">
              <span className="sr-only">Last</span>
              <ChevronDoubleRightIcon className="h-3 w-3 text-gray-400" aria-hidden="true" />
            </PageButton>
      </CardFooter>
    </Card>
  );
};

export default Table0;
