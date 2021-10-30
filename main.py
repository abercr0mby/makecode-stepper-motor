def on_button_pressed_a():
    toggle_talk()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global stop
    stop = True
    move_motor(False, 5)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_left():
    if tilt_enabled:
            toggle_talk()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    if tilt_enabled:
        toggle_talk()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def move_motor(is_forward: bool, steps: number):
    global count, current_direction
    count = 0
    current_direction = is_forward
    while count < steps and current_direction == is_forward:
        count = count + 1
        move_motor_one_step(is_forward)

def move_motor_one_step(is_forward2: bool):
    global pause_for
    pause_for = 0.5
    if is_forward2:
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

def toggle_talk():
    global stop
    stop = not (stop)

def talk():
    while True:
        if not (stop):
            open_and_close_mouth(randint(1, 10) + randint(1, 10))
        basic.pause(100)
        
def open_and_close_mouth(steps2: number):
    move_motor(True, steps2)
    move_motor(False, steps2)

pause_for = 0
current_direction = False
count = 0
stop = False
tilt_enabled = False
default_steps = 10
bluetooth.start_accelerometer_service()
bluetooth.start_button_service()
bluetooth.start_io_pin_service()
bluetooth.start_led_service()
bluetooth.start_temperature_service()
led.enable(False)
stop = True
talk()