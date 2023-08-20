// DataTable.js
import React from "react";
import { useTable } from "react-table";

type DataRecord = {
  period: number;
  stateDescription: string;
  sectorName: string;
  sales: number;
};

const DataTable: React.FC<{ data: DataRecord[] }> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Year",
        accessor: "period" as keyof DataRecord,
      },
      {
        Header: "State",
        accessor: "stateDescription" as keyof DataRecord,
      },
      {
        Header: "Sector",
        accessor: "sectorName" as keyof DataRecord,
      },
      {
        Header: "Sales",
        accessor: "sales" as keyof DataRecord,
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      {...getTableProps()}
      className="min-w-full overflow-hidden border border-gray-200 rounded-md shadow-md"
    >
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="bg-gray-100 text-gray-400 text-sm font-thin tracking-wider"
            key={index}
          >
            {headerGroup.headers.map((column, colIndex) => (
              <th
                {...column.getHeaderProps()}
                className="px-6 py-3 text-left"
                key={colIndex}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-white">
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="hover:bg-gray-100"
              key={rowIndex}
            >
              {row.cells.map((cell, cellIndex) => (
                <td
                  {...cell.getCellProps()}
                  className="px-6 py-4 whitespace-no-wrap border-b text-sm text-gray-500"
                  key={cellIndex}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
