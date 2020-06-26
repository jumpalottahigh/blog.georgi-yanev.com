---
path: '/quick-tips/rx-loss-flag/'
date: '2020-06-26'
title: 'RXLOSS flag'
---

I had a question about the RXLOSS flag. Basically this is one of the many possible arming prevention flags that you may see in the goggles' OSD. It stands for: "No valid receiver signal is detected". You will need to debug this further and figure out exactly what causes the issue (from disconnects and poor solder joints to fried receivers and so on).

The wiki page also mentions that you may see this also during flight in which case you should treat it as a "critically low signal strength" warning. For information on all the flags check the [Betaflight wiki](https://github.com/betaflight/betaflight/wiki/Arming-Sequence-&-Safety).
