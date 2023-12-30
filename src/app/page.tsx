import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <h1 className="text-[50px] font-bold leading-[60px]">
          This website was coded by Nguyen Viet Long
        </h1>
        <p className="mt-[40px]">
          E-commerce websites have revolutionized the way we shop, making it
          possible to buy almost anything online.
        </p>
        <div className="mt-[40px]">
          <button className="py-[13px] px-[15px] min-w-[120px] h-full bg-[#9437ff] rounded-[5px] mr-6">
            Learn More
          </button>
          <button className="py-[13px] px-[15px] min-w-[120px] h-full  bg-[#ffffff] text-[#000] rounded-[5px] mr-2">
            Contact
          </button>
        </div>
        <div className="relative h-[40px] w-[400px] mt-[40px]">
          <Image src="/brands.png" alt="" fill className="" />
        </div>
      </div>
      <div className="relative w-full h-[500px] flex-1">
        <Image src="/hero.gif" alt="" fill />
      </div>
    </div>
  );
}
