input.onButtonPressed(Button.A, function () {
    basic.showString("R")
    comment.comment("Fill array with sonar measurements")
    for (let index = 0; index <= measuresArray.length - 1; index++) {
        measuresArray[index] = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.MicroSeconds
        )
        comment.comment("\"serial write\" is for monitoring incoming sensor data from the console.")
        comment.comment("Don't use the 'serial write' line in working robot code")
        serial.writeValue("distance(cm)", measuresArray[index])
        basic.pause(2)
    }
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("M")
    comment.comment("BubbleSort the array")
    countFlip = 1
    comment.comment("keep looping until can compare entire array without a single flip of position")
    while (countFlip > 0) {
        comment.comment("test = true: last loop had a flip, so check again!")
        countFlip = 0
        for (let index = 0; index <= measuresArray.length - 2; index++) {
            if (measuresArray[index] > measuresArray[index + 1]) {
                comment.comment("test = true: 1st larger, 2nd smaller")
                comment.comment("flip positions so 1st smaller, 2nd larger!")
                temp = measuresArray[index]
                measuresArray[index] = measuresArray[index + 1]
                measuresArray[index + 1] = temp
                comment.comment("Count the flip! There needs to be one flipless count to verify sort ")
                countFlip += 1
            }
            comment.comment("test = false: order is *already* correct = 1st smaller, 2nd larger!")
        }
    }
    comment.comment("test = false: looped without a flip, so done sorting!!")
    comment.comment("find median")
    measuresMedian = measuresArray[Math.round(measuresArray.length / 2)]
    comment.comment("convert time(uS) at the speed of sound to distance(cm)")
    measuresMedian = Math.round(measuresMedian / 58)
    basic.showNumber(measuresMedian)
})
let measuresMedian = 0
let temp = 0
let countFlip = 0
let measuresArray: number[] = []
basic.showString("S")
comment.comment("set number of measurements, use ODD numbers only!")
let measuresCount = 31
comment.comment("create an empty array, type: number")
measuresArray = [0]
for (let index = 0; index < measuresCount - 1; index++) {
    measuresArray.push(0)
}
