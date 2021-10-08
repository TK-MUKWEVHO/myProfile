import React from 'react';
import { DiFirebase, DiReact, DiZend,DiMsqlServer } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { DiJsBadge,DiHtml5,DiScriptcs,DiAngularSimple,DiBootstrap,DiMysql,DiMongodb,DiNodejs,DiPhp,DiJava,DiCss3} from "react-icons/di";
import { AiFillCode } from "react-icons/ai";
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the Web and Desktop development world.
      From Front-End, Back-End and Databases
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <DiHtml5/> HTML <DiCss3/> CSS <DiJsBadge/> JavaScript <br />
            <DiBootstrap/> Bootstrap <br/>
            <DiAngularSimple/> Angular <br/>
            <DiReact/> React.js <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
          <DiMysql/> MySQL <br/>
          <DiMsqlServer/> SSMS<br/>
          <DiMongodb/> MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          <DiNodejs/> Nodejs <br />
            <DiJava/> Java, Servlet <br />
             <DiPhp/> PHP<br />
             <AiFillCode/> C++, C#, ASP.NET MVC 5<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
