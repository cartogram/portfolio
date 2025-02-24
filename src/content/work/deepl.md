---
title: DeepL
published: true
type: Design System
url: https://www.deepl.com
publishDate: 2024-10-01 00:00:00
description: |
  I work on a multi-lingual, multi-platform design system for use on DeepL's website and products.
roles:
  - Full-Time Position
  - Developer
collaborators:
  - name: Mischa
    url: https://mischa.dev
    role:
      - Developer
  - name: Dominik Markušić Gross
    url: https://www.linkedin.com/in/dominik-markusic-gross/
    role:
      - Designer
tags:
  - Current
color: rgb(14 38 95)
---

## Introduction

When people talk about design systems, they often center the conversation around components. The two most common analogies are Lego bricks and atoms: small pieces that fuse together like bricks into structures, atoms into molecules, components into larger components, and eventually entire applications.

However, I think of this part of design systems as a somewhat solved problem—there are libraries that exist for this, and they are well-documented and widely used and built with high quality. The more interesting challenges lie between the bricks and atoms, in the mortar and chemistry that binds everything together, the processes, tools and community that keep the design system alive and growing.

At this layer we can also be resourceful and relentless in our approach to force multiply our work. At DeepL this is important because we are a small team with a wide surface area of influence. I'm going to focus on a few of the novel challenges we tackled and our journey to get from a dumping ground of React components to a design system that is well-documented, easy to use, and a joy to work with.

## Bi-directional Layout

Arabic is the fifth most spoken language, one of six official UN languages and the first right-to-left language to appear on DeepL's translation platform. Supporting Arabic meant that we had to transform our company-wide design system for bi-directional layouts using logical CSS - where physical values such as “left” and “right” are replaced with the logical counterparts “start” and “end”.
