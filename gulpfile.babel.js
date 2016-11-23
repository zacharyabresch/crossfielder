import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import del from 'del';

const paths = {
  dirs: {
    build: './build',
    src: './src',
  },
  globs: {
    js: '**/*.js',
  },
};

const jsSource = `${paths.dirs.src}/${paths.globs.js}`;

gulp.task('babel', (done) => {
  gulp.src(jsSource, { base: 'src' })
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(paths.dirs.build));
  done();
});

gulp.task('clean', (done) => {
  del('build', done());
});

gulp.task('watch', (done) => {
  gulp.watch(jsSource, gulp.parallel('babel'));
  done();
});

gulp.task('default', gulp.series('babel'));
