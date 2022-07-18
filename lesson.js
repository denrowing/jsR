
/* Описати функцією callBack Ваш розпорядок дня 7 -10 позицій */

function myScheduleDay(time, cb) {
    setTimeout(() => {
        if (time < 8 || time > 10) {
            cb('This day start not in usual time', null)
        } else {
            cb(null, 'What a nice day!')
        }
    }, 600)
}

function wakeUp(time, cb) {
    setTimeout(() => {
        if (time < 8 || time > 10) {
            cb('Error', null)
        } else {
            cb(null, '1. Wake Up')
        }
    }, 400)
}

function washUp(time, cb) {
    setTimeout(() => {
        if (time < 8 || time > 10) {
            cb('Error', null)
        } else {
            cb(null, '2. Wash up')
        }
    }, 500)
}

function haveLaunch(time, cb) {
    setTimeout(() => {
        if (time < 8 || time > 10) {
            cb('Error', null)
        } else {
            cb(null, '3. Have a launch')
        }
    }, 700)
}

function startStudy(time, cb) {
    setTimeout(() => {
        if (time < 8 || time > 10) {
            cb('Error', null)
        } else {
            cb(null, '4. Start study')
        }
    }, 1200)
}

function work(time, cb) {
    setTimeout(() => {
        if (time < 8 || time > 10) {
            cb('Error', null)
        } else {
            cb(null, '5. Work')
        }
    }, 1500)
}

function callFamily(time, cb) {
    setTimeout(() => {
        if (time < 8 || time > 10) {
            cb('Error', null)
        } else {
            cb(null, '6. Call family')
        }
    }, 1500)
}

function doExercises(time, cb) {
    setTimeout(() => {
        if (time < 8 || time > 10) {
            cb('Error', null)
        } else {
            cb(null, '7. Do exercises')
        }
    }, 1500)
}

myScheduleDay(10, (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log(data);
        wakeUp(data, (err1, data1) => {
            if (err1) {
                console.error(err1)
            } else {
                console.log(data1);
                washUp(data1, (err2, data2) => {
                    if (err2) {
                        console.error(err2)
                    } else {
                        console.log(data2);
                        haveLaunch(data2, (err3, data3) => {
                            if (err3) {
                                console.error(err3)
                            } else {
                                console.log(data3);
                                startStudy(data3, (err4, data4) => {
                                    if (err4) {
                                        console.error(err4)
                                    } else {
                                        console.log(data4);
                                        work(data4, (err5, data5) => {
                                            if (err5) {
                                                console.error(err5)
                                            } else {
                                                console.log(data5);
                                                callFamily(data5, (err6, data6) => {
                                                    if (err6) {
                                                        console.error(err6)
                                                    } else {
                                                        console.log(data6);
                                                        doExercises(data6, (err7, data7) => {
                                                            if (err6) {
                                                                console.error(err7)
                                                            } else {
                                                                console.log(data7);
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})




