 import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import { customersData_rcvr } from '../data/dummy';
//import { Header } from '../components';

const Members_rcvr = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle row selection
  const handleRowSelection = (customerId) => {
    if (selectedRows.includes(customerId)) {
      setSelectedRows(selectedRows.filter(id => id !== customerId));
    } else {
      setSelectedRows([...selectedRows, customerId]);
    }
  };

  // Function to handle row deletion
  const handleDelete = () => {
    // Filter out the selected rows from the data
    const updatedData = customersData.filter(customer => !selectedRows.includes(customer.id));
    
    // Update the data source with the filtered data
    customersData.length = 0; // Clear the original data array
    Array.prototype.push.apply(customersData, updatedData); // Replace with filtered data
    
    // Clear the selected rows
    setSelectedRows([]);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-black-gradient rounded-3xl">
      <span className="font-semibold text-xl">Payors<span className="ml-1 text-gray-200 text-xs font-thin">(Recent)</span></span>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Select</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Relation</th>
            <th className="px-4 py-2">Money Recieved</th>
          </tr>
        </thead>
        <tbody>
          {customersData_rcvr.map((customer) => (
            <tr key={customer.id}>
              <td className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(customer.id)}
                  onChange={() => handleRowSelection(customer.id)}
                  disabled={isEditing}
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
              <td className="px-4 py-2">{customer.moneyShared}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4">
        {selectedRows.length > 0 ? (
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={handleDelete}
          >
            <FaTrash className="inline-block mr-2" /> Delete
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Members_rcvr;
