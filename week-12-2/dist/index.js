"use strict";
const users = new Map();
users.set("bwjhg@1", { name: "ejwh", age: 30 });
users.set("bwjhg@sss1", { name: "ejzzzwh", age: 300 });
const user = users.get("bwjhg@1");
console.log(user);
