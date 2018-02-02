const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name);
}

function appendKitten(name) {
  var addKittyToEnd = [...kittens, name];
  return addKittyToEnd;
}

function prependKitten(name) {
  var addKittyToFront = [name, ...kittens];
  return addKittyToFront;
}
