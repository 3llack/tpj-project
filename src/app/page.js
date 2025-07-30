import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from './components/welcome.js'
import Hero from './components/hero.js'
import Cta_section from './components/ctaOne.js'
import Main_one from './components/mainone.js'
import Main_two from './components/mainTwo.js'


export default function Home() {
  return (
    <>
      <section className="navBar" id="navBar">
        <Nav />
      </section>

      <section className='hero' id='hero'>
        <Hero />
      </section>

      <section className='cta_section' id='cta_section'>
        <Cta_section />
      </section>

      <section className='main_one' id='main_one'>
        <Main_one />
      </section>

      <section className='main_two' id='main_two'>
        <Main_two />
      </section>



      <a 
        href="#" 
        className="back-to-top flex items-center justify-center active" 
        style={{ textDecoration: "none" }}
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}
