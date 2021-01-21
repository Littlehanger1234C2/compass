let Degreess = 0
basic.forever(function () {
    if (Degreess > 45) {
        basic.showString("N")
    }
    if (Degreess > 135) {
        basic.showString("E")
    }
    if (Degreess > 225) {
        basic.showString("S")
    }
    if (Degreess > 315) {
        basic.showString("W")
    }
})
basic.forever(function () {
    Degreess = input.compassHeading()
})
