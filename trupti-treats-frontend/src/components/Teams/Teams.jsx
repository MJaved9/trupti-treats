import React from "react";
import "./Teams.scss";
import Carousel from "react-grid-carousel";
import twitter from "../../assets/icons/twitter.svg";
import fb from "../../assets/icons/fb.svg";
import linkdin from "../../assets/icons/linkedin.svg";
import logo from "../../assets/images/logo.png"
const Teams = ({ data }) => {
  return (
    <>
      <div>
        <div className="heading">
          <h2 className="team">Our Teams</h2>
          <h3 className="head-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>
        <div className="slid-1">
          <Carousel cols={3||2||1} rows={1} gap={15||10||5} loop>
            {data.map((ele, i) => {
              return (
                <Carousel.Item key={i}>
                  <div className="car">
                    <div>
                      <img src={ele.image} className="car-image" />
                    </div>
                    <div>
                      <h2 className="name">{ele.name}</h2>
                      <h3 className="title">{ele.job}</h3>
                    </div>
                    <div className="con">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga, quia eum quae molestiae dolore vel nemo. Impedit
                      porro suscipit, dolorum aut delectus, quis veritatis
                      provident excepturi et ipsam corrupti totam.
                    </div>
                    <div className="social">
                      <span>
                        <img src={linkdin} />{" "}
                        {/* we can Link with onCLick {ele.social[0]} with Profile*/}
                      </span>
                      <span>
                        <img src={twitter} />{" "}
                        {/* we can Link with onCLick {ele.social[1]} with Profile*/}
                      </span>
                      <span>
                        <img src={fb} />{" "}
                        {/* we can Link with onCLick {ele.social[2]} with Profile*/}
                      </span>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="coment">
          <div>
            <img
              src="https://png.pngtree.com/png-clipart/20220905/ourmid/pngtree-5-stars-3d-icon-png-image_6138434.png"
              width={"15%"}
            />
          </div>
          <div className="coment-txt">
            "A customer testimonial that highlights features and answers
            potential customer doubts about your product or service. Showcase
            testimonials from a similar demographic to your customers."
          </div>
          <div className="profile">
            <div><img src="https://picsum.photos/800/600?random=1" className="img-1"/></div>
            <div><h2 className="profile-name">cdcdc</h2>
            <h3 className="profile-pos">Position,compony Name</h3>
            </div>
            <div>
              <span className="vl">|</span>
            </div>
            <div><img src={logo} className="img-1"/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
// your custom dot component with prop `isActive`
const MyDot = ({ isActive }) => (
  <span
    style={{
      display: "inline-block",
      height: isActive ? "8px" : "5px",
      width: isActive ? "8px" : "5px",
      background: "#1890ff",
    }}
  ></span>
);

// set custom dot
