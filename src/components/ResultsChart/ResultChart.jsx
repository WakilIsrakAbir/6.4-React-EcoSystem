import React from 'react';
import { Line, XAxis, YAxis } from 'recharts';
import { LineChart } from 'recharts';

const resultData = [
  {
    id: 1,
    name: "Liam Carter",
    math: 85,
    physics: 78,
    chemistry: 92,
  },
  {
    id: 2,
    name: "Olivia Martinez",
    math: 95,
    physics: 88,
    chemistry: 91,
  },
  {
    id: 3,
    name: "Noah Brooks",
    math: 72,
    physics: 65,
    chemistry: 70,
  },
  {
    id: 4,
    name: "Emma Nguyen",
    math: 88,
    physics: 92,
    chemistry: 85,
  },
  {
    id: 5,
    name: "Elijah Patel",
    math: 68,
    physics: 74,
    chemistry: 80,
  },
  {
    id: 6,
    name: "Ava Robinson",
    math: 98,
    physics: 95,
    chemistry: 96,
  },
  {
    id: 7,
    name: "James Foster",
    math: 75,
    physics: 70,
    chemistry: 68,
  },
  {
    id: 8,
    name: "Sophia Kim",
    math: 82,
    physics: 85,
    chemistry: 89,
  },
  {
    id: 9,
    name: "William Chen",
    math: 91,
    physics: 89,
    chemistry: 94,
  },
  {
    id: 10,
    name: "Mia Thompson",
    math: 79,
    physics: 82,
    chemistry: 77,
  },
];

const ResultChart = () => {
    return (
      <div className="">
        <LineChart width={1000} height={400} data={resultData}>
          <Line dataKey={"math"}></Line>
          <Line dataKey={"chemistry"} stroke="purple"></Line>
          {/* <XAxis dataKey={"name"}></XAxis>
          <YAxis dataKey={""}></YAxis> */}
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
        </LineChart>
      </div>
    );
};

export default ResultChart;