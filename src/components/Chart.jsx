import "./barchart.css";

import { CaluclateTotal } from "./Transaction";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";




export default function Chart({ transaction }) {

  const {totalExpense,totalIncome, Balance} = CaluclateTotal(transaction)
  const data = [{name:"Transaction", Income: totalIncome, expense:totalExpense },]
console.log(totalExpense);
  return (
    <section className="barSection">
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart
        data={data}
        barGap={60}
        margin={{top:30,right:30,left:30,bottom:0}}
>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Bar dataKey="Income" barSize={30} fill="green" barGap={20}/>
          <Bar dataKey="expense" barSize={30} fill="red" barGap={20}/>

        </BarChart>


      </ResponsiveContainer>


    </section>





  );
}
