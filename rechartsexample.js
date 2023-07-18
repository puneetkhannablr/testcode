import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const product1Data = [
  { date: '2023-07-01', salesCount: 50 },
  { date: '2023-07-02', salesCount: 40 },
  { date: '2023-07-03', salesCount: 45 },
  // Add more data points for product1 as needed
];

const product2Data = [
  { date: '2023-07-01', salesCount: 30 },
  { date: '2023-07-02', salesCount: 35 },
  { date: '2023-07-03', salesCount: 28 },
  // Add more data points for product2 as needed
];

// Merge data from product1Data and product2Data
const combinedData = product1Data.map((item, index) => ({
  date: item.date,
  product1: item.salesCount,
  product2: product2Data[index].salesCount,
}));

const MultiLineChart = () => {
  return (
    <LineChart width={600} height={400} data={combinedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="product1" stroke="#8884d8" name="Product 1" />
      <Line type="monotone" dataKey="product2" stroke="#82ca9d" name="Product 2" />
    </LineChart>
  );
};

export default MultiLineChart;

const combinedData = [];
const product1Data = jsonData.product1Data;
const product2Data = jsonData.product2Data;

for (let i = 0; i < product1Data.length; i++) {
  combinedData.push({
    date: product1Data[i].date,
    product1: product1Data[i].salesCount,
    product2: product2Data[i].salesCount,
  });
