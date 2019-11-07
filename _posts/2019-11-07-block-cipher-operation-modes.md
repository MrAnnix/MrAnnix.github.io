---
layout: post
title:  "Block ciphers and modes of operation"
description: "A look at the modes of operation of block encryption algorithms and their resilience to errors."
last_modified_at: 2019-11-07 19:34 +0200
image: "/assets/images/blog/block-cipher-operation-modes.jpg"
categories: Cryptography
tags: [Cryptography, Block ciphers, Security, Modes of operation, DES, AES]
mathjax: true
---

Since ancient times, man has been concerned that only the recipient of the message, and not an evil third party, can know the information it contains. From the ancient Hebrews who developed Atbash encryption, a primitive monoalphabetic substitution cipher, Spartans who used transposition cipher of the scytale, or even the Romans with the famous Caesar cipher; to current encryption much more complex and secure.

Precisely we will talk today about a set of these modern algorithms.

## Block ciphers

We can classify all current cryptography into three large families based on the characteristics of their key. Symmetric encryption, where the key used to encrypt and decrypt is the same. Asymmetric, in which the key to encrypt is different from the one to decrypt (there are a pair of keys). And cryptography without a key, which forms the basis of the digital signature.

Today’s topic focuses on a range of algorithms belonging to the first family, symmetric encryption, called block ciphers.

> Divide et impera

One way to encrypt information is to divide the problem into several parts. This is what block encryption algorithms do; they divide information into blocks of a set length and perform their magic on them. As the size of the information to be encrypted is not always a multiple of the block size, padding is added at the end of the message. In case it was a multiple of the block size, padding is added too. In this way, by deciphering and eliminating the padding, the original message is recovered.

However, proceeding block by block (ECB mode) is not always the best idea. When the blocks are equal, the result of the cipher will also be the same for all of them, that is a big problem in [very redundant messages](https://blog.filippo.io/the-ecb-penguin/ "The ECB penguin") (for example a photo with many equal pixels). Let’s see it with the blog’s favicon.

<figure class="align-center">
  <img src="{{ '/assets/images/blog/block-cipher-operation-modes/comparison.jpg' | absolute_url }}" alt="Comparison between modes">
  <figcaption>The reason why proceed block by block is not always the best idea. As seen, encrypt using CBC mode results in pseudo-randomness</figcaption>
</figure>

For this reason the modes of operations appears.

### ECB mode of operation

Electronic Code Book (ECB) is the simplest one. In fact, we have already explained it. Each message's block is encrypted separately and that provokes the problem above mentioned.

If \\( E(\cdot) \\) is the cipher function for encrypt, \\( D(\cdot) \\) is the cipher function for decrypt, \\( \textbf{P_i} \\) and \\( \textbf{C_i} \\) are the i-th block of the plaintext and ciphertext respectively, and \\( \textbf{k} \\) is the key.

Then: \\( \textbf{C_i} = E(\textbf{P_i}, \textbf{k}) \\) and \\( \textbf{P_i} = D(\textbf{C_i}, \textbf{k}) \\).

In an easy and visual way:

![Electronic Code Book (ECB) mode encrption]({{ '/assets/images/blog/block-cipher-operation-modes/ECB_encryption.svg' | absolute_url }}){: .align-center}
![Electronic Code Book (ECB) mode decrption]({{ '/assets/images/blog/block-cipher-operation-modes/ECB_decryption.svg' | absolute_url }}){: .align-center}

If an error occurs during the transmission of the ciphertext, the message will only be altered in a block.

### CBC mode of operation

From here things get interesting, now we want the ciphertext to seem as random as possible.

In the cipher block chaining (CBC) mode of operation, an initialization vector \\( \textbf{IV} \\) is used. That vector will be x-ored with the plaintext, the result is encripted generating the ciphertext corresponding to that block and also used as *initialization vector* for the next block. Basically is encrypting the plaintext with a pseudo one-time pad and later encrypt it with the proper function offering a great security.

\\( \textbf{C_0} = E(\textbf{P_0} \oplus \textbf{IV}, \textbf{k}) \\); \\( C_{i} = E(\textbf{P_i} \oplus \textbf{P_{i-1}}, \textbf{k}) \\)

and \\( \textbf{P_i} = D(\textbf{C_i}, \textbf{k}) \\).
