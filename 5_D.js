// Dependency Inversion Principle

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
        // return localStorage.getItem('key')
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('website.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet() {
        return this.localStorage.get()
    }
}

class Database {
    constructor(client) {
        this.client = client
    }

    getData(key) {
        return this.client.clientGet(key)
    }
}

const db = new Database(new LocalStorageClient())


console.log(db.getData('rand'))
