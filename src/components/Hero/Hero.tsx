import OrangeBtn from "./../OrangeBtn/OrangeBtn";
import "./Hero.scss";

const Hero = () => {
  return (
    <main>
      <div className="hero">
        <div className="item item-1">
          <h1 className="hero-heading-1">
            <strong>"FIGHT AGAINST GRAVITY"</strong> <br />
            ...ehk võitlus gravitatsiooni vastu!
          </h1>
        </div>

        <div className="item item-2">
          <p className="hero-p">
            From precise assembly to seamless installation, meticulous
            maintenance to thorough repairs, we've got your crane needs covered.
            Our expertise extends to specialized surface coatings for added
            durability.
          </p>
        </div>

        <div className="item item-3">
          <OrangeBtn>Learn more&nbsp;&nbsp;&nbsp;→</OrangeBtn>
        </div>
      </div>
    </main>
  );
};

export default Hero;
