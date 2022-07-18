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

mySheduleDay()