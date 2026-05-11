---
name: MovieLab
colors:
  surface: '#1f0f10'
  surface-dim: '#1f0f10'
  surface-bright: '#483435'
  surface-container-lowest: '#190a0b'
  surface-container-low: '#281718'
  surface-container: '#2c1b1c'
  surface-container-high: '#382526'
  surface-container-highest: '#443030'
  on-surface: '#fbdbdb'
  on-surface-variant: '#e5bdbe'
  inverse-surface: '#fbdbdb'
  inverse-on-surface: '#3f2b2c'
  outline: '#ac8889'
  outline-variant: '#5c3f40'
  surface-tint: '#ffb3b6'
  primary: '#ffb3b6'
  on-primary: '#68001a'
  primary-container: '#e11d48'
  on-primary-container: '#fffaf9'
  inverse-primary: '#be0037'
  secondary: '#ffb3b6'
  on-secondary: '#67001a'
  secondary-container: '#8b1f30'
  on-secondary-container: '#ff9da3'
  tertiary: '#74d8bd'
  on-tertiary: '#00382d'
  tertiary-container: '#00836c'
  on-tertiary-container: '#eefff7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b6'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920028'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#ffb3b6'
  on-secondary-fixed: '#40000c'
  on-secondary-fixed-variant: '#871d2e'
  tertiary-fixed: '#90f5d9'
  tertiary-fixed-dim: '#74d8bd'
  on-tertiary-fixed: '#002019'
  on-tertiary-fixed-variant: '#005142'
  background: '#1f0f10'
  on-background: '#fbdbdb'
  surface-variant: '#443030'
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  section-gap: 4rem
  card-gap: 1rem
  radius-xl: 0.75rem
  radius-2xl: 1rem
---

## Brand & Style
The brand personality is immersive, premium, and cinematic. It aims to evoke the feeling of a private screening room—dark, focused, and high-contrast. The target audience consists of cinephiles and casual viewers who value a theater-like discovery experience. 

The design style is **Minimalist-Cinematic**. It leverages deep blacks to make movie posters pop, using high-quality typography and a singular vibrant accent to guide the eye. It borrows from **Glassmorphism** for overlays to maintain depth without breaking the immersion of the dark environment.

## Colors
The palette is rooted in the Zinc scale to provide a "near-black" foundation that feels warmer and more premium than pure black. 

- **Primary:** Vibrant Rose (#E11D48) is used sparingly for critical actions, ratings, and active states to provide a "red carpet" energy.
- **Background:** Zinc-950 (#09090B) serves as the base layer to maximize contrast with media content.
- **Surface:** Zinc-900 (#18181B) defines cards and modals, creating a clear but subtle distinction from the background.
- **Muted Text:** Zinc-400 (#A1A1AA) ensures secondary information doesn't compete with movie titles.

## Typography
The system uses a pairing of **Geist** for structural/heading elements and **Inter** for long-form reading. Geist’s technical precision complements the app's modern feel, while Inter ensures maximum legibility for movie synopses.

Headings should always be pure white (#FAFAFA) to maintain high contrast against the dark background. Body text uses a muted gray to reduce eye strain. Large display type is reserved for featured movie titles on hero sections.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

- **Desktop:** 12 columns, 24px gutters, 80px side margins. Content is centered with a max-width of 1280px.
- **Mobile:** 4 columns, 16px gutters, 16px side margins. 
- **Rhythm:** Use an 8px base unit for all padding and margins. Vertical spacing between sections should be generous (64px+) to allow the cinematic imagery room to breathe.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Soft Shadows**. Because the background is near-black, traditional shadows must be darker than the background (Pure Black) and use a larger blur radius to be perceptible.

1. **Base Layer:** Zinc-950 (The "Floor").
2. **Card Layer:** Zinc-900 with a 1px border of Zinc-800.
3. **Floating Layer (Modals/Popovers):** Zinc-900 with a more pronounced Zinc-700 border and a 20% opacity black drop shadow.
4. **Glass Effect:** Use a background blur (12px) with a 40% opaque Zinc-900 fill for navigation bars and overlays on top of movie posters.

## Shapes
This design system utilizes an **Extra-Large Roundedness** (Level 2) strategy. This softens the high-contrast "tech" feel, making the app feel more like a modern consumer lifestyle product.

- **Standard Cards:** 1rem (16px) corner radius.
- **Buttons & Inputs:** 0.75rem (12px) corner radius.
- **Movie Posters:** 0.75rem (12px) to ensure the focus remains on the artwork while softening the edges.
- **Search Bar:** Fully pill-shaped for a friendly, approachable entry point.

## Components

- **Buttons:** Primary buttons use the Rose-600 (#E11D48) fill with white text. Secondary buttons use a Zinc-800 ghost style with a subtle 1px border.
- **Movie Cards:** High-aspect-ratio posters with a 1px Zinc-800 border. On hover, cards should scale slightly (1.05x) and increase border brightness to Zinc-700.
- **Chips/Badges:** Small, Zinc-800 background with Zinc-400 text for genres (e.g., "Sci-Fi", "Action"). Accent badges (e.g., "IMDb 8.5") use a Rose-600 background.
- **Inputs:** Darker than the card background (Zinc-950) with a Zinc-800 border. The focus state transitions the border to Rose-600 with a subtle outer glow.
- **Navigation Rail:** A vertical or horizontal blur-background bar with icons that transition from Zinc-400 to White upon selection, featuring a small Rose-600 dot indicator.
- **Progress Bars:** Used for "Watch Progress." The background is Zinc-800, and the fill is Rose-600 for high visibility.