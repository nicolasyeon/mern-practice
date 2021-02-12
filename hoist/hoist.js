// 1
console.log(hello);
var hello = 'world';

PREDICTION:
var hello;
console.log(hello);
hello = 'world'
OUTPUT:
undefined

// 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

PREDICTION:
function test() {
    var needle
    needle = 'magnet';
    console.log(needle);
}
var needle;
needle = 'haystack';
test();
OUTPUT:
magnet

// 3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

PREDICTION:
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
var brendan;
brendan = 'super cool';
console.log(brendan);
OUTPUT:
super cool

// 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

PREDICTION:
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
var food;
food = 'chicken';
console.log(food);
eat();
OUTPUT:
chicken
half - chicken

// 5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

PREDICTION:
var mean;
mean = function () {
    var food;
    food = "fish";
    food = "chicken";
    console.log(food);
    console.log(food);
}
mean();
console.log(food);
console.log(food);
OUTPUT:
chicken
chicken

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

PREDICTION:
function rewind() {
    var genre;
    genre = "r&b";
    genre = "rock";
    console.log(genre);
    console.log(genre);
}
var genre;
genre = "disco";
console.log(genre);
rewind();
console.log(genre);
OUTPUT:
disco
rock
rock
disco

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

PREDICTION:
function learn() {
    var dojo;
    dojo = "burbank";
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
OUTPUT:
san jose
burbank
seattle
seattle
san jose

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
PREDICTION:
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
OUTPUT:
true
closed for now
