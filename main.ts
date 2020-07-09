function shiftPixels (speed: number) {
    for (let index2 = 0; index2 < speed; index2++) {
        ledVals.insertAt(0, ledVals[29])
        _py.py_array_pop(ledVals, 30)
// get rid of the last element in the list
        for (let index2 = 0; index2 <= 29; index2++) {
            strip.setPixelColor(index2, neopixel.rgb(ledVals[index2], 0, 0))
        }
    }
}
function showLeds () {
    strip.show()
}
function initPixels () {
    while (index < 30) {
        ledVals.push(0)
        index += 1
    }
    index = 0
    while (index < trailLength) {
        // initialize the array with gradient
        // initialize the array with gradient
        // initialize the array with gradient
        // initialize the array with gradient
        // initialize the array with gradient
        // initialize the array with gradient
        // initialize the array with gradient
        // initialize the array with gradient
        ledVals[index] = 255 / trailLength * index
        index += 1
    }
}
let flashSpeed = 0
let index = 0
let strip: neopixel.Strip = null
let trailLength = 0
let ledVals : number[] = []
trailLength = 10
// indicate whether the length has been set
let lengthSet = -1
initPixels()
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
lengthSet = 1
basic.forever(function () {
    flashSpeed = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    1,
    10
    )
    if (input.buttonIsPressed(Button.A)) {
        if (lengthSet == -1) {
            trailLength = 10
            initPixels()
            // indicate whether the length has been set
            lengthSet = 1
        }
        shiftPixels(flashSpeed)
        showLeds()
    } else if (input.buttonIsPressed(Button.B)) {
        if (lengthSet == -1) {
            trailLength = 5
            initPixels()
            // indicate whether the length has been set
            lengthSet = 1
        }
        shiftPixels(flashSpeed)
        showLeds()
    } else {
        // indicate whether the length has been set
        lengthSet = -1
        strip.clear()
        showLeds()
    }
})
