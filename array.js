class MyArray {
	constructor() {
		this.length = 0
		this.data = {}
	}
	get(index) {
		return this.data[index]
	}
	push(item) {
		this.data[this.length] = item
		this.length++
		return this.data
	}
	set(index, value) {
		this.data[index] = value
	}
	pop() {
		const lastItem = this.data[this.length - 1]
		//The delete operator removes a given property from an object. On successful deletion, it will return true, else false will be returned.
		delete this.data[this.length - 1]
		this.length--
		return lastItem
	}
	delete(index) {
		const item = this.data[index]
		this.shiftIndex(index)
		return item
	}
	shiftIndex(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1]
		}
		delete this.data[this.length - 1]
	}
	unshift(item) {
		for (let i = this.length - 1; i >= 0; i--) {
			this.data[i + 1] = this.data[i]
		}
		this.data[0] = item
		this.length++
		return this.data
	}
	shift() {
		const item = this.data[0]
		for (let i = 0; i < this.length; i++) {
			this.data[i] = this.data[i + 1]
		}
		delete this.data[this.length - 1]
		this.length--
		return item, this.data
	}
}

const myArray = new MyArray()
