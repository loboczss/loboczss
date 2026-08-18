---
name: Loboczss
description: A full-bleed shader portal in the Void palette — one living WebGL field, hairline frames, huge light grotesk, and a single incandescent reserved for action.
colors:
  void: "#0B0620"
  abyss: "#140C33"
  echo: "#2A2152"
  glimmer: "#5B4D9A"
  mist: "#8E86B7"
  incandescent: "#FF6A88"
  incandescent-deep: "#D8456B"
  display-white: "#FFFFFF"
  text: "#8E86B7"
  text-quiet: "rgb(142 134 183 / 0.85)"
  frame: "rgb(142 134 183 / 0.28)"
  frame-strong: "rgb(142 134 183 / 0.50)"
  frame-control: "rgb(142 134 183 / 0.68)"
  syntax-key: "#C9BFFF"
  syntax-num: "#B9B0E6"
typography:
  hero:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 13vw, 11.5rem)"
    fontWeight: 200
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112"
  page:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5.5rem)"
    fontWeight: 200
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 110"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.75rem)"
    fontWeight: 200
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 200
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 105"
  body-lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.625
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  read:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  code-val:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.3em"
  meta:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.3em"
  caps:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.3em"
  micro:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.5625rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.3em"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
rounded:
  none: "0"
  pill: "999px"
spacing:
  tight: "0.75rem"
  group: "1.5rem"
  stack: "2rem"
  block: "3.5rem"
  section: "6rem"
  section-wide: "8rem"
  gutter: "1.5rem"
  gutter-wide: "2.5rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.display-white}"
    typography: "{typography.caps}"
    rounded: "{rounded.none}"
    padding: "1.15rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.incandescent}"
    textColor: "{colors.display-white}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.mist}"
    typography: "{typography.caps}"
    rounded: "{rounded.none}"
    padding: "1.15rem 1.6rem"
  button-secondary-hover:
    textColor: "{colors.incandescent}"
  field:
    backgroundColor: "rgb(11 6 32 / 0.55)"
    textColor: "{colors.mist}"
    rounded: "{rounded.none}"
    padding: "1.05rem 1.25rem"
  field-focus:
    backgroundColor: "rgb(20 12 51 / 0.75)"
    textColor: "{colors.mist}"
  card:
    backgroundColor: "rgb(11 6 32 / 0.42)"
    textColor: "{colors.mist}"
    rounded: "{rounded.none}"
    padding: "1.75rem"
  card-hover:
    textColor: "{colors.incandescent}"
  contact-cell:
    backgroundColor: "rgb(11 6 32 / 0.6)"
    textColor: "{colors.mist}"
    rounded: "{rounded.none}"
    padding: "1.1rem 1.4rem"
  contact-cell-hover:
    backgroundColor: "rgb(42 33 82 / 0.5)"
    textColor: "{colors.display-white}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.mist}"
    typography: "{typography.caps}"
    rounded: "{rounded.none}"
---

# Design System: Loboczss

## Overview

**Creative North Star: "The Portal"**

The page is not a description of live systems; it is one. A single fullscreen WebGL fragment shader is the site's ground — fixed behind every route, warping and drifting on the visitor's own GPU — and everything else is hairline geometry laid over it. There is no card grid on flat dark, and there is no cream-editorial-with-a-serif retreat either. There is a field, a reading scrim that keeps type winning the contrast fight against it, and 1px frames that describe structure without ever filling it in.

The register is quiet and enormous at the same time. Type is one variable grotesk worked across its width axis: display set huge and at weight 200, every label uppercase and tracked to 0.3em so small text reads as instrumentation rather than as shrunken prose. Surfaces are never opaque panels — they are translucent washes of the void with the field still visible underneath. Colour is almost entirely restraint: five cool violets do all the structural work, and exactly one warm colour exists in the whole system, spent only where the visitor can act or where the machine is genuinely live.

Depth is not simulated. This world ships zero shadows. What separates a surface from the ground is the shader behind it, the scrim over it, and a single hairline at its edge — nothing else. The materials are three and they are named: fine film grain over the field, a slow diagonal sheen that crosses a frame on hover, and an authored vector mesh that stands in for every image the site does not have.

**Key Characteristics:**
- One living shader field as the site's permanent ground, not a hero decoration
- Two text colours and no more; everything else in the palette is a stroke
- Uppercase 0.3em labels on four fixed micro-steps
- Display at weight 200 across a 100–112 width range
- 1px frames, square corners, zero shadows, zero radii
- Incandescent reserved for action and live state
- One authored entrance, on the hero only

## Colors

A cool violet ground stepped from near-black to a readable haze, with one warm coral held in reserve for the only two things that earn it: what the visitor can act on, and what the machine is genuinely doing right now.

### Primary

- **Incandescent** (`#FF6A88`): The single warm colour in the system. It marks the primary control's frame, the focus ring, the live-state dot, the required-field asterisk, error text, the wolf's eyes, the lit ridge on a hot mesh, and the crests of the shader field. Nothing decorative gets it.
- **Incandescent Deep** (`#D8456B`): The error boundary on an input frame. Its only job is to read as incandescent's alarmed sibling without competing with a focused field beside it.

### Neutral

- **Void** (`#0B0620`): The ground. Painted on `html` as the fallback under the shader canvas, and the base of every translucent surface wash in the system. Body is deliberately transparent so the field shows through.
- **Abyss** (`#140C33`): The deeper field tone. Reaches the interface as the fill a text input takes when focused, and as the far end of the no-WebGL painted ground.
- **Echo** (`#2A2152`): A stroke and mark colour only — the scrollbar thumb, and the wash a contact-strip cell takes on hover. At 1.35:1 against the void it can never carry a word.
- **Glimmer** (`#5B4D9A`): The mesh colour. Every authored wireframe terrain is drawn in it, and the scrollbar thumb lifts to it on hover. At 2.68:1 it is a stroke, never text.
- **Mist** (`#8E86B7`): The voice of the system. Every paragraph, every tracked label, every nav link, every value in the contact strip. Measured 5.88:1 against the void.
- **Display White** (`#FFFFFF`): Reserved for display-scale headings, card names, and the label of a primary button once it has filled. It is a hierarchy signal, not a general text colour.

### Text roles

- **`--text`** — Mist at full opacity. Measured **5.88:1** against the void ground. The default for body and for labels.
- **`--text-quiet`** — Mist at 85%. Measured **4.51–4.52:1**. Used for footer column heads, page meta, the paused-state readout, code comments and line numbers.

### Frame roles

- **`--frame`** (`rgb(142 134 183 / 0.28)`): Decorative. Section rules, dividers, card edges, mesh underlines. Carries no contrast requirement because it never bounds an interactive target.
- **`--frame-strong`** (`rgb(142 134 183 / 0.50)`): The heavier decorative hairline.
- **`--frame-control`** (`rgb(142 134 183 / 0.68)`): Measured **3.30:1**. The only boundary a button or an input has, and the reason it is a separate token from `--frame`.

### Named Rules

**The Two Text Colours Rule.** Only two values in this system are allowed to carry words: `--text` (Mist, 5.88:1) and `--text-quiet` (Mist/85, 4.51:1). Glimmer (2.68:1) and Echo (1.35:1) are rules, marks and non-informational strokes — never text, never placeholders, never line numbers, never a "de-emphasised" label. There is no third tier.

**The Recession Floor Rule.** `--text-quiet` is a floor, not a step on a ramp. It sits at 4.51:1 with essentially no headroom over 4.5:1, so nothing may be quieter than it. If something needs to recede further than Mist/85, change its size, its position, or its presence — never its opacity.

**The Reserved Incandescent Rule.** Incandescent marks two things and only two: what the visitor can act on, and what the machine is genuinely doing live. It is not a syntax-highlighting colour, not a numeric-literal colour, not an accent for headings, not a hover flourish on decorative type. Its scarcity is the entire reason it works.

**The Control Boundary Rule.** Anything a person can click, tap, or type into is bounded by `--frame-control` or by Incandescent. `--frame` is not a control boundary and must never be used as one.

## Typography

**Display Font:** Archivo Variable (with `system-ui`, `sans-serif`)
**Body Font:** Archivo Variable — the same face, the same file
**Mono Font:** `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` — for actual source code and nothing else

**Character:** One variable grotesk doing every job, distinguished by width and weight rather than by pairing. Display sits at weight 200 and is widened along the `wdth` axis (100 → 112 as scale increases) so the biggest type reads open and light instead of heavy. Small type goes the other way entirely: uppercase, tracked to 0.3em, on four fixed micro-steps, so labels read as instrumentation on a live panel. The face is loaded across `wdth 62..125, wght 100..900`; the system as built exercises 100–112 on width and 200–400 on weight.

### Hierarchy

- **Hero** (200, `clamp(3.25rem, 13vw, 11.5rem)`, 0.92, `-0.03em`, `wdth 112`, uppercase): The name, once, on the home page. Nothing else takes this step.
- **Page** (200, `clamp(2.5rem, 7vw, 5.5rem)`, 0.98, `-0.025em`, `wdth 110`, uppercase, max 16ch): The `h1` of every inner page.
- **Headline** (200, `clamp(2rem, 5vw, 3.75rem)`, 1.02, `-0.02em`, `wdth 108`, uppercase, max 18ch): Every section `h2`.
- **Title** (200, `clamp(1.5rem, 3vw, 2.25rem)`, 1.1, `-0.01em`, `wdth 105`, uppercase): Row headings inside a section — a trade, a process step.
- **Body Lead** (300, `1.125rem`–`1.25rem`, 1.625): The lead paragraph under a hero or a page head. Light weight, generous leading, held to `max-w-2xl`.
- **Body** (400, `0.875rem`–`1rem`, 1.625): Descriptive prose in cards and rows.
- **Label** (400, `0.75rem`, `0.3em`, uppercase): The largest tracked step — the wordmark in the header.
- **Meta** (400, `0.6875rem`, `0.3em`, uppercase): Field help and field errors.
- **Caps** (400, `0.625rem`, `0.3em`, uppercase): The working label step — button text, nav links, card labels, locale switches, field labels.
- **Micro** (400, `0.5625rem`, `0.3em`, uppercase): Footer column heads, page meta, card index numbers, uniform names in the source panel.
- **Mono** (400, `0.75rem`, 1.75): The shader source panel only.

### Named Rules

**The Uppercase Label Rule.** Every label in the system is uppercase and tracked to exactly `0.3em`, on one of four steps (micro / caps / meta / label). There is no lowercase small text and no intermediate tracking. Reach for a different step, never a different tracking.

**The Light Display Rule.** Display-scale type is weight 200 and widened, never bolded. Emphasis at display scale comes from size and from the width axis, not from weight.

**The Content-Not-Kicker Rule.** Supporting text sits *below* the heading it supports, as content. Nothing is ever placed above a heading as a small tracked eyebrow — `PortalSection` and `PageHeader` both carry their section label as an `aria-label` for the accessible name and render no kicker at all. On the hero the trades read below the name for exactly this reason.

**The Monospace-Is-Code Rule.** Monospace appears only where the content is literally source code. It is not a costume for "technical".

**The Tabular Figures Rule.** Any number read as a quantity — a phone number, an FPS readout, a card index, a uniform value, the loader count — carries `.tnum` (`font-variant-numeric: tabular-nums`).

## Layout

The page is a single centred column of `84rem` (`max-w-portal`) with a gutter of `1.5rem` on phones and `2.5rem` from `md` up. Everything obeys it: header, hero, every section, the footer.

Vertical rhythm is coarse and consistent. Sections run `6rem` of vertical padding on phones and `8rem` from `md`, and each one opens with a full-width `1px` top rule in `--frame` — the rule, not a background change, is what separates one section from the next. Inside a section the stack is `3.5rem` between the header block and its content, `2rem` between grouped elements, and `1.5rem` or less inside a single component. The hero is the deliberate exception: it fills `100svh` and is bottom-aligned, so the name, the lead, the primary control and the contact strip all land at the foot of the first viewport where a thumb can reach them.

Content grids stay deliberately few. Cards run three-up from `md` (`md:grid-cols-3`), and the services list uses an 11-column split from `md` — 5 columns for the name, 4 for the description, 2 for its mesh — so the row reads as a ledger line rather than as a box. Below `md` every grid collapses to a single column, without exception.

Breakpoints in play: `640px` (the contact strip's vertical rules turn horizontal), `768px` (gutters widen, grids open, and the shader's DPR cap lifts from 1 to 1.5), `900px` (the source panel gains its uniform column), `1024px` (the desktop nav replaces the burger and the mobile overlay is force-closed).

Reading measure is enforced: leads at `max-w-2xl`, section leads at `max-w-md`, display heads at `16ch`–`18ch`.

### Named Rules

**The One Ground Rule.** The shader field is `fixed inset-0` at `z-0` in the layout, behind every route. Content sits at `z-10` above it. No page paints its own opaque background over the full viewport; a section that needs to sit quieter uses `bg-void/80` with a backdrop blur, so the field is dimmed rather than deleted.

**The Hairline Spine Rule.** Sections are separated by a `1px` `--frame` rule, never by a change of background colour alone.

## Elevation & Depth

**This system has no shadows.** There is not one `box-shadow` in the entire build, and adding one would be a regression rather than an enhancement. Depth here is real and optical, produced by three stacked devices:

1. **The shader field** — a domain-warped fbm running behind everything, which supplies genuine parallax against static content.
2. **The reading scrim** — two stacked linear gradients painted over the field inside `ShaderField`, dark and near-opaque at the top-left where type begins and clearing toward the far corner. This is the one legitimate shadow-like device in the system, and its job is contrast, not lift.
3. **The 1px frame** — a surface is separated from the ground by its edge, not by a cast shadow.

Surfaces are layered by *translucency*, not by elevation. The ladder, as built: card `void/0.42`, input at rest `void/0.55`, contact strip `void/0.60`, source panel `void/0.72`, input focused `abyss/0.75`, solid section `void/0.80` + `backdrop-blur-sm`, scrolled header `void/0.85` + `backdrop-blur-xl`, mobile menu `void/0.95` + `backdrop-blur-2xl`. Higher opacity means "further in front of the field", and the backdrop blur is what carries the sense of glass.

### Named Rules

**The No-Shadow Rule.** Zero `box-shadow`, zero `drop-shadow`, zero `text-shadow`. If a surface needs to separate from what is behind it, raise its translucency, add a backdrop blur, or give it a hairline — in that order.

**The Scrim-Not-Shadow Rule.** The reading scrim is the only shadow-like device in the system, it lives inside `ShaderField`, and it exists so that type always wins the contrast fight against a moving ground. It is never reused as a decorative gradient on a component.

## Shapes

Everything is square. Corner radius is `0` on every content surface in the build — buttons, inputs, cards, the contact strip, the source panel, the mobile overlay, the section rules. The only rounded geometry in the system is genuinely circular and non-rectangular: the scrollbar thumb, the 6px live-state dot, the loader ring, and the portal ring around the wolf mark.

The form language is line, not mass. A component is a `1px` frame plus a translucent wash; it is never a filled block. Iconography is authored SVG stroke work at `stroke-width` 1.4 with round caps and joins — a forward arrow, an external arrow, a back arrow, a scroll hint, and a burger of three `1px` rules. There is no icon font and no glyph set.

The signature silhouette is the mesh: a seeded, deterministic wireframe terrain in Glimmer, drawn in perspective, standing in wherever a photograph would otherwise go. The wolf mark is the same idea at logo scale — one closed angular path that survives at favicon size, with an internal mesh of two node weights and angular incandescent eye-slits.

### Named Rules

**The Square Corner Rule.** Radius is `0` on anything rectangular. `999px` exists only for shapes that are actually circles.

**The Frame-Not-Fill Rule.** A component is defined by a `1px` frame. Fills, where they exist, are translucent washes of the Void or the Abyss — never a flat opaque panel, and never a colour block.

**The Authored-Mesh Rule.** Where an image would go, a seeded SVG mesh goes instead. The same seed always draws the same mesh, so the server and the client agree and hydration stays quiet.

## Components

Everything is built from the same three moves: a hairline, a tracked uppercase label, and an arrow that already exists at rest.

### Buttons

- **Shape:** Square (`0` radius), `1px` frame, `1.15rem 1.6rem` padding, label and arrow pushed to opposite ends with `justify-between`.
- **Primary:** Incandescent frame and white label **at rest**, with the arrow already incandescent. Hover and focus fill the button with Incandescent and turn the arrow white. Hover adds no information that was not already there.
- **Secondary:** `--frame-control` boundary, Mist label. Hover and focus lift both the frame and the label to Incandescent.
- **Shared behaviour:** The arrow translates `3px` forward on hover and focus over `420ms`. Both variants carry the `sheen` material. Disabled and loading drop to `0.4` opacity and remove pointer events.
- **Arrow semantics:** `forward` (→) for movement inside the site, `external` (↗) for leaving it, `none` where the control is not directional.

### Inputs / Fields

- **Style:** No radius, `1px` `--frame-control` boundary, `void/0.55` wash, `0.9375rem` text at 1.6 leading, `1.05rem 1.25rem` padding, vertical-only resize on the multiline variant.
- **Label:** Caps step above the field, Mist, with an Incandescent asterisk when required. It turns Incandescent while the field has focus-within.
- **Focus:** Frame goes Incandescent and the wash deepens to `abyss/0.75`. No glow, no ring, no shadow.
- **Placeholder:** Mist at full opacity, caps step, uppercase, `0.3em`. Placeholders hold the same contrast bar as body text — they are never dimmed with an opacity.
- **Error:** Frame goes Incandescent Deep; the message renders below at the meta step in Incandescent, wired through `aria-describedby` with `aria-invalid`.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** `void/0.42` — the field stays visible through it.
- **Border:** `1px` `--frame`, with a second `1px` `--frame` rule under the mesh head.
- **Head:** A `9rem` seeded mesh, optionally with an index number in the micro step pinned top-left.
- **Internal Padding:** `1.75rem`, with a `1rem` gap stack inside.
- **States:** An interactive card lifts its entire frame to Incandescent on hover or focus — the whole card is the target, not a link buried inside it. The action label turns Incandescent and its arrow travels `4px`. The card name sits in Display White at `text-xl`, weight 300, uppercase, tracked `0.2em`.
- **Depth:** None. See the No-Shadow Rule.

### Navigation

- **Desktop (`lg` and up):** Caps-step uppercase links in Mist with no underline and no fill; a secondary-variant quote button at the end of the bar; a `pt`/`en` locale pair where the active locale is Incandescent and the inactive one sits at `--text-quiet`.
- **Header behaviour:** Fixed, transparent at the top with `1.75rem` of vertical padding. Past `24px` of scroll it compresses to `1rem`, takes a `void/0.85` wash with `backdrop-blur-xl`, and fades in a `1px` `--frame` rule beneath itself.
- **Mobile (below `lg`):** A three-rule burger that crosses into an X. The overlay is teleported to `<body>` — a `backdrop-filter` ancestor would otherwise become its containing block — takes `void/0.95` with `backdrop-blur-2xl`, and stacks its links at `text-3xl` weight 300 uppercase tracked `0.2em`, each on a `1px` `--frame` underline. The quote link is the only Incandescent item in the stack. Opening inerts the app root for focus containment and pins the body scroll position; crossing to desktop force-closes it.

### Contact Strip (signature)

- A level, undecorated row of the two contact doors plus the quote form, at equal weight: micro-step uppercase key over a `0.9375rem` weight-300 value, cells divided by `1px` `--frame` rules that turn horizontal below `640px`.
- Deliberately plain — no incandescent, no mesh, no sheen. It sits at the foot of the hero and again in the footer, and it is the one element the world does not dress.

### Shader Source Panel (signature)

- The actual fragment shader painting the page, imported from the same module the renderer compiles, shown beside its live uniform readings.
- `void/0.72` wash inside a `--frame` frame; a bar carrying the file path in micro plus a live/paused state readout; a monospace code column at `0.75rem`/1.75 with `--text-quiet` line numbers; a `15rem` meter column from `900px` up.
- Syntax colours are two desaturated violets (`#C9BFFF` keywords, `#B9B0E6` numerals) plus `--text-quiet` comments. The live dot and the "live" word are Incandescent, and they are the only Incandescent in the panel because they are the only genuinely live state in it. Unknown values render `—`, never a fabricated number.

### Shader Field (signature)

- One fullscreen WebGL fragment shader, no library, `fixed inset-0` behind the whole site. Domain-warped fbm supplies the liquid sheen; a warped grid supplies the vector-mesh material; Incandescent reaches only the sharpest crests.
- Guards, all real: DPR capped at 1 below `768px` and 1.5 above, pause on tab hide, adaptive downscale to 0.7 then 0.5 after three consecutive frames over 28ms, a context-loss handler, one held frame under `prefers-reduced-motion`, and a painted CSS ground when WebGL is absent.
- Over the canvas, always, in order: the reading scrim, then the `grain` material at `0.22` opacity in `overlay` blend.

### Loader

- A `3rem` corner indicator, bottom-right, never a full-screen gate — the offer, the CTA and the contact strip are readable from first paint.
- Counts three real milestones (document interactive, fonts resolved, shader first frame) and eases toward whatever it has actually reached. If the `2600ms` deadline expires first it leaves at the number it earned. Skipped entirely under reduced motion.

### Materials

- **Grain** (`.grain`): an SVG fractal-noise film at `0.22` opacity in `overlay` blend, generated rather than shipped as a raster. Sits above the field and below all content.
- **Sheen** (`.sheen`): a `115deg` band of Mist/0.14 and Incandescent/0.08 that crosses a frame over `1.1s` on hover or focus-within. Carried by buttons and cards. Removed under reduced motion.
- **Mesh** (`MeshVisual`): the seeded Glimmer wireframe, `22×12` by default, with one ridge lit Incandescent when `hot`.

### Motion

- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` on effectively every transition in the system. It is the world's only easing curve.
- **Durations:** `320–420ms` for colour and border state, `480–520ms` for card and row state, `500ms` for the header's compression, `1.1s` for a sheen pass, `900ms` for the hero entrance.
- **Reduced motion:** every animated component collapses its transitions to `1ms` or drops the animation entirely; the shader holds a single frame; the loader does not appear.

**The One Entrance Rule.** There is exactly one authored entrance in the site: `hero-rise` (rise `18px`, blur `6px` → `0`, staggered `0 / 90 / 200 / 300 / 400ms`). It happens once, on the hero, and no other section repeats it. Nothing scroll-reveals.

## Do's and Don'ts

### Do:

- **Do** build every component from a `1px` frame plus a translucent Void wash. Frames describe; fills would hide the field.
- **Do** keep text to `--text` (Mist, 5.88:1) and `--text-quiet` (Mist/85, 4.51:1). Those are the only two.
- **Do** bound every interactive element with `--frame-control` (3.30:1) or with Incandescent.
- **Do** make a primary control identifiable **at rest** — Incandescent frame, white label, arrow already present. The reading scene is a phone, where `:hover` never fires.
- **Do** set every label uppercase at exactly `0.3em`, choosing between micro / caps / meta / label.
- **Do** set display type at weight 200 and widen it on the `wdth` axis (100–112) as the scale step increases.
- **Do** put supporting text below the heading it supports, as content.
- **Do** use a seeded `MeshVisual` wherever an image would otherwise go, and give it a stable seed string.
- **Do** carry `.tnum` on any number read as a quantity.
- **Do** give every animated element a `prefers-reduced-motion` escape.
- **Do** render `—` for any value the system cannot actually measure.

### Don't:

- **Don't** set text in Glimmer (2.68:1) or Echo (1.35:1) — not for placeholders, line numbers, captions, disabled labels, or "de-emphasis". They are strokes.
- **Don't** go quieter than `--text-quiet`. It is a floor at 4.51:1 with no headroom; recede with size or position instead of opacity.
- **Don't** spend Incandescent on anything that is not an action or a genuinely live state. Not on headings, not on syntax tokens, not on decorative accents.
- **Don't** add a `box-shadow`, `drop-shadow`, or `text-shadow`. The system has none, and depth comes from the field, the scrim and the frame.
- **Don't** put a corner radius on a rectangle. `999px` is for circles only.
- **Don't** place a small tracked line above a heading as a kicker or an eyebrow. Section labels live in `aria-label`.
- **Don't** apply a gradient to type. The sheen material crosses frames, never letterforms.
- **Don't** use an icon font, an emoji, or a glyph as an icon. Arrows and rules are authored SVG stroke work at 1.4.
- **Don't** use a system display face. Display type is Archivo across its width axis; `system-ui` is the fallback, not the design.
- **Don't** paint an opaque full-viewport background on a page. Dim the field with `bg-void/80` and a backdrop blur if a section needs to sit quieter.
- **Don't** introduce a second easing curve or a second entrance animation. One curve, one entrance, on the hero.
- **Don't** hardcode a palette hex in a component. Every colour has a token; the one place inline hexes appear is documented debt, not a pattern.
- **Don't** invent a readout. If the driver, the network or the clock will not say, the value is `—`.
