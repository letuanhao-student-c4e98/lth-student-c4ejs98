// init(after 7)
let movie={
    title:'the dark night rises',
    year: 2012,
    rate: 8.4,
};
console.log(movie);

// read(after 9)
console.log (movie.title);
console.log(movie.year);
console.log(movie.rate);

console.log (movie['title']);
console.log (movie['rate']);
console.log (movie['year']);

 movie.director='Adam';

 let x=prompt('What u want to know ?');
 if (x=='title')console.log(movie.title);
 if (x=='rate')console.log(movie.rate);
 if (x=='year')console.log(movie.year);

//  update(after 10)

movie['rate']=8.7;
console.log(movie.rate);
movie['rate']+=0.5;
let y=prompt('What u want to update ?');
let newup=prompt('What is the update?');
if (y=='title'){
    movie.title=newup;
    console.log(movie);
};
if (y=='year'){
    movie.year=newup;
    console.log(movie);
};
if (y=='rate'){
    movie.rate=newup;
    console.log(movie);
};

// create(after 11)

let cre=prompt('What u want to update ?');

if (cre=='title'){
    movie.title=newup;
    console.log(movie);
}else{
    if (cre=='year'){
    movie.year=newup;
    console.log(movie);
}else {
if (cre=='rate'){
    movie.rate=newup;
    console.log(movie);
}

let newup=prompt('What is the update?');


