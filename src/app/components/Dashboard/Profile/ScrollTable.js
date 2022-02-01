import React from "react";
import "./ScrollTable.css";
function ScrollTable() {
  const tableInfo = [
    {
      name: "Aditya Kite",
      payment: "None",
    },
    {
      name: "Aditya Kite",
      payment: "None",
    },
    {
      name: "Aditya Kite",
      payment: "None",
    },
    {
      name: "Aditya Kite",
      payment: "None",
    },
    {
      name: "Aditya Kite",
      payment: "None",
    },
    {
      name: "Aditya Kite",
      payment: "None",
    },
    {
      name: "Aditya Kite",
      payment: "None",
    },
    {
      name: "Aditya Kite",
      payment: "None",
    },
    {
      name: "Aditya Kite",
      payment: "None",
    },
    {
      name: "Aditya Kite",
      payment: "None",
    },
    {
      name: "Aditya Kite",
      payment: "None",
    },
  ];
  const renderTable = (props, index) => {
    return (
      <tr>
        <th scope="row" class="col-2" style={{color:"purple"}}>
          {"\u2022"}
        </th>
        <td class="col-5">{props.name}</td>
        <td class="col-5">{props.payment}</td>
      </tr>
    );
  };
  return (
    <div class="table-responsive"  style={{
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "1rem",
      lineHeight: "1.5rem",

    }}>
      <table class="table table-fixed">
        <thead>
          <tr>
            <th scope="col" class="col-2 border-0"></th>
            <th scope="col" class="col-5 border-0">
              Name
            </th>
            <th scope="col" class="col-5 border-0">
              Payment Status
            </th>
          </tr>
        </thead>
        <tbody className="border border-3">{tableInfo.map(renderTable)}</tbody>
      </table>
    </div>
  );
}

export default ScrollTable;