input.onButtonPressed(Button.A, function () {
    number += 2
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(number)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
    basic.showNumber(number)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let number = 0
radio.setGroup(1920)
number = 0
basic.showNumber(number)
