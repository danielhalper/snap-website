
// class StudentProfile {
//   constructor (first, last, availability )
// }




var alice = { teeth: "dirty"};

var cleanTeeth = function () {
  this.teeth = "clean";
}

cleanTeeth.call(alice)
console.log(alice);


// class Tutor {
//   constructor (first, last, email, student) {
//     this.first = first;
//     this.last = last;
//     this.email = email;
//     this.student = student;
//   }

//     welcome () {
//       return this.first + " " + this.last + ", hi!"
//     }

// }

// const user = new Tutor("Daniel", "Halper", "danihalp@me.com", "Jayden");
// console.log(user.welcome());



