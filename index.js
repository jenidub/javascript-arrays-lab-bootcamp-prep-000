const app = "I don't do much."
kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  newarray = [name, ...kittens]
  return newarray
}
