# Rocky v1: parts list (what's actually on the robot)

Amazon ASINs are what was bought in Oct to Nov 2026. Prices are rough listing estimates, not receipts. About $400 of parts on the robot, not counting the printer, filament, tools and the spare parts that came in multi-packs.

## Brain and motion

| Part | Qty on Rocky | ASIN | ~$ |
|---|---|---|---|
| Feetech SCS0009 serial-bus servos (buy 2 spare) | 10 | B0FJ8G1W52 | 140 |
| Radxa ZERO 3W, 2 GB, with GPIO header | 1 | B0CZD16K7Q | 44 |
| Feetech URT-2 servo bus board (USB-C to the Radxa) | 1 | B0GWL4TTR9 | 8 |
| 6700ZZ bearings 10 x 15 x 4 mm (hip brackets) | 5 | B0GTKNZC4H | 10 |

## Power

| Part | Qty | ASIN | ~$ |
|---|---|---|---|
| SmallRig NP-F550 battery (USB-C) | 1 | B0CH9KCK7Z | 40 |
| SmallRig NP-F battery plate 3168B (7.4 V DC out) | 1 | B09NBPS422 | 25 |
| UBEC 5 V 5 A (servo rail; a 6 V one gives the servos more torque) | 1 | B0D97FH1JS | 10 |
| Small 5 V buck converter, MP1584 class (Radxa + amp) | 1 | B0GHRPDKHW | 8 |
| 5.5 x 2.1 mm DC leads + short USB-C cables | 2 + 2 | B0BNPXN8RD, B07H96FWY9 | 10 |
| KCD1 rocker switch (v1 shipped without one: don't) | 1 | | |

## Senses, eye, voice

| Part | Qty | ASIN | ~$ |
|---|---|---|---|
| BNO08x motion sensor (tilt, lifted, tapped) | 1 | B0CDGZMLPP | 25 |
| VL53L5CX 8 x 8 depth sensor (desk edge, obstacles) | 1 | B0GSFPCX1X | 25 |
| GC9A01 1.28" round display (the eye) | 1 | B0G25K22DG | 12 |
| INMP441 I2S microphones | 2 | B0H1D77BN8 | 9 |
| MAX98357A I2S amplifier | 1 | B0DPJRLMDJ | |
| 40 mm speaker | 1 | B01LN8ONG4 | |
| OV5647 160 degree camera + 22-to-15 pin ribbon (not working yet in v1) | 1 | B083XMGSVP | 17 |

## Hardware

| Part | ASIN |
|---|---|
| M2 x 4 brass heat-set inserts | B0CLKDPN65 |
| M2 hex nuts + M3 square nuts | B0GVS51Y15 |
| Machine screw kit (M2, M2.5, M3) | B0FF4ST9KW |
| Self-tapping screw kit (most printed parts use these) | B0F4JWXBWM |
| 22 AWG + 30 AWG hookup wire, heat shrink | B0C7T9KYND, B01M70EDCW, B01MFA3OFA |

## What I'd change for v2

- Buy the Qwiic / STEMMA QT versions of the sensors and a header breakout board, so nothing needs soldering.
- Lever nuts (Wago) for the power joins instead of splices.
- A heatsink and metal standoffs for the Radxa (it hit 85 C screwed flat to plastic).
- Put the depth sensor on its own I2C bus.

Filament: PETG for everything structural, TPU 95A for the foot boots. Printer: Prusa CORE One+.
