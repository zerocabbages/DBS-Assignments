
function fibonacci(num){
var i;
var fib=[];

fib[0]=0;
fib[1]=1;
console.log(fib[0])
console.log(fib[1])

for(i=2;i<num;i++){
	fib[i]=fib[i-2] + fib[i-1];
	console.log(fib[i]);
}
}
fibonacci(10);