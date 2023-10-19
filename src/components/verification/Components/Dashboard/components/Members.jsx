import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

import { customersData } from "../data/dummy";
import MoneyScroller from "./MoneyScroller";

const Members = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [expandedRows, setExpandedRows] = useState([]);

  // Function to handle row selection
  const handleRowSelection = (customerId) => {
    if (selectedRows.includes(customerId)) {
      setSelectedRows(selectedRows.filter((id) => id !== customerId));
      setExpandedRows(expandedRows.filter((id) => id !== customerId));
    } else {
      setSelectedRows([...selectedRows, customerId]);
    }
  };

  // Function to toggle the expansion of a row
  const toggleRowExpansion = (customerId) => {
    if (expandedRows.includes(customerId)) {
      setExpandedRows(expandedRows.filter((id) => id !== customerId));
    } else {
      setExpandedRows([...expandedRows, customerId]);
    }
  };
  
   // Function to handle row deletion
const handleDelete = () => {
  // Filter out the selected rows from the data
  const updatedData = customersData.filter(
    (customer) => !selectedRows.includes(customer.id)
  );

  customersData.length = 0; // Clear the original data array
  Array.prototype.push.apply(customersData, updatedData); // Replace with filtered data

  setSelectedRows([]);
  setExpandedRows([]); // Clear expanded rows when deleting
};


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-black-gradient rounded-3xl">
      <span className="font-semibold text-xl">Members<span className="ml-1 text-gray-200 text-xs font-thin">(Recent)</span></span>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Select</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Code</th>
            <th className="px-4 py-2">Money Shared($)<p className="text-gray-100 text-sm font-thin">Latest</p></th>
          </tr>
        </thead>
        <tbody>
          {customersData.map((customer) => (
            <React.Fragment key={customer.id}>
              <tr
                className="cursor-pointer"
                onClick={() => toggleRowExpansion(customer.id)}
              >
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(customer.id)}
                    onChange={() => handleRowSelection(customer.id)}
                    disabled={isEditing}
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <img
                      src={customer.image}
                      alt={`${customer.name}'s Image`}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    {customer.name}
                  </div>
                </td>
                <td className="px-4 py-2">{customer.code}</td>
                <td className="px-4 py-2 text-center">{customer.moneyShared}</td>
              </tr>
              {expandedRows.includes(customer.id) && (
                <tr>
                  <td colSpan="4" className="px-4 py-2">
                    <div
                      className="bg-gradient-to-br from-white via-gray-400 to-gray-300 h-48 p-4 rounded-md transition-max-h duration-500"
                      style={{ width: "100%" }}
                    >
                      <MoneyScroller/>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4">
        {selectedRows.length > 0 ? (
          <button
            className="bg-blue hover:bg-red-400 text-black px-4 py-2 rounded-md"
            onClick={handleDelete}
          >
            <FaTrash className="inline-block mr-2" /> Delete
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Members;
