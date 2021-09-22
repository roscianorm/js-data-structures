class HashTable {
	constructor(size) {
		this.data = new Array(size)
	}
	hashMethod(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}
		return hash
	}
	set(key, value) {
		const address = this.hashMethod(key)
		if (!this.data[address]) {
			this.data[address] = []
		}
		this.data[address].push([key, value])
		return this.data
	}
	get(key) {
		const address = this.hashMethod(key)
		const currentBucket = this.data[address]
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i]
				}
			}
		}
		return undefined
	}
	delete(key) {
		// No me convence
		const address = this.hashMethod(key)
		const currentBucket = this.data[address]
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					const item = currentBucket[i]
					delete currentBucket[i]
					return item
				}
			}
		}
		return undefined
	}
	getAllKeys() {
		const allKeys = []
		for (let i = 0; i < this.data.length; i++) {
			const currentBucket = this.data[i]
			if (currentBucket) {
				for (let j = 0; j < currentBucket.length; j++) {
					if (currentBucket[j]) {
						allKeys.push(currentBucket[j][0])
					}
				}
			}
		}
		return allKeys
	}
}

const myHashTable = new HashTable(50)
