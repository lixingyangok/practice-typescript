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

// ▼继承多个接口
interface goodMan extends driver, singer{

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
let goodMan01:goodMan = {
	name: 'good man',
	age: 18,
	car: 'taxi',
	songs: ['song01', 'song02']
}