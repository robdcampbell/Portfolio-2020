import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterExternalLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          {/* this creates the links container */}
          <FooterLinksContainer>
            {/* this grabs several links */}
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                {/* <FooterLink to="./signin"> */}
                <FooterExternalLink
                  href="https://www.google.com"
                  target="_blank"
                >
                  Google
                </FooterExternalLink>

                {/* <a href="https://www.google.com" target="_blank">
                  How it works</a> */}

                {/* </FooterLink> */}
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
            {/*  */}
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
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
