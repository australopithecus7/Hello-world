/* 
Javascript Tutorial - Net Ninja
https://www.youtube.com/watch?v=iWOYAxlnaww&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=1
https://github.com/iamshaunjp/modern-javascript
https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg

*/
const para = document.querySelector("body > p:nth-child(3)");
console.log(para);

function sayHello() {
	for (i = 0; i < 10; i++) {
		if (i === 4) {
			break;
		}
		console.log("i value: " + i);
	}
}

// Returns random number from 1-10
function randomNumber() {
	return Math.floor(Math.random() * 10 + 1);
}
