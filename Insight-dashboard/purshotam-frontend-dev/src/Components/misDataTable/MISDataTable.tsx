import React from 'react';

interface MISDataTableProps<T> {
  title: string;
  data: T[];
  columns: { header: string; accessor: keyof T }[];
  bgColorEven: string;
  bgColorOdd: string;
}

const MISDataTable = <T, >({
  title, data, columns, bgColorEven, bgColorOdd
}: MISDataTableProps<T>) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="min-w-full rounded-sm">
        <table className="min-w-full">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="px-4 py-2 text-left">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? bgColorEven : bgColorOdd,
                }}
                className="rounded-md"
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-2 ${colIndex === 0 ? 'rounded-l-full' : ''} ${index === data.length - 1 && colIndex === columns.length - 1 ? 'rounded-r-md' : ''}`}
                    style={{ borderBottom: '4px solid transparent' }}
                  >
                    {row[column.accessor] as unknown as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MISDataTable;
