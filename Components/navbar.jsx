import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <h1 className="text-md leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              <Link href="/">Web Banking </Link>
            </h1>
            <button
              className="text-white cursor-pointer text-md leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Menu
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
