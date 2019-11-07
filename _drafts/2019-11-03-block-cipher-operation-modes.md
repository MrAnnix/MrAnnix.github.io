---
layout: post
title:  "Block ciphers and modes of operation"
description: "A look at the modes of operation of block encryption algorithms and their resilience to errors."
last_modified_at: 2019-11-03 13:45 +0100
image: "/assets/images/blog/block-cipher-operation-modes.jpg"
categories: Cryptography
tags: [Cryptography, Block ciphers, Security, Modes of operation, DES, AES]
---

Since ancient times, man has been concerned that only the recipient of the message, and not an evil third party, can know the information it contains. From the ancient Hebrews who developed Atbash encryption, a primitive monoalphabetic substitution cipher, Spartans who used transposition cipher of the scytale, or even the Romans with the famous Caesar cipher; to current encryption much more complex and secure.

Precisely we will talk today about a set of these modern algorithms.

## Block ciphers

We can classify all current cryptography into three large families based on the characteristics of their key. Symmetric encryption, where the key used to encrypt and decrypt is the same. Asymmetric, in which the key to encrypt is different from the one to decrypt (there are a pair of keys). And cryptography without a key, which forms the basis of the digital signature.

Today's topic focuses on a range of algorithms belonging to the first family, symmetric encryption, called block ciphers.

> Divide and conquer

One way to encrypt information is to divide the problem into several parts. This is what block encryption algorithms do; they divide information into fixed-size blocks and perform *their magic* on them.



As I’ve said Dat is a new p2p protocol to transfer hypermedia, like HTTP. It’s **fast**, since the archives can be synced from multiple sources, and it can work even if the original uploader is offline. It’s **secure** because all updates of the files are signed and integrity-checked. And of course, it’s **decentralized**.

Here’s an example of what a Dat URL is like:

<figure class="align-center">
  <img src="{{ '/assets/images/blog/dat-how-decentralize-web_dat-url.svg' | absolute_url }}" alt="Dat URL example">
  <figcaption>This site Dat URL as an example.</figcaption>
</figure>

The [ed25519](https://ed25519.cr.yp.to/ "ed25519: High-speed high-security signatures") public key unique to this Dat. It’s used by the owner to create and update data within it. The public key allows you to discover other peers who have the data and is also verify that the data was not corrupted or tampered with as it passed through the network.

## Last-gen Web (Beaker browser)

That sounds great, but, what’s the promise about **decentralizing my website**. Here’s where [Beaker](https://beakerbrowser.com/ "A browser for the
next-generation Web") appears.

Beaker defines himself as an experimental browser to explore and build the peer-to-peer Web. It’ll allow you to create your own decentralized site and, obviously, to see the ones other users have created. Once the content has been uploaded, we can take a preview and, if everything goes well, share it with its link. For more info, you can take [their tour](https://beakerbrowser.com/docs/tour/ "Beaker browser tour").

## Hashbase

Once you’re happy with your site, **you probably want it up even if your computer is off**. To solve that problem, you could share your website with a lot of friends and make them *host* your site turning them *seeders* of your files.

Fortunately, there’s a more easy way: [Hashbase](https://hashbase.io "Hashbase"), public peer for files published with the Dat protocol. It’ll behave as a seeder of your files keeping them always online.

And that’s all. If you wanna visit the Dat version of this web, you can find it at [dat://raulsanmartin.me](dat://raulsanmartin.me '"datized" version of this web')
