---
path: "/smart-home/mitigating-a-smart-home-breach"
date: "2018-06-02"
title: "Mitigating and investigating a hacked smart home"
author: "Georgi Yanev"
affiliate: "This article contains affiliate links to Banggood or Amazon that would support the blog if used to make a purchase."
draft: false
disqus_identifier: "mitigating-a-smart-home-breach"
tags: "smart home"
relatedArticles:
  - "living-with-smart-home-automation"
ogKeywords: "smart home automation, Home Assistant, smart, home automation, esp8266, mqtt, 433 MHz, Alexa, Amazon Echo, Google Home, Google Assistant, Philips Hue, Ikea Tradfri, Xiaomi Yeelight, Raspberry Pi"
ogDescription: "..."
ogImage: "./mitigating-a-smart-home-breach-1.png"
---

Mitigating and investigating a home assistant breach

A few days ago (27th May) roughly between 22:00-23:00 I was visited by a "white hat" hacker. Although the guy could do any real damage, the experience was not pleasant and of course had to be mitigated.

Story time:

* alpha numeric password of only 8 characters length (usually use last pass but this seemed to be a bit weeker)
* attacker changed Philips hue lights' names from within HA
* attacker turned off my TV and set the house in party mode
* thinking a password change was enough
* finding crypto miners on the PI?!

0. Turn off cameras from the power outlet
1. Change HA password
1. Remove port forwarding on router to PI hosting HASSIO
1. Erase and reflash the SD card
1. Kill the duckdns setup
1. Dump the SD card for further investigation
1. Set up a trap?

[0]: Linkslist
[1]: https://home-assistant.io
