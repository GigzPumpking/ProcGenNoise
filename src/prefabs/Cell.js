// https://github.com/CodingTrain/Wave-Function-Collapse/blob/main/cell.js

class Cell {
    constructor(value, type = 'land') {
      this.collapsed = false;
      this.options = value;
      this.type = type;
    }
}