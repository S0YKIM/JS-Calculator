"use strict";

import Calculate from './calculate.js';

const $ = (selector) => document.querySelector(selector);

const calculator = $('.calculator');
const display = $('.calculator__display');
const buttons = $('.calculator__buttons');
const operator = $('.operator')

function App() {
  const calculate = new Calculate();

  const handleNumber = (content) => {
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

  const handleOperator = (content) => {
    if (Number(calculate.previousKey) || calculate.previousKey === '.')
        calculate.run();
      display.innerText = calculate.current;
      calculate.previous = calculate.current;
      calculate.previousOperator = content;
      calculate.previousKey = content;
  }

  const handleClear = () => {
    calculate.previous = 0;
    calculate.current = 0;
    calculate.previousOperator = '';
    calculate.previousKey = '';
    display.innerText = 0;
  }

  const handleSign = () => {
    calculate.current *= -1;
    display.innerText = calculate.current;
  }

  const handlePercentage = () => {
    calculate.current /= 100;
    display.innerText = calculate.current;
    calculate.previous = calculate.current;
    calculate.previousOperator = content;
    calculate.previousKey = content;
  }

  buttons.addEventListener('click', function (e) {
    const target = e.target;
    const info = target.classList[0];
    const content = target.innerText;

    if (target.matches('button')) {
      switch(info) {
        case 'number':
          handleNumber(content);
          break;

        case 'number__zero':
          handleNumber(content);
          break;
        
        case 'operator':
          handleOperator(content);
          break;

        case 'clear':
          handleClear();
          break;

        case 'sign':
          handleSign();
          break;

        case 'percentage':
          handlePercentage();
          break;

        default:
          return;
      }
    }
  });
}

const app = new App();