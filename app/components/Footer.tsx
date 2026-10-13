import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              Hassan<span>.</span>
            </Link>

            <p>
              Building digital experiences
              <br />
              with creativity and clean code.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="footer-email"
            >
              your.email@example.com <span>↗</span>
            </a>
          </div>

          <div className="footer-nav">
            <h3>Quick Links</h3>
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-connect">
            <h3>Let's Connect</h3>
            <p>
              Interested in working together?
              Find me on these platforms.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} <span>Hassan.</span> All rights reserved.
          </p>

          <p className="footer-credit">
            Designed & built with <span>♥</span>
          </p>

          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
