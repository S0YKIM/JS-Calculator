class Calculate {
  constructor () {
    this._previous = 0;
    this._current = 0;
    this.previousOperator = '';
    this.previousKey = '';
  }

  get previous() {
    return this._previous;
  }

  set previous(value) {
    this._previous = value;
  }

  get current() {
    return this._current;
  }

  set current(value) {
    this._current = value;
  }

  plus() {
    this._current = this._previous + this._current;
  }

  minus() {
    this._current = this._previous - this._current;
  }

  multiply() {
    this._current = this._previous * this._current;
  }

  divide() {
    this._current = this._previous / this._current;
  }

  run() {
    switch (this.previousOperator) {
      case '+':
        this.plus();
        break;
  
      case '-':
        this.minus();
        break;
  
      case 'x':
        this.multiply();
        break;
  
      case '/':
        this.divide();
        break;
  
      case '=':
        break;

      case '%':
        break;
  
      default:
        return;
    }
  }
}

export default Calculate;