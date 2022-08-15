import React, { useState } from 'react';
import Choices from '../choices';
import * as svgs from '../../assets/svgs';
import './styles.scss';

const CORRECT = 'correct';
const INCORRECT = 'incorrect';
const SCHEMA = 'schema';
const schema = { success: `${SCHEMA} ${CORRECT}`, fail: `${SCHEMA} ${INCORRECT}`, default: SCHEMA };
const face = { success: svgs.face.happy, fail: svgs.face.sad, default: svgs.face.thinking };
const legend = [{ title: 'Puan', value: 120 }, { title: 'Tur', value: 2 }, { title: 'Soru', value: 7 },];
const question = { first: 7, operation: 'x', second: 8, points: 3, choices: [49, 64, 56] };

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
            <Choices choices={choices} isSelected={isSelected} onClick={clickHandler} />
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