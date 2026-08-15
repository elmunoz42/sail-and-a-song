import Image from "next/image";

const episodes = [
  {
    title: "Zach Gill & David Segall",
    subtitle: "Episode one · Aboard Sail & A Song",
    image: "/images/episode-one.jpg",
    href: "https://www.youtube.com/watch?v=dmm5YLhoB28",
  },
  {
    title: "Kenny Loggins",
    subtitle: "A conversation and songs at sea · Part One",
    image: "/images/kenny-loggins.jpg",
    href: "https://www.youtube.com/watch?v=TSFjzC21QD8",
  },
  {
    title: "Zach Gill",
    subtitle: "Debuting an original aboard Sail & A Song",
    image: "/images/zach-gill.jpg",
    href: "https://www.youtube.com/watch?v=qEHPwf7ZSHM",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sail and A Song home">
          <span className="brand-mark" aria-hidden="true"><i /><b /></span>
          <span>Sail <em>&amp;</em> A Song</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">Our story</a>
          <a href="#episodes">Episodes</a>
          <a href="#learn">The idea</a>
        </nav>
        <a className="nav-cta" href="https://www.youtube.com/@sailandasong" target="_blank" rel="noreferrer">
          Watch on YouTube <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/images/interview-on-boat.jpg"
          alt="A musician and interviewer sharing a conversation aboard a sailboat off Santa Barbara"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow light">Music made where the horizon begins</p>
          <h1>Every song<br />has a <em>story.</em></h1>
          <p className="hero-copy">
            Intimate acoustic performances and honest conversations with
            songwriters—recorded aboard a sailboat in Santa Barbara Harbor.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#featured"><span className="play-mini">▶</span> Watch the featured episode</a>
            <a className="text-link light-link" href="#about">Discover our story <span>↓</span></a>
          </div>
        </div>
        <p className="harbor-note">34.4040° N&nbsp;&nbsp; · &nbsp;&nbsp;119.6920° W</p>
      </section>

      <section className="intro" id="about">
        <div className="section-label"><span>01</span> The idea</div>
        <div className="intro-copy">
          <p className="eyebrow">A different kind of music lesson</p>
          <h2>Part performance.<br />Part conversation.<br /><em>All heart.</em></h2>
          <p className="lead">
            Sail &amp; A Song brings emerging and established musicians aboard
            for acoustic performances stripped back to what matters most: a
            voice, an instrument, and the story behind the song.
          </p>
          <p>
            After each performance, artists open up the creative process—from
            the first lyric and melodic spark to chord progressions,
            collaboration, and the courage it takes to share something true.
          </p>
        </div>
        <aside className="quote-card">
          <span className="quote-mark">“</span>
          <blockquote>The sea gives every song a little more room to breathe.</blockquote>
          <span className="wave-line" aria-hidden="true">〜 〜 〜</span>
        </aside>
      </section>

      <section className="featured" id="featured">
        <div className="featured-heading">
          <div>
            <p className="eyebrow light">Now playing</p>
            <h2>Featured from<br /><em>the harbor</em></h2>
          </div>
          <p>
            Glen Phillips of Toad the Wet Sprocket steps aboard for an intimate
            performance and conversation about the craft behind the music.
          </p>
        </div>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/scZNrqTlSuA?rel=0"
            title="Sail & A Song with Glen Phillips of Toad the Wet Sprocket"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="episodes" id="episodes">
        <div className="episodes-heading">
          <div>
            <p className="eyebrow">Stories worth hearing</p>
            <h2>More from<br /><em>the series</em></h2>
          </div>
          <a className="text-link" href="https://www.youtube.com/@sailandasong/videos" target="_blank" rel="noreferrer">
            View all episodes <span>↗</span>
          </a>
        </div>
        <div className="episode-grid">
          {episodes.map((episode, index) => (
            <a className="episode-card" href={episode.href} target="_blank" rel="noreferrer" key={episode.title}>
              <div className="episode-image">
                <Image src={episode.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
                <span className="episode-number">0{index + 1}</span>
                <span className="play-button" aria-hidden="true">▶</span>
              </div>
              <p>{episode.subtitle}</p>
              <h3>{episode.title}</h3>
              <span className="card-link">Watch episode <b>↗</b></span>
            </a>
          ))}
        </div>
      </section>

      <section className="learning" id="learn">
        <div className="learning-photo">
          <Image src="/images/band-on-yacht.jpg" alt="A band performing for guests aboard a yacht off Santa Barbara" fill sizes="(max-width: 800px) 100vw, 48vw" />
        </div>
        <div className="learning-copy">
          <p className="eyebrow light">Creativity belongs to everyone</p>
          <h2>Learn how<br />songs are <em>made.</em></h2>
          <p>
            Each episode turns inspiration into something you can understand
            and try for yourself—wherever you are in your creative life.
          </p>
          <div className="lesson-list">
            <div><span>01</span><h3>Lyrics</h3><p>Finding the words that feel true.</p></div>
            <div><span>02</span><h3>Melody</h3><p>Following the musical idea.</p></div>
            <div><span>03</span><h3>Harmony</h3><p>Building feeling through chords.</p></div>
            <div><span>04</span><h3>Expression</h3><p>Making a song unmistakably yours.</p></div>
          </div>
        </div>
      </section>

      <section className="instagram">
        <div className="instagram-copy">
          <p className="eyebrow">Life between episodes</p>
          <h2>Follow along<br /><em>from the deck.</em></h2>
          <p>
            Rehearsal moments, harbor light, new guests, and the small details
            that happen before the cameras roll.
          </p>
          <a className="button button-dark" href="https://www.instagram.com/sailandasong" target="_blank" rel="noreferrer">
            Follow @sailandasong <span>↗</span>
          </a>
        </div>
        <a className="instagram-window" href="https://www.instagram.com/sailandasong" target="_blank" rel="noreferrer" aria-label="Open Sail and A Song on Instagram">
          <Image src="/images/interview-on-boat.jpg" alt="An interview and acoustic performance aboard a sailboat" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <div className="instagram-overlay">
            <span className="instagram-icon">◎</span>
            <strong>@sailandasong</strong>
            <small>Open the latest posts on Instagram ↗</small>
          </div>
        </a>
      </section>

      <section className="closing">
        <p className="eyebrow light">Come aboard</p>
        <h2>There’s always room<br />for one more <em>song.</em></h2>
        <p>Subscribe for new performances, songwriting stories, and a little Santa Barbara salt air.</p>
        <a className="button button-light" href="https://www.youtube.com/@sailandasong?sub_confirmation=1" target="_blank" rel="noreferrer">
          Subscribe on YouTube <span>↗</span>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><i /><b /></span>
          <span>Sail <em>&amp;</em> A Song</span>
        </a>
        <p>Music, stories &amp; salt air.<br />Santa Barbara, California.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/sailandasong" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.youtube.com/@sailandasong" target="_blank" rel="noreferrer">YouTube ↗</a>
        </div>
        <small>© {new Date().getFullYear()} Sail &amp; A Song</small>
      </footer>
    </main>
  );
}
