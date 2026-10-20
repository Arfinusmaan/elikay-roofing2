# Design Direction & Component Strategy: 24HR Flood Masters

## Creative Vision

A $10,000-level bespoke emergency restoration digital presence engineered for **24HR Flood Masters**. Balancing high-urgency utility (instant dispatch phone contact, 24/7 responsiveness, and reassurance) with top-tier architectural and industrial craftsmanship.

## Reference Inspirations & Architectural Patterns

1. **21st.dev & Modern Industrial Layouts**
   - Inspiration: Clean asymmetric split headers, high-impact typography, tactile interactive data displays, and structured editorial matrices rather than generic 3-card decks.
   - Selected pattern: Hero with live emergency dispatch indicator HUD, high-contrast typography, and full-width cinematic photography.

2. **React Bits & Fluid Micro-Interactions**
   - Inspiration: Subtle reveals, silky accordion triggers, status badges, and gentle focus states.
   - Principle: Zero excessive animations that impede emergency accessibility or induce layout shifts. Fully respecting `prefers-reduced-motion`.

3. **Aceternity UI & Editorial Showcase**
   - Inspiration: Contrast-heavy dark/light editorial sections.
   - Adaptation: Replaced generic dark purple or cyber-black gradients with the verified brand palette (`#111111`, `#1C1C1C`, `#035BFE`, and `#DBDBDB`).

4. **Flowbite & Accessible Design Systems**
   - Inspiration: Battle-tested accessible navigation, aria-expanded accordions, clean keyboard navigation, mobile menu sheets, and accessible form validations.

## Strict Palette Rules

- **Primary Brand Blue**: `#035BFE` (CTAs, interactive active states, phone highlights, accents)
- **Deep Supporting Blue**: `#102C77` (Deep tone accents, secondary details)
- **Light Page Surfaces**: `#DBDBDB` (Editorial light sections, calm reading flow)
- **Secondary Neutral**: `#D5D5D5` (Soft tonal dividers, subtle card backdrops)
- **Restrained Divider**: `#B3B3B3` (Sharp architectural borders)
- **Deep Charcoal Surface**: `#111111` (Hero, critical dark contrast sections, master footer)
- **Supporting Charcoal**: `#1C1C1C` (Dark cards, process timeline steps, navigation bars)

## Typography

- **Headings & Display**: `Plus Jakarta Sans` or `Manrope` with bold architectural weights (600, 700, 800)
- **Body & Technical Copy**: `DM Sans` for crisp legibility and technical clarity
- **Strict Prohibition**: No Inter, Geist, or Space Grotesque. No em dashes in copy.

## Navigation & Conversion Architecture

- **Persistent Header**: Authentic logo badge, streamlined service dropdowns, quick links to About / Service Areas / Blog / Contact, and high-visibility `(254) 482-1151` emergency CTA.
- **Mobile Emergency Bar**: Unobtrusive sticky bottom emergency bar on mobile viewports for one-tap calling.
- **Content Hierarchy**: High-density factual value, real mitigation process workflows, clear distinction between emergency mitigation and permanent reconstruction, and honest veteran-owned representation.
