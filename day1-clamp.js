function clamp(num,low,upp){
if(num<upp && num>low){
return num;
}else if(num===upp || num===low){
return num;
}else if(num>upp){
return upp;
}else if(num<low){
return low;
}}

// 在範圍中，返回原值
clamp(7, 0, 9); // => 7
console.log(clamp(7, 0, 9));
// 小於 lower，返回 lower
clamp(-12, -4, 5); // => -4
console.log(clamp(-12, -4, 5));
// 大於 upper，返回 upper
clamp(18, 3, 9); // => 9
console.log(clamp(18, 3, 9));