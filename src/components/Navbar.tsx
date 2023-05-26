import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  //   const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //     e.preventDefault();

  //     const href = e.currentTarget.href;
  //     const tergetId = href.replace(/.*\#/, "");

  //     const element = document.getElementById(tergetId);

  //     element?.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   };
  const handleScroll = () => {
    console.log("clicked");
  };
  return (
    <header>
      <nav className="fixed bg-ansomarfa-light shadow-sm z-50 w-full top-0">
        <div className="container mx-auto my-3 px-16">
          <div className="flex items-center justify-between">
            <a href="/">
              <img className="" src="/images/logo.svg" alt="Workflow" />
            </a>
            <div className="">
              <div className="ml-10">
                <Link
                  href="#home"
                  className="text-ansomarfa-dark text-base hover:text-gray-700 px-3 font-normal"
                >
                  Home
                </Link>
                <Link
                  href="#portfolio"
                  className="text-ansomarfa-dark text-base hover:text-gray-700 px-3 font-normal"
                >
                  Portfolio
                </Link>
                <Link
                  href="#contact"
                  className="text-ansomarfa-dark text-base hover:text-gray-700 px-3 font-normal"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
