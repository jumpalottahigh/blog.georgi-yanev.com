---
path: '/projects/how-to-publish-a-package-on-npm/'
date: '2019-01-30'
title: 'How to publish a package on NPM'
author: 'Georgi Yanev'
draft: false
category: 'projects'
tags:
  - 'javascript'
  - 'npm'
  - 'mini'
  - 'webdev'
  - 'node.js'
affiliate: ''
ogKeywords: 'GitHub, learning, developing, making open source, web dev, node.js, javascript, es6, npm, package, module, publish on npm, first package, first module, how to publish on npm, how to publish node package, package.json, git, oss'
ogDescription: 'A couple of weeks ago I created and published my first node package and it was a lot of fun. Much to my surprise it was much easier than I thought.'
ogImage: './how-to-publish-a-package-on-npm-1.png'
---

A couple of weeks ago I created and published [my first node package on NPM][1] and it was a lot of fun. Much to my surprise, it was much easier than I thought.

There are at least a few [boilerplate][3] and [scaffolding tools][4] to help you get started, and while they probably are the way to go, because they come with all the tooling, tests and hooks, here's a simple example of actually publishing a node package.
There are plenty of guides on how to do it, including [this article][2] right on npm's docs, but here's one way on how to get a minimum setup going on.

### 🔁 Make a new repository on GitHub

Create a new repository and clone it locally on your machine. Then change directory into it and open the folder with your favorite editor.

```bash
git clone https://github.com/jumpalottahigh/how-to-publish-to-npm
cd how-to-publish-to-npm/
code .
```

### ✨ Run npm init

```bash
npm init
```

You can also pass `-y` to auto say yes to every question in the initializer. I'd say you probably want to review the information, so maybe go slower. Because we just want to see how things work, the defaults will suffice.

Check your `package.json` and make sure that the `main` key points to your entry point for the module. For now, let's make it point to `index.js`.

### 📦 Write the module

Create index.js,

```bash
touch index.js
```

... and let's export a simple function called `sum`, that adds two numbers together and returns the result.

```javascript
exports.sum = function(a, b) {
  return a + b
}
```

### 📢 Publish the package

Stage, commit and push all your changes to the remote repository on GitHub.

```bash
git add .
git commit -m "Export a sum function"
git push origin master
```

Next, you need to login to npm, so run:

```bash
npm login
```

After you have gone through the flow, you are ready to publish your package using:

```bash
npm publish
```

That's it, it's indeed that easy! Go to [npmjs.com][5] and search for your newly published package by the name you gave it.

### 🍴 Consume the module

Last but not least, let's try it out. In your favorite project of choice install the package:

```bash
npm i how-to-publish-to-npm
```

Then use it in code as:

```javascript
// Importing the module using a named import
import { sum } from 'how-to-publish-to-npm'

console.log(sum(7, 11)) // 18
```

### 🆙 Upgrading the package

Say you make some changes to your function and want to release a new version. You can use `npm version` to bump the package version.

```bash
npm version major # 1.0.0
npm version minor # 0.1.0
npm version patch # 0.0.1
```

Read more about [bumping a package version][6].

Then you can release the package again with the new version, running `npm publish`.

### 🌯 Wrap up

That's all of it! Congrats 🎉! It is really not as complicated as one may think (or at least I did). I hope this inspires you to author your own modules and to share them with the Node community.

**Also, please don't ship modules like that to production.** For the sake of creating a proof of concept (PoC) and just getting something out there, we heavily overlooked testing and continuous integration. There's nothing stopping you from starting small and bringing in all the bells and whistles when you need them or starting with a generated project. You do you!

[0]: Linkslist
[1]: https://www.npmjs.com/package/react-toggle-emoji
[2]: https://docs.npmjs.com/creating-node-js-modules
[3]: https://github.com/sindresorhus/node-module-boilerplate
[4]: https://github.com/kentcdodds/generator-kcd-oss
[5]: https://www.npmjs.com/
[6]: https://docs.npmjs.com/cli/version.html
