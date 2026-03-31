# Timer Fix for index.html

## Problem
The index.html file is too large (68KB+) for automated API updates. Manual fix required.

## Solution
Add the timer script to index.html.

### Method 1: Use Centralized Timer (Recommended)
1. Edit index.html: https://github.com/tylerherman19/WalkChallenge/edit/main/index.html
2. Scroll to the very bottom
3. Before the closing `</body>` tag, add:
```html
<script src="timer.js"></script>
</body>
```

### Method 2: Update Inline Timer (If Script Exists)
If there's already a `<script>` tag at the bottom with timer code:
1. Find the line: `var END = new Date(...);`
2. Replace with: `var END = new Date('04/01/2026 00:59:59');`

## Files Already Updated
- ✅ submit-steps.html - Timer set to April 1st 12:59 AM
- ✅ timer.js - Centralized timer created
- ⚠️ index.html - Awaiting manual update

## Test URLs
- Live site: https://speraxchallenge.com/
- Submit page: https://speraxchallenge.com/submit-steps.html (already working)
