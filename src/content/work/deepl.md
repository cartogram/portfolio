---
title: DeepL
published: true
type: Design System
url: https://www.deepl.com
publishDate: 2024-10-01 00:00:00
description: |
  I work on a multi-lingual, multi-platform Design System for use on DeepL's website and products.
roles:
  - Full-Time Position
  - Developer
collaborators:
  - name: Mischa
    url: https://mischa.dev
    role:
      - Developer
tags:
  - Current
color: rgb(14 38 95)
---

## Introduction

When people talk about design systems, the focus often gravitates toward components, with common metaphors likening them to Lego bricks or atoms—discrete building blocks that combine to form structures such as atoms into molecules, and components into complex components and ultimately, entire applications.

While components are foundational, they do not, in themselves, define a Design System or make it successful. Many open source component libraries now exist and are of high-standard—with good documentation, wide adoption and well-maintained code. As a small Design System team at DeepL, we simply cannot devote the same level of attention and energy as these projects, nor would it be the best use of our time. Instead we are focused on the more complex and impactful challenges faced when connecting components into our cohesive product line with good processes, smart tools, and, most critically, by building relationships with the people and teams we support. It is my belief that the more focus we put at this layer, the more sustainable our Design System becomes over the long term.

To accomplish this we are resourceful in our approach with respect to automation and our goal of covering the largest area of influence with the fewest people. It is impossible for us to be everywhere at once, but we do our best to impose soft guardrails that steer our colleagues in the right design direction without intervening until necessary. This is not easy and along the way we encounter a number of novel challenges requiring creative solutions, but I'm proud of how far we've come from in this journey and excited about where we will go.

## Driving the growth of the Design System

I cut my teeth at DeepL by shipping high-visibility features in the translator, such as excel support in document translation, and the multi-level advanced preferences toolbar that auto-adapts based on screen width. While I am proud of these achievements, and it provided me with a lot of exposure to DeepL's codebase, my primary mission at DeepL has been to transform the existing design system—previously underutilized, inconsistent and full of bottlenecks—into a highly effective system with widespread adoption across the company.

To address this, I expanded the Design System beyond a set of React components and focused on foundational workflows that enhance the UI developer and designer experience at DeepL. Key initiatives included:

- **Custom linting plugins** for TypeScript and CSS to standardize and enforce design token usage, ensuring color consistency across products and preventing the use of unsupported colors.
- **Multi-directional layout support** introducing logical CSS for Right-To-Left layout support and a centrally managed, accessible icon library for designers (via Figma) and developers (via NPM).
- **Scalable UI strategy** including support for dark themes, centralized token definitions, and a structured naming syntax.
- **Independent design repository** distributing versioned Design System packages (@deepl/theme, @deepl/icons) across codebases.
- **Prototyping workflows** allowing rapid testing of ideas in an isolated DeepL-like environment to improve validation speed of new ideas.

These initiatives are transforming the Design System into a reliable, platform-agnostic, and scalable solution supporting more teams and platforms at DeepL.

## Deprecating components and improving long-term maintainability

The DeepL codebase and Design System accumulated deprecated components, aka dead code, and hundreds of ESLint violations, creating technical debt and a great deal of developer friction. I implemented scripts to audit the codebase for deprecated components, developed command-line tools to identify and remove unused or outdated components, and clean-up the repository, systematically removing unnecessary dependencies to improve CI speed and user performance. This also included:

- **Building MCPs and AI integrations** providing agentic support to Cursor and allowing us to rely more heavily on the built-in IDE features.
- **Codemods** to run across multiple files and performing idempotent modifications to bring component code up to the latest versions.
- **Straight-up grit and manual work** because sometimes you just need to get a bunch of developers together and bash away dead code, trying our best to make it fun and meme-ingful.

This initiative resulted not only in a leaner codebase, but it empowered teams to maintain higher standards and resulted in a healthier engineering culture at DeepL.

## Spearheading community as a tool to raise the bar for quality

The absence of a unified UI approach with no central forum for discussing best practices, accessibility or direction, led to inconsistencies across DeepL products.

By creating cross-functional collaboration in the form of a UI Guild, I've been able to:

- **Establish comprehensive guidelines** for re-usable patterns, accessibility, naming conventions, TypeScript best practices, and so-on.
- **Encourage shared learning** by launching a "DeepL Cinema Club" for weekly conference talks on UI development.
- **Have fun** while contributing to the overall sense of ownership in the craft we practice day after day after day.

This initiative is expected to have a long term payoff and ultimately improve DeepL’s user experiences.
