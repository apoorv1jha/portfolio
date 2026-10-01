import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Reveal from '../components/Reveal';
import ScrollBar from '../components/ScrollBar';
import EmailCopy from '../components/EmailCopy';

const GMAIL = 'https://mail.google.com/mail/?view=cm&fs=1&to=jha77apurva@gmail.com&su=Hello%20Apoorv';
import { skills } from '../data/projects';

export default function Home() {
  return (
    <>
      <ScrollBar />
      <Navbar />
      <Hero />

      <section id="about">
        <Reveal className="wrap">
          <h2>About</h2>
          <p className="lead">Computer science student at Lovely Professional University who likes finishing what he starts: a solid backend, a usable interface and a live deployment.</p>
          <div className="facts">
            <div><small>Studying</small><strong>B.Tech CSE</strong></div>
            <div><small>University</small><strong>LPU, Punjab</strong></div>
            <div><small>Graduating</small><strong>2028</strong></div>
            <div><small>CGPA</small><strong>8.05</strong></div>
          </div>
        </Reveal>
      </section>

      <section id="work">
        <div className="wrap">
          <Reveal as="h2">Selected work</Reveal>
          <Projects />
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <Reveal as="h2">What I work with</Reveal>
          <Reveal className="skills">
            {skills.map(([t, d]) => (
              <div className="skill" key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="contact">
        <Reveal className="wrap">
          <h2>Let's build something</h2>
          <EmailCopy />
          <div className="btns" style={{ marginTop: 32 }}>
            <a className="btn p" href={GMAIL} target="_blank" rel="noopener noreferrer">Send an email</a>
            <a className="btn" href="https://github.com/apoorv1jha" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href="https://leetcode.com/u/d_aabraka/" target="_blank" rel="noopener noreferrer">LeetCode</a>
          </div>
        </Reveal>
      </section>

      <footer><div className="wrap">Apoorv · B.Tech CSE, Lovely Professional University</div></footer>
    </>
  );
}
