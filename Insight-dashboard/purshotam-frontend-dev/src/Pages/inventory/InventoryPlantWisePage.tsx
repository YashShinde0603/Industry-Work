import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PieChart } from '../../Components/Index';
import { Tab } from '../../Components/shared';
import ChartWithTable from '../../Components/ChartWithTable';
import { InventoryFGDemoData, InventoryPGDemoData, InventoryRowMetialDemoData } from '../../lib/DemoData/Inventory';
import { InventoryrowMatwrialDataType } from '../../lib/DataType/InventoryDataType';

interface InventoryFGDataType {
  date?: string,
  item: string
  totalWeight: number
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const InventoryPlantWisePage: React.FC = () => {
  const { plantName } = useParams();
  const [inRMData, setInRMData] = useState<InventoryrowMatwrialDataType[]>([]);
  const [packagingMaterials, setPackagingMaterials] = useState<InventoryrowMatwrialDataType[]>([]);
  const [FG, setFG] = useState<InventoryFGDataType[]>([]);
  const rowMatwrialGet = useCallback(() => {
    const InRM: InventoryrowMatwrialDataType[] = InventoryRowMetialDemoData
      .filter((it) => it.plantName === (plantName === "P-GHZ" ? "PPPL GHZ" : plantName))
      .reduce((acc, current) => {
        const existingIndex = acc.findIndex((item) => item.materialType === current.materialType);
        if (existingIndex !== -1) {
          acc[existingIndex].erpWeight += current.erpWeight
          acc[existingIndex].kantaWeight += current.kantaWeight
          acc[existingIndex].netWeight += current.netWeight
        } else {
          acc.push({
            materialType: current.materialType,
            netWeight: current.netWeight,
            erpWeight: current.erpWeight,
            kantaWeight: current.kantaWeight,
          });
        }
        return acc;
      }, [] as InventoryrowMatwrialDataType[]);
    setInRMData(InRM);
  }, [plantName])

  const getPackagingMaterials = useCallback(() => {
    const InRM: InventoryrowMatwrialDataType[] = InventoryPGDemoData
      .filter((it) => it.plantName === (plantName === "P-GHZ" ? "PPPL GHZ" : plantName))
      .reduce((acc, current) => {
        const existingIndex = acc.findIndex((item) => item.materialType === current.materialType);
        if (existingIndex !== -1) {
          acc[existingIndex].erpWeight += current.erpWeight
          acc[existingIndex].kantaWeight += current.kantaWeight
          acc[existingIndex].netWeight += current.netWeight
        } else {
          acc.push({
            materialType: current.materialType,
            netWeight: current.netWeight,
            erpWeight: current.erpWeight,
            kantaWeight: current.kantaWeight,
          });
        }
        return acc;
      }, [] as InventoryrowMatwrialDataType[]);
    setPackagingMaterials(InRM);
  }, [plantName])

  const getFG = useCallback(() => {
    if (plantName === "P-GHZ" || plantName === "PPPL GHZ") {
      const InRM: InventoryFGDataType[] = InventoryFGDemoData
        .reduce((acc, current) => {
          const existingIndex = acc.findIndex((item) => item.item === current.item);
          if (existingIndex !== -1) {
            acc[existingIndex].totalWeight += current.totalWeight
          } else {
            acc.push({
              item: current.item,
              totalWeight: current.totalWeight
            });
          }
          return acc;
        }, [] as InventoryFGDataType[]);
      setFG(InRM);
    }
  }, [plantName])

  useEffect(() => {
    rowMatwrialGet();
    getPackagingMaterials();
    getFG();
  }, [getFG, rowMatwrialGet, getPackagingMaterials])

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Tab tabs={[]} />
      <ChartWithTable
        title='RAW MATERIAL'
        hader={[
          {
            title: ""
          },
          {
            title: "Net Weight"
          },
          {
            title: "ERP Weight"
          },
          {
            title: "Kanta Weight"
          }
        ]}
        body={inRMData}
        // footer={[]}
        // footerTitle='Total'
        chart={(
          <PieChart
            data={{
              labels: inRMData.map((it) => (it.materialType)),
              datasets: [
                {
                  label: 'Languages',
                  data: inRMData.map((it) => (it.netWeight)),
                  backgroundColor: inRMData.map(() => getRandomColor()),
                  borderColor: 'transparent',
                  borderWidth: 0,
                },
              ],
            }}
            legendPosition="right"
            padding={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 20,
            }}
          />
        )}
      />
      <br />
      <br />

      <ChartWithTable
        title='PACKAGING MATERIAL'
        hader={[
          {
            title: ""
          },
          {
            title: "Net Weight"
          },
          {
            title: "ERP Weight"
          },
          {
            title: "Kanta Weight"
          }
        ]}
        body={packagingMaterials}
        // footer={[]}
        // footerTitle='Total'
        chart={(
          <PieChart
            data={{
              labels: packagingMaterials.map((it) => (it.materialType)),
              datasets: [
                {
                  label: 'Languages',
                  data: packagingMaterials.map((it) => (it.netWeight)),
                  backgroundColor: packagingMaterials.map(() => getRandomColor()),
                  borderColor: 'transparent',
                  borderWidth: 0,
                },
              ],
            }}
            legendPosition="right"
            padding={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 20,
            }}
          />
        )}
      />
      <br />
      <br />
      <ChartWithTable
        title='FG Inventory'
        hader={[
          {
            title: ""
          },
          {
            title: "Total Weight"
          }
        ]}
        body={FG}
        bodycloam='2'
        chart={(
          <PieChart
            data={{
              labels: FG.map((it) => (it.item)),
              datasets: [
                {
                  label: 'Languages',
                  data: FG.map((it) => (it.totalWeight)),
                  backgroundColor: FG.map(() => getRandomColor()),
                  borderColor: 'transparent',
                  borderWidth: 0,
                },
              ],
            }}
            legendPosition="right"
            padding={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 20,
            }}
          />
        )}
      />
    </div>
  );
};

export default InventoryPlantWisePage;
