/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React, { ReactElement, ReactNode } from 'react';

export interface DatatableThead {
    element: string | ReactNode | ReactElement
    className?: string,
}

interface Porps {
    tHead: DatatableThead[],
    data: any[],
    tBodyRender: (value: any, index: number) => any
}

const NewDatatable: React.FC<Porps> = ({ tBodyRender, tHead, data }) => {
    return (
        <table className='min-w-full border-collapse border'>
            <thead>
                <tr className='bg-gray-100 table-thead-tr'>
                    {
                        tHead.map((iten, i) => {
                            return (
                                <th className={`border px-4 py-2 table-thead-th ${iten.className}`} key={i}>
                                    {iten.element}
                                </th>
                            );
                        })
                    }
                    {/* <th className='border px-4 py-2 table-thead-th'>
                         <DataTableCheckBox titel='#' />
                    </th>
                    <th className='border px-4 py-2 table-thead-th'>Plant Name</th>
                    <th className='border px-4 py-2 table-thead-th'>Raw Material</th>
                    <th className='border px-4 py-2 table-thead-th'>Finish Goods</th>
                    <th className='border px-4 py-2 table-thead-th'>Scrap</th>
                    <th className='border px-4 py-2 table-thead-th'>Packaging Material</th>
                    <th className='border px-4 py-2 table-thead-th'>Status</th> */}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    const TD = tBodyRender(item, index);
                    return (
                        <tr key={index}>
                            {
                                Object.values(TD).map((itemth: any, i) => {
                                    return (
                                        <td className='table-tbody-td border px-4 py-2 text-center' key={i}>
                                            {/* <DataTableCheckBox titel={item.id.toString()} /> */}
                                            {itemth}
                                        </td>
                                    );
                                })
                            }

                        </tr>
                    );
                })}
                {/* <td
                className='table-tbody-td border px-4 py-2 text-center'>{item.plantName}</td>
                <td
                className='table-tbody-td border px-4 py-2 text-center'>{item.rawMaterial}</td>
                <td
                className='table-tbody-td border px-4 py-2 text-center'>{item.finishGoods}</td>
                <td
                className='table-tbody-td border px-4 py-2 text-center'>{item.scrap}</td>
                <td
            className='table-tbody-td border px-4 py-2 text-center'>{item.packagingMaterial}</td>
                <td
            className={`table-tbody-td border
            px-4 py-2 text-center ${item.status === 'Ready to Dispatch'
                ? 'text-green-500'
                : 'text-red-500'
                }`}
                >
                {item.status}
                </td> */}
            </tbody>
        </table>
    );
};

export default NewDatatable;
