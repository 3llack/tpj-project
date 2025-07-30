'use client';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function cta_one() {
  return(
    <>
      <div className='cta' id='cta'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center px-2 -mx-2">
            <h2 className='text-center cta_text'>
              We are committed to providing children access
              to quality education, supporting families with 
              essential needs, and offering women and girls 
              the opportunity to thrive
            </h2>
          </div>


          <div className='flex flex-wrap justify-center items-center py-9'>
            <a href='/' target='_blank'>
              <span className='cta_arrow'>
                <i className="fa-solid fa-arrow-down"></i>
              </span>
            </a>
          </div>
        </div>
      </div>


      <div className="py-6 bg-yellow-200 counter mx-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:divide-x divide-black">
            {/* Counter 1 */}
            <div className="counter-item">
              <h2 className="counter-number">200+</h2>
              <p className="counter-label">Children reached</p>
            </div>

            {/* Counter 2 */}
            <div className="counter-item">
              <h2 className="counter-number">3+</h2>
              <p className="counter-label">Projects and Programmes Planned</p>
            </div>

            {/* Counter 3 */}
            <div className="counter-item">
              <h2 className="counter-number">2</h2>
              <p className="counter-label">Locations</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}