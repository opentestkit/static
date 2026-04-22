# OTK STYLE GUIDE

**Single source of truth for LLMs & developers**

Keep every Open Test Kit page looking identical. Always use the hosted CSS.

## 1. Core Philosophy

High-density, dark-mode-first. Precision, mathematical contrast, "clean desk" aesthetic.
**Semantic HTML + existing component classes first.**
Utility wins, but **never hard-code colors, spacing, or fonts** — always use `--otk-*` tokens.

## 2. Foundation — Import in This Exact Order

```html
<html lang="en" data-theme="dark">
<head>
  <!-- OTK Foundation — DO NOT CHANGE ORDER -->
  <link rel="stylesheet" href="https://static.opentestkit.org/style/tokens.css">
  <link rel="stylesheet" href="https://static.opentestkit.org/style/base.css">
  <link rel="stylesheet" href="https://static.opentestkit.org/style/components.css">

  <!-- Project-specific overrides (optional) -->
  <style>
    :root { --otk-color-accent: #4816FF; }
  </style>
</head>
```

**`data-theme="dark"` on `<html>` is required.** Light mode is opt-in via `data-theme="light"`.

The IBM Plex font family is loaded automatically by `base.css` from `https://static.opentestkit.org/fonts/ibm-plex.css`. Do not add separate font imports.

## 3. Tokens

### Grayscale

`--otk-gray-0` (`#08080F`, off-black) → `--otk-gray-1000` (`#ffffff`, white)

Steps at every hundred: `100` `200` `300` `400` `500` `600` `700` `800` `900`

### Semantic Surfaces

| Token | Dark | Light |
|---|---|---|
| `--otk-color-bg` | `#08080F` | `#F4F4F6` |
| `--otk-color-bg-raised` | `#1a1a1a` | `#FFFFFF` |
| `--otk-color-bg-elevated` | `#333333` | `#FFFFFF` |
| `--otk-color-border` | `#333333` | `#cccccc` |
| `--otk-color-border-subtle` | `#1a1a1a` | `#e6e6e6` |

### Semantic Text

| Token | Dark | Light |
|---|---|---|
| `--otk-color-text` | `#ffffff` | `#08080F` |
| `--otk-color-text-secondary` | `#e6e6e6` | `#1a1a1a` |
| `--otk-color-text-muted` | `#cccccc` | `#333333` |
| `--otk-color-text-dim` | `#b3b3b3` | `#4d4d4d` |
| `--otk-color-text-disabled` | `#999999` | `#666666` |

### Accent

```
--otk-color-accent               #4816FF  (primary violet)
--otk-color-accent-dim           #2D00CC  (hover / pressed)
--otk-color-accent-subtle        #7A50FF  (lighter variant)
--otk-color-accent-surface       context-sensitive (see below)
--otk-color-accent-surface-dark  #110830
--otk-color-accent-surface-light #EEE9FF
```

`--otk-color-accent-surface` resolves automatically from `data-theme`.

### Status

| Token | Dark | Light |
|---|---|---|
| `--otk-color-success` | `#60b87a` | `#1A8040` |
| `--otk-color-warning` | `#e6d060` | `#8C6600` |
| `--otk-color-danger` | `#ff8080` | `#CC1A1A` |
| `--otk-color-note` | `#999999` | `#5C6070` |

Light-mode status colors are darkened to meet AAA contrast on `#F4F4F6`.

### Typography

```
--otk-font-sans   'IBM Plex Sans',  sans-serif
--otk-font-serif  'IBM Plex Serif', serif
--otk-font-mono   'IBM Plex Mono',  monospace
--otk-font-math   'IBM Plex Math',  serif
```

Scale: `--otk-text-xs` `sm` `base` `lg` `xl` `2xl` `3xl` `4xl`

Leading: `--otk-leading-tight` `normal` `loose`

Tracking: `--otk-tracking-tight` `normal` `wide` `wider`

### Spacing

`--otk-space-1` through `--otk-space-24` (0.25 rem steps):
`1` `2` `3` `4` `6` `8` `12` `16` `24`

### Layout

```
--otk-measure    68ch    (prose max-width)
--otk-radius     3px
--otk-radius-sm  2px
```

## 4. Components — Use These Aggressively

```
Layout:   .site-nav, .site-wordmark, .nav-links
          .section, .section-label
          .card, .card-title, .card-meta, .card-body, .card-grid
          .grid-2, .grid-3, .grid-sidebar

Buttons:  button, .btn
          .btn-primary, .btn-secondary, .btn-ghost, .btn-sm, .btn-danger
          .btn-disabled, .btn-loading, .btn-group

Forms:    .form-stack, .form-field, .form-row, .form-hint
          .check-group, .toggle, .toggle-track
          .field-error, .field-success
          native input / textarea / select / fieldset / legend

Content:  .callout, .callout-title
          .callout-note, .callout-success, .callout-warn, .callout-danger
          .tag, .tag-ok, .tag-warn, .tag-danger, .tag-muted
          .badge, .badge-default, .badge-success, .badge-warning,
            .badge-danger, .badge-accent, .badge-count
          .kv-list, .kv-item, .kv-key, .kv-val

Nav:      .breadcrumbs, .tabs, .tab-content, .pagination

Feedback: .toast, .toast-icon, .toast-body, .toast-title, .toast-msg,
            .toast-close, .toast-success, .toast-danger, .toast-warning
          .skeleton, .skeleton-text, .skeleton-heading, .skeleton-circle
          .progress, .progress-bar, .progress-bar-warn, .progress-bar-danger
          .empty-state, .empty-state-icon

Misc:     .avatar, .avatar-sm, .avatar-lg, .avatar-group
          .tooltip (data-tip attribute)
          .media, .media-body, .media-meta
          .divider-label
          .truncate, .line-clamp-2, .line-clamp-3

Utility:  .type-stack, .gap-sm, .gap-md, .mt-4, .mt-6, .flex-row
          .table-wrap, .table-striped
          .palette, .swatch, .swatch-label, .swatch-wrap
          .lead, .small
          .task-list, .footnotes

Markdown: .lead, .small, .task-list, .table-wrap, .table-striped, .footnotes
```

## 5. Theme Usage

```html
<!-- Dark (default) -->
<html lang="en" data-theme="dark">

<!-- Light (opt-in) -->
<html lang="en" data-theme="light">
```

All semantic tokens (`--otk-color-*`) resolve correctly in both themes. Never reference primitive gray tokens (e.g. `--otk-gray-800`) in component or page CSS — use semantic tokens so the theme system does its job.

## 6. Best Practices

- **Classes first.** Reach for `.card`, `.form-stack`, `.callout`, etc. before writing custom CSS.
- **Tokens only.** All spacing, typography, and color from `--otk-*` variables. No raw `px` (unless sub-pixel), `rem`, `#hex`, or `rgb()` outside token definitions.
- **No inline `style=`** and no custom classes if an existing class handles it.
- **High-density mindset.** Prefer smaller space tokens. Clean desk: minimal borders, clear hierarchy, no decoration for its own sake.
- **Dark default.** `data-theme="dark"` is always set on `<html>`. Light is explicitly opted into.
- **Custom CSS** must be minimal, scoped, and 100% token-based.
