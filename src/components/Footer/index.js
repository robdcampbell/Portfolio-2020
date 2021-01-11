import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaCodepen,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterExternalLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer id="contact">
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo
                to="/"
                onClick={toggleHome}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                (Back to the top)
              </SocialLogo>

              <WebsiteRights>
                rob campbell. {new Date().getFullYear()}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://github.com/robdcampbell"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>

                <SocialIconLink
                  href="https://www.linkedin.com/in/rob-campbell-a6354a75/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://codepen.io/robdcampbell"
                  target="_blank"
                  aria-label="Codepen"
                >
                  <FaCodepen />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

/*
<FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Github</FooterLinkTitle>
                <SocialIconLink
                  href="https://github.com/robdcampbell"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>LinkedIn</FooterLinkTitle>

                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Instagram</FooterLinkTitle>
                <FooterLink to="./signin">How it works</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>One More</FooterLinkTitle>
                <FooterLink to="./signin">How it works</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
*/
