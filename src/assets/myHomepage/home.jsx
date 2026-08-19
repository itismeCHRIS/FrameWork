function Home() {
	return (
		<main className="home-page welcome-page">
			<nav className="simple-nav" aria-label="Main navigation">
				<a href="#home">Home</a>
				<a href="#about">About</a>
				<a href="#contact">Contact</a>
			</nav>
			<section id="home" className="simple-section">
				<p>hello welcome to my page</p>
			</section>
			<section id="about" className="simple-section">
				<p>this is a simple page about me</p>
			</section>
			<section id="contact" className="simple-section">
				<p>thank you for visiting my page</p>
			</section>
		</main>
	)
}

export default Home
