---
path: '/fpv/set-up-fpv-drone-simulator/'
date: '2019-02-17'
updated: '2019-05-04'
title: 'Set up an FPV drone simulator'
author: 'Georgi Yanev'
affiliate: 'Links to Banggood or Amazon in this article are affiliate links and would support the blog if used to make a purchase.'
draft: false
category: 'fpv'
tags:
  - 'simulator'
  - 'taranis'
ogKeywords: 'FPV, racing quads, quad, drone, getting started, simulator, fpv simulator, fpv drone simulator, quad simulator, liftoff, velocidrone, drl, the drone racing league simulator, fpv freerider, taranis qx7 simulator, taranis q x7 trainer, practice fpv, practice in simulator, quadcopter simulator'
ogDescription: 'Whether you are a seasoned fpv drone pilot or a person just getting started with this hobby, there always is a reason to fly in a quadcopter simulator. At the very least, if you are practicing a new trick or just practicing flying in general, it just might save you many crashes, money, and frustration while walking to get your quad after your 10th crash for the day.'
ogImage: './set-up-fpv-drone-simulator-6.jpg'
---

<div class="article-update-notification">
  I recently started a YouTube channel called <strong><a href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg" target="_blank" rel="noopener noreferrer">FPVTIPS</a></strong> to do much of what I'm doing on this blog - try to help people new to FPV. <strong><a href="https://www.youtube.com/channel/UCCh3SK2EktDdOQkEOTDmSCg" target="_blank" rel="noopener noreferrer">Come check it out!</a></strong>
</div>

Whether you are a seasoned fpv drone pilot or a person just getting started with this hobby, there always is a reason to fly in a quadcopter simulator. At the very least, if you are practicing a new trick or just practicing flying in general, it just might save you many crashes, money, and frustration while walking to get your quad after your 10th crash for the day.

This is where FPV quad/drone simulators come in. By far the biggest benefit of using the simulator is probably getting more stick time and creating stick memory. Additionally, if where you are is winter and you can't fly for a few months (which sucks, I can relate), simulators are a great way to still somewhat enjoy the hobby!

![Liftoff FPV simulator start screen](set-up-fpv-drone-simulator-1.jpg)

Simulators have gone a long way in the past few years and there are some really good options out there. And cheap at that too. The ones I have tried are:

<ul>
  <li>
    <a href="https://www.liftoff-game.com" target="_blank" rel="noopener noreferrer">Liftoff</a>
  </li>
  <li>
    <a href="https://www.velocidrone.com" target="_blank" rel="noopener noreferrer">Velocidrone</a>
  </li>
  <li>
    <a href="https://fpv-freerider.itch.io" target="_blank" rel="noopener noreferrer">FPV Freerider</a>
  </li>
  <li>
    <a href="https://thedroneracingleague.com/simulator/get-started/" target="_blank" rel="noopener noreferrer">DRL simulator</a>
  </li>
</ul>

You can't go wrong no matter whichever one you pick to use, but my personal favorite is Liftoff (and no, this is not a sponsored post). Although it does come at a price of €20 and is purchasable through Stream, it is really awesome, the flying is quite realistic, you can fly solo or compete with other players, which makes it all the more fun. Bonus points for having a [Joshua Bardwell][1] house level.

As far as Velocidrone is concerned it seems like it's the simulator that [Mr.Steele][2] uses, and [his video][3] provides some highlights on how to get started so definitely check it out if you are into Velocidrone.

## ⚙ Setting up your gear

### 📡 Transmitter

I'm using a [Taranis Q X7][4] transmitter and to set it up all you need to do is to connect it to your computer via a [Mini USB B to USB cable][5].

![Mini USB B to USB cable](set-up-fpv-drone-simulator-4.jpg)

Do note that depending on how far your computer is you might need a bit longer cable. I have this setup where I am using a USB extender cable to get the desired length. It's a USB female to USB male cable that acts as an extension for the much shorter Mini USB B cable.

![Male USB to Female USB cable](set-up-fpv-drone-simulator-9.jpg)

In the case of the Taranis, the only thing you have to do when you plug it in is to select **"USB Joystick (HID)"** from the prompt that pops up when you plug the cable in. Then you are off to the races. Literally :)

![Taranis Q X7 USB popup](set-up-fpv-drone-simulator-5.jpg)

If you don't see this exact popup screen it could be that you are running an older version of OpenTX and if so, read this article where I cover [how to upgrade the firmware on the Taranis Q X7][6].

Additionally, you can go into the settings for your sim profile (or create one if you haven't yet) and also disable the internal RF as it's not required when you use the radio as a joystick in simulations. That's going to extend the transmitter's battery life as well. See image below and how Internal RF Mode is set to OFF.

![Taranis Q X7 Internal RF mode set to OFF](set-up-fpv-drone-simulator-8.jpg)

I have also previously set up a [FlySky FS i6][7] radio and the setup is largely the same. Especially if you get [the correct cable][8]. In my case I bought the wrong cable - the one for data transfer, not for training - and I had to do some shenanigans with creating my own trainer cable out of a headphone cable with a 3.5mm plug, and using the [SmartPropoPlus][9] software to get it to work.

### 🕶️ FPV goggles

Connecting your FPV goggles and getting the video output from the simulator through your goggles goes a long way towards immersion and the complete fpv simulator setup. Note, this is not required, you could perfectly well just fly by watching your monitor, but it does feel so much more like the real thing when you have your goggles on.

I am using the [Aomway Commander][10] goggles. To connect them, use the mini HDMI output port at the bottom part of the goggles. I use a [mini HDMI to HDMI converter][11] and a regular HDMI cable to my PC.

![Aomway Commander v1 and mini HDMI to HDMI adapter](set-up-fpv-drone-simulator-7.jpg)

### Go fly!

Enjoy your simulator set up and practice those inverted yaw spins, trippy spins and what-nots! Happy flying!

![Taranis Q X7 and Aomway Commander v1 goggles](set-up-fpv-drone-simulator-6.jpg)

![Flying the Liftoff FPV simulator](set-up-fpv-drone-simulator-3.jpg)

### 📱 Bonus: Fly FPV simulator using your phone

A cool thing discussed in the [Eachine Trashcan group on Facebook][18] is to try to set up everything you need on your phone, so you wouldn't even need a computer.

This is made possible by USB type C and a dongle with an HDMI and an USB type B connectors.

My phone is a Google Pixel 3 and I plug the USB C dongle in it, then an HDMI cable into the dongle and then also a USB type B to micro USB cable. The end of the HDMI cable goes to a HDMI to mini HDMI converter and then that goes into my Aomway Commander goggles. The micro USB cable goes into my Taranis X-Lite. If you are using a Taranis Q X7, just use a USB type B to mini USB cable.

![Playing Freerider on Pixel 3](set-up-fpv-drone-simulator-10.jpg)

Here's the complete set up. Happy flying!

![Taranis X-Lite and Aomway Commander goggles plugged into a USB C dongle, plugged into a Pixel 3](set-up-fpv-drone-simulator-11.jpg)

#### Where to buy the gear?

###### Aomway Commander - [Amazon][12] [Banggood][10]

###### Taranis Q X7 - [Amazon][13] [Banggood][4]

###### Taranis X9D - [Amazon][14] [Banggood][15]

###### Taranis X-Lite - [Amazon][17] [Banggood][16]

[0]: Linkslist
[1]: https://www.youtube.com/channel/UCX3eufnI7A2I7IkKHZn8KSQ
[2]: https://www.youtube.com/user/MrSteeledavis
[3]: https://www.youtube.com/watch?v=dOwW6PFZU3Y
[4]: https://bit.ly/taranis-qx7
[5]: https://bit.ly/mini-usb
[6]: /fpv/setup-taranis-qx7
[7]: https://bit.ly/flysky-fs-i6
[8]: https://bit.ly/flysky-trainer-cable
[9]: https://github.com/shauleiz/SmartPropoPlus
[10]: https://bit.ly/aomway-commander
[11]: https://bit.ly/mini-hdmi-to-hdmi
[12]: https://amzn.to/2D4Nb1U
[13]: https://amzn.to/2VszUYb
[14]: https://amzn.to/2UsfwtO
[15]: https://bit.ly/taranis-x9d
[16]: https://bit.ly/taranis-xlite
[17]: https://amzn.to/2I92UBh
[18]: https://www.facebook.com/groups/331978367598746/permalink/416011002528815/
