input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
basic.forever(function () {
    basic.showNumber(input.temperature())
})
