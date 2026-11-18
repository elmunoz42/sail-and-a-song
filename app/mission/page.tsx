import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Our Mission | Sail and a Song",
  description:
    "Sail and a Song connects the Santa Barbara community with local and emerging songwriters through authentic music and personal stories filmed aboard a boat in the Santa Barbara Harbor.",
};

export default function Mission() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Sail and a Song home">
          <span className="brand-mark" aria-hidden="true"><i /><b /></span>
          <span>Sail <em>and</em> a Song</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#about">Our story</Link>
          <Link href="/mission" aria-current="page">Mission</Link>
          <Link href="/#episodes">Episodes</Link>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="https://www.youtube.com/@sailandasong" target="_blank" rel="noreferrer">
          Watch on YouTube <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="mission-hero">
        <p className="eyebrow light">Our mission</p>
        <h1 style={{ maxWidth: "25ch"}}>Bringing Music & Community<br /> Together on the <em>Ocean</em></h1>
        <p className="mission-statement">
          Sail and a Song connects the Santa Barbara community with local and
          emerging songwriters through uplifting music and the stories behind the songs,
          filmed aboard a boat in the Santa Barbara Harbor. With performances
          and interviews available free on YouTube, we help audiences discover
          and support artists while sharing the joy and inspiration of music,
          community, and the ocean.
        </p>
        <span className="wave-line" aria-hidden="true">〜 〜 〜</span>
      </section>

      <section className="mission-about">
        <div className="section-label"><span>01</span> About the project</div>
        <div className="mission-rows">
          <div className="mission-row">
            <div className="mission-copy">
              <p className="eyebrow">What we do</p>
              <h2>An independent<br /><em>community arts</em> project.</h2>
              <p className="lead">
                Sail and a Song is an independent community arts project connecting
                Santa Barbara audiences with local musicians. Through intimate
                performances and candid interviews filmed on a catamaran in Santa
                Barbara Harbor, we give emerging and established songwriters a
                professional platform to share their music and stories.
              </p>
            </div>
            <div className="mission-photo">
              <Image src="/images/sail-and-a-song-action.png" alt="Filming an interview with two guests at the table inside the catamaran cabin, the ocean through the windows behind them" fill sizes="(max-width: 900px) 100vw, 32vw" />
            </div>
          </div>
          <div className="mission-row mission-row-flip">
            <div className="mission-photo mission-photo-tall">
              <Image src="/images/mo-sail-and-a-song.jpg.png" alt="A guitarist plays for a smiling companion on the bow of the catamaran at golden hour" fill sizes="(max-width: 900px) 100vw, 32vw" />
            </div>
            <div className="mission-copy">
              <p className="lead">
                We celebrate music created and performed by people, and explore the
                inspiration, emotional journeys, challenges, and personal
                experiences that shape their songs. Occasional special edition
                episodes bring emerging artists together with established musicians
                for collaboration and conversation.
              </p>
              <p className="lead">
                Every episode is available free on YouTube, helping audiences
                discover and support artists while sharing the joy of connecting
                through music and our coastal setting.
              </p>
              <a className="text-link lead" href="https://www.youtube.com/@sailandasong/videos" target="_blank" rel="noreferrer">
                Watch every episode <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sponsorship" id="contact">
        <div className="sponsorship-card">
          <p className="eyebrow light">Fiscal sponsorship</p>
          <h2>Supporting<br />the <em>project.</em></h2>
          <p>
            Sail and a Song is not a nonprofit organization; it is fiscally
            sponsored by Fractured Atlas, a 501(c)(3) nonprofit arts service
            organization that receives and oversees charitable contributions
            for our approved project. Contributions made payable to Fractured
            Atlas for Sail and a Song are tax-deductible to the extent
            permitted by law and help cover production costs and compensation
            for participating artists and the production team.
          </p>
        </div>
        <div className="contact-form">
          <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="f5523dfe-73f9-4a0e-9798-aa9fd4250432"
            data-portal-id="247193404"
          />
        </div>
      </section>
      <Script
        src="https://js-na2.hsforms.net/forms/embed/247193404.js"
        strategy="afterInteractive"
      />

      <footer>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true"><i /><b /></span>
          <span>Sail <em>and</em> a Song</span>
        </Link>
        <p>Music, stories &amp; salt air.<br />Santa Barbara, California.</p>
        <div className="footer-links">
          <Link href="/mission">Mission</Link>
          <a href="https://www.instagram.com/sailandasong" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.youtube.com/@sailandasong" target="_blank" rel="noreferrer">YouTube ↗</a>
        </div>
        <small>© {new Date().getFullYear()} Sail and a Song</small>
      </footer>
    </main>
  );
}
