/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";

export interface ChartWithTableHeader {
    title: string
    className?: string
}

// export interface ChartWithTableBody {
//     name: string
//     percentage: string
//     className?: string
//     nameClassName?: string
//     percentageClassName?: string
// }

interface Props {
    body: any[],
    hader: ChartWithTableHeader[],
    title: string
    footerTitle?: string
    footer?: ChartWithTableHeader[]
    chart?: ReactNode
    bodycloam?: string
}

const ChartWithTable: React.FC<Props> = ({
    body,
    hader,
    title,
    footer,
    footerTitle,
    chart,
    bodycloam
}) => {
    return (
        <div className="border rounded-xl overflow-x-auto w-full">
            {/* Header */}
            <div className={`grid grid-cols-4 border-b border-t bg-gray-100 p-5`} style={{ justifyContent: 'space-between' }}>
                <div className="col-span-1 flex justify-center items-center">
                    <div className="font-semibold text-gray-700">{title}</div>
                </div>

                <div className={`col-span-3 grid grid-cols-${bodycloam ?? 4} gap-y-1`}>
                    {
                        hader.map((item, i) => {
                            return (
                                <div className={`text-center font-semibold text-gray-700 ${item.className}`} key={i}>{item.title}</div>
                            )
                        })
                    }
                </div>

            </div>

            {/* Content */}
            <div className="grid grid-cols-4 border-b border-t border-gray-200">
                {/* Pie Chart */}
                <div className="col-span-1 flex justify-center items-center">
                    {chart}
                </div>

                {/* Data Columns */}
                <div className={`col-span-3 grid grid-cols-${bodycloam ?? 4} gap-y-1`}>
                    {body.map((item) => (
                        Object.values(item).map((it: any, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`flex flex-row text-center ml-20 items-center gap-2 `}
                                    style={{
                                        display: "contents"
                                    }}
                                >
                                    <span className={`text-gray-700 text-center`} key={i}>
                                        {it}
                                    </span>
                                </div>
                            )
                        })
                    ))}
                </div>
            </div>
            {/* <span
                className={`text-gray-900 font-bold ${item.percentageClassName}`}
            >
                {item.percentage}
            </span> */}

            {/* Footer */}
            <div className="grid grid-cols-4 bg-gray-100 p-4">
                <div className="font-semibold text-gray-700">{footerTitle}</div>
                {
                    footer?.map((item, i) => {
                        return (
                            <div className={`text-center text-gray-900 font-semibold ${item.className}`} key={i}>{item.title}</div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ChartWithTable;
