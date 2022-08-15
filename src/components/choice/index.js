import React from 'react';
import { circle } from '../../assets/svgs';

const circlePositions = [
   { top: '320px', left: '1176.5px' },
   { top: '451px', left: '1536px' },
   { top: '611px', left: '1255px' }
];

const choicePositions = [
   { top: '37px', left: '47px' },
   { top: '29px', left: '49px' },
   { top: '49px', left: '49px' }
];

export default function Choice(props) {
   const { choice, index } = props;

   return (
      <div style={{ position: 'absolute', ...circlePositions[index] }}>
         {circle}
         <p style={{ fontSize: '90px', ...choicePositions[index] }}>{choice}</p>
      </div>
   );
}
