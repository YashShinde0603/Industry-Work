export interface InventoryType {
    date: string;
    totalKantaWeight: number;
    totalNetWeight: number;
    totalFG: number;
    totalScrap: number;
    totalPackingMaterial: number;
    plantName: string
}

export interface InventoryCardType {
    totalKantaWeight: number;
    totalNetWeight: number;
    totalFG: number;
    totalScrap: number;
    totalPackingMaterial: number;
}

export interface InventoryrowMatwrialDataType {
    materialType: string
    netWeight: number
    erpWeight: number
    kantaWeight: number
}
