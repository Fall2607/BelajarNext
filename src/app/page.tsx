import { Counter } from "@/app/counter";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center items-center">
        {[1, 2, 3, 4, 5].map((num) => (
          <Counter key={num} name={num.toString()} />
        ))}
      </div>
    </div>
  );
}
