//your JS code here. If required.

const getApi=async()=>{
	const response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const json=await response.json();
	console.log(json)
}
getApi()
