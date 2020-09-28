input.onButtonPressed(Button.A, function on_button_pressed_a() {
    toggle_talk()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    stop = false
    move_motor(false, 5)
})
input.onGesture(Gesture.TiltLeft, function on_tilt_left() {
    toggle_talk()
})
input.onGesture(Gesture.TiltRight, function on_tilt_right() {
    toggle_talk()
})
function talk() {
    
    while (true) {
        if (!stop) {
            open_and_close_mouth(randint(1, 10) + randint(1, 10))
        }
        
        basic.pause(100)
    }
}

function toggle_talk() {
    
    stop = !stop
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

let default_steps = 10
let pause_for = 0
let current_direction = false
let count = 0
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
led.enable(false)
let stop = true
talk()
