# Tailwind CSS v4 Migration Guide

## Summary of Changes

This project has been successfully migrated from **Tailwind CSS v3** to **Tailwind CSS v4**.

## Key Changes in Tailwind v4

### 1. **CSS-Based Configuration**

Tailwind v4 uses a new CSS-first configuration approach. Instead of `tailwind.config.ts` (JavaScript), configuration is now done directly in CSS using the `@theme` directive.

### 2. **New Import Syntax**

```css
/* Old (v3) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* New (v4) */
@import "tailwindcss";
```

### 3. **Theme Configuration with CSS Variables**

All theme customizations are now defined using CSS custom properties in the `@theme` block:

```css
@theme {
  /* Colors */
  --color-brand-500: #0179fe;

  /* Shadows */
  --shadow-custom: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  /* Animations */
  @keyframes my-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  --animate-my-animation: my-animation 1s ease-out;
}
```

## What Was Migrated

### ✅ Colors

All custom colors from the old config are now CSS variables:

- `fill-1` → `--color-fill-1`
- `bankGradient` → `--color-bank-gradient`
- `indigo-*` → `--color-indigo-*`
- `success-*` → `--color-success-*`
- `pink-*` → `--color-pink-*`
- `blue-*` → `--color-blue-*`
- `sky-1` → `--color-sky-1`
- `black-*` → `--color-black-*`
- `gray-*` → `--color-gray-*`

### ✅ Background Images

Custom background gradients and images:

- `bank-gradient` → `--background-image-bank-gradient`
- `gradient-mesh` → `--background-image-gradient-mesh`
- `bank-green-gradient` → `--background-image-bank-green-gradient`

### ✅ Box Shadows

Custom shadows:

- `form` → `--shadow-form`
- `chart` → `--shadow-chart`
- `profile` → `--shadow-profile`
- `creditCard` → `--shadow-credit-card`

### ✅ Font Families

- `inter` → `--font-family-inter`
- `ibm-plex-serif` → `--font-family-ibm-plex-serif`

### ✅ Animations

- `accordion-down` → `--animate-accordion-down`
- `accordion-up` → `--animate-accordion-up`

### ✅ Container Settings

- Center and padding configurations preserved

## Files Modified

1. **`app/globals.css`** - Updated with new `@import` and `@theme` syntax
2. **`package.json`** - Removed incompatible `tw-animate-css` package
3. **`postcss.config.mjs`** - Already configured correctly for v4
4. **`assets/tailwind.config.ts`** - Deleted (no longer needed)

## Usage in Your Code

### Using Custom Colors

```tsx
// These work the same as before
<div className="bg-bank-gradient">
<div className="text-indigo-500">
<div className="border-gray-200">
```

### Using Custom Shadows

```tsx
<div className="shadow-form">
<div className="shadow-chart">
<div className="shadow-credit-card">
```

### Using Background Images

```tsx
<div className="bg-bank-gradient">
<div className="bg-gradient-mesh">
<div className="bg-bank-green-gradient">
```

### Using Animations

```tsx
<div className="animate-accordion-down">
<div className="animate-accordion-up">
```

## Benefits of v4

1. **Faster Build Times** - CSS-native approach is more performant
2. **Better IDE Support** - CSS variables provide better autocomplete
3. **Simpler Configuration** - No need for separate config files
4. **Smaller Bundle Size** - More efficient CSS generation
5. **Modern CSS Features** - Built on latest CSS specifications

## Testing Your Application

The development server is confirmed working:

```bash
npm run dev
```

Visit: http://localhost:3000

## If You Need to Add More Custom Styles

Simply add to the `@theme` block in `app/globals.css`:

```css
@theme {
  /* Your existing config... */

  /* Add new colors */
  --color-custom-primary: #ff6b6b;

  /* Add new shadows */
  --shadow-custom: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* Add new animations */
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  --animate-fade-in: fade-in 0.3s ease-out;
}
```

Then use them in your JSX:

```tsx
<div className="bg-custom-primary shadow-custom animate-fade-in">
```

## Dark Mode

Dark mode still works the same way with the `class` strategy. You can continue using `dark:` prefix in your classes.

## Troubleshooting

### If styles aren't applying:

1. Restart the dev server: `npm run dev`
2. Clear Next.js cache: `rm -rf .next`
3. Rebuild: `npm run build`

### If you see "Cannot apply unknown utility class" errors:

This happens when using `@apply` with custom utilities that reference themselves or haven't been defined yet.

**Solution:** Define custom utilities with plain CSS first (without `@apply`), then use them in other utilities.

```css
/* ✅ CORRECT: Define base utilities with plain CSS */
.text-16 {
  font-size: 16px;
  line-height: 24px;
}

/* ✅ CORRECT: Then use them with @apply */
.input-class {
  @apply text-16 rounded-lg border;
}

/* ❌ WRONG: Don't use @apply for self-contained utilities */
.text-16 {
  @apply text-[16px] leading-[24px]; /* Causes circular dependency */
}
```

### If you see CSS variable errors:

Make sure you're using the correct naming convention:

- Colors: `--color-*`
- Shadows: `--shadow-*`
- Fonts: `--font-family-*`
- Background images: `--background-image-*`
- Animations: `--animate-*`

## References

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
- [Tailwind CSS v4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)

---

**Migration completed successfully! Your project is now running on Tailwind CSS v4.** 🎉
