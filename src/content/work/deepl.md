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

When people talk about design systems, they often center the conversation around components where two most common analogies are Lego bricks and atoms: small pieces that fuse together like bricks into structures, atoms into molecules, components into larger components, and eventually entire applications.

Components alone don’t define a design system—relationships do. Understanding these relationships helps teams identify design inconsistencies, improve usability, and scale systems effectively.

However, I think of this part of design systems as a somewhat solved problem—there are libraries that exist for this, and they are well-documented and widely used and built with high quality. The more interesting challenges lie between the bricks and atoms, in the mortar and chemistry that binds everything together, the processes, tools and community that keep the design system alive and growing.

At this layer we can also be resourceful in our approach to force multiply our work with automation and guardrails. At DeepL this is important because we are a small team with a wide surface area of influence, and it is impossible for us to be everywhere at once.

Along the way, we encountered a number of novel challenges and I'm proud of how far we've come from in this journey.

## Driving the growth of the Design System

I cut my teeth at DeepL by shipping high-visibility features in the translator, such as excel support in the doc trans UI, and the multi-level advanced preferences toolbar that auto-adapts based on screen width. While I am proud of these achievements, and it provided me with a lot of exposure to the companies UI and engineering bottlenecks, my primary mission at DeepL has been to transform the existing design system—previously underutilized and inconsistent—into a highly effective system with widespread adoption.

To address this, I expanded the Design System beyond a set of poorly maintained React components and focused on foundational tools, processes, and workflows that enhance the UI developer and designer experience at DeepL. Key initiatives included:

- **Custom linting plugins** for TypeScript and CSS to standardize and enforce design token usage, ensuring color consistency across products and preventing the use of unsupported colors.
- **Multi-directional layout support**, introducing logical CSS for Right-To-Left support and a centrally managed, accessible icon library for designers (via Figma) and developers (via NPM).
- **Scalable UI consistency strategy**, including support for dark themes, centralized token definitions, and a structured naming syntax.
- **Independent design repository**, distributing versioned design system packages (@deepl/theme, @deepl/icons) across codebases.
- **Prototyping workflows**, allowing rapid testing of ideas in an isolated DeepL-like environment to improve validation speed.

These initiatives are transforming the design system into a reliable, platform-agnostic, and scalable solution supporting more teams and platforms at DeepL.

## Deprecating components and improving long-term maintainability

The frontend monorepo and design system accumulated deprecated components, dead code, and hundreds of ESLint violations, creating technical debt and increasing developer friction. We've had to audit the codebase for deprecated components, develop command-line tools to identify and remove unused or outdated components, and clean up the repository, systematically removing unnecessary dependencies to improve CI speed and user performance.

This initiative resulted in a cleaner, more maintainable, and high-quality codebase. Improved developer efficiency has empowered teams to maintain higher standards while shipping features quickly, fostering a healthier engineering culture at DeepL.

## Spearheading community as a tool to raise the bar for quality

The absence of a unified UI approach led to inconsistencies across DeepL products. There was no central forum for discussing best practices, accessibility, or UI consistency.

By facilitating cross-functional collaboration, we've been able to establish comprehensive UI guidelines, covering patterns, accessibility, naming conventions, and TypeScript best practices. I've also been able to encourage shared learning, launching "DeepL Cinema Club"—a weekly session to watch conference talks on UI development.

The UI Guild is fostering a culture of continuous improvement and shared accountability for UI quality. This initiative is expected to enhance UI consistency, team alignment, and ultimately improve DeepL’s user experiences.
