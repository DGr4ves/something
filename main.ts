input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
})
basic.showString("Hello There")
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
})
