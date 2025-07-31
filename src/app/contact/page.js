import "@fortawesome/fontawesome-free/css/all.min.css";
import Hero from "../components/hero.js";
import Cta_section from "../components/ctaOne.js";
import Main_one from "../components/mainone.js";
import Main_two from "../components/mainTwo.js";

export default function Home() {
  return (
    <>
      <p>Contact page</p>

      <section className="hero" id="hero">
        <Hero />
      </section>

      <section className="cta_section" id="cta_section">
        <Cta_section />
      </section>

      <section className="main_one" id="main_one">
        <Main_one />
      </section>

      <section className="main_two" id="main_two">
        <Main_two />
      </section>

      <a
        href="#"
        className="back-to-top active flex items-center justify-center"
        style={{ textDecoration: "none" }}
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}
