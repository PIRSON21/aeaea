import { getAllTrends } from "@/services/trends";
import { NextResponse } from "next/server";

type Trend = {
    number: number;
    id: string;
    title: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
};

export async function GET(): Promise<NextResponse<Trend[]>> {
    const trends = await getAllTrends();
    return NextResponse.json(trends);
}
