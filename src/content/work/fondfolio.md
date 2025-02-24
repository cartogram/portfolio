---
title: Fondfolio
type: Product
published: true
url: https://www.fondfolio.com
publishDate: 2015-01-01 00:00:00
description: |
  Handmade books designed to preserve memories by collecting thoughtful words and stories from loved ones.
roles:
  - Co-creator
  - Designer
  - Developer
collaborators:
  - name: Fiona McDougall
    url: https://www.fimcd.ca/
    role:
      - Co-creator
      - Designer
tags:
  - Current
color: rgb(25 89 11)
video: true
---

## Introduction

Fondfolio is a lifelong project that my partner, Fiona, and I started together. It began as a simple SurveyMonkey link with five questions about our friend Tyler and a spiral-bound book filled with the answers. We gave it to him for his 30th birthday at a bar surrounded by friends [^1]. The book itself was nothing fancy, but it brought tears of joy and was clear that we had tapped into something deeply meaningful.

[^1]: With huge help and support from his wife Christina.

Fondfolio takes this same idea and refines it, making it easier, more polished, and widely accessible as a digital and physical product. Our goal is to capture the unspoken words—the kind we often think but struggle finding the time to say—and create a space where friends, family, and colleagues can express the impact someone has had on their lives. Too often we don’t share these things until it’s too late.

Anyone can create a Fondfolio, whether for themselves or as a gift for one or two people, and invite loved ones to contribute. Fiona designs and laser-cuts the covers and slipcases, then hand-assembles each book using coptic binding, while I handle the digital side of the experience including the website and apps, backend and checkout.

We’re not trying to be more than what we are—a thoughtful, meaningful gift that helps people preserve memories and celebrate the ones who matter most. Our success is measured not by scale, but by the heartfelt responses we receive and the steady stream of [five-star reviews](https://thingtesting.com/brands/fondfolio/reviews) from those who have been lucky enough to give, receive or contribute to a Fondfolio.

## The tech stack

The first attempt to formalize Fondfolio as a digital product involved a simple Node.js server with a React and Redux frontend. This was around 2013 and I was still transitioning from a designer with wordpress and CSS chops to a developer with a strong understanding of JavaScript. With the first release of Next.js and Now in 2015, I was able to gain momentum and push through to the first proper iteration that we launched in 2015.

Fondfolio has been my playground for growth and experimentation as a developer. It has given me the space to learn, and forcing function to understand all the moving parts of complex applications. I've been fortunate to work within strong technical ecosystems in my day job, and there is a bi-directional influence between this job-work and my personal-work.

Specifically, I zeroed in on GraphQL very early on in 2015 and was a strong advocate for the technology. I've since moved away from it, but it was helpful to have a strong opinion on the technology early on at Shopify. Choosing React, Prisma/ PostgreSQL, and Next.js were a great combination, and we haven't deviated from it in the 10 years since. From a styling standpoint, I've abandoned styled-components in favor of straightforward CSS and only rely on dependencies where necessary in the user interface. My goal has been to keep things minimal, lightweight, scalable, and built for longevity. There is no final form to Fondfolio. It is an ever-growing, ever-evolving project.
