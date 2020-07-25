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

def move_motor_one_step(is_forward: bool):
    global pause_for
    pause_for = 1
    if is_forward:
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
pause_for = 0
current_direction = False
count = 0
default_steps = 0
current_direction2 = False
default_steps = 200