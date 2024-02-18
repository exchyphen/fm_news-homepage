import { useEffect, useState } from "react";
import "./App.css";

import Trending from "./components/trending";

import LogoImg from "./assets/images/logo.svg";
import HomeImgDesktop from "./assets/images/image-web-3-desktop.jpg";
import HomeImgMobile from "./assets/images/image-web-3-mobile.jpg";
import TrendingImg1 from "./assets/images/image-retro-pcs.jpg";
import TrendingImg2 from "./assets/images/image-top-laptops.jpg";
import TrendingImg3 from "./assets/images/image-gaming-growth.jpg";
import NavModal from "./components/navModal";

function App() {
  // react style resize (in conjunction with media query in css)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowBreakpointMed = 800;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    // clean up: remove event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // trending component data
  const trendingImg = [TrendingImg1, TrendingImg2, TrendingImg3];

  const trendingTitles = [
    "Reviving Retro PCs",
    "Top 10 Laptops of 2022",
    "The Growth of Gaming",
  ];

  const trendingTexts = [
    "What happens when old PCs are given modern upgrades?",
    "Our best picks for various needs and budgets.",
    "How the pandemic has sparked fresh opportunities.",
  ];

  const createTrendingComponents = () => {
    const trendingArr = Array(trendingTitles.length);
    for (let i = 0; i < trendingTitles.length; i++) {
      trendingArr[i] = (
        <Trending
          key={`trendingKey${i}`}
          img={trendingImg[i]}
          number={`0${i + 1}`}
          title={trendingTitles[i]}
          text={trendingTexts[i]}
        ></Trending>
      );
    }
    return trendingArr;
  };

  return (
    <>
      <div className="main-container">
        <header className="header-container">
          <img className="logo-img" src={LogoImg} alt="logo img"></img>
          {windowWidth > windowBreakpointMed ? (
            <nav className="nav-container">
              <a className="nav-title" href="#">
                Home
              </a>
              <a className="nav-title" href="#new">
                New
              </a>
              <a className="nav-title" href="#popular">
                Popular
              </a>
              <a className="nav-title" href="#trending">
                Trending
              </a>
              <a className="nav-title" href="#">
                Categories
              </a>
            </nav>
          ) : (
            <NavModal></NavModal>
          )}
        </header>
        <div className="content-container">
          <div className="home-and-new-container">
            <div className="home-container" id="popular">
              <img
                className="home-img"
                src={
                  windowWidth > windowBreakpointMed
                    ? HomeImgDesktop
                    : HomeImgMobile
                }
                alt="home img"
              ></img>
              <div className="home-content-container">
                <div className="home-title">The Bright Future of Web 3.0?</div>
                <div className="home-text-container">
                  <div className="home-text">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </div>
                  <button className="home-button">read more</button>
                </div>
              </div>
            </div>
            <div className="new-container" id="new">
              <div className="new-title">New</div>
              <div className="new-article-container">
                <div className="new-article-title">
                  Hydrogen VS Electric Cars
                </div>
                <div className="new-article-text">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </div>
              </div>
              <div className="new-line"></div>
              <div className="new-article-container">
                <div className="new-article-title">
                  The Downsides of AI Artistry
                </div>
                <div className="new-article-text">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </div>
              </div>
              <div className="new-line"></div>
              <div className="new-article-container">
                <div className="new-article-title">
                  Is VC Funding Drying Up?
                </div>
                <div className="new-article-text">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </div>
              </div>
            </div>
          </div>
          <div className="trending-container" id="trending">
            {createTrendingComponents()}
          </div>
        </div>
      </div>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </footer>
    </>
  );
}

export default App;
