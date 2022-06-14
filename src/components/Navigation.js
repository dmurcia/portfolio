import Link from "next/link";
import styles from '../styles/Navigation.module.scss'

export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link href="/">
            <a className={`navbar-brand ${styles.brand}`}>
              David Ocampo Murcia
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Project</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
