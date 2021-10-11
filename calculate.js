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

  run() {
    switch (this.previousOperator) {
      case '+':
        this._current = this._previous + this._current;
        break;
  
      case '-':
        this._current = this._previous - this._current;
        break;
  
      case 'x':
        this._current = this._previous * this._current;
        break;
  
      case '/':
        this._current = this._previous / this._current;
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
