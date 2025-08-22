'use client';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section>
        <div className="hero">
          <div className="bg-gradient-to-l from-[#3A5E57] to-[#383838] grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column */}
            <div className="text-white px-4 py-9 -mx-2">
              <h1>text</h1>
            </div>
    
            {/* Right Column */}
            <div className="hero_right px-4 py-9 -mx-2 flex items-center">
              <Image 
                src="/images/deg_out.webp"
                width={700}
                height={250}
                alt='promo-banner'
              />
            </div>
          </div>
        </div>
      </section>



      <hr className="border-0 h-[5px] text-white bg-[#c7b438]" />

      <a
        href="#"
        className="back-to-top active flex items-center justify-center"
        style={{ textDecoration: "none" }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}
