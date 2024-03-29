import React from "react";

function Destructuring() {
  // Destructuring array ya object me se values lekevariables me store karne ka ek short-hand/chota-tarika hai.

  //   const person = ["Manikant", "Jha", "Surat"];

  //   const fname = person[0];
  //   const lname = person[1];
  //   const city = person[2];

  //   const [fname, lname, city] = person;
  // const [city] = person; // Will store "Manikant" in city.
  //   const [city, lname, fname] = person; // Order matters.
  //   const [abc, def, ghi] = person; // Name doesn't matter.

  //   console.log(fname + " " + lname + " lives in " + city);

  //   const obj = {
  //     fname: "Manikant",
  //     lname: "Jha",
  //     city: "Surat",
  //   };

  //   const fname = obj.fname;
  //   const lname = obj.lname;
  //   const city = obj.city;

  //   const { fname, lname, city } = obj;
  //   const { city, fname, lname } = obj; // Order doesn't matter.
  //   const { city, asd, def } = obj; // Name matters.

  //   console.log(fname + " " + lname + " lives in " + city);
  //   console.log(asd);

  return <div>Destructuring</div>;
}

export default Destructuring;
