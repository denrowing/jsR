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


async function readSchedule() {
    try {
        const start = await mySheduleDay(8)
        console.log(start);

        const first = await wakeUp()
        console.log(first);

        const second = await washUp()
        console.log(second);

        const third = await cooking()
        console.log(third);

        const fourth = await driving()
        console.log(fourth);

        const fifth = await working()
        console.log(fifth);

        const six = await meetFriend()
        console.log(six);

        const seventh = await training()
        console.log(seventh);

    } catch (e) {
        console.error(e);
    }
}

readSchedule()