import React from 'react';
import { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataResponse = use(marksPromise);
    // console.log(marksDataResponse);
    const marksData = marksDataResponse.data;
    // console.log(marksData);

    // data processing for the chart
    const marksChartData = marksData.map(stadentData => {
        const student = {
            id: stadentData.id,
            name: stadentData.name,
            physics: stadentData.marks.physics,
            math: stadentData.marks.math,
            chemistry: stadentData.marks.chemistry
        }
        const avg = (student.physics + student.math + student.chemistry)/3;
        student.avg = avg;
        return student;
    })
    console.log(marksChartData);
  return (
    <div>
      <BarChart width={1500} height={500} data={marksChartData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={"avg"} fill='yellow'></Bar>
        <Bar dataKey={"chemistry"} fill='green'></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;