---
path: '/smart-home/mitigating-a-smart-home-breach/'
date: '2018-06-02'
title: 'Mitigating and investigating a hacked smart home'
author: 'Georgi Yanev'
draft: false
tags: 'smart-home'
relatedArticles:
  - 'smarthome'
  - 'homeassistant'
ogKeywords: 'smart home automation, Home Assistant, smart, home automation, Philips Hue, Raspberry Pi, router, hacked, hacker, hacked smart home, kali, linux, resinos, docker, hassio'
ogDescription: 'A few days ago (27th May) roughly between 22:00-23:00 I was visited by a "white hat" hacker. Although the guy could not do any real damage and he was "good" enough to rename my Philips Hue bulbs to **hacked!**, the experience was not pleasant and of course had to be mitigated...'
ogImage: './mitigating-a-smart-home-breach-1.jpg'
---

A few days ago (27th May) roughly between 22:00-23:00 I was visited by a "white hat" hacker. Although the guy could not do any real damage and he was "good" enough to rename my Philips Hue bulbs to **hacked!** (to attract my attention?), the experience was not pleasant and of course had to be mitigated.

### 📖 Story time:

As stated above, said white-hat hacker was only ever able to rename 3 of my lightbulbs, turn off my living room TV and set some house lights to party mode. None of that was particularly damaging except for the dirty feeling of your home being breached!

The absolute first thing I did was SSH into my Raspberry Pi (hosting the [Home Assistant][1] instance) and **change the password and reboot the Pi**. That seemed to have taken care of the intruder. Now for the investigation part.

I had a feeling he had no access to my network but of course I had to make sure. I checked connected devices to my router and **disabled port forwarding**. Everything indicated that he was only able to log into my Home Assistant instance. My main router forwarded port 443 and 8123 to the IP address of my Pi and same ports. This allowed me to setup a DuckDNS name like `name.duckdns.org` and access my smart home interface from the outside world. No issues for about 1.5 years until today. With a decent 8 character alpha numeric password that was maybe brute forced along the way? Why I hadn't used a stronger 12-16 character password with special characters is beyong me.

Next I **killed the duckdns entry**. Rather straight forward. With the friendly name no longer pointing to my home IP and the ports closed I felt a bit more secure already.

I noticed the hacker had deleted the Home Assistant database covering his trace. I also found some **crypto miners malware** in one of the folders (what?!).

I had at least 3 options left to investigate further:

- Modem firewall logs
- ISP logs
- Internal Home Assistant / Docker container / ResinOS logs

That being said I dumped the contents of the SD card into a file using Win32 DiskImager for later investigation. **Formatted the sd card, reinstalled a fresh clean install of Home Assistant and booted that up locally only on the home network for the time being**. Because of my config being backed up before hand, I was up and running in ~ 1 hour.

Unfortunately the next part of my investigation was rather fruitless. My modem (ZyXEL VMG3925-B10B) required by my ISP had absolutely no logs stored under the Firewall panel or elsewhere. Quite disappointing but a good finding to improve upon. Might need to pick up a separate Firewall.

On top of that my ISP claimed they could not provide logs for incoming connections during a time window without a police confirmation. Damn! Not sure I wanna go THAT far just yet.

Which leaves me to the current state of things - digging through the backed up image and figuring out of any of [Home Assistant][1], [ResinOS][2] or [Docker][3] store local logs for incoming connections.

I am also considering to set up a trap on a Kali linux machine on the same port and catch the hacker.

_To be continued..._

_P.S.: If you have any tips on looking for logs in Home Assistant, ResinOS or Docker (or another way based on the standard HASSIO setup) DM me on twitter https://twitter.com/jumpalottahigh._

[0]: Linkslist
[1]: https://home-assistant.io
[2]: https://resinos.io/
[3]: https://www.docker.com/
