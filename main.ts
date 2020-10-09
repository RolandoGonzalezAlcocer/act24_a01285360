input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . .
            . # # # .
            . # . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            # # # # .
            . # . . #
            `)
        basic.pause(100)
    }
    basic.clearScreen()
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    y = 2
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let count = 0; count <= 15; count++) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
let y = 0
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # . # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # # # #
        # # # # .
        . # # # #
        . . # . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        # # # # .
        . # # # #
        # # # # .
        . . # . .
        `)
    basic.clearScreen()
}
