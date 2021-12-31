import Head from "next/head";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Timeline from "../components/Timeline/Timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian Saiz Ferri</title>
      </Head>
      <Header />
      <main className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <section>
                <h3>About Me</h3>
                <p>
                  I’m a <b>frontend developer / software engineer</b> based in
                  Berlin working for <b>Kayak</b>. I studied applied computer
                  science at the University of Applied Sciences in Berlin and
                  have almost 5 years of expericence in the software industry. I
                  love to learn new technologies and I’m constantly improving
                  myself. Right now I’m interested in fullstack development with
                  typescript and minimalistic design. Besides of programming I
                  enjoy travelling, aviation and sports. I also hold a private
                  pilot’s licence 🛩.
                </p>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-12">
              <section>
                <h3>Work Experience</h3>
                <Timeline items={data.experience} />
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-12">
              <section>
                <h3>Education</h3>
                <Timeline items={data.education} />
              </section>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

const data = {
  experience: [],
  education: [],
};
