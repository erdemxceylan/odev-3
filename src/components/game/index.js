import React from 'react';
import './styles.scss';
import * as svgs from '../../assets/svgs';

export default function Game() {
   return (
      <div>
         {svgs.schema}
         {svgs.face.thinking}
         {/* {svgs.face.sad} */}
         {/* {svgs.face.happy} */}
      </div>
   );
}