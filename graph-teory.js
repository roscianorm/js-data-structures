/**
 * 	 2 - 0
 *  / \
 * 1 - 3
 *
 */

// Formas de visualizar los grafos:
// Edge List
const graph = [
	[0, 2],
	[2, 3],
	[2, 1],
	[1, 3],
]

// Adjacent List
// Los indices del array coiciden con las conexiones
//						 1    2       3          4
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]]
// o como Object
const graph = {
	0: [2],
	1: [2, 3],
	2: [0, 1, 3],
	3: [1, 2],
}

// Adjacent Matrix
const graph = [
	[0, 0, 1, 0],
	[0, 0, 1, 1],
	[1, 1, 0, 1],
	[0, 1, 1, 0],
]
// o como Object
const graph = {
	0: [0, 0, 1, 0],
	1: [0, 0, 1, 1],
	2: [1, 1, 0, 1],
	3: [0, 1, 1, 0],
}

class Node {
	constructor(value) {
		this.value = value
	}
}
