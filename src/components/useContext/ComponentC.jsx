import React from 'react';
import ComponentE from './ComponentE';

const ComponentC = () => {

  const abacate = 'componente C original'
  console.log(abacate)
  
  return(
    <div>
     <ComponentE />
    </div>
  )
}

export default ComponentC;
