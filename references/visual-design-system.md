# DocuLense.AI — Visual Design System

> This is the single source of truth for all visual design decisions.
> Every pixel value, color, spacing token, and component dimension is defined here.

---

## 1. Color Palette

### Brand Colors (HSL)

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--primary` | `hsl(221, 83%, 53%)` | `hsl(217, 91%, 60%)` | CTAs, active nav, links |
| `--primary-hover` | `hsl(221, 83%, 47%)` | `hsl(217, 91%, 55%)` | Button hover states |
| `--primary-foreground` | `hsl(0, 0%, 100%)` | `hsl(0, 0%, 100%)` | Text on primary surfaces |

### Semantic Colors

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--success` | `hsl(142, 71%, 45%)` | `hsl(142, 71%, 45%)` | Ready badges, approvals |
| `--success-bg` | `hsl(142, 76%, 96%)` | `hsl(142, 76%, 12%)` | Success card backgrounds |
| `--warning` | `hsl(38, 92%, 50%)` | `hsl(38, 92%, 50%)` | Processing, attention |
| `--warning-bg` | `hsl(48, 96%, 95%)` | `hsl(38, 92%, 12%)` | Warning card backgrounds |
| `--destructive` | `hsl(0, 84%, 60%)` | `hsl(0, 84%, 60%)` | Errors, delete actions |
| `--destructive-bg` | `hsl(0, 84%, 97%)` | `hsl(0, 84%, 12%)` | Error card backgrounds |
| `--info` | `hsl(199, 89%, 48%)` | `hsl(199, 89%, 48%)` | Info badges, tooltips |

### Surface Colors (Dark Mode Primary — dark-first design)

| Token | Value | Usage |
|---|---|---|
| `--background` | `hsl(222, 47%, 7%)` → `#0B1120` | Page background |
| `--surface-1` | `hsl(222, 35%, 10%)` → `#121A2E` | Cards, sidebar bg |
| `--surface-2` | `hsl(222, 30%, 14%)` → `#1A2340` | Elevated cards, dropdowns |
| `--surface-3` | `hsl(222, 25%, 18%)` → `#232D4A` | Hover states on surfaces |
| `--border` | `hsl(222, 20%, 20%)` → `#283050` | Borders, dividers |
| `--border-subtle` | `hsl(222, 15%, 16%)` → `#212840` | Subtle separators |

### Surface Colors (Light Mode)

| Token | Value | Usage |
|---|---|---|
| `--background` | `hsl(0, 0%, 100%)` → `#FFFFFF` | Page background |
| `--surface-1` | `hsl(210, 20%, 98%)` → `#F8FAFC` | Cards, sidebar bg |
| `--surface-2` | `hsl(210, 15%, 96%)` → `#F1F5F9` | Elevated cards |
| `--surface-3` | `hsl(210, 12%, 93%)` → `#E8ECF1` | Hover states |
| `--border` | `hsl(214, 20%, 90%)` → `#E2E8F0` | Borders, dividers |
| `--border-subtle` | `hsl(214, 15%, 93%)` → `#EDF0F5` | Subtle separators |

### Text Colors

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--text-primary` | `hsl(222, 47%, 11%)` | `hsl(210, 40%, 96%)` | Headings, body text |
| `--text-secondary` | `hsl(215, 16%, 47%)` | `hsl(215, 20%, 65%)` | Descriptions, secondary |
| `--text-muted` | `hsl(215, 14%, 62%)` | `hsl(215, 15%, 45%)` | Captions, timestamps |
| `--text-disabled` | `hsl(215, 10%, 75%)` | `hsl(215, 10%, 30%)` | Disabled elements |

### Accent Gradient (Hero, Feature highlights)

```css
--gradient-brand: linear-gradient(135deg, hsl(217, 91%, 60%), hsl(271, 81%, 56%));
--gradient-brand-subtle: linear-gradient(135deg, hsl(217, 91%, 60%, 0.15), hsl(271, 81%, 56%, 0.1));
--gradient-glow: radial-gradient(600px circle at 50% 0%, hsl(217, 91%, 60%, 0.12), transparent 70%);
```

---

## 2. Typography

### Font Family

```
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'Geist Mono', 'JetBrains Mono', 'Fira Code', monospace;
```

Load via `next/font/google` with `subsets: ['latin']`, `display: 'swap'`.

### Type Scale (1.25 Major Third ratio, base 16px)

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `--text-display` | 48px / 3rem | 700 Bold | 1.1 (52.8px) | -0.025em | Landing hero headline |
| `--text-h1` | 36px / 2.25rem | 700 Bold | 1.15 (41.4px) | -0.02em | Page titles |
| `--text-h2` | 28px / 1.75rem | 600 Semi | 1.2 (33.6px) | -0.015em | Section headings |
| `--text-h3` | 22px / 1.375rem | 600 Semi | 1.25 (27.5px) | -0.01em | Card titles, sub-sections |
| `--text-h4` | 18px / 1.125rem | 600 Semi | 1.3 (23.4px) | -0.005em | Widget headings |
| `--text-body` | 16px / 1rem | 400 Regular | 1.5 (24px) | 0 | Body text, descriptions |
| `--text-body-medium` | 16px / 1rem | 500 Medium | 1.5 (24px) | 0 | Emphasized body text |
| `--text-sm` | 14px / 0.875rem | 400 Regular | 1.43 (20px) | 0 | Table cells, form labels |
| `--text-sm-medium` | 14px / 0.875rem | 500 Medium | 1.43 (20px) | 0.01em | Nav items, button text |
| `--text-xs` | 12px / 0.75rem | 500 Medium | 1.33 (16px) | 0.02em | Badges, captions, timestamps |
| `--text-xxs` | 11px / 0.6875rem | 500 Medium | 1.27 (14px) | 0.03em | Micro-labels (status dots) |

### Font Loading Strategy
- Use `next/font/google` for Inter (variable font)
- Subset to `latin` only (add `arabic` subset when Arabic translations are active)
- Apply via CSS variable `--font-inter` on `<html>`
- Enable tabular numbers in data tables: `font-feature-settings: 'tnum'`

---

## 3. Spacing System (8pt Grid)

All spacing derives from a base unit of **4px**, with the primary grid at **8px**.

| Token | Value | Common Usage |
|---|---|---|
| `--space-0` | 0px | Reset |
| `--space-0.5` | 2px | Micro gaps (icon-to-dot indicators) |
| `--space-1` | 4px | Inner badge padding, tight icon gaps |
| `--space-1.5` | 6px | Between grouped badges, inline spacing |
| `--space-2` | 8px | Icon-to-text gap, small card padding |
| `--space-3` | 12px | Form input padding (vertical), sidebar section gaps |
| `--space-4` | 16px | Standard component padding, sidebar item indent |
| `--space-5` | 20px | Card padding (compact), input horizontal padding |
| `--space-6` | 24px | Card padding (standard), sidebar container padding |
| `--space-8` | 32px | Section gaps within pages, page horizontal margin |
| `--space-10` | 40px | Between major sections on a page |
| `--space-12` | 48px | Page top padding, large section separators |
| `--space-16` | 64px | Landing page section vertical spacing |
| `--space-20` | 80px | Hero section vertical padding |
| `--space-24` | 96px | Landing page section vertical spacing (large) |

---

## 4. Layout Dimensions

### Application Shell

```
┌──────────────────────────────────────────────────────────────┐
│ TOPBAR: height 56px, border-bottom 1px var(--border)         │
│ padding: 0 24px, bg: var(--surface-1)                        │
├──────────────┬───────────────────────────────────────────────┤
│              │                                               │
│   SIDEBAR    │              MAIN CONTENT                     │
│   240px      │              flex: 1                          │
│   expanded   │              padding: 32px                    │
│              │              max-width: 1280px                │
│   64px       │              (centered when > max-width)      │
│   collapsed  │                                               │
│              │                                               │
│   bg:        │                                               │
│   surface-1  │                                               │
│              │                                               │
│   border-r:  │                                               │
│   1px border │                                               │
│              │                                               │
└──────────────┴───────────────────────────────────────────────┘
```

| Element | Dimension | Notes |
|---|---|---|
| **Sidebar (expanded)** | 240px wide, 100vh | Left-anchored, fixed position |
| **Sidebar (collapsed)** | 64px wide, 100vh | Icon-only mode, tooltips on hover |
| **Sidebar padding** | 16px horizontal, 12px vertical | Container padding |
| **Sidebar item height** | 36px | Comfortable click target |
| **Sidebar item padding** | 8px 12px | Internal padding |
| **Sidebar item icon** | 20px × 20px | Lucide icons at `size={20}` |
| **Sidebar item gap** | 10px | Between icon and label text |
| **Sidebar section gap** | 20px | Between nav groups (Main, Admin, etc.) |
| **Sidebar section label** | text-xs, text-muted, uppercase | Section headings like "MAIN", "ADMIN" |
| **Topbar height** | 56px | Fixed, top-anchored |
| **Topbar padding** | 0 24px | Horizontal only |
| **Content area padding** | 32px | All sides |
| **Content max-width** | 1280px | Auto-centered beyond this |
| **Content min-width** | 320px | Mobile minimum |

### Breakpoints

| Name | Value | Layout Behavior |
|---|---|---|
| `sm` | 640px | Mobile: sidebar hidden, hamburger menu |
| `md` | 768px | Tablet: sidebar collapsed (64px) |
| `lg` | 1024px | Desktop: sidebar expanded (240px) |
| `xl` | 1280px | Wide: content max-width reached |
| `2xl` | 1536px | Ultra-wide: centered content |

### Responsive Flex Container System

The entire app uses a **dynamic flex layout** that reshapes per viewport. No fixed layouts — everything adapts.

#### Application Shell (flex container)

```
/* The shell is a flex column (topbar + body), where body is a flex row (sidebar + content) */

.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;                /* fill viewport */
}

.app-body {
  display: flex;
  flex: 1;                          /* fills remaining height below topbar */
  overflow: hidden;                 /* sidebar + content scroll independently */
}

.sidebar {
  flex-shrink: 0;                   /* sidebar never shrinks */
  width: 240px;                     /* lg+ expanded */
  overflow-y: auto;
  transition: width 200ms ease;
}

.sidebar.collapsed { width: 64px; }

.main-content {
  flex: 1;                          /* takes all remaining horizontal space */
  overflow-y: auto;                 /* content scrolls independently */
  padding: 32px;
}

.content-container {
  max-width: 1280px;               /* prevents ultra-wide content stretching */
  margin: 0 auto;                  /* center on wide screens */
  width: 100%;
}
```

#### Per-Viewport Behavior

| Viewport | Width | Sidebar | Topbar | Content Padding | Grid Columns |
|---|---|---|---|---|---|
| **Mobile** | < 640px | Hidden (sheet overlay) | 56px, hamburger left | 16px | 1 |
| **Tablet Portrait** | 640–767px | Hidden (sheet overlay) | 56px, hamburger left | 20px | 1–2 |
| **Tablet Landscape** | 768–1023px | Collapsed (64px) | 56px | 24px | 2–3 |
| **Desktop** | 1024–1279px | Expanded (240px) | 56px | 32px | 3–4 |
| **Wide Desktop** | 1280–1535px | Expanded (240px) | 56px | 32px | 4 |
| **Ultra-wide** | ≥ 1536px | Expanded (240px) | 56px | 32px, centered | 4 |

#### Grid System (Dynamic Flex-based)

All page grids use **CSS Grid with auto-fill/auto-fit** to adapt columns dynamically:

```css
/* Stat cards, project cards, feature cards */
.grid-adaptive {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

/* Force specific column counts per breakpoint when needed */
.grid-stats {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;                    /* mobile: 1 col */
}
@media (min-width: 640px)  { .grid-stats { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid-stats { grid-template-columns: repeat(4, 1fr); } }

.grid-projects {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}
@media (min-width: 640px)  { .grid-projects { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid-projects { grid-template-columns: repeat(3, 1fr); } }
```

#### Responsive Component Adaptations

| Component | Mobile (< 640) | Tablet (640–1023) | Desktop (≥ 1024) |
|---|---|---|---|
| **Sidebar** | Sheet overlay, 280px, slides from left, backdrop overlay | Collapsed 64px, icon-only, tooltip labels | Expanded 240px, full labels |
| **Topbar** | Hamburger + logo + avatar only | + breadcrumbs (truncated) + avatar | + search (280px) + notifications + avatar |
| **Stat cards** | 1 column, full width | 2 columns | 4 columns |
| **Project cards** | 1 column, full width | 2 columns | 3 columns |
| **Data tables** | Card view (stacked key-value pairs) | Horizontal scroll, pinned first column | Full table, all columns visible |
| **Page header** | Title + description stacked, actions below | Title left, actions right (wrap if needed) | Title left, actions right, single row |
| **Dialogs** | Full-screen sheet (bottom-up) | 480px centered | 480–800px centered |
| **Tabs** | Horizontal scroll with overflow indicators | Full width, evenly spaced | Full width |
| **Upload zone** | Compact: 60px height, tap to upload | Standard: 80px height, drag + tap | Full: 120px height, drag + click |
| **AI Generation** | Single column, preview below form | Single column, preview below form | 2-column split (60/40) |
| **Document viewer** | Full-screen, metadata in bottom sheet | Viewer fills width, metadata in sidebar panel | Split pane (70/30) |
| **Toast** | Full width - 32px (centered), bottom | 380px, bottom-right | 380px, bottom-right |
| **Search** | Full-screen overlay on tap | Topbar inline, 200px | Topbar inline, 280px |

#### Fluid Typography (clamp)

Hero and page titles use `clamp()` to scale smoothly:

```css
--text-display-fluid: clamp(2rem, 5vw, 3rem);       /* 32px → 48px */
--text-h1-fluid:      clamp(1.5rem, 3.5vw, 2.25rem); /* 24px → 36px */
--text-h2-fluid:      clamp(1.25rem, 2.5vw, 1.75rem); /* 20px → 28px */
```

Body text and UI text stay fixed (no fluid scaling) for readability consistency.

#### Touch Targets (Mobile/Tablet)

| Element | Minimum Touch Size | Notes |
|---|---|---|
| Buttons | 44px × 44px | Add padding if visual size is smaller |
| Nav items | 44px height | Sidebar items expand to 44px on touch devices |
| Table rows | 48px height | Already meets requirement |
| Checkboxes | 44px × 44px hit area | Visual checkbox 20px, padding extends target |
| Close buttons | 44px × 44px | X button in dialogs/toasts |
| Icon buttons | 44px × 44px | Toolbar icons get padding increase |

#### Container Queries (Progressive Enhancement)

For components that live in variable-width containers (e.g., sidebar open vs collapsed changes content width):

```css
.project-card-container {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .project-card { /* horizontal layout */ }
}

@container (max-width: 299px) {
  .project-card { /* vertical stacked layout */ }
}
```

This ensures cards reflow based on their actual available space, not just the viewport.

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Badges, small chips, tooltips |
| `--radius-md` | 6px | Buttons, inputs, selects |
| `--radius-lg` | 8px | Cards, dialogs, dropdowns |
| `--radius-xl` | 12px | Feature cards, modal containers |
| `--radius-2xl` | 16px | Hero cards, landing page elements |
| `--radius-full` | 9999px | Avatars, pills, toggle handles |

---

## 6. Shadows & Elevation

Dark mode uses **border + surface color** for elevation (no drop shadows).
Light mode uses **subtle drop shadows** for depth.

| Level | Light Mode Shadow | Dark Mode Approach |
|---|---|---|
| **Flat** | none | `--surface-1` bg |
| **Raised** | `0 1px 3px rgba(0,0,0,0.08)` | `--surface-2` bg + `--border` |
| **Floating** | `0 4px 12px rgba(0,0,0,0.1)` | `--surface-3` bg + `--border` |
| **Overlay** | `0 8px 30px rgba(0,0,0,0.15)` | `--surface-3` bg + `--border` + 50% overlay |
| **Focus ring** | `0 0 0 3px hsl(217, 91%, 60%, 0.25)` | Same | All focusable elements |

---

## 7. Component Specifications

### Buttons

| Variant | Height | Padding H | Font | Radius | Specs |
|---|---|---|---|---|---|
| **Default (md)** | 36px | 16px | text-sm-medium | radius-md | Standard actions |
| **Small (sm)** | 32px | 12px | text-xs (medium) | radius-md | Inline, table actions |
| **Large (lg)** | 44px | 24px | text-body-medium | radius-md | CTA, hero buttons |
| **Icon-only** | 36px × 36px | 0 | — | radius-md | Toolbar actions |

| Style | Background | Text | Border | Hover |
|---|---|---|---|---|
| **Primary** | `--primary` | white | none | `--primary-hover` + translateY(-1px) |
| **Secondary** | `--surface-2` | `--text-primary` | 1px `--border` | `--surface-3` |
| **Ghost** | transparent | `--text-secondary` | none | `--surface-2` |
| **Destructive** | `--destructive` | white | none | darken 10% |
| **Outline** | transparent | `--primary` | 1px `--primary` | `--primary` bg, white text |

### Form Inputs

| Property | Value |
|---|---|
| Height | 40px |
| Padding | 12px horizontal, 8px vertical |
| Font | text-sm (14px, 400) |
| Border | 1px `--border` |
| Border Radius | radius-md (6px) |
| Background | `--surface-1` (dark), white (light) |
| Focus | border-color `--primary`, focus ring |
| Placeholder | `--text-muted` |
| Label | text-sm-medium (14px, 500), margin-bottom 6px |
| Helper text | text-xs (12px), `--text-muted`, margin-top 4px |
| Error state | border-color `--destructive`, error text in `--destructive` |

### Cards

| Property | Value |
|---|---|
| Padding | 24px (standard), 16px (compact) |
| Background | `--surface-1` |
| Border | 1px `--border-subtle` |
| Border Radius | radius-lg (8px) |
| Hover (interactive) | border-color `--border`, `--surface-2` bg, translateY(-1px) |
| Transition | `all 150ms ease` |

### Stat Cards (Dashboard)

| Property | Value |
|---|---|
| Height | auto (content-driven) |
| Padding | 24px |
| Layout | Icon top-right (32px, `--text-muted`), value bottom-left |
| Value typography | text-h2 (28px, 600) |
| Label typography | text-sm (14px, 400), `--text-secondary` |
| Trend indicator | text-xs, success/destructive color, with ↑/↓ arrow |
| Background | `--surface-1` with subtle left-border accent (3px, `--primary`) |

### Badges / Status Pills

| Property | Value |
|---|---|
| Height | 22px |
| Padding | 2px 8px |
| Font | text-xs (12px, 500) |
| Border Radius | radius-full (9999px) |
| Variants | success (green bg + text), warning (amber), error (red), info (blue), neutral (zinc) |

### Data Tables

| Property | Value |
|---|---|
| Row height | 48px |
| Cell padding | 12px 16px |
| Header font | text-xs (12px, 600, uppercase), `--text-muted`, letter-spacing 0.05em |
| Cell font | text-sm (14px, 400) |
| Border | 1px `--border-subtle` between rows (bottom only) |
| Hover row | `--surface-2` background |
| Selected row | `--primary` at 8% opacity background |
| Checkbox column | 48px wide, centered |
| Actions column | right-aligned, icon buttons |

### Sidebar Navigation Items

| State | Background | Text Color | Icon Color | Left Indicator |
|---|---|---|---|---|
| **Default** | transparent | `--text-secondary` | `--text-muted` | none |
| **Hover** | `--surface-2` | `--text-primary` | `--text-secondary` | none |
| **Active** | `hsl(217, 91%, 60%, 0.1)` | `--primary` | `--primary` | 3px `--primary` bar |
| **Disabled** | transparent | `--text-disabled` | `--text-disabled` | none |

### Topbar Elements

| Element | Specification |
|---|---|
| **Breadcrumbs** | text-sm, segments separated by `/` in `--text-muted`, last segment in `--text-primary` |
| **Search** | 280px wide, 36px tall, `--surface-2` bg, placeholder "Search... ⌘K" |
| **Notification bell** | 36px × 36px ghost button, badge dot (8px, `--destructive`) when unread |
| **User avatar** | 32px × 32px, radius-full, dropdown on click |

### Dialog / Modal

| Property | Value |
|---|---|
| Width | 480px (sm), 640px (md), 800px (lg) |
| Max height | 85vh |
| Padding | 24px |
| Header | text-h3 (22px, 600), 16px bottom margin |
| Footer | 16px top border, 16px top padding, right-aligned buttons |
| Overlay | black at 60% opacity (dark), black at 40% opacity (light) |
| Border Radius | radius-xl (12px) |
| Animation | scale 0.95→1.0, opacity 0→1, 150ms ease-out |

### Toast Notifications

| Property | Value |
|---|---|
| Position | Bottom-right, 24px from edges |
| Width | 380px |
| Padding | 16px |
| Border Radius | radius-lg (8px) |
| Auto-dismiss | 5 seconds |
| Animation | slide up + fade in, 200ms |
| Max visible | 3 stacked (8px gap) |

---

## 8. Animation Specifications

### Core Principle
Animations are **functional, not decorative**. Max duration 200ms. Only animate properties that provide user feedback or spatial context.

| Animation | Duration | Easing | Properties |
|---|---|---|---|
| **Sidebar collapse** | 200ms | `ease-in-out` | width 240px→64px, label opacity 1→0 |
| **Sidebar expand** | 200ms | `ease-in-out` | width 64px→240px, label opacity 0→1 |
| **Page fade-in** | 150ms | `ease-out` | opacity 0→1 |
| **Card hover lift** | 150ms | `ease` | translateY(0)→(-1px), border-color change |
| **Button press** | 100ms | `ease` | scale(1)→(0.98) on mousedown |
| **Dialog open** | 150ms | `ease-out` | scale(0.95→1), opacity(0→1) |
| **Dialog close** | 100ms | `ease-in` | scale(1→0.95), opacity(1→0) |
| **Toast enter** | 200ms | `ease-out` | translateY(100%)→(0), opacity(0→1) |
| **Toast exit** | 150ms | `ease-in` | translateY(0)→(-20px), opacity(1→0) |
| **Skeleton pulse** | 1.5s loop | `ease-in-out` | opacity 0.4→0.7→0.4 |
| **Dropdown open** | 100ms | `ease-out` | scaleY(0.95→1), opacity(0→1) |
| **Tab switch** | 150ms | `ease` | Active indicator slides horizontally |

### Loading States (Skeleton Screens)

- All loading states use skeleton placeholders matching the actual content shape
- Skeletons use `--surface-2` base with `--surface-3` pulse
- Text skeletons: 60-80% width, matching line height of actual text
- Card skeletons: exact card dimensions with rounded placeholder blocks
- Never use spinners for page-level loading (skeletons only)
- Spinners allowed only for inline actions (button loading state)

---

## 9. Page-Specific Visual Specs

### Landing Page (Public)

```
NAVBAR:     h-16 (64px), transparent bg → blur backdrop on scroll
            logo left (28px mark + text), nav right, CTA button right-most
            sticky top-0, z-50

HERO:       padding 120px vertical (desktop), 80px (mobile)
            centered text, max-width 800px
            heading: text-display (48px, 700), white
            subheading: text-body (16px, 400), --text-secondary, max-width 560px
            CTAs: 16px gap between buttons, margin-top 32px
            background: --gradient-glow (radial blue glow behind center)
            floating preview card below: 800px wide, glassmorphism border

FEATURES:   padding 96px vertical
            3-column grid (gap 32px), single column on mobile
            feature card: icon (40px, --primary bg circle), h3 title, body description
            section heading: text-h1, centered

PRICING:    padding 96px vertical
            3 cards side-by-side (gap 24px)
            recommended card: --primary border, "Popular" badge, scale(1.03)
            card: h-auto, padding 32px, radius-xl
            price: text-display (48px), period in text-sm muted

FOOTER:     padding 48px vertical
            4-column grid: Company, Product, Resources, Legal
            bottom bar: border-top, copyright text, social icons
```

### Dashboard (Authenticated)

```
PAGE HEADER: "Dashboard" text-h1, "Welcome back, {name}" text-body --text-secondary
             margin-bottom 32px

STATS ROW:   4-column grid (gap 16px), 2-col on tablet, 1-col mobile
             each stat card as specified in component specs

PROJECTS:    heading "Recent Projects" text-h3, "View All" link right-aligned
             3-column grid (gap 16px), project cards
             margin-top 32px

ACTIVITY:    heading "Recent Activity" text-h3
             list of items, each 48px row, avatar(24px) + text + timestamp
             max 8 items visible, "View all" link
             margin-top 32px
```

### Project Detail

```
HEADER:      project name text-h1, description text-body --text-secondary
             action bar: Upload (primary), Generate (secondary), Share (ghost)
             buttons right-aligned, 8px gap between
             margin-bottom 24px

TABS:        Documents | Generated | Activity
             tab bar: border-bottom 1px --border
             active tab: text --primary, 2px bottom border --primary
             tab height: 40px, padding 0 16px

DOCUMENT TABLE: full-width, specs per Data Table component
                empty state: centered, icon (48px), heading, description, upload CTA

UPLOAD ZONE: dashed border 2px --border, radius-lg
             80px vertical padding
             cloud icon (40px, --text-muted), heading text-body-medium
             "or click to browse" text-sm --text-muted
             drag-active state: border-color --primary, --primary bg at 5%
```

### AI Generation

```
LAYOUT:      2-column at lg+ (60/40 split), single column below
             left: form controls
             right: live preview panel

FORM:        step indicator at top (3 steps: Type → Configure → Generate)
             step indicator: horizontal, circles connected by lines
             active step: --primary circle, completed: --success check
             each step reveals form section with slide animation

PREVIEW:     sticky panel (top 88px = topbar + 32px)
             --surface-1 bg, radius-lg, padding 24px
             "Preview" label text-xs --text-muted
             streaming text renders with typewriter cursor (blinking |)
```

---

## 10. Iconography

- **Library**: Lucide React (consistent stroke width, MIT license)
- **Default size**: 20px for navigation, 16px inline, 24px for card headers
- **Stroke width**: 1.75px (default Lucide)
- **Color**: inherits parent text color via `currentColor`
- **Key icon mapping**:

| Context | Icon Name |
|---|---|
| Dashboard | `LayoutDashboard` |
| Projects | `FolderKanban` |
| Documents | `FileText` |
| AI Generation | `Sparkles` |
| Reviews | `CheckCircle2` |
| Settings | `Settings` |
| Upload | `CloudUpload` |
| Search | `Search` |
| Notifications | `Bell` |
| User Menu | `ChevronDown` (next to avatar) |
| PDF file | `FileText` (red accent) |
| DOCX file | `FileText` (blue accent) |
| Excel file | `Sheet` (green accent) |
| Processing | `Loader2` (animated spin) |
| Success | `CheckCircle2` |
| Error | `AlertCircle` |
| Delete | `Trash2` |
| Edit | `Pencil` |
| Download | `Download` |
| Share | `Share2` |
| Expand sidebar | `PanelLeftOpen` |
| Collapse sidebar | `PanelLeftClose` |

---

## 11. Dark/Light Mode Strategy

- **Default**: Dark mode (matches brand identity, premium feel)
- **Toggle**: User preference stored in `localStorage`, system preference as fallback
- **Implementation**: `.dark` class on `<html>` element, toggled via ThemeProvider
- **Transition**: No color transition animation (instant swap to avoid flash)
- All colors defined as CSS custom properties with `:root` (light) and `.dark` (dark) overrides
- Images/illustrations: use `mix-blend-mode: luminosity` or provide dark/light variants
- Charts: separate color palettes for dark/light ensuring contrast

---

## 12. Glassmorphism & Special Effects

Used **sparingly** — only on landing page and hero elements.

```css
.glass-card {
  background: hsl(222, 35%, 10%, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid hsl(222, 20%, 25%, 0.5);
  border-radius: var(--radius-xl);
}
```

**Gradient border glow** (for featured/promoted cards):
```css
.glow-border {
  position: relative;
}
.glow-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: var(--gradient-brand);
  opacity: 0.5;
  z-index: -1;
  filter: blur(8px);
}
```

---

## 13. Accessibility Requirements

| Requirement | Standard |
|---|---|
| Text contrast (normal) | ≥ 4.5:1 (WCAG AA) |
| Text contrast (large) | ≥ 3:1 |
| Focus indicators | 3px ring, `--primary` at 25% opacity |
| Touch targets | ≥ 44px minimum (mobile) |
| Keyboard navigation | Full tab order, Enter/Space activation |
| Screen reader | Semantic HTML, aria-labels on icon-only buttons |
| Reduced motion | `prefers-reduced-motion: reduce` → disable all animations |
| Color independence | Never use color alone to convey meaning (always pair with icon/text) |
