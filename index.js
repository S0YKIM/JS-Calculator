"use strict";

import Calculate from './calculate.js';

const $ = (selector) => document.querySelector(selector);

const calculator = $('.calculator');
const display = $('.calculator__display');
const buttons = $('.calculator__buttons');
const operator = $('.operator')

function App() {
  const calculate = new Calculate();

  this.init = () => {
    buttons.addEventListener('click', function (e) {
      const target = e.target;
      const info = target.classList[0];
      const content = target.innerText;
  
      if (target.matches('button')) {
        if (info === 'number' || info === 'number__zero') {
          if (display.innerText === '0') {
            display.innerText = content;
            calculate.current = Number(display.innerText);
          }
          else if (display.innerText !== '0' && (Number(calculate.previousKey)) || (calculate.previousKey === '.')) {
            if (display.innerText.length > 14) return;
            display.innerText += content;
            calculate.current = Number(display.innerText);
          }
          else {
            display.innerText = content;
            calculate.current = Number(display.innerText);
          }
          calculate.previousKey = content;
        }
        
        if (info === 'operator') {
            calculate.run();
            display.innerText = calculate.current;
            calculate.previous = calculate.current;
            calculate.previousOperator = content;
            calculate.previousKey = content;
        }
  
        if (info === 'clear') {
          calculate.previous = 0;
          calculate.current = 0;
          calculate.previousOperator = '';
          display.innerText = 0;
        }
  
        if (info === 'sign') {
          calculate.current *= -1;
          display.innerText = calculate.current;
        }
  
        if (info === 'percentage') {
          calculate.current /= 100;
          display.innerText = calculate.current;
          calculate.previous = calculate.current;
          calculate.previousOperator = content;
          calculate.previousKey = content;
        }
      }
    });
  }
}

const app = new App();
app.init();
