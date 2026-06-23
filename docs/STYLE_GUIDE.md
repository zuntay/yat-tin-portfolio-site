# Portfolio Website Style Guide

This guide keeps future project additions consistent with the portfolio’s editorial, concept-design visual language.

## Colour tokens

Defined in `src/styles/global.css`:

| Token | Use |
| --- | --- |
| `--color-bg` | `#F5F1E8` warm paper background |
| `--color-text` | `#18211D` charcoal text and structure |
| `--color-muted` | `#686C66` secondary text |
| `--color-accent` | `#FF7048` bright coral interaction accent |
| `--color-accent-2` | `#1746D1` electric cobalt identity graphics |
| `--color-highlight` | `#D9FF43` acid-lime highlights and status moments |
| `--color-accent-3` | `#C39B24` supporting warm-gold rays |
| `--color-surface` | `#E8E3D8` cards and quiet panels |
| `--color-line` | Charcoal at 24% for dividers |

Coral remains the primary interactive accent. Cobalt and muted gold are supporting identity colours reserved for decorative rays, halftone, and small graphic details.

### Accessibility

- Charcoal on warm paper is `14.62:1` contrast.
- Charcoal on coral is `6.01:1`; filter active states use this pairing.
- Paper on cobalt is `6.58:1` when inverse cobalt treatments are needed.
- Charcoal on acid lime is `14.39:1`.
- Active filters use colour plus a filled shape, heavier border, filled dot, and underline/inset rule. Colour never carries selection meaning alone.
- Ray colours and halftone are decorative and communicate no essential information, avoiding red/green-only meaning.

## Typography

Display type carries the editorial voice; body type protects clarity. The system uses contrast, scale and spacing to help employers scan project information quickly without losing the personality of the portfolio.

- Display: `Instrument Serif`, used for page titles, project names, and conceptual statements.
- Supporting: `Inter`, used for navigation, metadata, body copy, and controls.
- Hierarchy guides attention before decoration.
- Body copy generally stays 16–18px or larger, with readable line lengths and generous line height.
- Metadata supports scanning, but should not become too small to read across devices.
- Interactive text must keep clear contrast, visible focus, and enough spacing for touch targets.

## Spacing

Use fluid outer gutters via `.page-pad`: `clamp(24px, 5vw, 80px)`.

- Major page sections: 90–120px vertical spacing on desktop.
- Content blocks: 70–90px within case studies.
- Card gaps: 24–30px horizontally and 70–90px vertically.
- Mobile sections: approximately 65–75px.

## Tags

Standard tags use a thin pill outline, sans-serif text, and compact spacing. Work-page filters radiate from a sun core on desktop and become a horizontally scrollable rail on mobile. Selected filters use charcoal on coral plus a thicker border, filled dot, stronger weight, and underline/inset rule.

## Project cards

- Use strong 4:3 imagery, with occasional full-width 16:8 cards to create a curated wall.
- Keep summaries short and expose no more than three tags on the card.
- In-progress work must show its correct project title inside the placeholder artwork.
- Award badges sit at the lower left; approved company logos sit at the lower right.
- Hover motion is limited to a subtle image scale and must respect reduced-motion preferences.

## Sun-ray filter

- The sun-ray system represents a working principle: good design and ethical care should resonate honestly across every design field.
- The sun holds a shared practice of care, while each ray reaches a different field with equal attention.
- Organic coral, cobalt, gold, grey and charcoal rays radiate from the All Work core.
- Labels remain real buttons and retain visible selected states.
- Tags are treated equally. Industrial design, DFM, project management, UX research, interaction design and awarded work should not be treated as secondary to one another.
- Different fields ask for different knowledge, experience and responsibilities, but each deserves humility, exploration, learning, empathy, practical sense-making and honest attention to context.
- Coral marks selection; the map must never rely on colour alone.
- Halftone dots represent evidence, process, learning, fragments, research notes, sketches, constraints and decisions.
- Lines represent direction, connection and decision-making.
- The system is not just decoration. It is a visual reminder of how the work should be approached.
- On mobile, replace the spatial map with a scrollable connected tag rail.

## Halftone

Halftone is a reusable print-inspired identity texture built with CSS radial gradients or SVG patterns. Use it around sun cores, hero edges, profile cards, section transitions and the sticky filter. Keep dots away from body paragraphs and project imagery.

## Case-study layout

- Begin with a large hero image and factual project metadata.
- Desktop uses a sticky, independently scrollable visual board on the left and a reading column on the right.
- Mobile stacks the complete visual story before the reading flow.
- Flexible content blocks remain driven by the Astro project collection.

## Drawer navigation

- A compact fixed Menu/YTL trigger replaces the full-width desktop header.
- Desktop uses one horizontal identity capsule; mobile stacks YTL above Menu so the mark stays readable.
- The Work-page sticky filter aligns with the menu trigger as a shared floating navigation layer.
- The left drawer uses a warm-paper surface, ray linework, halftone edge, and a softly dimmed overlay.
- Open state updates `aria-expanded` and `aria-hidden`, traps keyboard focus, closes on Escape or overlay click, and restores focus to the trigger.
- Current navigation uses weight plus a coral underline, not colour alone.
- Mobile retains the compact drawer trigger and the established bottom navigation.

## Icons

Use `src/components/IconArrow.astro` for UI/action arrows instead of Unicode arrow symbols. Mobile browsers may render arrow characters as emoji-style glyphs, so links, project cards, drawer items, buttons and printable controls should use SVG icons that inherit `currentColor`.

## Resume components

- Capability cards group design, production/delivery, tools, and languages.
- Experience uses numbered timeline nodes connected by structural linework.
- Awards use acid-lime callouts with charcoal text for strong contrast.
- Volunteering uses compact community cards; non-design roles remain a secondary dark strip.
- Missing downloadable files must be shown as disabled placeholders, never invented links.

## Highlight cards

Use numbered, bordered cards for decisions and qualitative outcomes. Background variation may distinguish cards, but metric-style presentation is only allowed when verified metrics exist.

## Badges and logos

Badges and logos are optional project fields. Only render provided, approved assets or confirmed labels. Never infer award status, client identity, or logo permission.

## PDF print rules

- A4 format with zero browser page margin and internal 18mm content padding.
- Each `.pdf-sheet` is one page and uses `break-after: page`.
- Hide navigation and browser controls using `.no-print`.
- Preserve backgrounds with `print-color-adjust: exact`.
- PDF variants reuse the same confirmed project collection content as the website.

## Live reference

The component board is available at `/style-guide/`. Its editable companion asset is `public/images/style-guide/portfolio-style-guide.svg`.
