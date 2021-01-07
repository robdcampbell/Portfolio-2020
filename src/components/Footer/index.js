import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
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
      <FooterContainer id="footer">
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Github</FooterLinkTitle>
                <FooterExternalLink
                  href="https://www.google.com"
                  target="_blank"
                >
                  Google
                </FooterExternalLink>
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
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
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
    
      <FooterContainer id="footer">
        <FooterWrap>
          
          <FooterLinksContainer>
          
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                <FooterExternalLink
                  href="https://www.google.com"
                  target="_blank"
                >
                  Google
                </FooterExternalLink>
                <FooterLink to="./signin">Testimonials</FooterLink>
                <FooterLink to="./signin">Careers</FooterLink>
                <FooterLink to="./signin">Investors</FooterLink>
                <FooterLink to="./signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                <FooterLink to="./signin">How it works</FooterLink>
                <FooterLink to="./signin">Testimonials</FooterLink>
                <FooterLink to="./signin">Careers</FooterLink>
                <FooterLink to="./signin">Investors</FooterLink>
                <FooterLink to="./signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                <FooterLink to="./signin">How it works</FooterLink>
                <FooterLink to="./signin">Testimonials</FooterLink>
                <FooterLink to="./signin">Careers</FooterLink>
                <FooterLink to="./signin">Investors</FooterLink>
                <FooterLink to="./signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                <FooterLink to="./signin">How it works</FooterLink>
                <FooterLink to="./signin">Testimonials</FooterLink>
                <FooterLink to="./signin">Careers</FooterLink>
                <FooterLink to="./signin">Investors</FooterLink>
                <FooterLink to="./signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
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
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
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
 */
