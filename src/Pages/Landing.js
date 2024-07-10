import React from "react";
import Navbar from "../Components/Navbar";
import{Link} from 'react-scroll'
import {
  FaArrowRight,
  FaLightbulb,
  FaBrain,
  FaChartArea,
  FaCheck,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaLongArrowAltUp ,

} from "react-icons/fa";
import image from "../Images/hero.webp";
import image3 from "../Images/future.webp";
import image4 from "../Images/savings.webp";
import image5 from "../Images/stock.webp";
import image6 from "../Images/mutual.webp";
import image7 from "../Images/crypto.webp";
import image8 from "../Images/save.webp";
import invest from "../Images/invest.webp";
import investSmall from "../Images/investSmall.webp";
import portfolio from "../Images/portfolio.webp";
import startup from "../Images/startup.webp";
import mine from "../Images/mine.webp";
import spaceX from "../Images/SpaceX.webp";
import digital from "../Images/digital.webp";
import meta from "../Images/meta.webp";
import uno from "../Images/uno.webp";
import dos from "../Images/dos.webp";
import thres from "../Images/thres.webp";
import logo from "../Images/logo.webp";
// import keyframe from "../Images/keyframe.webp";
import newone from "../Images/new.webp";
import platform from "../Images/platform.webp";
import stocklist from "../Images/stocklist.webp"
function Landing() {
  return (
    <div className="LandingPage">
      <Navbar/>
      <div id="home" className="main">
        <div className="LandingPage-container">
        <div className="hech">
        <h1>Maximize returns, <span>Minimize risks.</span> Invest smarter.</h1>
        </div>
          
          <p>
            Our team of experts is committed to guiding you through every step
            of your investment journey, whether you are an experienced investor
            or just starting out.
          </p>
          <button id="start">
            Start Investing Now <FaArrowRight />
          </button>
        </div>

        <div className="hero">
          <img className="image" src={image} alt="" />
          <img className="image3" src={image3} alt="" />
          <img className="image4" src={image4} alt="" />
          <div className="stk">
            <img src={image6} alt="" />
            <img src={image5} alt="" />
            <img src={image7} alt="" />
            <img src={image8} alt="" />
          </div>
        </div>
      </div>
      <div id="investing" className="Investing">
        <div className="investment">
          <img className="invest" src={invest} alt="" />
          <img src={investSmall} alt="" className="investSmall" />
          <img src={portfolio} alt="" className="portfolio" />
        </div>
        <div className="investment2">
          <h1>Learn about investing in startups</h1>
          <p>
            Investing can be a great way to grow your money, but it can be
            tricky to get started. Catch offers easy access to information about
            investing in startups – so you can make...
          </p>
          <button>
            Lear more <FaArrowRight />
          </button>
        </div>
      </div>
      <div id="options" className="Options">
        <h1>Get started on your startup journey with the right investments</h1>
        <div className="all">
          <div className="one">
            <FaLightbulb className="bulb" />
            <h4>Increase Value for Money</h4>
            <p>
              Your money will be more useful and profitable in the long run.
              Through investing, you manage your money and can increase the
              value of the money you have.
            </p>
          </div>
          <div className="two">
            <FaChartArea className="chart" />
            <h4>Achieving Your Freedom</h4>
            <p>
              Financial Freedom is a condition in which you are financially
              independent. It means that your income is sufficient to meet your
              needs.
            </p>
          </div>
          <div className="three">
            <FaBrain className="brain" />
            <h4>Open the knowledge</h4>
            <p>
              Your insight into the economy and finance will be wider. It is
              possible, you will become a reliable financial planner.
            </p>
          </div>
        </div>
      </div>
      <div id="startup" className="Startup">
        <div className="left">
          <img className="pic1" src={startup} alt="" />
          <img className="mine" src={mine} alt="" />
          <div className="imgs">
            <img src={spaceX} alt="" className="spacex" />
            <img src={digital} alt="" className="spacex" />
            <img src={meta} alt="" className="spacex" />
          </div>
        </div>
        <div className="right">
          <h1>Invest in startups with ease</h1>
          <p>
            Investing doesn’t have to be hard. We make it easy to invest for
            your future with simple, low-cost investment options and
            personalized advice.
          </p>
          <ul>
            <li>
              <FaCheck className="check" /> Smart Solutions for the automated
              world
            </li>
            <li>
              <FaCheck className="check" /> Do great things every day
            </li>
            <li>
              <FaCheck className="check" /> Building a better Future together
            </li>
          </ul>
        </div>
      </div>
      <div className="smart">
        <div className="left2">
          <h1>Invest smart, Invest secure, Invest today</h1>
          <p>
            Investing doesn’t have to be hard. We make it easy to invest for
            your future with simple, low-cost investment options and
            personalized advice.
          </p>
          <button id="start">
            Start Investing Now <FaArrowRight />
          </button>
        </div>
        <div className="righ2">
        <img src={newone} alt="" className="newone" />
        <img src={stocklist} alt="" className="stocklist" />
        {/* <img src={keyframe} alt="" className="keyframe" /> */}
<img src={platform} alt="" className="platform" />
        </div>
      </div>
      <div  id="overview" className="start">
        <h1>Invest in startups the smart way</h1>
        <div className="tres">
          <div className="uno">
            <img className="not" src={uno} alt="" />
            <h2 className="txt">The complexity of simplicity</h2>
            <p className="fine">
              Prism cred kickstarter, bushwick umami sustainable gochujang ramps
              migas.
            </p>
          </div>
          <div className="dos">
            <img src={dos} alt="" className="not" />
            <h2 className="txt">Amazing service. It sets our business apart</h2>
            <p className="fine">
              Prism cred kickstarter, bushwick umami sustainable gochujang ramps
              migas.
            </p>
          </div>
          <div className="thres">
            <img src={thres} alt="" className="not" />
            <h2 className="txt">Do great things every day with ease</h2>
            <p className="fine">
              Prism cred kickstarter, bushwick umami sustainable gochujang ramps
              migas.
            </p>
          </div>
        </div>
      </div>
      <div className="vid">
        <h1>Experience the Benefits of Professional Investment Management</h1>
        <button>Start Investing Now <FaArrowRight/></button>
      </div>
      <div className="footer">
        <div className="top">
          <div className="bolt">
            <img src={logo} alt="" id="img" />
            <p>Maximize returns, Minimize risks. Invest smarter.</p>
          </div>
          <div className="rep">
            <p>Company</p>
            <a href="...">About us</a>
            <a href="...">Contact us</a>
            <a href="...">Carrer</a>
            <a href="...">Blog</a>
          </div>
          <div className="rep">
            <p>Product</p>
            <a href="...">Pricing product</a>
            <a href="...">Mobile Apps</a>
            <a href="...">Updates</a>
            <a href="...">WordPress</a>
            <a href="...">Web Security</a>
          </div>
          <div className="rep">
            <p>Legal</p>
            <a href="...">Privacy Policy</a>
            <a href="...">Terms of Service</a>
          </div>
          <div className="rep">
            <p>Help</p>
            <a href="...">Payment Method</a>
            <a href="...">Knowledge Base</a>
            <a href="...">Tutorials</a>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright: © {new Date().getFullYear()} Landing page by Felix Mulaa. All Rights Reserved.</p>
          <div className="icons">
            <FaFacebook className="sweet"/>
            <FaTwitter className="sweet"/>
            <FaLinkedin className="sweet"/>
          </div>
        </div>
      </div>
      <Link className="to-top" smooth={true}
          duration={1000}
          spy={true}
          exact="true"
          offset={-50}
          to="home"><FaLongArrowAltUp/></Link>
    </div>
  );
}

export default Landing;
