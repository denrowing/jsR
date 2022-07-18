function mySheduleDay(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (time < 8 || time > 10) {
                rej('You dont wake up in time');
            } else {
                res('Good morning')
            }
        }, 1400)
    })
}

function wakeUp() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res('1. Wake up')
        }, 1000)
    })
}

function washUp() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res('2. Wash up')
        }, 1000)
    })
}

function cooking() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res('3. Prepare some meal')
        }, 1000)
    })
}

function driving() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res('4. Driving to work')
        }, 1000)
    })
}

function working() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res('5. Working all long day')
        }, 1000)
    })
}

function meetFriend() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res('6. Meet close friend')
        }, 1000)
    })
}

function training() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res('7. Do physical training')
        }, 1000)
    })
}


mySheduleDay(8)
    .then(w => {
        console.log(w);
        return wakeUp()
    })
    .then(w => {
        console.log(w);
        return washUp()
    })
    .then(w => {
        console.log(w);
        return cooking()
    })
    .then(w => {
        console.log(w);
        return driving()
    })
    .then(w => {
        console.log(w);
        return working()
    })
    .then(w => {
        console.log(w);
        return meetFriend()
    })
    .then(w => {
        console.log(w);
        return training()
    })
    .then(w => {
        console.log(w);
    })