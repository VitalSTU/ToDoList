// 034 - Code Wars

// 1
function buildFun(n){
	var res = [];
	for (var i = 0; i < n; i++){
        let j = i;
		res.push(function(){
            return j;
		});
	}
	return res;
}

for(let i = 0; i < 10; i++){
    console.log(buildFun(10)[i]());
}
console.log();

// 2
let marks = [2,2,2,2];
function getAverage(marks){
	return Math.floor(marks.reduce((a, b) => a + b)/marks.length);
}
console.log(getAverage([2,2,2,2]));//2
console.log(getAverage([1,2,3,4,5,]));//3
console.log(getAverage([1,1,1,1,1,1,1,2]));//1
