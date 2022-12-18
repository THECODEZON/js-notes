// object destructuring
const band = {
    bandName:"led zepplin",
    famusSong:"Stairway to heaven",
    year:1968,
    anotherFamusSong:"Kashmir"
};
// let { bandName, famusSong } = band;
// bandName = "queen deepa"
let{bandName:var1, famusSong:var2, ...restProps} = band;
console.log(var1, var2)
console.log(restProps)