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

[gatsby logo image]

[Gatsby] is many times introduced as a React based static site generator (which it is) but it also doesn't do it justice, because maybe some people miss the fact that Gatsby also rehydrates into a full-fledged React app during runtime.

#### 🔥 Blazing fast

One of the most important points is that Gatsby is engineered for performance from the ground up. A default project setup with Gatsby starts off with Lighthouse scores of 100 across Performance, Accessibility, Best Practices and SEO and can be configured in seconds to deploy as a Progressive Web App (PWA).

#### 🛠 Tooling

Gatsby comes with all the modern tools configured and setup for you. You get Webpack, Babel, ES Lint, Prettier, GraphiQL and so much more.

#### 📀 Your data from any source

Gatsby creates GraphQL types of your data from any source so that you can query it in a similar way across your app. The data can be sourced from headless CMS's, third party APIs, local file system and more. Some headless CMS options worth mentioning and trying out are: [Contentful], [Sanity.io], [DatoCMS].

#### 📦 Deploy anywhere

Because Gatsby compiles your project into static files (HTML, CSS, JS, JSON) you can deploy the output anywhere you could deploy static assets. For example: [Netlify], [AWS S3], [Now], [GitHub Pages] and more.

#### 🅿W🅰

You can create a PWA in seconds by running:

```sh
$ npx gatsby new my-pwa
```

and then enabling the `gatsby-plugin-offline` in `gatsby-config.js` by uncommenting it.

#### 👩‍💻 DX

The developer experience is pretty solid. There many helpful warning and error messages with actionable information available right in your terminal should any issues arise while you are developing.

Because Gatsby uses Webpack under the hood, you get Hot Module Replacement (HMR) and previewing changes while developing is nearly instant as soon as you save the file.

Except for booting up your project on `localhost:8000`, Gatsby also gives you a graphiQL instance at `localhost:8000/___graphql` where you can live query your data and prototype GraphQL queries, as well as just explore the shape of your data. Very useful!

#### 🔄 Rich ecosystem

There are plenty of resources to get you started. More than 700 plugins and plenty of starters that are just a `npx gatsby new [GITHUB REPO URL]` away.

#### 💜 Amazing community

The community around Gatsby is comprised of many people passionate about the future of the project, willing to help each other out. There are a LOT of articles out there on complete stacks, solving a particular problem, or just using a specific data source. That makes it easy to find an example when you need one.

There is a [Discord] channel, [Spectrum] community and following [Gatsby] on Twitter is probably a good idea, as the main account tweets and retweets many useful resources.

In fact, some people might be so passionate, as to have claimed that a Gatsby project can get a Lighthouse performance score of 70+ while running at CDN edge on a _TOASTER_.

[link to tweet embed]

Here's how the Lighthouse scores of the default Gatsby starter look, for illustration purposes.

[image of Gatsby default starter]

### #Perfmatters

Here's where I take a small tangent on a topic I care deeply about - web performance.

There are many reasons to care about performance, but at the end of the day, it's Your users and Your business on the line.

Performance, speed, user satisfaction all translate to real money. There are also SEO benefits for fast sites as of July 2018 as page speed is now a part of the page ranking algorithm.

Having a fast, performing site is a good way to distinguish yourself from your competition. Users are impatient nowadays, and slow sites lead to increased bounce rates.

Finally, as we welcome the next 1 billion users on the internet, it's good to be aware that they might be coming online from places where bandwidth is expensive and connections could be flaky.

Now that the Web had it's 30th birthday, let's be nice and build quality experiences!

#### What can Gatsby do about that?

Well, as I mentioned already, Gatsby is engineered for performance from the ground up. There are many things that Gatsby does right and manages for you. From how resources are loaded to optimize for the [critical rendering path (CRP)][], to how resources are prefetched and preloaded for routes the user might hit next.

But I'd like to talk about the `gatsby-image` component. Opting-in to use that for your images, is a great way to grab some of those high impact low effort low hanging fruit.

Depending on what your app is like, images could make up for a big portion of all the resources you serve to users. In some cases it could be up north of 70%. Now, admitedly, byte for byte JavaScript has higher cost than images, because it also under goes parsing and execution after downloading, but Gatsby manages that for you, and images are still very important to handle right.

At the very least I suggest you use [squoosh.app][] to resize and optimize your original assets.

What `gatsby-image` does for you is it provides you with a highly optimized lazy loading image component. Images not in the viewport during page load are not going to be downloaded. In their place you could opt-in for a low quality base64 encoded image placeholder, that gets replaces with the original high quality image as soon as the user scrolls that asset in the viewport. Gatsby provides you a blur up effect or a traced svg effect if that's what you choose how to handle the low quality placeholder.

The `gatsby-image` component also has a `srcset` attribute where different size images are specified based on viewport width to avoid serving extra large assets to devices that couldn't use up the full size of the image.

Finally, the component serves `webp` images to browsers that can handle that. There is always a fallback for `jpeg` or `png`, but serving `webp` can help a lot because the file size is usually significantly smaller with a visibly similar quality as `jpeg` or `png`.

### Try out React and GraphQL for the first time

Whether your are a seasoned veteran or a new comer to the [React][] and [GraphQL][] world, it is easy to get started with those technologies when using Gatsby. I think it's worth mentioning that because you don't need a whole lot of prior knowledge to get started here. You can write your first React component or a GraphQL query today with Gatsby.

And because Gatsby is using React under the hood, that means you could pull up any React package from [npm]. Yay 🎉!

### How does Gatsby work in a nutshell?

[image of gatsby holistic overview]

Quite straightforward. We have our data sources at the top. Those could be anything from headless CMS's to local JSON or YAML files, to 3rd party APIs and others.

Gatsby pulls those in and generates GraphQL types for you that you can query against. `localhost:8000/___graphql` is your friend when you want to explore the data.

Then, bring in the data to your components using GraphQL queries, which makes said data available as a `data` prop on your components. Use it to build your components.

When you run `gatsby build`, Gatsby will create a production build in the `public` directory at the root. Use that to deploy the assets to any static web host (Netlify, AWS, Now, GitHub pages, etc).

TODO: continue from slide 34/69

## Conclusion

TODO:
Post ideas - with MDX and bring in GraphQL playground

[0]: Linkslist
