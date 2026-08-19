const navItems = ['Work', 'About', 'Contact']

function Home() {
	return (
		<main className="home-page">
			<nav className="site-nav" aria-label="Main navigation">
				<a className="brand" href="#top" aria-label="Northstar home">
					<span className="brand-mark" aria-hidden="true">N</span>
					<span>northstar</span>
				</a>
				<div className="nav-links">
					{navItems.map((item, index) => (
						<a href={`#${item.toLowerCase()}`} key={item}>
							<span>0{index + 1}</span>{item}
						</a>
					))}
				</div>
				<a className="menu-button" href="#contact" aria-label="Jump to contact">
					Let&apos;s talk <span aria-hidden="true">↗</span>
				</a>
			</nav>

			<section className="hero-section" id="top">
				<p className="eyebrow">Independent creative studio / 2024—now</p>
				<h1>Ideas with<br /><em>gravity.</em></h1>
				<div className="hero-bottom">
					<p>We shape brands, digital products, and experiences that move people forward.</p>
					<a className="scroll-link" href="#work">Scroll to explore <span>↓</span></a>
				</div>
				<div className="orbit orbit-one" aria-hidden="true" />
				<div className="orbit orbit-two" aria-hidden="true" />
				<div className="sun" aria-hidden="true"><span>NS</span></div>
			</section>

			<section className="work-section" id="work">
				<div className="section-heading"><p className="eyebrow">Selected work</p><span>01 / 03</span></div>
				<article className="project-card">
					<div className="project-image"><div className="image-shape shape-main" /><div className="image-shape shape-small" /><span>Field notes</span></div>
					<div className="project-info"><p className="project-number">01</p><h2>Common ground</h2><p>Brand strategy, identity, and digital experience for a new kind of urban garden.</p><a href="#contact">View case study <span>↗</span></a></div>
				</article>
			</section>

			<section className="about-section" id="about">
				<p className="eyebrow">A little about us</p>
				<h2>Small team.<br /><em>Big orbit.</em></h2>
				<p className="about-copy">Northstar is a design practice for ambitious people building what comes next. We bring clarity to complex ideas and character to every detail.</p>
			</section>

			<footer id="contact"><p className="eyebrow">Have a good one in mind?</p><a className="contact-link" href="mailto:hello@northstar.studio">hello@northstar.studio <span>↗</span></a><p className="footer-note">© 2024 Northstar Studio</p></footer>
		</main>
	)
}

export default Home
