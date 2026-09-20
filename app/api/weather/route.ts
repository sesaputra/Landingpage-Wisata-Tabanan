import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const latitude = searchParams.get("latitude");
    const longitude = searchParams.get("longitude");

    // Validasi parameter
    if (!latitude || !longitude) {
      return NextResponse.json(
        {
          error: "Latitude and longitude are required",
        },
        {
          status: 400,
        },
      );
    }

    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${latitude}` +
      `&longitude=${longitude}` +
      `&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m` +
      `&timezone=Asia%2FMakassar`;

    const response = await fetch(url, {
      next: {
        revalidate: 900,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Weather API Error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch weather data",
      },
      {
        status: 500,
      },
    );
  }
}