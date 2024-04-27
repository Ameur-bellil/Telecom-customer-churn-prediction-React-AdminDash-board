import React from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "username", headerName: "User name", width: 200 },
  { field: "email", headerName: "E-mail", width: 200 },
  {
    field: "age",
    headerName: "Age",
    width: 200,
  },
  {
    field: "tel",
    headerName: "Phone number",
    width: 130,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <IconButton aria-label="Edit">
            <EditIcon className="userListEdit" />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon className="userListDelete" />
          </IconButton>
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    username: "John Snow",
    email: "johnsnow@gmail.com",
    age: 35,
    tel: "+216 11 11 11 11",
    transactions: "$120.00",
  },
  {
    id: 2,
    username: "Daenerys Targaryen",
    email: "daenerys@example.com",
    age: 28,
    tel: "+216 22 22 22 22",
    transactions: "$200.00",
  },
  {
    id: 3,
    username: "Tyrion Lannister",
    email: "tyrion@example.com",
    age: 42,
    tel: "+216 33 33 33 33",
    transactions: "$50.00",
  },
  {
    id: 4,
    username: "Arya Stark",
    email: "arya@example.com",
    age: 20,
    tel: "+216 44 44 44 44",
    transactions: "$80.00",
  },
  {
    id: 5,
    username: "Sansa Stark",
    email: "sansa@example.com",
    age: 25,
    tel: "+216 55 55 55 55",
    transactions: "$150.00",
  },
  {
    id: 6,
    username: "Cersei Lannister",
    email: "cersei@example.com",
    age: 40,
    tel: "+216 66 66 66 66",
    transactions: "$300.00",
  },
  {
    id: 7,
    username: "Jaime Lannister",
    email: "jaime@example.com",
    age: 45,
    tel: "+216 77 77 77 77",
    transactions: "$250.00",
  },
  {
    id: 8,
    username: "Bran Stark",
    email: "bran@example.com",
    age: 18,
    tel: "+216 88 88 88 88",
    transactions: "$50.00",
  },
  {
    id: 9,
    username: "Theon Greyjoy",
    email: "theon@example.com",
    age: 30,
    tel: "+216 99 99 99 99",
    transactions: "$100.00",
  },
  {
    id: 10,
    username: "Samwell Tarly",
    email: "samwell@example.com",
    age: 32,
    tel: "+216 10 10 10 10",
    transactions: "$120.00",
  },
];

export default function UserList() {
  return (
    <div className="userList">
      <div className="userListUser">
        <div
          className="dataGridContainer"
          style={{ height: "100%", width: "200" }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            disablePagination
            disableColumnFilter
          />
        </div>
      </div>
    </div>
  );
}
