---
path: '/fpv/mobula7-hd-review-and-setup/'
date: '2019-05-19'
title: 'Mobula7 HD review and setup'
author: 'Georgi Yanev'
affiliate: 'Links to Banggood or Amazon in this article are affiliate links and would support the blog if used to make a purchase.'
draft: true
category: 'fpv'
tags:
  - 'happymodel'
  - 'mobula7'
  - 'micro'
  - 'drone'
ogKeywords: 'TODO:'
ogDescription: 'TODO:'
ogImage: './mobula7-hd-review-and-setup-5.jpg'
---

<div class="article-update-notification">
This is a sponsored review. Be that as it may, I still stand by every word and this is my objective and honest review. I love FPV and want to help people enjoy the hobby.
</div>

The [Mobula7 HD][1] is right up there at the top of the line micro quads, along side other drones such as the [Eachine Trashcan][], [Mobula7][], [Snapper7][] and others. Being the latest and greatest quad in Happymodel's lineup, means it comes with the best overall specs, but it also does something, that none of these other micro drones listed above does.

![Mobula7 HD](mobula7-hd-review-and-setup-5.jpg)

The Mobula7 HD falls into a class of micro quads called `cinewhoops`, which steams from the fact that it carries capabilities to record **1080p video at 60 fps**. To achieve that it uses a Caddx Turtle v2[vl] camera. As such, this quad targets a specific audience - people to whom recording high definition footage is important and given that you can't really carry a Go Pro on top of a micro drone, you are stuck with the option of using an FPV camera that doubles in functionality as a high def video recorder.

Really, really neat! Now, I do say that as a fan of such cameras, in fact, I've been using Runcam Split 2 and Runcam Split Mini for a while now and for my needs, those cameras are enough. I get fairly crisp 1080p 60fps footage to review my flight or [upload to youtube][playlist].

However the cool thing about the [Mobula7 HD][1] is that it is a micro quad and that means it comes with all the safety that comes with a micro quad. You have prop guards, the chance of you doing damage to yourself or other people is nearly negligible (but of course please don't try). In turn this means that you can fly this in parks without being a menace to society.

The Mobula7 HD takes in 1S, 2S or 3S batteries and depending on that you will get very different flight characteristics.

### Table of contents

- [a](#a)
- [b](#b)

### 📦 Unboxing

Let's have a look at what you get in the box.

![Mobula7 HD box](mobula7-hd-review-and-setup-1.jpg)

![The inside of the Mobula7 HD box](mobula7-hd-review-and-setup-2.jpg)

Inside the box we find the Mobula7 HD as expected, a manual, 1 3S battery and a couple of packages.

![All items from the Mobula7 HD unpacked](mobula7-hd-review-and-setup-3.jpg)

One of the packages contains a controller for the [Caddx Turtle FPV][3] camera. The other one - the more or less regular stuff for a micro quad: a screwdriver, a prop remover tool, some extra screws, 4 spare props (complete different set than the ones that are already installed) and an xt-30 to two xjt [?] connector.

![Mobula7 HD, 1 3S battery, camera controller, screwdriver, xjt to xt-30, screws, props, propeller remover](mobula7-hd-review-and-setup-4.jpg)

### Initial setup

### Bind

### Fly

### Batteries: 1S, 2S, 3S

The flight controller - [Crazybee F4 PRO V2.0][] is 1-3S capable.

#### 🔋 1S

**There probably isn't many reasons to run the Mobula7 HD on 1S**. The Mobula7 HD really shines in freestyle, acro flying and even zipping around indoors is better on 2S. I only tested flying 1S with a [GNB 450mah lipo][], which are a bit heavier for the already heavy micro to run just off of 1S.

![GNB 450mah 1S lipo](mobula7-hd-review-and-setup-10.jpg)

Then you add to that the fact that if you don't want to do soldering just to try out flying on 1S, then you have to use the xt-30 to xjt connector and that adds extra weight as well.

![GNB 450mah 1S lipo](mobula7-hd-review-and-setup-11.jpg)

As I mentioned, did it just for testing purposes, didn't get much out of it, and that's ok, there really isn't any need to run on 1S.

#### 🔋🔋 2S

2S works really good. Both indoors and outside. In my tests I used the [BetaFPV 2S 350mah lipo][] batteries and had no issues whatsoever. I got decent flight times per pack of about [?], even when combating quite some wind at high altitudes.

![Beta FPV 2S 350 mah lipo](mobula7-hd-review-and-setup-12.jpg)

[video of hill flight]

Here I fly on [?] meters above sea level hill and go up to 20-30 meters for a nice shot of the city.

And here I am zipping around in a park! That's so much fun to do with the Mobula7 HD!

#### 🔋🔋🔋 3S

In terms of 3S I have only tried the stock battery that comes with the quad. I'm somewhat on the fence if 3S is really required. If you consider raw performance, there is no denying that 3S zips around faster, that's a fact, however, Happymodel recommends that you limit the throttle scaling to 75% if you are running the 10000KV motors, to reduce the risk of burning ESCs.

You can do that by pasting the following commands in the Betaflight CLI:

```
set throttle_limit_type = scale
 set throttle_limit_percent = 75
 save
```

Try it out for yourself and see what you prefer. I'll comeback and update the post as soon as I test with some other 3S batteries. Personally for now, I prefer flying 2S with no throttle limits. I find the experience very satisfactory and hassle free, with no extra configuration required.

### Who is it for?

### Setup record on start of flying

### What batteries to get?

### What props to get?

![](mobula7-hd-review-and-setup-6.jpg)

![](mobula7-hd-review-and-setup-7.jpg)

![](mobula7-hd-review-and-setup-8.jpg)

![](mobula7-hd-review-and-setup-9.jpg)

TODO:

- videos at end
- links
- check spelling in grammarly
- add emojis
- make a pass to highlight certain passages of text

NOTE ON THIS:

```
Notice:
New betaflight configurator 10.5.0 and 10.5.1 are not compatible for Mobula7 HD very well for now.
We suggest to use Betaflight configurator 10.4.0


In order to reduce risk from the Mobula7 HD (10000kv motor version )esc burnt , we suggest to limit the throttle scales to 75% .
Performance is almost the same like  new 9000KV version.
The cli command is :
set throttle_limit_type = scale
set throttle_limit_percent = 75
save
```

#### Where to get it?

###### Mobula7 HD - [Amazon][2] [Banggood][1]

###### Caddx Turtle V2 - [Amazon][4] [Banggood][3]

[0]: Linkslist
[1]: https://bit.ly/mobula7-hd
[2]: https://amzn.to/2Ee04Hx
[3]: https://bit.ly/caddx-turtle-v2
[4]: https://amzn.to/2LZJTDI
