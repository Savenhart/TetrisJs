class Block {
    #name;
    #color;
    #isActive;
    #x;
    #y;
    #shape = [[],[],[],[]];
    constructor(name, isActive, color, arr){
        this.#name = name;
        this.#isActive = isActive;
        this.#color = color;
        
        this.#shape[0] = arr;

        this.#shape[1] = this.rotateCW(arr);
        this.#shape[2] = this.rotateCW(this.#shape[1]);
        this.#shape[3] = this.rotateCW(this.#shape[2]);
    }

    get name() {
        return this.#name;
    }

    get shape(){
        return this.#shape;
    }

    get isActive(){
        return this.#isActive;
    }

    get color(){
        return this.#color;
    }

    get x(){
        return this.#x;
    }

    get y(){
        return this.#y;
    }

    set x(x){
        this.#x = x;
    }

    set y(y){
        this.#y = y;
    }

    //rotate 2d array by 90° clockwise
    rotateCW(arr) {
        const rotItem = (r, c, item) => res[r][arr.length - 1 - c] = item;
        const processRow = (row, r) => row.forEach((item, c) => rotItem(c, r, item));
        const res = arr.map(row => [...row]);
        arr.forEach(processRow);
        return res;
    }
}