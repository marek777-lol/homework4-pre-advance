class MyString {
    constructor(string) {
        this.string = string;
    }

    reverse() {
        let rez = '';
        for (let i = this.string.length-1; i >= 0; i--) {
            rez += this.string[i];
        }
        return rez
    }

    ucFirst() {
        const firstLetter = this.string[0].toUpperCase();
        const stringWithOutFirstLetter = this.string.slice(1);
        const result = firstLetter + stringWithOutFirstLetter;
        return result;
    }

    ucWords() {
        const string2 = this.string.split(' ');
        let rez = ''
        for (let i = 0; i < string2.length; i++) {
             rez += string2[i].slice(0,1).toUpperCase() + string2[i].slice(1) + ' '
        }
        return rez;
    }
}

let string = new MyString('hi my name is mark');

console.log(string.reverse());

console.log(string.ucFirst());

console.log(string.ucWords());