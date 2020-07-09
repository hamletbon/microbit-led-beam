ledVals: List[number] = []
def shiftPixels(speed: number):
    for index in range(speed):
        ledVals.insert_at(0, ledVals[29])
        ledVals.pop()        
        # get rid of the last element in the list
        for index2 in range(30):
            strip.set_pixel_color(index2, neopixel.rgb(ledVals[index2], 0, 0))
def showLeds():
    strip.show()
def initPixels():
    while index3 < 30:
        ledVals.pop()
    index3 = 0
    while index3 < 30:
        ledVals.append(0)
        index3 += 1
    index3 = 0
    while index3 < trailLength:
        # initialize the array with gradient
        # initialize the array with gradient
        ledVals[index3] = 255 / trailLength * index3
        index3 += 1
flashSpeed = 0
strip: neopixel.Strip = None
trailLength = 0

index4 = 0

trailLength = 10
# indicate whether the length has been set
lengthSet = -1
initPixels()
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
lengthSet = 1

def on_forever():
    global flashSpeed, trailLength, lengthSet
    flashSpeed = pins.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 1, 3)
    led.plot_bar_graph(pins.analog_read_pin(AnalogPin.P0), 1023)
    if input.button_is_pressed(Button.A):
        if lengthSet == -1:
            trailLength = 10
            initPixels()
            # indicate whether the length has been set
            lengthSet = 1
        shiftPixels(flashSpeed)
        showLeds()
    elif input.button_is_pressed(Button.B):
        if lengthSet == -1:
            trailLength = 5
            initPixels()
            # indicate whether the length has been set
            lengthSet = 1
        shiftPixels(flashSpeed)
        showLeds()
    else:
        # indicate whether the length has been set
        lengthSet = -1
        strip.clear()
        showLeds()
basic.forever(on_forever)
