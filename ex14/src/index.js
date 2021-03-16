function myForLoop1() {
    var evenNumbers = "";
    for (var i = 0; i < 9; i += 2) {
        evenNumbers += i;
        if(i < 8) {
            evenNumbers += ", ";
        }
    }
    return evenNumbers;
}

function myForLoop2() {
    var evenInverseNumbers = "";
    for (var i = 8; i > -1; i -= 2) {
        evenInverseNumbers += i;
        if(i > 0) {
            evenInverseNumbers += ", ";
        }
    }
    return evenInverseNumbers;
}

myForLoop1();
myForLoop2();
console.log(myForLoop1());
console.log(myForLoop2());
module.exports = {
    myForLoop1,
    myForLoop2
};