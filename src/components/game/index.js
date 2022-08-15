import React, { useState } from 'react';
import './styles.scss';
import * as svgs from '../../assets/svgs';
import Choice from '../choice';

const choices = [49, 64, 56];
const legend = [{ title: 'Puan', value: 120 }, { title: 'Tur', value: 2 }, { title: 'Soru', value: 7 },];
const question = { first: 7, operation: 'x', second: 8 };
const CORRECT = 'Correct';
const INCORRECT = 'Incorrect';

export default function Game() {
   const [answer, setAnswer] = useState(null);

   return (
      <>
         <div>
            {svgs.schema}
            {answer === CORRECT ? svgs.face.happy : answer === INCORRECT ? svgs.face.sad : svgs.face.thinking}
            {legend.map((item, index) => <p className='legend' key={`legend-${index}`}>{item.title}: {item.value}</p>)}
            {choices.map((choice, index) => <Choice key={`choice-${index}`} choice={choice} index={index} />)}
            <p className='question'>{`${question.first} ${question.operation} ${question.second}`}</p>
         </div>
         {answer === CORRECT ? svgs.checkCorrect : answer === INCORRECT ? svgs.checkIncorrect : svgs.check}
         {/* {svgs.check}
         {svgs.checkIncorrect}
         {svgs.checkCorrect} */}
         <div style={{ height: '20rem' }}></div>
      </>
   );
}