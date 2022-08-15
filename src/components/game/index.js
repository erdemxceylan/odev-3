import React, { useState } from 'react';
import Choice from '../choice';
import * as svgs from '../../assets/svgs';
import './styles.scss';

// create random indexes to switch the position of the correct answer
const randomIndex = Math.floor(3 * Math.random());                   // 0, 1, or 2
const iterator = Math.floor(2 * Math.random()) % 2 === 0 ? -1 : 1;   // -1 or 1
const modulo3 = n => ((n % 3) + 3) % 3;                              // takes mod 3 of a number
const randomIndexes = [randomIndex, modulo3(randomIndex + iterator), modulo3(randomIndex + 2 * iterator)]; // permutations of the set {0, 1, 2}

const legend = [{ title: 'Puan', value: 120 }, { title: 'Tur', value: 2 }, { title: 'Soru', value: 7 },];
const question = { first: 7, operation: 'x', second: 8, points: 3, choices: [49, 64, 56] };
const correctIndex = 2;
const CORRECT = 'correct';
const INCORRECT = 'incorrect';
// const SELECTED = 'selected';
let schemaClass;
let svg;

export default function Game() {
   const [answer, setAnswer] = useState(null);
   // const [isRoundOver, setIsRoundOver] = useState(false);

   function clickHandler(target, isCorrect) {
      console.log(target);
      if (!answer) {
         setAnswer(isCorrect ? CORRECT : INCORRECT);
      }
   }

   switch (answer) {
      case CORRECT:
         svg = svgs.face.happy;
         schemaClass = `schema ${CORRECT}`;
         break;
      case INCORRECT:
         svg = svgs.face.sad;
         schemaClass = `schema ${INCORRECT}`;
         break;
      default:
         schemaClass = 'schema';
         svg = svgs.face.thinking;
         break;
   }

   return (
      <>
         <div className={schemaClass}>
            {svgs.schema}
            {svg}
            {legend.map((item, index) => <p className='legend' key={`legend-${index}`}>{item.title}: {item.value}</p>)}
            {question.choices.map((choice, index) => {
               return (
                  <Choice
                     // className={answer ? SELECTED : answer === CORRECT ? svgs.face.sad : svgs.face.thinking}
                     key={`choice-${index}`}
                     choice={choice}
                     index={randomIndexes[index]}
                     // isCorrect={isCorrect}
                     onClick={(e) => clickHandler(e.target, question.choices[correctIndex] === choice)}
                  />
               );
            }
            )}
            <p className='question'>{`${question.first} ${question.operation} ${question.second}`}</p>
         </div>
         {/* {answer === CORRECT ? svgs.checkCorrect : answer === INCORRECT ? svgs.checkIncorrect : svgs.check} */}
         {/* {svgs.check}
         {svgs.checkIncorrect}
         {svgs.checkCorrect} */}
         {/* <div style={{ height: '60rem' }}></div> */}
      </>
   );
}