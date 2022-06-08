---
layout: post
title:  "An introduction to queueing theory"
description: "The mathematical study of waiting in line."
last_modified_at: 2022-06-07 22:00 +0200
image: "/assets/images/blog/an-introduction-to-queueing-theory.webp"
categories: "Maths"
tags: [Maths, Queueing Theory]
---

We live surrounded by queues, we face them daily whether at the supermarket, driving on the way to work, or even consulting this post. If there is one thing that people especially dislike, it is waiting; there is nothing more frustrating for us than feeling our time slipping away while we wait in one.

## Origins of queueing theory

![Agner Krarup Erlang]({{ '/assets/images/blog/an-introduction-to-queueing-theory/erlang.webp' | absolute_url }}){: .align-left}

To model these systems and to be able to study and optimize them (to make our lives more pleasant, of course) the Danish mathematician **Agner Krarup Erlang** published in 1909 a first approach to queueing theory.

With the growth of the telephone network at the time, it became necessary to know the most optimal way to scale it. The increase in the number of calls and users made it necessary to know what size should be assigned to the telephone switchboards. A switchboard that was too large, allowing a large number of connections, might be wasted in an area with few calls (low traffic), and a small switchboard, not allowing many simultaneous connections, would always be saturated in an area with many calls (high traffic).

Nowadays, systems such as traffic in a city, how many pumps are needed at a gas station or simply the management of requests to a web server, are studied and optimized using the queuing theory base that Erlang initiated.

## Structure of queuing systems

The following distinct components can be found in any queuing system:

- Input source or the **population** of customers that may come to request the service.
- The **queues** where customers wait to be served. There can be different types depending on the desired order of entry and exit.
- The stations where customers are served or **servers**.

![Structure of a queuing system]({{ '/assets/images/blog/an-introduction-to-queueing-theory/queueing-system-diagram.webp' | absolute_url }}){: .align-center}

## Kendall's Notation

foo
