import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin,AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck,DiGrunt } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiGrunt size="3rem" /> <span>My World</span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#education">
          <NavLink>Education</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#certificate">
          <NavLink>Certificates</NavLink>
        </Link>
      </li>
                  
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/TK-MUKWEVHO">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/takalani-maxwell-mukwevho-2969ab1a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsUFoQUaERcmvUhvlKxGp1A%3D%3D">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/wanga.ndou.5">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
