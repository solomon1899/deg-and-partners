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
import slickcss from "slick-carousel/slick/slick.css";
import slicktheme from "slick-carousel/slick/slick-theme.css";
// import bootCss from 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarker,
  faMapMarkerAlt,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";

// export const links = () => [{ rel: "stylesheet", href: globalStylesUrl  } , { rel: "stylesheet", href: bootCss  }];
export const links = () => [
  { rel: "stylesheet", href: globalStylesUrl },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Oxygen" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Poppins",
  },
  { rel: "stylesheet", href: slickcss },
  { rel: "stylesheet", href: slicktheme },
];

export const meta = () => ({
  charset: "utf-8",
  title:
    "Cabinet Expert-comptable Belgique - Deg & Partner _ comptabilité, gestion & fiscalité",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
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
  let lastScrollTop = 0;

  useEffect(() => {
    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(document.documentElement.scrollTop > 50)
    { 
      document.getElementById("pageNav").classList.add("addTop");
     }else{
      document.getElementById("pageNav").classList.remove("addTop");
     }
    // Check the scroll direction
    if (scrollTop > lastScrollTop) {
      // Scrolling down, hide the navbar
      document.getElementById("pageNav").classList.add("is-hidden");

      lastScrollTop = scrollTop;
    } else {
      // Scrolling up, show the navbar 
      document.getElementById("pageNav").classList.remove("is-hidden");

      lastScrollTop = scrollTop;
    }

    // Update the last scroll position
    lastScrollTop = scrollTop;
  }

  return (
    <>
      <Header />
        <div id="pageNav" className={`navbar `}>
          <img
            className="logo"
            src="https://www.degandpartners.com/wp-content/uploads/2018/09/logo-1-1.png"
            alt="logo"
          />
          <ul className="nav">
            <Link to="/" style={{ textDecoration: "none" }}>
              Accueil
            </Link>
            <div className="dropdown">
              <a className="dropbtn">Votre métier ▿</a>
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
              <a className="dropbtn">Qui sommes nous ? ▿</a>
              <div className="dropdown-content">
                <a href="#">Philosophie</a>
                <a href="#">Structure</a>
                <a href="#">Nos clients</a>
                <a href="#">Equipe</a>
              </div>
            </div>

            <div className="dropdown">
              <a className="dropbtn">Nos Services ▿</a>
              <div className="dropdown-content">
                <a href="#">Comptabilité</a>
                <a href="#">Fiscalité</a>
                <a href="#">Gestion</a>
                <a href="#">Social & droit</a>
                <a href="#">Application DEG</a>
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
      <p>
        {" "}
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Rue Waelhem,68 - 1030
        Bruxelles
      </p>
      <a
        href="mailto:info@degandpartners.com"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {" "}
        <FontAwesomeIcon icon={faEnvelope} /> info@degandpartners.com
      </a>
      <p>
        {" "}
        <FontAwesomeIcon icon={faPhone} /> + 32 2 247 39 39
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="allfooter">
      <div className="newsLetter">
        <span className="inscrivezvous">Inscrivez-vous a la newsletter</span>
        <form className="letterform" method="post">
          <label>
            <input
              type="text"
              placeholder="votre adresse email"
              className="footerinput"
            />
          </label>
          <button type="submit" className="sabonner">
            S'ABONNER
          </button>
        </form>
      </div>
      <div>
        <footer className="footer">
          <div className="first">
            <img
              className="footerLogo"
              src="https://www.degandpartners.com/wp-content/uploads/2018/09/logo-1-1.png"
              alt="footerLogo"
            />
            <div className="footerSocialIcons">
              <SocialIcon
                url="https://twitter.com/DegandPartners"
                bgColor="#30231E"
                fgColor="#ffffff"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://www.facebook.com/Degandpartners"
                bgColor="#30231E"
                fgColor="#ffffff"
                style={{ height: 30, width: 30 }}
              />
              <SocialIcon
                url="https://www.linkedin.com/company/deg-and-partners/"
                bgColor="#30231E"
                fgColor="#ffffff"
                style={{ height: 30, width: 30 }}
              />
            </div>
          </div>
          <div className="second">
            <h3 style={{ color: "white" }}>Bureau de Bruxelles</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Rue Waelhem,68 - 1030
              Bruxelles
            </p>

            <p>
              <FontAwesomeIcon icon={faPhone} /> + 32 2 247 39 39
            </p>
            <p>
              <FontAwesomeIcon icon={faFax} /> + 32 2 247 39 39
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} size={"1x"} />{" "}
              info@degandpartners.com
            </p>
          </div>
          <div className="third">
            <h3 style={{ color: "white", fontWeight: 600 }}>Bureau de Liège</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Quai Orban, 41 – 4020
              Liège
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> + 32 4 343 17 31
            </p>
            <p>
              <FontAwesomeIcon icon={faFax} /> + 32 2 247 39 39
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> info@degandpartners.com
            </p>
          </div>
          <div className="fourth">
            <a href="http://art-consult.be/" className="footerlien">
              Vous êtes artiste et créatif
            </a>
            <a href="http://art-consult.be/" className="footerlien">
              Vous êtes Association Culturelle
            </a>
            <a href="https://comptabilitemedecin.be/" className="footerlien">
              Vous êtes médecin
            </a>
            <a
              href="https://www.comptabilitedentiste.be/"
              className="footerlien"
            >
              Vous êtes dentiste
            </a>
            <a
              href="http://www.comptabiliteveterinaire.be/"
              className="footerlien"
            >
              Vous êtes vétérinaire
            </a>
            <a
              href="https://www.comptabiliteconsultant.be/"
              className="footerlien"
            >
              Vous êtes consultant
            </a>
            <a href="http://comptabiliteavocat.be/" className="footerlien">
              Vous êtes avocat
            </a>
          </div>
        </footer>
      </div>
      <div className="copyright">
        <p color="#7d7d7d">
          Copyright © 2021 - All Rights Reserved -{" "}
          <a
            href="http://www.degandpartners.com/wp-content/uploads/2021/04/CONDITIONS-GENERALES-DE-PRESTATIONS.pdf"
            style={{ color: "white" }}
          >
            Conditions générales de prestations
          </a>
        </p>
      </div>
    </div>
  );
}
