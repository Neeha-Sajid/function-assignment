////FUNCTION EXAMPLES
////EXAMPLE 1
// function logworkingDays(workDay, gymDay, homeworkDay, sleepDay, hangOut)
// {
//     console.log(workDay, gymDay, homeworkDay, sleepDay, hangOut)
// }
// logworkingDays("monday", "tuesday", "wednesday", "thursday" ,"friday")
////EXAMPLE 2
//Cake Ingredients
////1.sugar 2.chocolate 3.flour
// function cakeBake()
// {
//     console.log(2+5+1)
// }
// cakeBake()
// cakeBake()
// function cakeBake(chocolate)
// {
//     console.log(2+chocolate+1)
// }
// cakeBake(4)
// cakeBake(6)
// function cakeBake(sugar,chocolate)
// {
//     console.log(sugar+chocolate+1)
// }
// cakeBake(4, 7)
// cakeBake(6, 9)
////RETURN EXAMPLE
function cakeBake(sugar, chocolate, flour) {
    if (sugar === void 0) { sugar = 1; }
    if (chocolate === void 0) { chocolate = 3; }
    if (flour === void 0) { flour = 2; }
    var bakedCake = sugar + chocolate + flour;
    return bakedCake;
}
console.log(cakeBake(5, 8, 10));
