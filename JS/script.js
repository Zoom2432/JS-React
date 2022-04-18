"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов.");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель.");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы - киноман.");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDatabase: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3;) {
            const a = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
            if (a.length !== 0 && a.length <= 50 && a != null) {
                personalMovieDB.genres.push(a);
                i++;
            } else {
                continue;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};
