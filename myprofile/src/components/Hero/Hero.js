import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Takalani Maxwell Mukwevho Portfolio
        </SectionTitle>
        <SectionText>
        I am a hard working, honest individual. I am a good
        timekeeper, always willing to learn new skills. I am
        able to work independently in busy environments
        and also within a team setting. I am reliable and
        dependable and often seek new responsibilities
        within a wide range of software development areas. I
        have an active and dynamic approach to work and
        getting things done. I am determined and decisive.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;