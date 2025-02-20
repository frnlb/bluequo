import { ImageConnection, CardData } from "@/interfaces/common";


export function extractCardData(data: ImageConnection): CardData[] {
    return data.images.edges.map(edge => edge.node);
}