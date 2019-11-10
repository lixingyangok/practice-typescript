interface somebody {
	name: string,
	age: number,
};
interface driver extends somebody{
	car: string,
}

interface singer extends somebody{
	songs: string[],
}

let driver01:driver = {
	name: 'Tom',
	age: 18,
	car: 'truck',
}
let singer001:singer = {
	name: 'Tom',
	age: 18,
	songs: ['the national song', 'school song'],
}
