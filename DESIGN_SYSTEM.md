# Atmospheric Minimalism Design System

A color-agnostic design language specification for elegant, motion-rich web experiences.

**To apply this system:** Replace `{{ACCENT}}` with any hex color (e.g., `#C1272D`, `#2563EB`, `#10B981`).

---

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Motion & Animation](#motion--animation)
6. [Visual Effects](#visual-effects)
7. [Responsive Design](#responsive-design)
8. [Implementation](#implementation)

---

## Color System

### Single Input Color

This entire system derives from **one accent color**: `{{ACCENT}}`

All other colors are computed from this single input.

### Color Derivation Rules

```
ACCENT         = {{ACCENT}}                    // User-provided hex color
ACCENT_DARK    = darken({{ACCENT}}, 30%)       // For dark mode (reduce lightness by 30%)
ACCENT_LIGHT   = lighten({{ACCENT}}, 15%)      // For gradients and highlights

Background     = #ffffff (light) / #0a0a0a (dark)
Foreground     = #171717 (light) / #ededed (dark)
```

### CSS Custom Properties

```css
:root {
  /* Computed from {{ACCENT}} */
  --accent: {{ACCENT}};
  --accent-rgb: {{ACCENT_RGB}};           /* e.g., 193, 39, 45 */
  --accent-dark: {{ACCENT_DARK}};         /* Darkened 30% for dark mode */
  --accent-dark-rgb: {{ACCENT_DARK_RGB}};

  /* Fixed values */
  --background: #ffffff;
  --foreground: #171717;
  --foreground-rgb: 23, 23, 23;
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent: var(--accent-dark);
    --accent-rgb: var(--accent-dark-rgb);
    --background: #0a0a0a;
    --foreground: #ededed;
    --foreground-rgb: 237, 237, 237;
  }
}
```

### Opacity Scale (Applied to Foreground)

| Purpose | Opacity | CSS |
|---------|---------|-----|
| Primary text | 100% | `rgb(var(--foreground-rgb))` |
| Secondary text | 80% | `rgb(var(--foreground-rgb) / 0.8)` |
| Muted text | 60% | `rgb(var(--foreground-rgb) / 0.6)` |
| Hover borders | 40% | `rgb(var(--foreground-rgb) / 0.4)` |
| Default borders | 20% | `rgb(var(--foreground-rgb) / 0.2)` |
| Subtle borders | 10% | `rgb(var(--foreground-rgb) / 0.1)` |

### Opacity Scale (Applied to Accent)

| Purpose | Opacity | CSS |
|---------|---------|-----|
| Solid accent | 100% | `rgb(var(--accent-rgb))` |
| Gradient core | 70% | `rgb(var(--accent-rgb) / 0.7)` |
| Gradient mid | 50-60% | `rgb(var(--accent-rgb) / 0.5)` |
| Glow/shadow | 30-40% | `rgb(var(--accent-rgb) / 0.4)` |
| Subtle tint | 15% | `rgb(var(--accent-rgb) / 0.15)` |
| Faint wash | 8% | `rgb(var(--accent-rgb) / 0.08)` |

---

## Typography

### Font Selection

**Primary:** Elegant serif typeface

Recommended options (in order of preference):
1. Instrument Serif
2. Playfair Display
3. Cormorant Garamond
4. Libre Baskerville
5. EB Garamond

```css
:root {
  --font-primary: 'Instrument Serif', Georgia, 'Times New Roman', serif;
}

body {
  font-family: var(--font-primary);
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
```

### Type Scale

| Role | Mobile | Desktop | Line Height | Tracking |
|------|--------|---------|-------------|----------|
| Display | 80px | 120px | 1.0 | -0.02em |
| Title | 48px | 64px | 1.4 | 0 |
| Heading | 28px | 28px | 1.3 | 0 |
| Subhead | 20px | 20px | 1.4 | 0 |
| Body | 16px | 16px | 1.75 | 0 |
| Small | 14px | 14px | 1.5 | 0 |
| Label | 14px | 14px | 1.4 | 0.3em |

### Typography Rules

1. **Single font weight (400)** - No bold; use size/color for emphasis
2. **Display text uses accent color** - Creates focal point
3. **Body text at 80% opacity** - Reduces visual noise
4. **Labels are uppercase** - With wide letter-spacing (0.3em)

### CSS Classes

```css
.display {
  font-size: 80px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--accent);
}

.title {
  font-size: 48px;
  line-height: 1.4;
}

.body {
  font-size: 16px;
  line-height: 1.75;
  color: rgb(var(--foreground-rgb) / 0.8);
}

.label {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
}

@media (min-width: 768px) {
  .display { font-size: 120px; }
  .title { font-size: 64px; }
}
```

---

## Spacing & Layout

### Spacing Scale (8px base)

| Token | Value | Use Case |
|-------|-------|----------|
| 1 | 8px | Tight gaps |
| 2 | 16px | Default gaps |
| 3 | 24px | Comfortable spacing |
| 4 | 32px | Component padding |
| 5 | 40px | Section gaps |
| 8 | 64px | Large separators |
| 12 | 96px | Section padding |

### Layout Tokens

```css
:root {
  --max-width-content: 768px;
  --max-width-wide: 1024px;
  --page-padding: 24px;
  --section-gap: 40px;
  --component-padding: 32px;
}
```

### Core Layout Patterns

**Full-Height Hero**
```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
```

**Centered Container**
```css
.container {
  width: 100%;
  max-width: var(--max-width-content);
  margin-inline: auto;
  padding-inline: var(--page-padding);
}
```

**Fixed Header**
```css
.header {
  position: absolute;
  inset: 32px 0 auto 0;
  padding-inline: var(--page-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}
```

**Anchored Footer**
```css
.footer {
  position: absolute;
  inset: auto 0 32px 0;
  padding-inline: var(--page-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

@media (min-width: 768px) {
  .footer {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

---

## Components

### Primary Button

```css
.btn-primary {
  position: relative;
  padding: 20px 64px;
  font-size: 20px;
  font-family: inherit;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 0 30px rgb(var(--accent-rgb) / 0.4);
  transition: opacity 0.2s ease;
}

.btn-primary:hover {
  opacity: 0.9;
}

/* Gradient border on hover */
.btn-primary::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(
    45deg,
    var(--accent),
    color-mix(in srgb, var(--accent), white 30%),
    var(--accent)
  );
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-primary:hover::before {
  opacity: 0.6;
}

@media (prefers-color-scheme: dark) {
  .btn-primary {
    box-shadow: 0 0 40px rgb(var(--accent-rgb) / 0.5);
  }
}
```

### Secondary Button

```css
.btn-secondary {
  padding: 8px 20px;
  font-size: 14px;
  font-family: inherit;
  color: rgb(var(--foreground-rgb) / 0.8);
  background: transparent;
  border: 1px solid rgb(var(--foreground-rgb) / 0.2);
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  color: rgb(var(--foreground-rgb));
  border-color: rgb(var(--foreground-rgb) / 0.4);
}
```

### Card

```css
.card {
  padding: var(--component-padding);
  background: rgb(var(--background-rgb) / 0.7);
  border: 1px solid rgb(var(--foreground-rgb) / 0.1);
  border-radius: 24px;
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px -40px rgb(var(--accent-rgb) / 0.4);
}
```

### Links

```css
.link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.link:hover {
  color: var(--accent);
}
```

---

## Motion & Animation

### Timing Tokens

```css
:root {
  --duration-fast: 0.2s;
  --duration-normal: 0.5s;
  --duration-slow: 0.8s;
  --stagger: 80ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Entrance Animations (Framer Motion)

**Container with Stagger**
```javascript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};
```

**Character Reveal**
```javascript
const char = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
```

**Fade Up**
```javascript
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
```

**Scale In**
```javascript
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```

### Background Keyframes

```css
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  25% { transform: translate(30px, -30px) scale(1.05) rotate(5deg); }
  50% { transform: translate(-20px, 20px) scale(0.95) rotate(-5deg); }
  75% { transform: translate(10px, -10px) scale(1.02) rotate(3deg); }
}

@keyframes morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 50% 60% 30% 60% / 30% 40% 70% 50%; }
  75% { border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%; }
}

@keyframes pulse {
  0%, 100% { opacity: 0.25; filter: blur(80px); }
  50% { opacity: 0.35; filter: blur(100px); }
}
```

### Animation Sequence

| Order | Element | Animation | Delay |
|-------|---------|-----------|-------|
| 1 | Heading chars | char | 80ms stagger |
| 2 | Tagline | fadeUp | after heading |
| 3 | CTA button | scaleIn | after tagline |
| BG | Orbs | float + morph | continuous |

---

## Visual Effects

### Gradient Orbs

Three orbs positioned off-canvas edges, animated continuously:

```css
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  will-change: transform, border-radius;
  background: radial-gradient(
    circle,
    var(--accent) 0%,
    rgb(var(--accent-rgb) / 0.6) 30%,
    transparent 70%
  );
  opacity: 0.3;
}

.orb-1 {
  width: 500px;
  height: 500px;
  top: -10%;
  right: -5%;
  animation: float 25s var(--ease-in-out) infinite,
             morph 18s var(--ease-in-out) infinite;
}

.orb-2 {
  width: 600px;
  height: 600px;
  bottom: -15%;
  left: -10%;
  animation: float 30s var(--ease-in-out) infinite,
             morph 22s var(--ease-in-out) infinite;
}

.orb-3 {
  width: 400px;
  height: 400px;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.25;
  animation: float 20s var(--ease-in-out) infinite,
             morph 15s var(--ease-in-out) infinite,
             pulse 8s var(--ease-in-out) infinite;
}

@media (prefers-color-scheme: dark) {
  .orb { opacity: 0.22; }
  .orb-3 { opacity: 0.2; }
}
```

### Text Glow

```css
.text-glow {
  filter: drop-shadow(0 0 20px rgb(var(--accent-rgb) / 0.3));
}
```

### Glassmorphism Backdrop

```css
.glass-backdrop {
  position: absolute;
  width: 800px;
  height: 400px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse,
    rgb(var(--accent-rgb) / 0.15) 0%,
    rgb(var(--accent-rgb) / 0.08) 40%,
    transparent 70%
  );
  filter: blur(60px);
  border-radius: 50%;
  z-index: -1;
}
```

### Shadow Tokens

```css
:root {
  --shadow-glow: 0 0 30px rgb(var(--accent-rgb) / 0.4);
  --shadow-glow-lg: 0 0 40px rgb(var(--accent-rgb) / 0.5);
  --shadow-card: 0 20px 60px -40px rgb(var(--accent-rgb) / 0.4);
}
```

---

## Responsive Design

### Breakpoint

Single primary breakpoint at **768px** (mobile-first):

```css
/* Base: Mobile (0-767px) */

@media (min-width: 768px) {
  /* Desktop */
}
```

### Responsive Patterns

**Typography Scaling**
```css
.display {
  font-size: 80px;
}
@media (min-width: 768px) {
  .display { font-size: 120px; }
}
```

**Layout Direction**
```css
.footer {
  flex-direction: column;
  text-align: center;
}
@media (min-width: 768px) {
  .footer {
    flex-direction: row;
    text-align: left;
  }
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Implementation

### Color Conversion Helper

To implement, convert `{{ACCENT}}` hex to RGB:

```javascript
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function darken(hex, percent) {
  const rgb = hexToRgb(hex);
  const factor = 1 - (percent / 100);
  return `rgb(${Math.round(rgb.r * factor)}, ${Math.round(rgb.g * factor)}, ${Math.round(rgb.b * factor)})`;
}
```

### Minimal CSS Setup

```css
:root {
  /* Replace these with your accent color */
  --accent: {{ACCENT}};
  --accent-rgb: {{R}}, {{G}}, {{B}};
  --accent-dark: {{ACCENT_DARKENED}};
  --accent-dark-rgb: {{R_DARK}}, {{G_DARK}}, {{B_DARK}};

  /* Fixed */
  --background: #ffffff;
  --foreground: #171717;
  --foreground-rgb: 23, 23, 23;
  --font-primary: 'Instrument Serif', Georgia, serif;
}

@media (prefers-color-scheme: dark) {
  :root {
    --accent: var(--accent-dark);
    --accent-rgb: var(--accent-dark-rgb);
    --background: #0a0a0a;
    --foreground: #ededed;
    --foreground-rgb: 237, 237, 237;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-primary);
  font-weight: 400;
}
```

### Checklist

- [ ] Choose accent color (`{{ACCENT}}`)
- [ ] Convert to RGB values
- [ ] Calculate darkened variant (30% darker)
- [ ] Install serif font
- [ ] Set CSS custom properties
- [ ] Add gradient orbs to hero section
- [ ] Implement Framer Motion entrance animations
- [ ] Style buttons with glow effect
- [ ] Test dark mode
- [ ] Test reduced motion

---

## Quick Reference

### Color Formula
```
Input:      {{ACCENT}} (any hex)
RGB:        Extract R, G, B values
Dark mode:  Reduce each RGB channel by 30%
Opacity:    Use rgb(var(--accent-rgb) / 0.X) syntax
```

### Type Scale
| Display | Title | Body | Small |
|---------|-------|------|-------|
| 80-120px | 48-64px | 16px | 14px |

### Spacing
| sm | md | lg | xl |
|----|----|----|-----|
| 8px | 16px | 24px | 32px |

### Animation Timing
| Hover | Entrance | Stagger | Background |
|-------|----------|---------|------------|
| 0.2s | 0.5-0.8s | 80ms | 15-30s |

---

*Single accent color in, complete design system out.*
