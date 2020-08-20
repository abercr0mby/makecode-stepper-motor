def move_motor(is_forward: bool, steps: number):
    global count, current_direction
    count = 0
    current_direction = is_forward
    while count < steps and current_direction == is_forward:
        count = count + 1
        move_motor_one_step(is_forward)

def on_button_pressed_a():
    move_motor(True, default_steps)
    move_motor(False, default_steps)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_tilt_left():
    move_motor(True, default_steps)
    move_motor(False, default_steps)
input.on_gesture(Gesture.TILT_LEFT, on_tilt_left)

def on_tilt_right():
    move_motor(True, 10)
    move_motor(False, 10)
    move_motor(True, 10)
    move_motor(False, 10)
    move_motor(True, 10)
    move_motor(False, 10)
    move_motor(True, 10)
    move_motor(False, 10)     
    move_motor(True, 10)
    move_motor(False, 10)     
    move_motor(True, 10)
    move_motor(False, 10)    
    move_motor(True, 10)
    move_motor(False, 10)                         
input.on_gesture(Gesture.TILT_RIGHT, on_tilt_right)

def move_motor_one_step(is_forward: bool):
    global pause_for
    pause_for = 0.5
    if is_forward:
        basic.pause(pause_for)
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P3, 0)
        basic.pause(pause_for)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P3, 0)
        basic.pause(pause_for)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
        pins.digital_write_pin(DigitalPin.P3, 0)
        basic.pause(pause_for)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P3, 1)
        basic.pause(pause_for)
    else:
        basic.pause(pause_for)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P3, 1)
        basic.pause(pause_for)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
        pins.digital_write_pin(DigitalPin.P3, 0)
        basic.pause(pause_for)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 1)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P3, 0)
        basic.pause(pause_for)
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P3, 0)
        basic.pause(pause_for)

def on_button_pressed_b():
    move_motor(False, 5)
input.on_button_pressed(Button.B, on_button_pressed_b)

pause_for = 0
current_direction = False
count = 0
default_steps = 0
bluetooth.start_accelerometer_service()
bluetooth.start_button_service()
bluetooth.start_io_pin_service()
bluetooth.start_led_service()
bluetooth.start_temperature_service()
led.enable(False)
default_steps = 40