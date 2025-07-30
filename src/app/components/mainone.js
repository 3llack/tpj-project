'use client';
import { useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";


export default function mainOne() {
  const donRef = useRef(null);
  const hovered = () => {
    donRef.current?.classList.add("headerHov")
  }
  const unHovered = () => {
    donRef.current?.classList.remove("headerHov")
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="main_one_left px-4 py-9 mx-5">
          <Image 
            src="/images/tpj_out.webp"
            width={700}
            height={250}
            alt='tpj-outreach'
          />
        </div>

        {/* Right Column */}
        <div className="main_one_right px-4 py-9 mx-5">
          <p className='py-6'>
            We are committed to providing children access to quality education, 
            supporting families with essential needs, and offering women and girls 
            the opportunity to thrive. Our vision is to create a community where every 
            child, regardless of background, can learn in a safe, inclusive environment 
            and acquire the skills needed to build a brighter future. We believe education 
            is the foundation of progress, so we invest in programs that supply schools 
            with essential materials, train teachers, and promote digital literacy to 
            prepare children for the modern world. <br /><br />
            For families facing economic challenges, we focus on delivering vital 
            resources such as nutritious meals, clothing, and healthcare support, 
            ensuring that no child is forced to choose between learning and survival. 
            By strengthening family units, we aim to reduce the cycles of poverty that 
            often hinder a child's ability to succeed academically and socially.
          </p>
          
          <a href='#'>
            <button 
              ref={donRef}
              onMouseEnter={hovered}
              onMouseLeave={unHovered}
              className='px-5 py-5'
            >
              Read More About Us
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
