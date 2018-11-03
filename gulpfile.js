gulp.task('travis', ['build'], function(){
  process.exit(0);
})

// gulp.task('default', ['travis', 'lint'], function() {
//   console.log('started')
// })