function move_motor(is_forward: boolean, steps: number) {
    
    count = 0
    current_direction = is_forward
    while (count < steps && current_direction == is_forward) {
        count = count + 1
        move_motor_one_step(is_forward)
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    move_motor(true, default_steps)
    move_motor(false, default_steps)
})
input.onGesture(Gesture.TiltLeft, function on_tilt_left() {
    move_motor(true, default_steps)
    move_motor(false, default_steps)
})
input.onGesture(Gesture.TiltRight, function on_tilt_right() {
    move_motor(true, 10)
    move_motor(false, 10)
    move_motor(true, 10)
    move_motor(false, 10)
    move_motor(true, 10)
    move_motor(false, 10)
    move_motor(true, 10)
    move_motor(false, 10)
    move_motor(true, 10)
    move_motor(false, 10)
    move_motor(true, 10)
    move_motor(false, 10)
    move_motor(true, 10)
    move_motor(false, 10)
})
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
let pause_for = 0
let current_direction = false
let count = 0
let default_steps = 0
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
led.enable(false)
default_steps = 40
