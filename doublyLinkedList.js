class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class doublyLinkedList {
	constructor(value) {
		this.head = new Node(value)
		this.tail = this.head
		this.length = 1
	}
	append(value) {
		const newNode = new Node(value)
		newNode.prev = this.tail
		this.tail.next = newNode
		this.tail = newNode
		this.tail.prev = newNode.prev
		this.length++
		return this
	}
	prepend(value) {
		const newNode = new Node(value)
		newNode.prev = null
		newNode.next = this.head
		this.head.prev = newNode
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
		newNode.prev = firstPointer
		holdingPointer.prev = newNode
		newNode.next = holdingPointer
		this.length++
		return this
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
			return this.shift()
		} else if (index === this.length - 1) {
			return this.unshift()
		}
		const toDeleteNode = this.getTheIndex(index)
		const firstPointer = toDeleteNode.prev
		const holdingPointer = toDeleteNode.next
		firstPointer.next = holdingPointer
		holdingPointer.prev = firstPointer
		this.length--
		return toDeleteNode
	}
	shift() {
		if (this.length === 0) {
			return 'The list is empty'
		} else if (this.length === 1) {
			const toDeleteNode = this.tail
			this.tail = null
			this.head = null
			this.length--
			return toDeleteNode
		}
		const toDeleteNode = this.head
		this.head = this.head.next
		this.head.prev = null
		this.length--
		if (this.length === 1) {
			this.tail = this.head
		} else if (this.length === 0) {
			this.tail = null
		}
		return toDeleteNode
	}
	unshift() {
		if (this.length === 0) {
			return 'The list is empty'
		} else if (this.length === 1) {
			const toDeleteNode = this.tail
			this.tail = null
			this.head = null
			this.length--
			return toDeleteNode
		}
		const holdingPointer = this.getTheIndex(this.length - 2)
		const toDeleteNode = holdingPointer.next
		holdingPointer.next = null
		this.tail = holdingPointer
		this.length--
		return toDeleteNode
	}
}

let myDLL = new doublyLinkedList('c')
myDLL.prepend('b')
myDLL.prepend('a')
myDLL.append('d')
