function even() {
    var a = document.getElementById("n").value;
    var i;
    for (i = 0; i <= a; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function voc() {
    var val = document.getElementById("alpha").value;
    if (val === "a" || val === "e" || val === "i" || val === "o" || val === "u") {
        console.log("vowel");
    }
    else {
        console.log("consonant");
    }
}

function count() {
    var even = 0;
    var odd = 0;
    var i;
    for (i = 1; i <= 999; i++) {
        if (i % 2 === 0) {
            even++;
        }
        else {
            odd++;
        }
    }
    console.log("even number from 1 to 999:", even);
    console.log("odd number from 1 to 999:", odd);
}

function count2(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(count2("hello", "l"));

function sumavg() {
    var num = [1, 9, 8];
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum += num[i];
    }
    var avg = sum / num.length;
    console.log("sum:", sum);
    console.log("average:", avg);
}

function larg(arr) {
    if (arr.length === 0) {
        return "array is empty";
    }
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
var num = [2, 5, 7, 2, 8, -1, 4];
var largestnumber = larg(num);
console.log("the largest number in the array is :", largestnumber);