import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [sticky, isSticky] = useState(false);

  function handleScroll(){
    if(window.scrollY > 0.6) {
        isSticky(true);
    } else {
        isSticky(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <>
      <Head>
        <style>{`
          .navbar {
            background-color: ${isNavOpen || sticky ? '#cd2028' : 'transparent'} !important;
            height: 80px;            
          }
          .navbar-brand{
            margin-left : -50px;            
          }
          .logo-app{
            height: 65px;
            width: 280px;       
            margin-right: 80px;       
          }
          @media (max-width: 767.98px) {
            .navbar-brand {
              margin-left : 0px;
            }
            .logo-app{
              height: 70px;
              width: 200px;    
              margin-right: 0px;                 
            }
            .navbar {
              height: auto;
            }
          }
          .navbar-nav .nav-link {
            color: #fff;            
          }
          .navbar-nav .nav-link:hover {
            color: rgba(255, 255, 255, 0.8);
          }
          .navbar-toggler {
            position: relative;
          }
          .nav-item{            
            margin-left: 20px;
            margin-right: 20px;            
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            color: #fff !important;
          }
          .header.sticky {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 91;
          }
          .header.sticky .navbar {
            position: fixed;
            top: 0;
            left: 0;
            padding: 10px 15px;
            width: 100%;
            background: #000;
            box-shadow: 0px 6px 13px 0px rgb(0 0 0 / 6%);
            opacity: 0;
            -webkit-animation: fadeInDown .95s ease-in-out 0s 1 normal none running;
            animation: fadeInDown .95s ease-in-out 0s 1 normal none running;
            -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
            transition: all .3s cubic-bezier(.645,.045,.355,1);
            opacity: 1;
            -webkit-transform: translateY(0%);
                    transform: translateY(0%);
          }
        `}</style>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={`header${sticky ? ' sticky' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="navbar-brand">
            <img              
              src="https://www.sicepat.com/images/logo-sicepat-2.png" className='logo-app'              
            />            
            </a>
          </Link>
          <button
            className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
            type="button"
            onClick={handleNavToggle}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/checkAwb" legacyBehavior>
                  <a className="nav-link">Cek Resi</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" legacyBehavior>
                  <a className="nav-link">Cek Ongkir</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/service" legacyBehavior>
                  <a className="nav-link">Services</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" legacyBehavior>
                  <a className="nav-link">Lokasi</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" legacyBehavior>
                  <a className="nav-link">News</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" legacyBehavior>
                  <a className="nav-link">Karir</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" legacyBehavior>
                  <a className="nav-link">Kontak</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
