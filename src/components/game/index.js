import React, { useState } from 'react';
import Choice from '../choice';
import * as svgs from '../../assets/svgs';
import './styles.scss';

// create random indexes to switch the position of the correct answer
const randomIndex = Math.floor(3 * Math.random());                   // 0, 1, or 2
const iterator = Math.floor(2 * Math.random()) % 2 === 0 ? -1 : 1;   // -1 or 1
const modulo3 = n => ((n % 3) + 3) % 3;                              // takes mod 3 of a number
const randomIndexes = [randomIndex, modulo3(randomIndex + iterator), modulo3(randomIndex + 2 * iterator)]; // permutations of the set {0, 1, 2}

const question = { first: 7, operation: 'x', second: 8, points: 3, choices: [49, 64, 56] };
const correctIndex = 2;

const CORRECT = 'correct';
const INCORRECT = 'incorrect';
const SCHEMA = 'schema';
const schema = { success: `${SCHEMA} ${CORRECT}`, fail: `${SCHEMA} ${INCORRECT}`, default: SCHEMA };
const face = { success: svgs.face.happy, fail: svgs.face.sad, default: svgs.face.thinking };
const legend = [{ title: 'Puan', value: 120 }, { title: 'Tur', value: 2 }, { title: 'Soru', value: 7 },];

export default function Game() {
   const [answer, setAnswer] = useState(null);
   const [isSelected, setIsSelected] = useState(null);
   const set = values => answer === CORRECT ? values.success : answer === INCORRECT ? values.fail : values.default;
   const { first, operation, second, choices } = question;

   function clickHandler(isCorrect, index) {
      if (!answer) {
         setAnswer(isCorrect ? CORRECT : INCORRECT);
         setIsSelected(index);
      }
   }

   return (
      <>
         <div className={set(schema)}>
            {svgs.schema}
            {set(face)}
            {legend.map((item, index) => <p className='legend' key={`legend-${index}`}>{item.title}: {item.value}</p>)}
            {choices.map((choice, index) => {
               const isCorrect = choices[correctIndex] === choice;
               return (
                  <Choice
                     key={`choice-${index}`}
                     choice={choice}
                     index={randomIndexes[index]}
                     selected={isSelected !== null ? isSelected === index : null}
                     correct={isCorrect}
                     onClick={() => clickHandler(isCorrect, index)}
                  />
               );
            }
            )}
            <p className='question'>{`${first} ${operation} ${second}`}</p>
            {/* <div className='check'> */}
            {/* {answer === CORRECT ? svgs.checkCorrect : answer === INCORRECT ? svgs.checkIncorrect : svgs.check} */}
            {/* {svgs.check} */}
            {/* {svgs.checkCorrect} */}
            {/* {svgs.checkIncorrect} */}
            {/* </div> */}
            {/* <div style={{ height: '60rem' }}></div> */}
         </div>
      </>
   );
}