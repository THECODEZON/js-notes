const users = [
    {userId: 1,firstName: "Deepa", gender:"male"},
    {userId: 2,firstName: "Nupur", gender:"female"},
    {userId: 3,firstName: "B", gender:"m"},
]


const[{firstName: user1firstName}, , {gender:user3gender}] = users;
console.log(user1firstName);
console.log(user3gender);
console.log(userId);