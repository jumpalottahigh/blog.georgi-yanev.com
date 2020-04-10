---
articlePath: /fpv/unbox-review-setup-eachine-trashcan/
---

#### Reader Q & A:

**"Hi there my TrashCan won’t hold angle mode as if something wrong with accelerometer all looks fine in betaflight FC - crazybee F4 V2"** - Phil Barker

> You can try recalibrating the accelerometer in Betaflight, investigate nothing changed with the center of gravity (battery pull quad down more on 1 side?), all motors spin properly (no damage on any motor), frame issues, damaged props?, hopefully not a busted gyro (but that would prevent arming anyway).

> You can try to reflash the firmware, upgrade to latest version if you are running older, or if you are running newer, go back to 3.5.7 and see how that is? Good luck! - Georgi

\*\*\*

**"i have the new FrSky Taranis X9D Plus SE 2019 and it will not bind with it at all."** - Gary

> I think your radio model comes with the new ACCESS protocol and it does not support D8 mode, so if you're using ACCST D16, then make sure in Betaflight your SPI based receiver is set to `FrSky_X` not FrSky_D. Fingers crossed! - Georgi

\*\*\*

**"Hi, I'm Sam please help me bind my trashcan to flysky, the bind button is not working ,no light is flashing at the back when I press the botton, I pressed hard on it and black part came off from the bind botton ?"** - Sam

> You can bind the drone from the Betaflight CLI without having to press the bind button. Open Betaflight, go to the CLI tab and type: `bind_rx`. If this doesn't work, type `bind_rx_spi`. They changed the command in newer 4.0.x Betaflight versions. - Georgi

\*\*\*
