// tests go here; this will not be compiled when this package is used as a library
input.onButtonPressed(Button.A, function () {
    basic.showNumber(robox.getBattery())
})
finch.startFinch()
basic.forever(function () {
    if (robox.getLight(RLDir.Right) < 10) {
        robox.setBeak(0, 100, 100)
        finch.setMove(MoveDir.Forward, 100, 10)
        robox.setTail(
            TailPort.All,
            0,
            100,
            0
        )
    } else {
        robox.setBeak(100, 0, 0)
        finch.setMove(MoveDir.Backward, 100, 10)
        robox.setTail(
            TailPort.All,
            0,
            0,
            100
        )
    }
})
