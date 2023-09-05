const gulp = require('gulp');
const server = require('gulp-server-livereload');

// Hacemos una primera tarea con gulp
gulp.task('build', function(callback) {
    console.log('Construyendo el sitio');
    setTimeout(callback, 1000);
})

// Creamos un servidor con gulp livereload 
gulp.task('serve', function(callback) {
    gulp.src('./herramientas/automatizacion/www')
        .pipe(server({
            livereload: true,
            open: true
        }))
})

// Encadenamos tareas
gulp.task('default', gulp.series('build', 'serve'));