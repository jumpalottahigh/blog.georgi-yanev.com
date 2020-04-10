---
path: '/fpv/mobula6-emuflight-project-mocking-bird-setup-guide/'
date: '2020-04-10'
title: 'Mobula6: Emuflight and Project Mockingbird setup guide'
author: 'Georgi Yanev'
draft: false
category: 'fpv'
tags:
  - 'happymodel'
  - 'mobula6'
  - 'micro'
  - 'drone'
  - 'diy'
  - 'guide'
gearList:
  - 'mobula6'
affiliate: 'Links to Banggood or Amazon in this article are affiliate links and would support the blog if used to make a purchase.'
ogKeywords: 'fpv, drone, happymodel, happy model, mobula6, mobula 6, micro, freestyle, toothpick, fpv freestyle, fpv drone, quad, quadcopter, micro drone, micro quad, emax freestyle, emax tinyhawk, tinyhawk, what toothpick to buy, which toothpick micro drone to get, emax toothpick, emax micro drone, happy model micro drone, happymodel mobula6, mobula6 micro drone, tinywhoop, mobula6 tiny whoop, mobula6 48 khz, mobula6 48khz mod, project mockingbird, emuflight, betaflight, configurator, emuflight configurator, how to setup project mocking bird on the mobula6'
ogDescription: 'TODO:'
ogImage: './mobula6-emuflight-setup-guide-1.jpg'
---

INTRO:

- Research on Emuflight, cleanflight, betaflight the story a bit

There is a project called Emuflight and this is what it is about... (link to JB's interview as well)
On the other hand Project Mockingbird is about...

Today, we're gonna go over how you can take advantage of Emuflight and Project Mockingbird, to make your already pretty awesome [Mobula 6][1], even more awesome! (Bonus points if you already followed the [JESC firmware guide in my original review post][2])

### Table of contents

- [📦 Unboxing](#unboxing)
- [📝 Specifications](#specs)
- [⚙ Setup](#setup)
- [🚁 Flying](#flying)
- [🔝 Upgrades](#upgrades)
- [💾 Flash 48 kHz ESC firmware](#flash)
- [📑 Conclusion](#conclusion)

<!-- If you prefer watching, check out the full video review on my YouTube channel:

<div style="text-align: center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/INYdY-2tP9E?rel=0" frameBorder="0" allowFullScreen title="Happymodel Mobula6 - review, binding, complete setup, JESC 48 kHz MOD | BEST WHOOP WINTER 2020"></iframe>
</div> -->

### 🔽 Download Emuflight and config files

Grab Emuflight and install it from here ...

Get this hex and this diff file ...

[EmuFlight_0.2.0_CRAZYBEEF4FR.hex](EmuFlight_0.2.0_CRAZYBEEF4FR.hex)
[EMUF_215_PMB-FF-BASE-DIFF-ALL-PUBLIC-01-09-20](EMUF_215_PMB-FF-BASE-DIFF-ALL-PUBLIC-01-09-20.txt)

### 💾 Flash Emuflight

- Flash it
- Potential issues and ImpulseRC driver fixer
- Flashing successfully and realising that is the wrong hex, don't do it

### 📋 Paste or load the diff

### ⚙ Validate and adjust the settings

- Props in vs Props out
- SPI receiver settings to \_D
- Modes - add channels
- Receiver - TAER from w/e it was
- OSD elements if you want any

### 🚁 Flying

#### Indoor flights

Initial immediate impression - yaw axis is super sensitive and responsive, at the same time, pitch axis seems too slow.
Need to get in more flights. There's something nice about the tune. The flight time does not seem to suffer, need more tests.

#### Outdoor flights

Self host the hex and txt with diff

### 📝 Conclusion

Take it for what it is and have fun with it. This might not be for everyone and I'm not sure it's a matter of if this is really the one true set up.
I've been hearing of many people getting very decent results with Betaflight 4.1 which allows filtering. At the same time, I really can't complain how the quad flew on 3.5.7 either. I was pretty happy with it. I really mostly did this upgrade out of curiosity, to learn something new, to share it with you folks and to see if it was really as good as some people claimed it to be.

If you feel like trying it out, go for it, if not, enjoy your Mobula as it is. On the other hand, you can always flash back to Betaflight and paste in the stock config.

Whatever you choose, have fun and happy flying!

[0]: Linkslist
[1]: https://bit.ly/mobula-6
[2]: /fpv/mobula6-48khz-jesc-complete-setup-review/
