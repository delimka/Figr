import OrangeBtn from "./../OrangeBtn/OrangeBtn";
import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";
import { useTranslation } from 'react-i18next';
import "./Hero.scss";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Element name="hero">
      <div className="hero">
        <div className="item item-1">
          <h1 className="hero-heading-1">
            <strong>&rdquo;FIGHT AGAINST GRAVITY&rdquo;</strong> <br />
            ...ehk võitlus gravitatsiooni vastu!
          </h1>
        </div>

        <div className="item item-2">
          <p className="hero-p">
          {t('hero.description')}
          </p>
        </div>
     
        <div className="item item-3">
        <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
          <OrangeBtn>{t('hero.learnMore')}&nbsp;&nbsp;&nbsp;→</OrangeBtn>
          </ScrollLink>
        </div>
      </div>
      </Element>
  );
};

export default Hero;
