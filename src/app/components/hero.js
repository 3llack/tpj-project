'use client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Banner from "next/image";


export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column */}
        <div className="hero_left px-4 py-9 -mx-2">
          <h2 className="text-xl font-bold mb-4">On a mission to break the cycle of poverty through</h2>
          <ul>
            <li className='py-4'>
              <i className="fa-solid fa-graduation-cap px-9"></i>
              Education
            </li>

            <li className='py-4'>
              <i className="fa-solid fa-business-time px-9"></i>
              Entrepreneurship
            </li>

            <li className='py-4'>
              <i className="fa-solid fa-hands-holding px-9"></i>
              Healthcare
            </li>

            <li className='py-4'>
              <i className="fa-solid fa-people-line px-9"></i>
              Community Development
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="hero_right px-4 py-9 -mx-2 flex items-center">
          <Banner 
            src="/images/say2deg.webp"
            width={700}
            height={250}
            alt='promo-banner'
          />
        </div>
      </div>
    </>
  );
}
