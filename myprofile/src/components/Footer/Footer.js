import React from 'react';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle } from './FooterStyles';
import { AiOutlineMail,AiFillPhone } from "react-icons/ai";
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call <AiFillPhone/></LinkTitle>
          <LinkItem href="tel:0635405592"> 063 540 5592 </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email <AiOutlineMail/></LinkTitle>
          <LinkItem href="mailto:mukwevhotk18@gmail.com"> mukwevhotk18@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
