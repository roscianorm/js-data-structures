// LIFO = Last In First Out
// pop = remover el ultimo elemento
// push = agrega un elemento al final
// peef = tomar al ultimo elemento del stack

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}
class Stack {
	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0
	}
	peek() {
		return this.top
	}
	push(value) {
		const newNode = new Node(value)
		if (!this.length) {
			this.top = newNode
			this.bottom = newNode
		} else {
			const holdingPointer = this.top
			this.top = newNode
			this.top.next = holdingPointer
		}
		this.length++
		return this
	}
	pop() {
		if (!this.length) {
			return 'The stack is empty'
		} else if (this.length === 1) {
			const toDeleteNode = this.top
			this.top = null
			this.bottom = null
			this.length--
			return toDeleteNode
		} else {
			const toDeleteNode = this.top
			this.top = this.top.next
			this.length--
			return toDeleteNode
		}
	}
}
let myS = new Stack()
myS.push('a')
myS.push('b')
myS.push('c')
