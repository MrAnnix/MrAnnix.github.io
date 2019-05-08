---
layout: post
title:  "dat:// — How to decentralize your website?"
description: "Decentralize your website with dat, a P2P protocol that will make the Web more efficient and secure."
last_modified_at: 2019-05-07 23:38 +0200
image: "/assets/images/blog/dat-how-decentralize-web.jpg"
categories: Web
tags: [dat, P2P, DWeb, Hashbase, Beaker]
---

Nowadays, the Internet is being more and more centralised, websites and applications are increasingly controlled by large monopolies as Google, Amazon, Facebook... These companies control and shape how we communicate and organize. How many of us don’t use one of their services every day?

Decentralized software has the potential to return control of their digital information to the people. Precisely for this, initiatives as [Dat](https://datproject.org/ "Dat protocoll homepage") appears. Dat’s community aims to create a fast and secure peer-to-peer network, based on [their protocol](https://datprotocol.github.io/how-dat-works/ "How Dat Works"), that allows to building apps and shares documents.

## What is Dat protocol?

As I’ve said Dat is a new p2p protocol to transfer hypermedia, like HTTP. It’s **fast**, since the archives can be synced from multiple sources, and it can work even if the original uploader is offline. It’s **secure** because all updates of the files are signed and integrity-checked. And of course, it’s **decentralized**.

Here’s an example of what a Dat URL is like:

<figure class="align-center">
  <img src="{{ '/assets/images/blog/dat-how-decentralize-web_dat-url.svg' | absolute_url }}" alt="Dat URL example">
  <figcaption>Dat URL example.</figcaption>
</figure>

The [ed25519](https://ed25519.cr.yp.to/ "ed25519: High-speed high-security signatures") public key unique to this Dat, used by the author to create and update data within it. The public key enables you to discover other peers who have the data and is also verify that the data was not corrupted or tampered with as it passed through the network.

## Last-gen Web (Beaker browser)

That sounds great, but, what’s the promise about **decentralizing my website**. Here’s where [Beaker](https://beakerbrowser.com/ "A browser for the
next-generation Web") appears.

Beaker defines himself as an experimental browser to explore and build the peer-to-peer Web. It’ll allow you to create your own decentralized site and, obviously, to see the ones other users have created. Once the content has been uploaded, we can take a preview and, if everything goes well, share it with its link. For more info, you can take [their tour](https://beakerbrowser.com/docs/tour/ "Beaker browser tour").

## Hashbase

Once you’re happy with your site, **you probably want it up even if your computer is off**. To solve that problem, you could share your website with a lot of friends and make them *host* your site turning them *seeders* of your files.

Fortunately, there’s a more easy way: [Hashbase](https://hashbase.io "Hashbase"), public peer for files published with the Dat protocol. It’ll behave as a seeder of your files keeping them always online.

And that’s all. If you wanna visit the Dat version of this web, you can find it at [dat://raulsanmartin.me](dat://raulsanmartin.me '"datized" version of this web')
