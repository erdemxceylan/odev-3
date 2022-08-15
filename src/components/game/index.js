import React, { useState } from 'react';
import './styles.scss';
import * as svgs from '../../assets/svgs';
import Choice from '../choice';

// create random indexes to switch the position of the correct answer
const randomIndex = Math.floor(3 * Math.random());                   // 0, 1, or 2
const iterator = Math.floor(2 * Math.random()) % 2 === 0 ? -1 : 1;   // -1 or 1
const modulo3 = n => ((n % 3) + 3) % 3;                              // takes mod 3 of a number
const randomIndexes = [randomIndex, modulo3(randomIndex + iterator), modulo3(randomIndex + 2 * iterator)]; // permutations of the set {0, 1, 2}

const legend = [{ title: 'Puan', value: 120 }, { title: 'Tur', value: 2 }, { title: 'Soru', value: 7 },];
const question = { first: 7, operation: 'x', second: 8, points: 3, choices: [49, 64, 56] };
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
            {question.choices.map((choice, index) => <Choice key={`choice-${index}`} choice={choice} index={randomIndexes[index]} />)}
            <p className='question'>{`${question.first} ${question.operation} ${question.second}`}</p>
         </div>
         {answer === CORRECT ? svgs.checkCorrect : answer === INCORRECT ? svgs.checkIncorrect : svgs.check}
         {/* {svgs.check}
         {svgs.checkIncorrect}
         {svgs.checkCorrect} */}
         <div style={{ height: '60rem' }}></div>
      </>
   );
}