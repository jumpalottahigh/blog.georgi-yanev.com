---
path: '/fpv/geprc-skip3-hd-review-complete-setup/'
date: '2020-04-30'
title: 'GEPRC Skip3 HD: Max performance HD toothpick'
author: 'Georgi Yanev'
draft: false
category: 'fpv'
tags:
  - 'geprc'
  - 'skip3'
  - 'toothpick'
  - 'hd'
  - 'micro'
  - 'drone'
  - 'review'
gearList:
  - 'skip3-hd'
affiliate: 'Links to Banggood or Amazon in this article are affiliate links and would support the blog if used to make a purchase.'
ogKeywords: 'fpv, drone, freestyle, fpv freestyle, fpv drone, quad, quadcopter, micro drone, micro quad, tinywhoop, TODO:'
ogDescription: "I've been looking forward to this review for a while. My current main search and passion is to find a performing, HD cinewhoop that flies like a toothpick. And the short of it is, that I think I found it, and that's why I'm going to be reviewing, setting up and flying the GEPRC Skip3 HD"
ogImage: './geprc-skip3-hd-review-complete-setup-26.jpg'
---

I've been looking forward to this review for a while. My current main search and passion is to find a **performing, HD cinewhoop that flies like a toothpick**. And the short of it is, that I think I found it, and that's why I'm going to be reviewing, setting up and flying the [GEPRC Skip3 HD][1].

As a simple micro cinewhoop, I've loved flying the [Mobula7 HD][2] for over a year now, and to be fair I can still recommend it today, for some use cases. What I wish it did slightly better would be to have just a tad more performance at mid throttle.

On the other hand, getting into toothpicks last year with the [GEPRC Phantom][3] and the [Emax Tinyhawk Freestyle][4] was a very fun experience. There little quads fly and handle superbly and are to date my favorite toothpicks. They are such a joy to fly, but lack the capability to record full HD video.

So the obvious question was **"can we have that performance but also enjoy a 1080p HD video recording from a split camera"**. And this is the use case the Skip3 HD is trying to cover: give you full HD recording while flying like a racer.

### Table of contents

- [📦 Unboxing](#unboxing)
- [📝 Specifications](#specs)
- [⚙ Setup](#setup)
- [🚁 Flying](#flying)
- [🔝 Upgrades](#upgrades)
- [📑 Conclusion](#conclusion)

<!-- If you prefer watching, check out the full video review on my YouTube channel:

<div style="text-align: center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/TODO:?rel=0" frameBorder="0" allowFullScreen title="TODO:"></iframe>
</div> -->

### <span id="unboxing" class="offset-top-nav">📦 Unboxing</span>

TODO:

![](geprc-skip3-hd-review-complete-setup-1.jpg)
![](geprc-skip3-hd-review-complete-setup-2.jpg)
![](geprc-skip3-hd-review-complete-setup-3.jpg)
![](geprc-skip3-hd-review-complete-setup-4.jpg)
![](geprc-skip3-hd-review-complete-setup-5.jpg)
![](geprc-skip3-hd-review-complete-setup-6.jpg)
![](geprc-skip3-hd-review-complete-setup-7.jpg)
![](geprc-skip3-hd-review-complete-setup-8.jpg)
![](geprc-skip3-hd-review-complete-setup-9.jpg)
![](geprc-skip3-hd-review-complete-setup-10.jpg)
![](geprc-skip3-hd-review-complete-setup-11.jpg)
![](geprc-skip3-hd-review-complete-setup-12.jpg)
![](geprc-skip3-hd-review-complete-setup-13.jpg)
![](geprc-skip3-hd-review-complete-setup-14.jpg)
![](geprc-skip3-hd-review-complete-setup-15.jpg)
![](geprc-skip3-hd-review-complete-setup-16.jpg)
![](geprc-skip3-hd-review-complete-setup-17.jpg)
![](geprc-skip3-hd-review-complete-setup-18.jpg)
![](geprc-skip3-hd-review-complete-setup-19.jpg)
![](geprc-skip3-hd-review-complete-setup-20.jpg)
![](geprc-skip3-hd-review-complete-setup-21.jpg)
![](geprc-skip3-hd-review-complete-setup-22.jpg)
![](geprc-skip3-hd-review-complete-setup-23.jpg)
![](geprc-skip3-hd-review-complete-setup-24.jpg)
![](geprc-skip3-hd-review-complete-setup-25.jpg)
![](geprc-skip3-hd-review-complete-setup-26.jpg)
![](geprc-skip3-hd-review-complete-setup-27.png)
![](geprc-skip3-hd-review-complete-setup-28.png)
![](geprc-skip3-hd-review-complete-setup-29.png)
![](geprc-skip3-hd-review-complete-setup-30.png)
![](geprc-skip3-hd-review-complete-setup-31.png)
![](geprc-skip3-hd-review-complete-setup-32.png)
![](geprc-skip3-hd-review-complete-setup-33.png)

### <span id="specs" class="offset-top-nav">📝 Specifications</span>

TODO:

### <span id="setup" class="offset-top-nav">⚙ Setup</span>

TODO:

As with most other quads, to get started we need to **bind a radio controller to the drone's receiver** and take a **look at the Betaflight configuration**.

#### 🔗 Bind the receiver to a radio

TODO:

#### 👀 Check the Betaflight configuration

TODO:

1.  **Configuration tab**

    > Props in or Props out mode - important to know how to put on your props. `MOTOR_STOP` off. `Accelerometer` on for angle (stability) mode. `SPI RX support` and `FRSKY_D` for D8 mode.

    > ![Betaflight Configuration tab part 1](mobula6-tinywhoop-full-review-25.jpg)

    > `Airmode` is on. `RX_LOST` and `RX_SET` are on in case you want to use the motors to beep for a lost model alarm since we don't have an onboard buzzer.

    > ![Betaflight Configuration tab part 2](mobula6-tinywhoop-full-review-26.jpg)

    > ✅ All good here, the defaults match what I expected so no changes needed.

2.  **Receiver tab**

    > Here I'm making sure the `Channel Map` is **TAER1234**. That's what my radio is set to and a match here makes sure the quad won't flip out when I start flying. ✅ All good.

    > ![Betaflight Receiver tab](mobula6-tinywhoop-full-review-27.jpg)

3.  **Modes tab**

    > Arming is set to `AUX1` which is whichever switch you set to `Channel5` earlier in the Mixer screen on your radio. That's fine. Then I notice AUX2 (Channel6 switch) is set by default to start-up in angle mode, and any other position will set the quad to acro. That's fine too. And I have turtle mode (Flip over after crash) on the third switch. ✅ Perfect, no changes needed.

    > ![Betaflight Modes tab](mobula6-tinywhoop-full-review-28.jpg)

4.  **OSD tab**

    > In the OSD tab I care to see if `RSSI value` is displayed, I also like to see current draw, throttle value and flight time elapsed. ✅ All good, no changes needed.

    > ![Betaflight OSD tab](mobula6-tinywhoop-full-review-29.jpg)

Let's go fly!

### <span id="flying" class="offset-top-nav">🚁 Flying</span>

TODO:

<div style="text-align: center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/TODO:?rel=0" frameBorder="0" allowFullScreen title="TODO:"></iframe>
</div>

### <span id="upgrades" class="offset-top-nav">🔝 Upgrades</span>

TODO:

### <span id="conclusion" class="offset-top-nav">📑 Conclusion</span>

TODO:
the video bit rate for 1080p 60fps (default) is ~ 30-31 Mbit

test camera how quick it reacts to light chagnes
write about configuring the camera with the joystick

prop wash or jello in the 1080p dvr (on the big open field)

Happy flying!

[0]: Linkslist
[1]: https://bit.ly/geprc-skip3-hd
[2]: https://bit.ly/mobula7-hd
[3]: https://bit.ly/geprc-phantom
[4]: https://bit.ly/tinyhawk-freestyle
