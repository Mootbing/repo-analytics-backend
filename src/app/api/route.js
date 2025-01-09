import {generateSVG, beautifyNumberString} from "./generateSVG";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const backgroundColor = searchParams.get("backgroundColor") || "black";
  const title = searchParams.get("title") || "Hello World";
  const titleColor = searchParams.get("titleColor") || "white";
  const numFiles = beautifyNumberString(searchParams.get("numFiles") || "1000");
  const totalLines = beautifyNumberString(searchParams.get("totalLines") || "0");
  const textColor = searchParams.get("textColor") || "white";

  const svgMarkup = generateSVG({
    backgroundColor,
    title,
    titleColor,
    numFiles,
    totalLines,
    textColor,
  });

  return new NextResponse(svgMarkup, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}
