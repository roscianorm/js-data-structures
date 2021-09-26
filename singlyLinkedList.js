// 1 --> 2 --> 3 --> 4 --> 5 --> null

// let singlyLinkedList = {
// 	head: {
// 		value: 1,
// 		next: {
// 			value: 2,
// 			next: {
// 				value: 3,
// 				next: {
// 					value: 4,
// 					next: null
// 				}
// 			}
// 		}
// 	}
// }

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class MySinglyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		}
		this.tail = this.head
		this.length = 1
	}
	append(value) {
		const newNode = new Node(value)
		this.tail.next = newNode
		this.tail = newNode
		this.length++
		return this
	}
	prepend(value) {
		const newNode = new Node(value)
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this
	}
	insert(index, value) {
		if (index >= this.length) {
			return this.append(value)
		}
		const newNode = new Node(value)
		const firstPointer = this.getTheIndex(index - 1)
		const holdingPointer = firstPointer.next
		firstPointer.next = newNode
		newNode.next = holdingPointer
		this.length++
	}
	getTheIndex(index) {
		let counter = 0
		let currentNode = this.head
		while (counter !== index) {
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
	remove(index) {
		if (index < 0 || index > this.length) {
			return `There is no node at index ${index}`
		} else if (index === 0) {
			return shift()
		} else if (index === this.length - 1) {
			return unshift()
		}
		const firstPointer = this.getTheIndex(index - 1)
		const toDeleteNode = this.getTheIndex(index)
		const holdingPointer = toDeleteNode.next
		firstPointer.next = holdingPointer
		this.length--
		return toDeleteNode
	}
	shift() {
		const toDeleteNode = this.head
		this.head = this.head.next
		if (this.length === 0) {
			this.tail = this.head
		}
		this.length--
		return toDeleteNode
	}
	unshift() {
		const holdingPointer = this.getTheIndex(this.length - 2)
		const toDeleteNode = holdingPointer.next
		holdingPointer.next = null
		this.tail = holdingPointer
		this.length--
		return toDeleteNode
	}
}

let myLinkedList = new MySinglyLinkedList('ancient butter')
myLinkedList.append('milk')
myLinkedList.append('cheese')
myLinkedList.prepend('butter')
myLinkedList.prepend('yogurt')
console.log(myLinkedList)
myLinkedList.insert(1, 'mayonnaise1')
myLinkedList.insert(2, 'mayonnaise2')
myLinkedList.insert(3, 'mayonnaise3')
myLinkedList.insert(4, 'mayonnaise4')
myLinkedList.insert(5, 'mayonnaise5')
console.log(myLinkedList)
