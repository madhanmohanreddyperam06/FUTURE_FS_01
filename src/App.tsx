import './App.css'

function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="brand">mohan.dev</a>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact" className="cta">Contact</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-avatar" aria-hidden="true">M</div>
      <div className="hero-content">
        <h1 className="hero-title">Hi, I’m Mohan</h1>
        <p className="hero-subtitle">Frontend Developer • React.js • TypeScript</p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#skills" className="btn">My Skills</a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>
        I build fast, accessible web experiences with React, TypeScript, and modern CSS. I love
        turning designs into clean, maintainable code and shipping delightful products.
      </p>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        <article className="card">
          <h3>Project One</h3>
          <p>Short description highlighting impact and tech stack.</p>
          <div className="tags"><span>React</span><span>TypeScript</span><span>Vite</span></div>
          <div className="links">
            <a href="#" aria-label="Live demo">Live</a>
            <a href="#" aria-label="Source code">Code</a>
          </div>
        </article>
        <article className="card">
          <h3>Project Two</h3>
          <p>Short description highlighting impact and tech stack.</p>
          <div className="tags"><span>Next.js</span><span>Tailwind</span></div>
          <div className="links">
            <a href="#" aria-label="Live demo">Live</a>
            <a href="#" aria-label="Source code">Code</a>
          </div>
        </article>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills">
        <li>React</li>
        <li>TypeScript</li>
        <li>JavaScript (ES2023+)</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Node.js</li>
      </ul>
    </section>
  )
}

function Contact() {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null
    const statusEl = form.querySelector('[data-status]') as HTMLParagraphElement | null

    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const message = String(formData.get('message') || '')

    // Basic validation
    if (!name || !email || !message) {
      if (statusEl) statusEl.textContent = 'Please fill out all fields.'
      return
    }

    if (!formspreeId) {
      // Fallback to mailto if no backend configured
      const subject = encodeURIComponent(`Portfolio contact from ${name}`)
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
      window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`
      return
    }

    const payload = { name, email, message }

    try {
      submitButton && (submitButton.disabled = true)
      statusEl && (statusEl.textContent = 'Sending...')
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        form.reset()
        statusEl && (statusEl.textContent = 'Thanks! Your message has been sent.')
      } else {
        const data = await response.json().catch(() => ({}))
        const msg = (data && (data.error || data.message)) || 'Something went wrong. Please try again.'
        statusEl && (statusEl.textContent = msg)
      }
    } catch (error) {
      statusEl && (statusEl.textContent = 'Network error. Please try again later.')
    } finally {
      submitButton && (submitButton.disabled = false)
    }
  }

  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="field full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} placeholder="How can I help?" required />
        </div>
        <div className="actions">
          <button type="submit" className="btn primary">Send</button>
          <p data-status className="status" aria-live="polite"></p>
        </div>
      </form>
      {!formspreeId && (
        <p className="hint">
          Tip: set <code>VITE_FORMSPREE_ID</code> in a <code>.env</code> file to enable direct form
          submission without opening your email client.
        </p>
      )}
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Mohan. All rights reserved.</p>
    </footer>
  )
}

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
