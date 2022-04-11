"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2;) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько его оцените?", "");
    if (a.length != 0 && a.length <= 50 && a != null && b.length != 0 && b != null) {
        personalMovieDB.movies[a] = b;
        i++;
    } else {
        continue;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель.");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы - киноман.");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
