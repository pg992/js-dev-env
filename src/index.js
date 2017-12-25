'use strict'

/* eslint-disable no-console */

import numeral from 'numeral';
// import './index.css'

const courseValue = numeral(1000).format('$0,0.00');
// debugger;
console.log(`I would pay ${courseValue} for this awesome course!`); // `` -> ES6 template string feature
