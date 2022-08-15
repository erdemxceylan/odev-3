import React from 'react';
import { circle } from '../../assets/svgs';
import './styles.scss';

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
   const { choice, index, selected, correct, onClick } = props;
   let choiceClass;

   console.log(selected);

   if (selected !== null) {
      if (selected) choiceClass = 'selected-choice';
      if (correct && !selected) choiceClass = 'correct-choice';
      if (!correct && !selected) choiceClass = null;
   }

   return (
      <div
         className={choiceClass}
         style={{ position: 'absolute', cursor: 'pointer', ...circlePositions[index] }}
         onClick={onClick}
      >
         {circle}
         <p style={{ fontSize: '90px', ...choicePositions[index] }}>{choice}</p>
      </div>
   );
}
