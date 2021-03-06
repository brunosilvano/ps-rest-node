var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gulpMocha = require('gulp-mocha');
var env = require('gulp-env');
var supertest = require('supertest');

gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 3000
        },
        ignore: ['./node_modules/**']
    }).on('restart', function () {
        console.log('Restarting server');
    });
});

gulp.task('test', function () {
    env({ vars: { ENV: 'test' } });
    gulp.src('tests/*.js', { read: false })
        .pipe(gulpMocha({ reporter: 'nyan' }));
});