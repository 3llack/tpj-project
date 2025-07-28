import '@fortawesome/fontawesome-free/css/all.min.css';
import Nav from '../app/components/welcome.js'


export default function Home() {
  const handleHover = () => {
    console.log(`Hello, test success`)
  }
  return (
    <>
      <section className="navBar" id="navBar">
        <Nav />
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
