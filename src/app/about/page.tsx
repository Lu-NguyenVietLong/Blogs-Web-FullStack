import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <h3 className="text-[#4f3bff] font-bold mb-[20px]">About Agency</h3>
        <h1 className="text-[50px] font-bold leading-[60px]">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="mt-[30px]">
          E-commerce websites have revolutionized the way we shop, making it
          possible to buy almost anything online.
        </p>
        <div className="mt-[30px]"></div>
        <div className="relative flex mt-[20px]">
          <div className="mr-[50px]">
            <h2 className="text-[#4f3bff] text-[30px] font-extrabold">10 K+</h2>
            <p className="text-[14px]">Year of experience</p>
          </div>
          <div className="mr-[50px]">
            <h2 className="text-[#4f3bff] text-[30px] font-extrabold ">
              234 K+
            </h2>
            <p className="text-[14px]">People reached</p>
          </div>
          <div>
            <h2 className="text-[#4f3bff] text-[30px] font-extrabold">5 K+</h2>
            <p className="text-[14px]">Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[400px] flex-1">
        <Image src="/about.png" alt="" fill />
      </div>
    </div>
  );
};

export default AboutPage;
