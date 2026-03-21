# Design System Specification

## 1. Overview & Creative North Star: "The Architectural Void"
This design system is built upon the concept of **The Architectural Void**. Unlike standard UI that seeks to fill every pixel with "utility," this system treats negative space as a premium material. Inspired by the precision of 2026-era modernism, the aesthetic mimics a high-end architectural portfolio—where the structure is felt rather than seen.

We break the "template" look by utilizing intentional asymmetry, extreme typographic scale shifts, and the rejection of structural lines. The goal is to create a digital environment that feels breathable, silent, and highly intentional. We do not use boxes to contain content; we use light, depth, and distance.

---

## 2. Colors & Surface Logic
The palette is a study in whites and neutrals, punctuated by a singular, high-energy focus color.

### The Surface Hierarchy
Depth is achieved through **Tonal Layering** rather than outlines. We use the Material Design surface tiers to define importance:
*   **Base Canvas:** `surface` (#f9f9fb) / `surface_container_lowest` (#ffffff).
*   **Secondary Sections:** `surface_container_low` (#f2f4f6).
*   **Floating Elements:** `surface_container_highest` (#dde3e9) or Glassmorphic layers.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. All boundaries must be created via:
1.  **Background Color Shifts:** A `surface_container_low` card sitting on a `surface` background.
2.  **Vast Whitespace:** Using the `20` (7rem) or `24` (8.5rem) spacing tokens to separate conceptual blocks.

### The "Glass & Gradient" Rule
To elevate the UI beyond a "flat" look, use Glassmorphism for persistent navigation and floating overlays. 
*   **Token:** `surface_container_lowest` at 70% opacity + `backdrop-filter: blur(32px)`.
*   **Signature Texture:** Main Action Buttons may use a subtle linear gradient from `primary` (#4d4ad5) to `primary_dim` (#403cc8) at a 15-degree angle to provide a "jewel-like" finish.

---

## 3. Typography
We utilize **Manrope** for its geometric precision. To achieve the "Architectural" feel, we employ **Tight Tracking** (-0.02em to -0.04em) on all headlines.

*   **Display Scale:** Use `display-lg` (3.5rem) for hero statements. This should be paired with vast negative space to act as a visual anchor.
*   **The Editorial Contrast:** Pair large `headline-lg` titles with `label-sm` metadata in `on_surface_variant`. The massive jump in scale creates a sophisticated, curated rhythm.
*   **Body Copy:** Maintain high readability using `body-md` (0.875rem) with increased line height (1.6) to ensure the "breathable" feel extends to long-form text.

---

## 4. Elevation & Depth
In this system, elevation is a physical property of light, not a "style."

### Ambient Shadows
Shadows must be invisible yet felt. Avoid standard drop shadows.
*   **Formula:** Use 3-4 stacked layers with increasing blur and decreasing opacity. 
*   **Color:** Use the `on_surface` color at 4%-6% opacity. 
*   **Blur:** Start at `40px` for a "soft lift."

### The "Ghost Border" Fallback
If an element requires a container for accessibility (e.g., an input field), use a **Ghost Border**:
*   **Width:** 0.5px (or 1px at 0.5 scale).
*   **Color:** `outline_variant` at 20% opacity. 
*   **Rule:** Never use 100% opaque borders.

### Surface Nesting
Instead of a flat grid, treat the UI as a series of nested paper sheets. An inner content area should be `surface_container_low` inside a `surface` parent, creating a "carved-out" look.

---

## 5. Components

### Buttons
*   **Primary:** High-end 'Electric Indigo' (`primary`). Roundedness: `full`. No border.
*   **Secondary:** Glassmorphic (70% white, blur). 0.5px Ghost Border.
*   **Tertiary:** Text-only in `primary` with a 2px underline that only appears on hover, utilizing a "spring" animation.

### Input Fields
*   **Styling:** Forgo the box. Use a subtle `surface_container_low` background with a 0.5px bottom-only border in `primary`. 
*   **Focus State:** The bottom border expands to 1.5px in `primary` with a soft glow.

### Cards & Lists
*   **The Divider Prohibition:** Divider lines are strictly forbidden. Use `spacing-6` (2rem) of vertical white space to separate list items.
*   **Interaction:** On hover, a card should not "lift" with a shadow; instead, it should transition its background color from `surface_container_low` to `surface_container_lowest`.

### Navigation (The Floating Dock)
*   Instead of a top-bar, use a floating bottom or top "Dock."
*   **Style:** `surface_container_lowest` (70% opacity), `full` roundedness, 32px blur, and a 0.5px `outline_variant` border at 15% opacity.

---

## 6. Do's and Don'ts

### Do:
*   **Use extreme whitespace.** If a section feels "comfortable," add 20% more padding.
*   **Treat typography as an image.** Large, tight-tracked letters are the primary "graphic" of the system.
*   **Align to a rigid grid, then break it.** Place one element (like a pull-quote or an image) off-center to create a bespoke, non-templated feel.

### Don't:
*   **Don't use 1px solid black or dark grey borders.** It destroys the "Architectural" light.
*   **Don't use heavy gradients.** Any gradient must be so subtle it is almost imperceptible.
*   **Don't crowd the edges.** Elements should never feel "trapped" within their containers.
*   **Don't use icons unless necessary.** Use typography to communicate whenever possible; keep icons ultra-thin (0.5pt - 1pt stroke).

---

## 7. Signature Interaction: "The Soft Reveal"
All transitions in this design system should use a custom Cubic Bezier `(0.2, 0.8, 0.2, 1)`. Elements should not "pop" in; they should feel as though they are gliding into place through a thin layer of mist, reinforcing the high-end, premium nature of the experience.