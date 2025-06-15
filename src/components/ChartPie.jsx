import React from 'react';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { PieChart } from '@mui/x-charts/PieChart';
import { ChartPieIcon } from '@heroicons/react/24/outline';

export default function ChartPie() {
  return (
    <div>
      <Card className="card bg-blue-400">
        <CardHeader floated={false} shadow={false} color="transparent" className="flex flex-col gap-4 rounded-none md:flex-row md:items-center">
          <div className="w-max rounded-lg bg-sky-900 p-5 text-white">
            <ChartPieIcon className="h-6 w-6" />
          </div>
          <div>
            <Typography className="text-black" variant="h6" color="blue-gray">
              Monthly Deposit
            </Typography>
            <Typography variant="small" color="gray" className="max-w-sm font-normal text-black">
              Monthly deposits are data on every deposit that has been approved each month.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' },
                ],
              },
            ]}
            width={200}
            height={200}
          />
        </CardBody>
      </Card>
    </div>
  );
}
