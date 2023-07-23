import React from "react";
import "./About.scss";
import PageBanner from "../../components/PageBanner/PageBanner";
import Trets from "../../components/Trets/Trets";
import Trets1 from "../../assets/images/Trets1.png";
import Teams from "../../components/Teams/Teams";
const data = [
	{
	  image: "https://picsum.photos/800/600?random=1",
	  name: "cdcdc",
	  job: "ABC",
	  contend: "cjdhcjdhcjd",
	  social: ["Linkdin-link", "twiter-link", "portfoliio"],
	},
	{
	  image: "https://picsum.photos/800/600?random=2",
	  name: "cdcdc",
	  job: "ABC",
	  contend: "cjdhcjdhcjd",
	  social: ["Linkdin-link", "twiter-link", "portfoliio"],
	},
	{
	  image: "https://picsum.photos/800/600?random=3",
	  name: "cdcdc",
	  job: "ABC",
	  contend: "cjdhcjdhcjd",
	  social: ["Linkdin-link", "twiter-link", "portfoliio"],
	},
	{
	  image: "https://picsum.photos/800/600?random=4",
	  name: "cdcdc",
	  job: "ABC",
	  contend: "cjdhcjdhcjd",
	  social: ["Linkdin-link", "twiter-link", "portfoliio"],
	},
	{
	  image: "https://picsum.photos/800/600?random=5",
	  name: "cdcdc",
	  job: "ABC",
	  contend: "cjdhcjdhcjd",
	  social: ["Linkdin-link", "twiter-link", "portfoliio"],
	},
  ];
const About = () => {
  return (
    <div>
      <div>
        <PageBanner
          title={"About Us"}
          breadCrumbs={[
            { label: "Home", link: "/" },
            { label: "About us", link: "/about" },
          ]}
        />
      </div>
      <div>
        <Trets
          Heading={"Trupti Treats"}
          Text={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.",
            "Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque",
          ]}
          Trets1={Trets1}
        />
      </div>
	  <div>
		<Teams data={data}/>
	  </div>
    </div>
  );
};

export default About;
