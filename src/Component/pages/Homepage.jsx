import "../styles/Homepage.css";
import React from "react";
import first from "../assests/1.png";
import second from "../assests/2.png";
import logo from "../assests/logo.png";
import { BsSearch } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";
import image1 from "../assests/offer1.png";
import image2 from "../assests/offer2.png";
import image3 from "../assests/offer3.png";
import a from "../assests/makemytrip.png";
import b from "../assests/bounce.png";
import c from "../assests/apple.png";
import d from "../assests/myntra.png";
import e from "../assests/amazon.png";
import f from "../assests/croma.png";
import g from "../assests/caratlane.png";
import h from "../assests/easemytrip.png";
import i from "../assests/pepperfry.png";
import bulb from "../assests/bulb.png";
import chart1 from "../assests/fifth_1.png";
import chart2 from "../assests/fifth_2.png";
import chart3 from "../assests/fifth_3.png";
import rupee from "../assests/fifth_rupee.png";
import chart from "../assests/fifth_chart.png";
import x from "../assests/sixth_1.png";
import y from "../assests/sixth_2.png";
import z from "../assests/sixth_3.png";
import w from "../assests/sixth_4.png";
import seven from "../assests/seventh.png";
import review from "../assests/Review.png";
import footer from "../assests/Footer.png";

const Homepage = () => {
  return (
    <div>
      <div className="first">
        <img src={first} alt="pic" width="100%" />
      </div>
      <div className="second">
        <div>
          <img className="image1" src={logo} alt="logo" />
          <p className="position1">INVEST TO PAY, INVEST TO SPEND</p>
        </div>
        <div>
          <BsSearch size={20} color="white" className="positionchange" />
          <input
            className="input"
            type="text"
            placeholder="Search stocks, ETFs, indices"
          />
        </div>
        <div>
          <div>
            <MdOutlineLogin
              size={28}
              color="black"
              className="buttonposition"
            />
            <button className="button">Login</button>
          </div>
        </div>
      </div>
      <div className="third">
        <div className="third_first">
          <h1>Knowledge Based Investing & Trading</h1>
        </div>
        <div className="third_second">
          <h3>
            Ready-made solutions + Deep Research + Disciplined Investing +
            Advanced Trading tools
          </h3>
        </div>
        <div className="third_third">
          <img
            src={second}
            alt="second"
            width={"50%"}
            style={{
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>
      </div>
      <div className="fourth">
        <div style={{ paddingTop: "30px" }}>
          <h3 style={{ color: "#5df07b" }}>FEATURES</h3>
          <h2 style={{ width: "340px", fontWeight: "700" }}>
            SAVE NOW. BUY LATER. SIMPLE & REALISTIC
          </h2>
          <p
            style={{
              color: "gray",
              width: " 480px",
              fontSize: "25px",
              fontWeight: "400",
            }}
          >
            Get what you love and save up over weeks or months to achieve it
            much lower price. Time & Flexibility on your side.
          </p>
          <div style={{ display: "flex" }}>
            <button className="button2">Get the App</button>
            <p style={{ textDecoration: "underline" }}>Learn More</p>
          </div>
        </div>
        <div style={{ paddingLeft: "-30px" }}>
          <img
            src={a}
            alt="1"
            style={{
              borderRadius: "20px",
              height: "57px",
              width: "57px",
              position: "absolute",
              left: "54%",
              top: "1080px",
            }}
          />
          <img
            src={b}
            alt="2"
            style={{
              borderRadius: "20px",
              height: "52px",
              width: "92px",
              position: "absolute",
              left: "56%",
              top: "1010px",
            }}
          />
          <img
            src={c}
            alt="3"
            style={{
              borderRadius: "20px",
              height: "89px",
              width: "89px",
              position: "absolute",
              left: "59%",
              top: "900px",
            }}
          />
          <img
            src={d}
            alt="4"
            style={{
              borderRadius: "20px",
              height: "87px",
              width: "123px",
              position: "absolute",
              left: "67%",
              top: "890px",
            }}
          />
          <img
            src={e}
            alt="5"
            style={{
              borderRadius: "20px",
              height: "89px",
              width: "89px",
              position: "absolute",
              left: "77%",
              top: "890px",
            }}
          />
          <img
            src={f}
            alt="6"
            style={{
              borderRadius: "20px",
              height: "89px",
              width: "111px",
              position: "absolute",
              left: "87%",
              top: "900px",
            }}
          />
          <img
            src={g}
            alt="7"
            style={{
              borderRadius: "20px",
              height: "62px",
              width: "190px",
              position: "absolute",
              left: "87%",
              top: "1000px",
            }}
          />
          <img
            src={h}
            alt="8"
            style={{
              borderRadius: "20px",
              height: "51px",
              width: "128px",
              position: "absolute",
              left: "88%",
              top: "1080px",
            }}
          />
          <img
            src={i}
            alt="9"
            style={{
              borderRadius: "20px",
              height: "44px",
              width: "160px",
              position: "absolute",
              left: "89%",
              top: "1150px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              marginRight: "25px",
              alignItems: "center",
            }}
          >
            <img
              src={image1}
              alt="first"
              style={{
                borderRadius: "25px",
                height: "162px",
                width: "332px",
                padding: "5px",
              }}
            />
            <img
              src={image2}
              alt="second"
              style={{
                borderRadius: "25px",
                height: "197px",
                width: "422px",
                padding: "5px",
              }}
            />
            <img
              src={image3}
              alt="third"
              style={{
                borderRadius: "25px",
                height: "160px",
                width: "326px",
                padding: "5px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="fifth">
        <p>
          Essential Features for the Super Trader in You - All in{" "}
          <span style={{ color: "#FCA311" }}>One Platform</span>
        </p>
        <p>
          Save hours of research by using our readymade screens to find your
          next investment
        </p>
        <img
          src={bulb}
          alt="bulb"
          height={"60px"}
          width={"38px"}
          style={{
            position: "absolute",
            left: "85px",
            top: "2040px",
            backgroundColor: "#FCA311",
          }}
        />
        <p>
          30+ ANALYTICAL TOOLS & CHARTING + LIVE TRADES + STOCK PICKS & MUCH
          MORE
        </p>
        <div style={{ display: "flex" }}>
          <button className="button3">Get started now</button>
          <h4 style={{ textDecoration: "underline" }}>See all features</h4>
        </div>
        <img
          src={chart1}
          alt="1"
          style={{
            borderRadius: "5px",
            height: "311px",
            width: "507px",
            position: "absolute",
            left: "60%",
            top: "1650px",
          }}
        />
        <img
          src={chart2}
          alt="2"
          style={{
            borderRadius: "5px",
            height: "334px",
            width: "513px",
            position: "absolute",
            left: "55%",
            top: "1750px",
          }}
        />
        <img
          src={chart3}
          alt="3"
          style={{
            borderRadius: "5px",
            height: "326px",
            width: "480px",
            position: "absolute",
            left: "51%",
            top: "1850px",
          }}
        />
        <img
          src={chart}
          alt="5"
          style={{
            borderRadius: "5px",
            height: "68px",
            width: "66px",
            position: "absolute",
            left: "89%",
            top: "1990px",
          }}
        />
        <img
          src={rupee}
          alt="4"
          style={{
            borderRadius: "5px",
            height: "80px",
            width: "55px",
            position: "absolute",
            left: "85%",
            top: "2100px",
          }}
        />
      </div>
      <div className="sixth">
        <h1 style={{ paddingLeft: "30px" }}>STOCK INVESTING, SIMPLIFIED</h1>
        <p>
          Online trading and investing in the market does not have to be boring.{" "}
        </p>

        <p>
          While we adopt a technology-led approach in building our product, we
          are keeping our users-investors and traders even before that
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "5px",
            width: "90%",
            border: "0px solid green",
            padding: "2px",
          }}
        >
          <img src={x} alt="x" width={"340px"} height={"300px"} />
          <img src={y} alt="x" width={"340px"} height={"300px"} />
          <img src={z} alt="x" width={"340px"} height={"300px"} />
          <img src={w} alt="x" width={"340px"} height={"300px"} />
        </div>
        <hr className="horizontal-line" />
        <div>
          <img
            src={seven}
            alt="7"
            width={"95%"}
            height={"500px"}
            style={{ marginLeft: "20px" }}
          />
        </div>
        <hr className="horizontal-line" />
        <div>
          <img
            src={review}
            alt="7"
            width={"98%"}
            height={"758px"}
            style={{ marginLeft: "20px" }}
          />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <img src={footer} alt="7" width={"100%"} height={"830px"} />
      </div>
    </div>
  );
};

export default Homepage;
