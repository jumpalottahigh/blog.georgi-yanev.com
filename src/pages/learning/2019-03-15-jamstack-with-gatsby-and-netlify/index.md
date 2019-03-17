---
path: '/learning/jamstack-with-gatsby-and-netlify/'
date: '2019-03-24'
title: 'JAMstack with Gatsby and Netlify'
author: 'Georgi Yanev'
affiliate: ''
draft: true
category: 'learning'
tags:
  - 'learning'
  - 'projects'
  - 'webdev'
  - 'talk'
  - 'gatsby'
  - 'netlify'
  - 'jamstack'
ogKeywords: 'TODO:'
ogDescription: 'TODO:'
ogImage: './jamstack-with-gatsby-and-netlify-1.png'
---

The below is based on the talk I gave at Frontend Finland called: "JAMstack with Gatsby and Netlify".

## Intro and why

I'd like to share some thoughts about the [JAMstack][1]. And in particular the JAMstack with [Gatsby][2] and [Netlify][3]. And here's what my angle is coming at this. I work as a web developer at F-Secure and I am convinced that performance on the web matters. The web just had its 30th birthday and it's our job to build performing and high quality experiences, but more on this later. For now let's dive into the JAMstack.

## So what is the JAMstack?

[image of JAM]

The `JAM` acronym stands for `J`avascript, `A`PIs, `M`arkup.

If you head on over to [jamstack.org][4] you will probably notice this graphic.

[TODO: image of JAMstack breakdown]

It's a term coined by Mathias Biilmann that has seen a lot of adoption in the past few years.

#### const { J } = JAM

> "Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript."
> jamstack.org

I think the key takeaways here are **running entirely on the client** and **any framework, library or VanillaJS**. Cool, so pretty loose definition, which is great.

#### const { A } = JAM

> "All server-side processes or database actions are abstracted into reusable APIs, accessed over HTTPS with JavaScript. These can be custom-built or leverage third-party services."
> jamstack.org

I'd like to bring your attention here to the **reusable APIs over HTTPS with JavaScript** and **custom-built or third-party services**. Good definition, nothing ground breaking, pretty simple.

#### const { M } = JAM

> "Templated markup should be prebuilt at deploy time, usually using a site generator for content sites, or a build tool for web apps."
> jamstack.org

The markup part talks about **prebuilt markup at deploy time**. Some tooling required, ok cool.

Here are a couple of jamstack sites they show as examples at jamstack.org/examples:

[https://jamstack.org/examples/]

Again the interesting thing to note is that you could opt-in for any framework or library and still ship a JAMstack site. It's interesting to also note the fact that many of the examples use headless CMS's to pull in content.

Here's the part I personally like the most about the JAMstack.

[image of my slide about core ideas]

#### 📈 Better Performance

The biggest performance benefit with the JAMstack approach comes from the fact that we are serving prebuilt HTML from CDN edge.

#### 🔐 Higher Security

Less server side processes = less attack surface.

#### 💵 Cheaper and Easier Scaling

As a rule of thumb scaling is easy and efficient for static files and that's what we are ultimately deploying.

#### 😍 Better Developer Experience

With a JAMstack approach there are less things to maintain and it's usually faster to deploy, so developers are happy.

#### Disclaimer

While here I aim to focus more on the benefits of the JAMstack, it is worth noting that the JAMstack approach is not a silver bullet and it is not the answer to all problems. As it is common when engineering, consider the trade-offs and choose the right approach for your project.

> **Engineering is all about making the right trade-offs based on your requirements**

Just a month ago [Jason Miller][] and [Addy Osmani][] from the Google Chrome team put together an [article on when to use SSR and a comparison on many different rendering strategies][].

[tweet embed]

The article makes for an interesting read and in particular this table is worth spending some time on.

[image of comparison table]

Finally, another resource worth checking out is the JAMstack video on the Google Chrome Developers YouTube channel by [Surma][] and [Jake Archibald][].

[youtube video]

## Netlify

[netlify logo image]

The next sections on different Netlify features might come across a bit as fanboy-ish, and that's because they largely are. I'm not even sorry, because everything I have outlined below has been my personal experience and for the better part everything has been outstanding.

[TODO: consider adding emoji to all subsecitons]

#### Dev Experience

If you are active on Twitter and following any Frontend or Fullstack people chances are you might have heard people praise Netlify for what it is, and rightfully so. In fact, I do so myself frequently. It's because they are awesome, the product is great, and the developer experience score is over 9000.

#### Free tier

You can get started with the free tier in the matter of seconds and you will probably not outgrow it any time soon.

#### Application Delivery Network (ADN)

CDN for apps. Netlify comes with a powerful CDN for applications and static sites with plenty of edge nodes.

#### Continuous Deployment

If your project has a repository in GitHub, Gitlab or Bitbucket, it's a matter of a few clicks to link that repository to Netlify. This enables you to publish on merges or pushes to the `master` branch of your repository, for example. Very easy to setup with no hassle, very powerful feature.

#### SSL Certificates

Netlify provides a free of charge SSL certificate for your project by utilizing the open source Let's Encrypt project. This is important because in 2019 SSL and https are not only highly recommended they are almost a requirement. That provides better security for your users, is required for HTTP/2 and some new TLDs (like `.dev`) and is good for SEO. The best part about it - Netlify automatically renews the certificates for you, so you don't have to do anything!

#### Custom Domains

Here the developer experience comes first again, as it is just SO easy to setup a custom domain for your site. With a few clicks you are good to go. The flow is very smooth. You can also rename the default subdomain where Netlify hosts your project by default, and redirect that to your custom domain. Very cool.

#### Auto previews for PRs

When you open a pull request against the master branch of your repository, Netlify will automatically build a preview of that pull request. That's super awesome! Again, no configuration required, appart from having a project linked to a GitHub repository. That's pretty neat to be always able to check quickly how the changes from a PR look before you have merged it.

#### Netlify Functions

AWS lambdas simplified. This is really nice to have in case you ever need to do a bit more with Node.js. You don't have to use it if you don't want to, but the feature is there which is neat.

#### Netlify Identity

Provides authentication. A way to manage sign ups, logins. Could be cool for things like the Netlify CMS or creating some sort of gated content like dashboards, personal account pages and more.

#### Netlify Forms

Get data from a form right into the Netlify app by only adding a `netlify` attribute to a form. This could be very cool and quite useful you if don't want to go over setting up something more complicated and you need to ship something now, or you are prototyping.

#### Deploy a site by draging and dropping

[make a gif or repeating webm / mp4 out of demo video]

#### Deploy from a repository

But as I mentioned the true power of Netlify comes from connecting it straight to a repository.

[video / gif of deploying from a repo]

## Gatsby

## Conclusion

TODO:
Post ideas - with MDX and bring in GraphQL playground

[0]: Linkslist
