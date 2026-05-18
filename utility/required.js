"use strict";
////// Required - makes all properties required /////////////
function updateUser1(user) {
    console.log(user);
}
updateUser1({
    name: 'Anusha',
    age: 30,
    city: 'Kannur'
});
const user2 = {
    name: 'Nithin',
    age: 33,
    city: 'Kannur'
};
user2.age = 35;
console.log(user2);
