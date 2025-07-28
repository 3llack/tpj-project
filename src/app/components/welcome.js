'use client';
import { useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "next/image"


export default function Home() {
  const imgSize = {
    width: 150,
    height: 75
  };

  const donRef = useRef(null);
  const hovered = () => {
    donRef.current?.classList.add("headerHov", "animate-slide-up-down")
  }
  const unHovered = () => {
    donRef.current?.classList.remove("headerHov", "animate-slide-up-down")
  }

  return (
    <>
      <nav className="nav" id="nav">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between px-2 -mx-2">
            <div className="flex items-center px-2 py-2 navSet">
              <p className="px-2">Welcome to The Prince Jacob Foundation</p>
              <ul className="flex">
                <li className="px-2">
                  <a href="https://instagram.com" target="_blank">
                    <i className="fab fa-instagram"> </i>
                  </a>
                </li>

                <li className="px-2">
                  <a href="https://facebook.com" target="_blank">
                    <i className="fab fa-facebook"></i>  
                  </a>
                </li>

                <li className="px-2">
                  <a href="https://twitter.com" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li className="px-2">
                  <a href="https://web.whatsapp.com" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="ml-auto">
              <p>
                <i className="fa-solid fa-envelope-circle-check px-6"></i>
                info: example@tpj.com
              </p>
            </div>
          </div>
        </div>
      </nav>


      <header className='header' id='header'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between px-2 -mx-2">
            <div className='flex items-center'>
              <Logo 
                src="/images/logo.png" 
                width={imgSize.width}
                height={imgSize.height}
                alt='the prince jacob foundation' 
              />
            </div>

            <div className='ml-auto'>
              <ul className='flex items-center'>
                <li className='px-4'>
                  <a href='#'>About Us</a>
                </li>

                <li className='px-4'>
                  <a href='#'>Solutions</a>
                </li>

                <li className='px-4'>
                  <a href='#'>Media</a>
                </li>

                <li className='px-4'>
                  <a href='#'>Contact Us</a>
                </li>

                <li>
                  <a href='#'>
                    <button 
                      ref={donRef}
                      onMouseEnter={hovered}
                      onMouseLeave={unHovered}
                      className='px-5 py-5'
                    >
                      Donate Now
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
