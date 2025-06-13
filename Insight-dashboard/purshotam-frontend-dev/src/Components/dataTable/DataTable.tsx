import React from 'react';

interface Product {
  id: number;
  plantName: string;
  rawMaterial: string;
  finishGood: string;
  scrap: string;
  packagingMaterial: string;
  status: string;
  link: string;
}

interface DateTableProps {
  data: Product[];
  columns: {
    field?: keyof Product;
    header: string;
    body?: (rowData: Product) => JSX.Element;
    bgColor?: string;
  }[];
  headerBgColor?: string;
  headerTextColor?: string;
  rowBgColor?: string;
  rowTextColor?: string;
  borderColor?: string;
  borderWidth?: string;
}

const DateTable: React.FC<DateTableProps> = ({
  data,
  columns,
  headerBgColor = '',
  headerTextColor = '',
  rowBgColor = '',
  rowTextColor = '',
  borderColor = '', // Default border color
  borderWidth = '',
}) => {
  return (
    <table className={'min-w-full border-collapse rounded-lg overflow-hidden'}>
      <thead className={`${headerBgColor} h-12`}>
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
              className={`${headerTextColor} p-4 text-left ${borderColor} ${borderWidth}`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-left">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={` ${rowIndex % 2 === 0 ? '' : ''}`}>
            {columns.map((col, colIndex) => (
              <td
                key={colIndex}
                className={`p-4 border-b border-gray-300 ${rowTextColor} ${borderColor} ${borderWidth}`}
                style={{ backgroundColor: col.bgColor || rowBgColor }}
              >
                {col.body ? col.body(row) : row[col.field!]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DateTable;
