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
            // this.thenFunc(value)
            this.store.map((e) => this.value = e(this.value))
            this.store = [];
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
        this.store = [...this.store, thenFunc];
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

    static all(arr) {
        let values = []
        return new ABC((res, rej) => {
            arr.forEach(element => {
                element.then((ele) => {
                    values.push(ele)
                    if (arr.length == values.length) {
                        res(values)
                    }
                }).catch((e) => {
                    rej(err)
                })
            });
        })
    }

    static allSettled(arr) {
        let values = []
        return new ABC((res, rej) => {
            arr.forEach(element => {
                element.then((ele) => {
                    values.push(ele)
                    if (arr.length == values.length) {
                        res(values)
                    }
                }).catch((ele) => {
                    values.push(ele)
                    if (arr.length == values.length) {
                        res(values)
                    }
                })
            });
        })
    }

    static race(values) {
        if(this.values.state == "FULLFILLED"){
            return new ABC((res, rej) => {
                res(values)
            })
        }
        
    }
}

console.log("start");

a = new ABC((resolve, reject) => {
    console.log('executing');
    setTimeout(() => {
        resolve(1)
    }, 1000)
});

// #chaining
a.then((res => res * 2))
    .then(res => res + 2)
    .then(res => console.log(res))

let p1 = ABC.Resolve(1);
let p2 = ABC.Resolve(2);
let p3 = ABC.Resolve(3);
let p4 = ABC.Reject(4);

// #all
// ABC.all([p1, p2, p3 , p4]).then((values) => {
//     console.log(values);
// })

// #allSettled
// ABC.allSettled([p1, p2, p3, p4]).then((values) => {
//    console.log(values);
// })

// #race
ABC.race([p1, p2, p3, p4]).then((values) => {

})

console.log('end');                                          