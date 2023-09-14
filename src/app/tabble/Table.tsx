"use client";

import "./table.scss";
import TableRow from "./TableRow";

import React, { useState, useEffect } from "react";
import { getUsers } from "../users.gateway/users.gateway";

type User = {
  name: string;
  photo: string;
  online: boolean;
  registration: string;
  age: number;
};

const Table: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      console.log(users);
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <th>our users</th>
        </tr>
      </thead>
      <tbody className="table-body">
        <tr className="table-row">
          <td className="tada-head">photo</td>
          <td className="tada-head">name</td>
          <td className="tada-head">status</td>
          <td className="tada-head">registration</td>
          <td className="tada-head">age</td>
          <td className="tada-head">action</td>
        </tr>
        {users.map((user) => (
          <TableRow
            key={user.name + user.age}
            age={user.age}
            name={user.name}
            registration={user.registration}
            photo={user.photo}
            online={user.online}
          />
        ))}
      </tbody>
    </table>
  );
};
export default Table;
