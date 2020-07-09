let ledVals : number[] = []
function shiftPixels(speed: number) {
    for (let index = 0; index < speed; index++) {
        ledVals.insertAt(0, ledVals[29])
        _py.py_array_pop(ledVals)
        //  get rid of the last element in the list
        for (let index2 = 0; index2 < 30; index2++) {
            strip.setPixelColor(index2, neopixel.rgb(ledVals[index2], 0, 0))
        }
    }
}

function showLeds() {
    strip.show()
}

function initPixels() {
    let index3: number;
    while (index3 < 30) {
        _py.py_array_pop(ledVals)
    }
    index3 = 0
    while (index3 < 30) {
        ledVals.push(0)
        index3 += 1
    }
    index3 = 0
    while (index3 < trailLength) {
        //  initialize the array with gradient
        //  initialize the array with gradient
        ledVals[index3] = 255 / trailLength * index3
        index3 += 1
    }
}

let flashSpeed = 0
let strip : neopixel.Strip = null
let trailLength = 0
let index4 = 0
trailLength = 10
//  indicate whether the length has been set
let lengthSet = -1
initPixels()
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
lengthSet = 1
basic.forever(function on_forever() {
    
    flashSpeed = pins.map(pins.analogReadPin(AnalogPin.P0), 0, 1023, 1, 3)
    led.plotBarGraph(pins.analogReadPin(AnalogPin.P0), 1023)
    if (input.buttonIsPressed(Button.A)) {
        if (lengthSet == -1) {
            trailLength = 10
            initPixels()
            //  indicate whether the length has been set
            lengthSet = 1
        }
        
        shiftPixels(flashSpeed)
        showLeds()
    } else if (input.buttonIsPressed(Button.B)) {
        if (lengthSet == -1) {
            trailLength = 5
            initPixels()
            //  indicate whether the length has been set
            lengthSet = 1
        }
        
        shiftPixels(flashSpeed)
        showLeds()
    } else {
        //  indicate whether the length has been set
        lengthSet = -1
        strip.clear()
        showLeds()
    }
    
})
