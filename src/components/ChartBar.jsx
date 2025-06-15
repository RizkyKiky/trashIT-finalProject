import React from 'react';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ChartBarIcon } from '@heroicons/react/24/outline';

export default function ChartBar() {
  return (
    <div>
      <Card className="card bg-teal-200">
        <CardHeader floated={false} shadow={false} color="transparent" className="flex flex-col gap-4 rounded-none md:flex-row md:items-center">
          <div className="w-max rounded-lg bg-emerald-900 p-5 text-white">
            <ChartBarIcon className="h-6 w-6" />
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
          <BarChart
            xAxis={[
              {
                data: ['group A', 'group B', 'group C'],
                // Tidak perlu labels di sini, gunakan slotProps di bawah
              },
            ]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            height={300}
            slotProps={{
              axisLabel: { style: { fill: '#FFFFFF' } }, // Untuk label axis (judul axis)
              tickLabel: { style: { fill: '#FFFFFF' } }, // Untuk angka dan teks di axis
            }}
          />
        </CardBody>
      </Card>
    </div>
  );
}
