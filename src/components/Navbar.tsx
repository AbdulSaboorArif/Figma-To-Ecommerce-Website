import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Full Header  */}
      <header className="bg-white border-b border-gray-200 dark:bg-gray-900">
        <div className="lg:w-screen-[1440px] h-screen-[132px] sm:w-screen-[390px] h-screen-[69px] mx-auto p-4">
          {/* Brand Name  */}
          <div className=" flex justify-center items-center">
            <h1 className="lg:text-[24px] font-normal text-black leading-[29.52px] py-3 ">
              Avion
            </h1>
          </div>

          {/* Category Links */}
          <nav className="mt-4 ">
            <ul className="flex justify-center space-x-8 text-sm font-medium">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-white hover:underline text-[16px] "
                >
                  Plant pots
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-white hover:underline text-[16px] "
                >
                  Ceramics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-white hover:underline text-[16px]"
                >
                  Tables
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-white hover:underline text-[16px]"
                >
                  Chairs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-white hover:underline text-[16px]"
                >
                  Crockery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-white hover:underline text-[16px]"
                >
                  Tableware
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-white hover:underline text-[16px]"
                >
                  Cutlery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
