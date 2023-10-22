import React from "react";
import "./InformationTable.css";

export const InformationTable = ({ contacts }) => {
  return (
    <div className="informationTable">
      <table>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th className="table-cell">First name</th>
            <th className="table-cell">Last name</th>
            <th className="table-cell">Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="table-cell">{contact.userFirstname}</td>
                <td className="table-cell">{contact.userLastname}</td>
                <td className="table-cell">{contact.userPhone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
