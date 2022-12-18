// object inside array
// very usefull in ReadableByteStreamControllerl world application
const users = [
    {userId: 1,firstName: "Deepa", gender:"female"},
    {userId: 2,firstName: "Nupur", gender:"female"},
    {userId: 3,firstName: "Bhailu", gender:"male"},
]
for(let user of users){
    // console.log(user);
    // console.log(user.userId)
    console.log(user.firstName)
}