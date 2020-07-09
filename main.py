def shiftPixels(speed): #can make the shift faster
    while index < speed:
        ledVals.insert_at(0, ledVals[29])
        ledVals.pop(30)
        # get rid of the last element in the list
        for index2 in range(30):
            strip.set_pixel_color(index2, neopixel.rgb(ledVals[index2], 0, 0))
def showLeds():
    strip.show()
def initPixels():
    global index
    while index < 30:
        ledVals.append(0)
        index += 1
    index = 0
    while index < trailLength:
        # initialize the array with gradient
        # initialize the array with gradient
        # initialize the array with gradient
        # initialize the array with gradient
        ledVals[index] = 255 / trailLength * index
        index += 1
index = 0
strip: neopixel.Strip = None
trailLength = 0
ledVals: List[number] = []
trailLength = 10
# indicate whether the length has been set
lengthSet = -1
initPixels()
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)

def on_forever():
    global trailLength, lengthSet
    if input.button_is_pressed(Button.A):
        if lengthSet == -1:
            trailLength = 10
            # indicate whether the length has been set
            lengthSet = 1
        shiftPixels(1)
        showLeds()
    elif input.button_is_pressed(Button.B):
        if lengthSet == -1:
            trailLength = 5
            # indicate whether the length has been set
            lengthSet = 1
        shiftPixels(2)
        showLeds()
    else:
        # indicate whether the length has been set
        lengthSet = -1
        strip.clear()
        showLeds()
basic.forever(on_forever)
