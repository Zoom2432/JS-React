"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов.");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель.");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы - киноман.");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3;) {
        const a = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
        if (a.length != 0 && a.length <= 50 && a != null) {
            personalMovieDB.genres.push(a);
            i++;
        } else {
            continue;
  }
    }
}

writeYourGenres();

showMyDB();
