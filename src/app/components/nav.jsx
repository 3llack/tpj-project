"use client";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const logoSize = {
    width: 105,
    height: 67,
  };

  return (
    <>
      <header className="nav" id="nav">
        <div className="container mx-auto sm:px-4 md:px-6 lg:px-8">
          <div className="-mx-2 flex flex-wrap items-center justify-between px-2">
            <div className="navSet flex items-center gap-2 px-2 py-2">
              <p className="text-xs sm:text-base">
                Welcome to The Prince Jacob Foundation
              </p>
              <ul className="flex gap-1">
                <li>
                  <a
                    href="https://www.instagram.com/prince.jacob.foundation?igsh=MXQ4NmJqcjV0bjJ3Nw=="
                    target="_blank"
                  >
                    <i className="fab fa-instagram"> </i>
                  </a>
                </li>

                <li>
                  <a href="https://facebook.com" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="https://web.whatsapp.com" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="ml-auto hidden sm:block">
              <p>
                <i className="fa-solid fa-envelope-circle-check px-6"></i>
                info: example@tpj.com
              </p>
            </div>
          </div>
        </div>
      </header>

      <nav className="header" id="header">
        <div className="container mx-auto">
          <div className="relative flex flex-wrap items-center justify-between px-1">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                className="w-28 md:w-[270px]"
                width={logoSize.width}
                height={logoSize.height}
                alt="the prince jacob foundation"
              />
            </div>

            {/* Wide Screen menu */}
            <div className="hidden md:block">
              <ul className="flex items-center">
                <li className="px-4">
                  <a href="#">About Us</a>
                </li>

                <li className="px-4">
                  <a href="#">Solutions</a>
                </li>

                <li className="px-4">
                  <a href="#">Media</a>
                </li>

                <li className="px-4">
                  <a href="#">Contact Us</a>
                </li>

                <li>
                  <a href="#">
                    <button className="px-5 py-5 transition-transform duration-100 ease-in hover:scale-[0.95] hover:!shadow-none">
                      Donate Now
                    </button>
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer md:hidden"
            >
              {isOpen ? (
                // TODO: Implement close sign
                <div>close</div>
              ) : (
                <Image
                  src="/images/menu.svg"
                  className="w-5"
                  width={18}
                  height={12}
                  alt="menu"
                />
              )}
            </div>

            {isOpen && (
              <div className="absolute top-full right-1 md:hidden">
                <ul className="grid justify-items-end gap-5 rounded-tl-3xl border bg-white px-2 py-5 shadow-xl">
                  <li className="px-4">
                    <a href="#">About Us</a>
                  </li>

                  <li className="px-4">
                    <a href="#">Solutions</a>
                  </li>

                  <li className="px-4">
                    <a href="#">Media</a>
                  </li>

                  <li className="px-4">
                    <a href="#">Contact Us</a>
                  </li>

                  <li>
                    <a href="#">
                      <button className="px-5 py-5 transition-transform duration-100 ease-in hover:scale-[0.95] hover:!shadow-none">
                        Donate Now
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
