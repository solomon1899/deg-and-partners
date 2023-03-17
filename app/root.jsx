import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStylesUrl from "../styles/global.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope , faMapMarker, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export const meta = () => ({
  charset: "utf-8",
  title:
    "Cabinet Expert-comptable Belgique - Deg & Partner _ comptabilité, gestion & fiscalité",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const titlePage =
    "Cabinet Expert-comptable Belgique - Deg & Partner _ comptabilité, gestion & fiscalité";
  return (
    <Document>
      <Links />
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="navbar">
        <Link to="/" className="logo">
          logo
        </Link>
        <ul className="nav">
          <Link to="/">Accueil</Link>
          <div className="dropdown">
            <a className="dropbtn">Votre métier</a>
            <div className="dropdown-content">
              <a href="#">Vous etes artiste et creatif ?</a>
              <a href="#">Vous etes association culturelle ?</a>
              <a href="#">Vous etes medecin ?</a>
              <a href="#">Vous etes dentiste ?</a>
              <a href="#">Vous etes veterinaire ?</a>
              <a href="#">Vous etes consultant ?</a>
              <a href="#">Vous etes avocat ?</a>
            </div>
          </div>

          <div className="dropdown">
            <a className="dropbtn">Qui sommes nous ?</a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <div className="dropdown">
            <a className="dropbtn">Nos Services</a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <a>Nos formules</a>
          <a>Notre Blog </a>
          <a>Contact</a>
        </ul>
        <a className="contact">contactez nous</a>
      </div>
      <div className="mainPage">{children}</div>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <p> <FontAwesomeIcon icon={faMapMarkerAlt} /> Rue Waelhem,68 - 1030 Bruxelles</p>
      <a href="mailto:info@degandpartners.com"> <FontAwesomeIcon icon={faEnvelope} /> info@degandpartners.com</a>
      <p> <FontAwesomeIcon icon={faPhone} /> + 32 2 247 39 39</p>
    </div>
  );
}

function Footer() {
  return (
    <>
  <div className="newsLetter">
      <span>Inscrivez-vous a la newsletter</span>
      <form className="letterform" method="post">
        <label>
          <input type='text' />
        </label>
      </form>
    </div>
    </>
  )
}
