import * as React from "react";
import { Counter } from "@/app/counter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-full my-4">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index + 1}
                className="md:basis-1/2 lg:basis-1/4 text-center"
              >
                <Counter></Counter>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="container mx-auto p-4"></div>
    </>
  );
}
