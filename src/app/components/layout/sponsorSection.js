'use client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from '../elements/button.jsx';

export default function sponsorSection() {
  return(
    <>
      <div className='sponsor'>
        <div className="bg-yellow-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-lg">
          <div className="max-w-xl p-10">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed">
              Empowerment of kids' <strong>EDUCATION</strong> is paramount to our global sustenance.
            </h2>
            
            <a href='#'>
              <Button 
                textColor="text-[#000]"
                text="Sponsor a Child!"
              />
            </a>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <img src="/images/children-books.webp" alt="Kids holding books" className="object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}