import React from 'react';
import './styles.scss';
import * as svgs from '../../assets/svgs';

const choices = [49, 64, 56];
const legend = [{ title: 'Puan', value: 120 }, { title: 'Tur', value: 2 }, { title: 'Soru', value: 7 },];
const question = { first: 7, operation: 'x', second: 8 };

export default function Game() {

   return (
      <>
         <div>
            {svgs.schema}
            {svgs.face.thinking}
            {/* {svgs.face.sad} */}
            {/* {svgs.face.happy} */}
            {legend.map((item, index) => <p className='legend' key={`legend-${index}`}>{item.title}: {item.value}</p>)}
            {choices.map((choice, index) => <p className='choice' key={`choice-${index}`}>{choice}</p>)}
            <p className='question'>{`${question.first} ${question.operation} ${question.second}`}</p>
         </div>
         {svgs.check}
         <div style={{ height: '20rem' }}></div>
      </>
   );
}