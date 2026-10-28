import { Client } from "@/app/_components";

("use client");

const Page = () => {
  let count = 0;

  const handleMinus = () => {
    count--;
    console.log(count);
  };

  const handleAdd = () => {
    count++;
    console.log(count);
  };

  return (
    <div className="w-screen h-screen flex justify-centergap-5 items-center">
      <button
        className="text-xl text-black border px-4 py-2"
        onClick={handleMinus}
      >
        -
      </button>
      <p className="text-5xl">{count}</p>
      <button
        className="text-xl text-black border px-4 py-2"
        onClick={handleAdd}
      >
        +
      </button>
    </div>
  );
};

export default Page;
