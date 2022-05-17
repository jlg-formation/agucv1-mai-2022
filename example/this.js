"use strict";

console.log("this: ", this);

function toto() {
  console.log("this: ", this);
}

toto();

toto.bind(123)();
toto.call(123, 34, 56, "asdfafs");
toto.apply(123, [34, 56, "asdfafs"]);

const a = {
  x: 34,
  titi: toto,
};

a.titi();
