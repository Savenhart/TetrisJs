/*jshint esversion: 6 */
export class Block {
  constructor(name, isActive, color, arr) {
    this._name = name;
    this._isActive = isActive;
    this._color = color;

    this._shape = [];
    this._shape[0] = arr;
    this._shape[1] = this.rotateCW(arr);
    this._shape[2] = this.rotateCW(this.shape[1]);
    this._shape[3] = this.rotateCW(this.shape[2]);
  }

  get name() {
    return this._name;
  }

  get shape() {
    return this._shape;
  }

  get isActive() {
    return this._isActive;
  }

  get color() {
    return this._color;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set x(x) {
    this._x = x;
  }

  set y(y) {
    this._y = y;
  }

  set isActive(isActive) {
    this._isActive = isActive;
  }

  //rotate 2d array by 90° clockwise
  rotateCW(arr) {
    const rotItem = (r, c, item) => (res[r][arr.length - 1 - c] = item);
    const processRow = (row, r) =>
      row.forEach((item, c) => rotItem(c, r, item));
    const res = arr.map(row => [...row]);
    arr.forEach(processRow);
    return res;
  }
}
