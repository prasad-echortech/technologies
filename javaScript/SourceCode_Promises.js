class ABC {
    constructor(fn) {
        this.store = [];
        this.state = 'PENDING'
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
        fn(this.resolve, this.reject)
    }
    resolve(value) {
        this.state = 'FULLFILLED'
        this.value = value
        if (this.thenFunc) {
            this.thenFunc(value)
            this.store.map((e) => this.value = e(this.value))
        }
    }
    reject(err) {

        this.state = 'REJECTED'
        this.value = err
        if (this.catchFunc) {
            this.catchFunc(err)
        }
    }
    then(thenFunc) {
        this.store = [...this.store,thenFunc]
        this.thenFunc = thenFunc
        if (this.state == 'FULLFILLED') {
            thenFunc(this.value)
        }
        return this
    }
    catch(catchFunc) {
        this.catchFunc = catchFunc
        if (this.state == 'REJECTED') {
            catchFunc(this.value)
        }
        return this
    }

    static Resolve(value) {
        return new ABC((res, rej) => {
            res(value)
        })
    }

    static Reject(err) {
        return new ABC((res, rej) => {
            rej(err)
        })
    }
}

console.log("start");
a = new ABC((res, rej) => {
    console.log('executing')
    setTimeout(() => {
        res(1)
    }, 1000)
})

a.then((res => res * 2))//10
    .then(res => res + 2)//5
    .then(res => console.log(res))//5

// a.then(r => console.log('then', 1))
//     .catch(e => console.log(e, 'catch'))

// ABC.Resolve(2).then(r => console.log('then', 2))
// .catch(e => console.log(e, 'catch'))

// ABC.Reject(3).then(r => console.log('then', 3))
// .catch(e => console.log(e, 'catch'))

console.log('end');