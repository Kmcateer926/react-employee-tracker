import React from "react";
import moment from "moment";

const Table = ({ picture, first, last, phone, email, dob }) => {
  const fullName = `${first} ${last}`;
  const alt = `${fullName}'s Image`;
  return (
    <tr>
      <td>
        <img src={picture} alt={alt} />
      </td>
      <td>{fullName}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{moment(dob).format("MM-DD-YYYY")}</td>
    </tr>
  );
};

export default Table;