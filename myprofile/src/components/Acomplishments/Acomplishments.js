import React from 'react';
import Link from 'next/link';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { Link: '',number: 2017, text: 'National Senior Certifiacate'},
  { Link: 'https://www.udemy.com/certificate/UC-e910777b-7337-40a0-bb58-6e6ffc20b010/',number: 2020, text: 'Java Programming Masterclass for Software Developers'},
];

const Acomplishments = () => (
  <Section id="certificate">
    <SectionTitle>Certificates</SectionTitle>
    
    <Boxes>
      {data.map((card, index) => (
        <Link href={`${card.Link}`}>
        <Box key={index}>
          
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
          
        </Box>
       </Link>
      ))}
    </Boxes>
    
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
