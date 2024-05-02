import React from "react";
import "./Analytics.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const contractData = [
  {
    name: "Contract",
    MonthToMonth: 4000,
    OneYear: 2400,
    TwoYear: 1200,
  },
];
const paymentmethodData = [
  {
    name: "PaymentMethod",
    BankTransfer: 2000,
    CreditCard: 1900,
    ElectronicCheck: 4000,
    MailedCheck: 2400,
  },
];
const internetserviceData = [
  {
    name: "PaymentMethod",
    DSL: 1700,
    FiberOptic: 3000,
    No: 200,
  },
];

export default function Analytics() {
  return (
    <div className="Analytics">
      <div className="featuredTitle">Analytics</div>
      <div className="features">
        <div className="item">
          <BarChart width={500} height={500} data={contractData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="MonthToMonth" fill="#8884d8" />
            <Bar dataKey="OneYear" fill="#82ca9d" />
            <Bar dataKey="TwoYear" fill="#FFC300" />
          </BarChart>
        </div>

        <div className="item">
          <BarChart width={500} height={500} data={internetserviceData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="DSL" fill="#8884d8" />
            <Bar dataKey="FiberOptic" fill="#82ca9d" />
            <Bar dataKey="No" fill="#FFC300" />
          </BarChart>
        </div>
      </div>
      <div className="itemM">
        <BarChart
          className="barChart"
          width={900}
          height={600}
          data={paymentmethodData}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar
            dataKey="BankTransfer"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="CreditCard"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
          <Bar
            dataKey="ElectronicCheck"
            fill="#FFC300"
            activeBar={<Rectangle fill="grey" stroke="blue" />}
          />
          <Bar
            dataKey="MailedCheck"
            fill="#C70039"
            activeBar={<Rectangle fill="red" stroke="blue" />}
          />
        </BarChart>
      </div>
    </div>
  );
}
