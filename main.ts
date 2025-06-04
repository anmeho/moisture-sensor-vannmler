let fuktighet = 0
OLED.init(128, 64)
basic.forever(function () {
    fuktighet = pins.analogReadPin(AnalogPin.P0)
    if (fuktighet > 1010) {
        basic.showIcon(IconNames.QuarterNote)
    } else if (fuktighet > 900) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    }
})
loops.everyInterval(5000, function () {
    if (tinkercademy.MoistureSensor(AnalogPin.P0) < 900) {
        OLED.writeStringNewLine("Fukt er:")
        OLED.writeNumNewLine(tinkercademy.MoistureSensor(AnalogPin.P1))
        OLED.writeStringNewLine("Vann planten")
        music.play(music.tonePlayable(165, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    } else {
        OLED.writeStringNewLine("Planten er OK")
    }
})
