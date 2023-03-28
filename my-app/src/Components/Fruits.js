import React from 'react';
import Buy from './Buy';
import './Fruits.css';

function Fruits() {
  return (
    <div id='buy'>
      <Buy img="apple.jpg" name="Apple" des="This is Apple" price="1kg=Rs.50"></Buy>
      <Buy img="orange.jpg" name="Orange" des="This is Orange" price="1kg=Rs.30"></Buy>
      <Buy img="apple.jpg" name="Red Apple" des="This is Red Apple" price="1kg=Rs.80"></Buy>
      
    </div>
  )
}

export default Fruits;