---
layout: post
title:  "dat:// — How to decentralize your website?"
description: "Decentralize your website with dat, a peer-to-peer protocol that will make the Web more efficient and secure."
date: 2019-05-07T21:57:00Z
last_modified_at: 2019-05-07T21:57:00Z
image: /assets/images/blog/dat-how-decentralize-web.jpg
categories: Web
tags: [dat, P2P, DWeb, Hashbase, Beaker]
---

Nowadays, Internet is being more and more centraliced, websites and applications are increasingly controlled by large monopolies as Google, Amazon, Facebook... These companies controll and shape how we communicate and organize. How many of us don’t use one of their services every day?

Decentralized software has potential to return control of their digital information to the people. Precisely for this, initiatives as [Dat](https://datproject.org/ "Dat protocoll homepage") appears. Dat’s community aims to create a fast and secure peer-to-peer network, based on [their protocol](https://datprotocol.github.io/how-dat-works/ "How Dat Works"), that allows to build apps and share documents.

## What is Dat protocol?

As I’ve said Dat is a new p2p protocol to transfer hypermedia, as HTTP. It’s **fast**, since the archieves can be synced from multiple sources, and it can work even if the original uploader is offline. It’s **secure**, because all updates of the files are signed and integrity-checked. And of course, it’s **decentralized**.

Here’s an example of what a Dat URL is like:

<svg class="daturl" width="1052" height="64" style="background-color: #eee; padding: 10px">
<text class="code" x="0" y="18"><tspan>dat://</tspan><tspan fill="#bf8e82">8248f8d6e394ebed25bb24f0434f52c0ce5fa8cf85dc5e3eed13f3bc479d155d</tspan><tspan>/index.html</tspan></text>
<path stroke="#93a0b6" strokewidth="1" fill="none" d="M0.5,24 v4.5 h60 v-4.5 m0,4.5 h640 v-4.5 m0,4.5 h140 v-4.5"></path>
<text y="44" text-anchor="middle"><tspan x="30">protocol</tspan><tspan x="30" dy="1.2em">identifier</tspan></text>
<text y="44" text-anchor="middle"><tspan x="380">ed25519 public key</tspan><tspan x="380" dy="1.2em">(hexadecimal)</tspan></text>
<text y="44" text-anchor="middle"><tspan x="770">optional suffix</tspan><tspan x="770" dy="1.2em">path to data within Dat</tspan></text>
</svg>

The [ed25519](https://ed25519.cr.yp.to/ "ed25519: High-speed high-security signatures") public key unique to this Dat, used by the author to create and update data within it. The public key enables you to discover other peers who have the data and is also verify that the data was not corrupted or tampered with as it passed through the network.

## Last-gen Web (Beaker browser)

That’s sounds great, but, what’s the promise about **decentralizing my website**. Here’s where [Beaker](https://beakerbrowser.com/ "A browser for the
next-generation Web") appears.

Beaker defines himself as an experimental browser to explore and build the peer-to-peer Web. It’ll allow you to create your own decentralized site and, obviously, to see the ones other users have created. Once the content has been uploaded, we can take a preview and, if everything goes well, share it with its link. For more info you can take [their tour](https://beakerbrowser.com/docs/tour/ "Beaker browser tour").

## Hashbase

Once you’re happy with your site, **you probably want it up even if your computer is off**. To solve that problem, you could share your website with a lot of friend and make them to *host* your site tourning them *seeders* of your files.

Fortunately, there’s a more easy way: [Hashbase](https://hashbase.io "Hashbase"), public peer for files published with the Dat protocol. It’ll behave as a seeder of your files keeping them always online.

And that’s all. If you wanna visit the Dat version of this web, you can find it here 👉 [dat://raulsanmartin.me](dat://raulsanmartin.me '"datized" version of this web')
