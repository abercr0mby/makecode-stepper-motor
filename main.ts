function move_motor(is_forward: boolean, steps: number) {
    
    count = 0
    current_direction = is_forward
    while (count < steps && current_direction == is_forward) {
        count = count + 1
        move_motor_one_step(is_forward)
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    toggle_talk()
})
function move_motor_one_step(is_forward2: boolean) {
    
    pause_for = 0.5
    if (is_forward2) {
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

function toggle_talk() {
    
    stop = !stop
}

input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    if (tilt_enabled) {
        toggle_talk()
    }
    
})
function talk() {
    while (true) {
        if (!stop) {
            open_and_close_mouth(randint(1, 10) + randint(1, 10))
        }
        
        basic.pause(100)
    }
}

function open_and_close_mouth(steps2: number) {
    move_motor(true, steps2)
    move_motor(false, steps2)
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    stop = false
    move_motor(false, 5)
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    if (tilt_enabled) {
        toggle_talk()
    }
    
})
let pause_for = 0
let current_direction = false
let count = 0
let stop = false
let tilt_enabled = false
let default_steps = 10
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
led.enable(false)
stop = true
talk()
