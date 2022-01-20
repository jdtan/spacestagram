import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #113952;
  padding: 2em 0;
  margin-top: 2em;
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return <FooterContainer>Shopify Challenge 2022</FooterContainer>;
};

export default Footer;
