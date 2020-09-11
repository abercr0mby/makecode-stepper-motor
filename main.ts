input.onButtonPressed(Button.A, function on_button_pressed_a() {
    move_motor(true, default_steps)
    move_motor(false, default_steps)
})
input.onGesture(Gesture.TiltLeft, function on_tilt_left() {
    let stop = true
})
input.onGesture(Gesture.TiltRight, function on_tilt_right() {
    talk()
})
function talk() {
    while (!stop) {
        open_and_close_mouth(10)
    }
}

function open_and_close_mouth(steps: number) {
    move_motor(true, steps)
    move_motor(false, steps)
}

function move_motor(is_forward: boolean, steps: number) {
    
    count = 0
    current_direction = is_forward
    while (count < steps && current_direction == is_forward) {
        count = count + 1
        move_motor_one_step(is_forward)
    }
}

function move_motor_one_step(is_forward: boolean) {
    
    pause_for = 0.5
    if (is_forward) {
        basic.pause(pause_for)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(pause_for)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(pause_for)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(pause_for)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(pause_for)
    } else {
        basic.pause(pause_for)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(pause_for)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(pause_for)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(pause_for)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(pause_for)
    }
    
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    move_motor(false, 5)
})
/** 
def on_forever():
    if input.light_level() > 150:
        move_motor(True, 5)
        basic.pause(20)
        move_motor(True, 5)
        basic.pause(20)
        move_motor(True, 5)
        basic.pause(20)
        move_motor(True, 5)
        basic.pause(20)
        move_motor(False, 20)
        basic.pause(20)        
basic.forever(on_forever)

 */
let pause_for = 0
let current_direction = false
let count = 0
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
led.enable(false)
let stop = false
let default_steps = 40
