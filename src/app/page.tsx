import Image from "next/image";
import Header from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="lg:w-[1440px] h-[704px] ">
        <div className="lg:w-[1280px] h-[584px] my-[60px] mx-[80px] bg-[#2A2548] grid grid-cols-2">
          <div>
            <h2 className="text-[32px]  text-white font-[400] pt-[60px] pl-[60px] lg:w-[513px] h-[90px]">
              The furniture brand for the future, with timeless designs
            </h2>
            <button className="bg-[#494665] text-white text-[16px] leading-6 font-[400] lg:w-[170px] h-[56px] my-[130px] mx-[60px] gap-10">
              View collection
            </button>
            <div className=" text-white text-[18px] leading-7 lg:w-[602px] h-[81px] ml-[60px] mt-[50px] ">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </div>
          </div>
          {/*  image section*/}
          <div className="ml-[120px] ">
            <Image
              src="/Image 12.jpg" // Corrected path
              alt="This is the image"
              width={520}
              height={580}
              className="h-[583px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
