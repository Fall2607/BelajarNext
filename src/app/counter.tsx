"use client";
// import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function Counter({ name = "User" }: { name?: string }) {
  // const [count, setCount] = useState(0);
  return (
    <>
      {/* <Card className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
        <CardHeader className="w-full text-center border-b border-gray-300">
          <CardTitle className="font-bold">Counter ke - {name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          
        </CardContent>
      </Card> */}

      {/* <div className="p-1">
        <Card>
          <CardHeader className="w-full text-center border-b border-gray-300">
            <CardTitle className="font-bold">Counter ke - {name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <h2 className="text-xl font-bold text-blue-600">
              Counter: {count}
            </h2>
            <button
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </button>
            <button
              className="w-full px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </CardContent>
        </Card>
      </div> */}
      <div className="p-1">
        <Card>
          <CardHeader className="w-full">
            <CardTitle>
              <span className="text-muted-foreground text-xs font-normal">
                Posted On Monday, 26-07-2025
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className=" bg-[#E5F4FF] flex flex-col items-center">
            <Image
              src="/items/1.png"
              alt="kaoskaki_1"
              width={150}
              height={150}
            />
            <h2>Product ke - {name}</h2>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
