---
name: Khan Trần Portfolio
description: An editorial portfolio for a product designer and developer.
colors:
  paper: "#fefefe"
  ink: "#111111"
  muted-ink: "#656565"
  rule: "#d7d7d4"
  work-field: "#f1f2f2"
  image-field: "#fafaf9"
  portrait-field: "#efefed"
  inverse-field: "#171717"
  inverse-ink: "#f6f6f4"
  inverse-muted: "#bebebb"
  contact-field: "#e7e5df"
  night-paper: "#101010"
  night-ink: "#f4f4f1"
  night-muted-ink: "#aaa9a5"
  night-rule: "#424240"
  night-work-field: "#1b1b1a"
  night-image-field: "#242423"
  night-portrait-field: "#353534"
  night-inverse-field: "#e9e8e3"
  night-inverse-ink: "#111111"
  night-inverse-muted: "#4e4e4b"
  night-contact-field: "#222221"
typography:
  display:
    fontFamily: "Space Grotesk Variable, Arial, sans-serif"
    fontSize: "clamp(105px, 16.5vw, 255px)"
    fontWeight: 700
    lineHeight: 0.79
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Space Grotesk Variable, Arial, sans-serif"
    fontSize: "clamp(44px, 5.4vw, 92px)"
    fontWeight: 600
    lineHeight: 0.93
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Space Grotesk Variable, Arial, sans-serif"
    fontSize: "clamp(30px, 3vw, 52px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Space Grotesk Variable, Arial, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "Space Grotesk Variable, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.13em"
rounded:
  pill: "999px"
spacing:
  page-gutter: "clamp(24px, 3.6vw, 60px)"
  page-gutter-mobile: "22px"
  project-column-gap: "20px"
  chip-gap: "10px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    height: "44px"
  project-tile:
    backgroundColor: "{colors.image-field}"
  skill-chip:
    textColor: "{colors.inverse-ink}"
    rounded: "{rounded.pill}"
    padding: "9px 14px"
  theme-switch:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    width: "60px"
    height: "29px"
---

# Design System: Khan Trần Portfolio

## Overview

**Creative North Star: "The Editorial Index"**

An almost monochrome editorial canvas makes Khan Trần's identity immediate and lets actual project imagery carry the color. The system is bold in scale and restrained in ornament: closely tracked geometric display type, fine rules, broad fields, and generous section spacing. It serves a bilingual portfolio for employers and clients, with the approved third 3D character image as the portrait.

The homepage gives the name and portrait a dramatic introduction; case pages reuse the same scale, fields, rules, and image-led rhythm. Light and dark modes exchange semantic surface and ink roles while preserving hierarchy. Motion is quiet: a small image zoom, short link responses, and scroll reveals that yield to reduced-motion preferences.

**Key Characteristics:**

- Oversized, tightly spaced sans-serif typography, including the solid/outlined name treatment.
- Near-white paper, near-black ink, cool-gray work field, inverse About field, and warm-neutral Contact field.
- Real project images in large, flat, edge-to-edge tiles; thin rules organize metadata and navigation.
- Pill actions and outlined skill chips are the few rounded shapes.

## Colors

The palette is neutral by design; project art provides local color. The frontmatter is the normative value source. Semantic roles below map to CSS custom properties in `src/app/globals.css` and switch under `html[data-theme="dark"]`.

### Primary

- **Editorial Ink** (`ink` / `night-ink`): Main type, solid actions, and outlined display lettering; its contrast with the base field establishes the hierarchy.

### Neutral

- **Paper** (`paper` / `night-paper`): Page and header canvas.
- **Quiet Ink** (`muted-ink` / `night-muted-ink`): Secondary descriptions, labels, and supporting links.
- **Hairline** (`rule` / `night-rule`): One-pixel separators in the header, status strip, cards, facts, gallery captions, and footer.
- **Work Gray** (`work-field` / `night-work-field`): Selected-work and gallery section field.
- **Image Mat** (`image-field` / `night-image-field`): Neutral backing behind project imagery.
- **Portrait Mat** (`portrait-field` / `night-portrait-field`): Support field behind the 3D portrait in dark mode.
- **Inverse Field** (`inverse-field` / `night-inverse-field`), **Inverse Ink** (`inverse-ink` / `night-inverse-ink`), and **Inverse Quiet Ink** (`inverse-muted` / `night-inverse-muted`): About and next-project panels.
- **Contact Warmth** (`contact-field` / `night-contact-field`): Contact section's distinct closing field.

**The Image Color Rule.** Keep the interface fields neutral so the existing project images supply the strongest color on a work page.

## Typography

**Display and Body Font:** Space Grotesk Variable, with Arial and generic sans-serif fallbacks. The imported variable face is used sitewide.

**Character:** Wide geometric shapes, heavy display weight, tight tracking, and compact leading create the editorial signature. Smaller copy stays plain and readable; uppercase metadata uses measured letter spacing.

### Hierarchy

- **Display** (700, `clamp(105px, 16.5vw, 255px)`, 0.79 line height, `-0.045em` tracking): The home identity, with the second line rendered as a 2px stroke and transparent fill. The mobile size changes at the 700px breakpoint.
- **Headline** (600, `clamp(44px, 5.4vw, 92px)`, 0.93 line height, `-0.045em` tracking): The selected-work section. About, Contact, and case headings use similarly compact custom scales.
- **Title** (500, `clamp(30px, 3vw, 52px)`, 1.02 line height, `-0.045em` tracking): Project names beneath image tiles. Featured covers use a heavier 600 weight.
- **Body** (400; no single global size): Supporting sentences vary by context, from small project summaries (15px) to the responsive hero introduction (`clamp(16px, 1.45vw, 23px)`) and larger case summaries.
- **Label** (600, 11px, `0.13em` tracking, uppercase): Project metadata. Header navigation is 14px sentence case; About subheads and case facts use related spaced uppercase labels.

**The Two-Scale Rule.** Give identity and section titles dramatic size; keep metadata small, spaced, and visually subordinate.

## Layout

The site uses full-width horizontal fields and a fluid page gutter (`clamp(24px, 3.6vw, 60px)`, then 22px at 700px and below). The header is a three-column grid on desktop. The home hero places type on the left and the portrait on the right; the portrait becomes a block below the introduction on phones.

Work uses two equal columns with a 20px column gap; the fifth project spans both columns. At 700px, all projects stack in one column. About, Contact, and case-body sections use asymmetric two-column grids on wide screens and a single column on phones. Navigation becomes a toggle menu below 1050px. Vertical spacing grows with viewport width, especially between major sections.

**The Hierarchy-First Reflow Rule.** On narrow screens, retain the order of name, role, introduction, action, portrait, and work; allow overlap only where the available width supports it.

## Elevation & Depth

The layout is flat by default. Section color changes, white space, thin rules, and image crops provide depth without card shadows. The portrait alone carries a soft drop shadow (`0 10px 22px rgb(0 0 0 / .08)`) to separate the 3D figure from its field. Project imagery zooms slightly on hover (`scale(1.035)` over 0.55s), without lifting its tile.

**The Flat Field Rule.** Use tonal fields and rules for hierarchy; reserve soft shadow for the floating portrait.

## Shapes

Most containers and image tiles are square-cornered, with clipped imagery and thin rule borders. Pills (`999px` radius) distinguish the main action, theme control, and skill chips. The solid/outlined name is a typographic shape, not a reusable border treatment for ordinary text.

## Components

### Primary action

A black-on-paper pill with 15px semibold text, minimum height 44px, 10px by 24px padding, and a northeast arrow. It shifts upward 2px and reduces opacity on hover. In dark mode, semantic ink and paper reverse. Keyboard focus uses the global 3px blue visible outline with 4px offset.

### Navigation and preferences

The header places the wordmark at left, page links centrally, and language/theme controls at right. Links soften to 55% opacity on hover. The active language gains ink color and 700 weight. The bordered theme pill has a sliding ink thumb. Below 1050px, a menu button reveals the vertical navigation panel.

### Project tiles

Large images sit in a flat 1.43 aspect-ratio frame. The first two tiles have white editorial cover panels over their left side; later tiles put metadata, title, and summary beneath the image. The tile image scales to 1.035 on hover, and the metadata arrow moves up and right by 3px. The fifth tile forms a wide final row on desktop.

### Skill chips

Outlined, transparent pills use 14px text and 9px by 14px padding. They wrap with 10px gaps within the inverse About field.

### Case-page details

Project pages use an oversized title, a broad preview image, a two-column overview/facts section, and a gallery on the work field. One-pixel facts dividers and uppercase gallery captions continue the index language. The next-project link becomes a full-width inverse field.

Animations reveal content with short upward movement. Hover and focus remain visible without motion; reduced-motion preference disables animated scrolling and shortens transitions and animations.

## Do's and Don'ts

### Do:

- **Do** make type hierarchy and real project imagery the primary visual content.
- **Do** use semantic surface/ink pairs so light and dark appearances preserve the same structure.
- **Do** keep narrow layouts in reading order with the portrait below the introduction and work tiles stacked.
- **Do** keep visible keyboard focus and honor reduced-motion preference.

### Don't:

- **Don't** add ambient shadows to ordinary tiles or sections; the observed system is flat apart from the portrait.
- **Don't** put rounded corners on project images or section containers; rounded shapes mark controls and chips.
- **Don't** use the outlined display treatment for paragraph text or project metadata.
