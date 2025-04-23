import LinkedList from "./linked_list.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString()); //( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
list.prepend("drew");
console.log(list.toString()); //( drew ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
console.log(list.size()); //7
console.log(list.head()); // {value: 'drew', next:....}
console.log(list.tail()); // {value: 'turtle', next: null}
