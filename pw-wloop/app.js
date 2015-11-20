// var password = prompt('Please enter your password:');
// while ( password !== 'babito') {
// password = prompt('Incorrect password, try again.')
// }
// document.write('Access Granted!');


// Another way of writing it using do-while:

var password;

do {
  password = prompt('Please enter your password:');
} while ( password === 'babito' ) {
  password = prompt('Incorrect password, try again.');
}
  document.write('Access Granted!');
