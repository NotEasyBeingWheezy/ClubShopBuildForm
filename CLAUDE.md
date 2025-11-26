# CLAUDE.md - AI Assistant Guide for ClubShopBuildForm

## Project Overview

This is a **Cricket Kit Order Form** web application designed for NX-Teamwear to help cricket clubs build custom shop orders. The application is a vanilla JavaScript single-page application (no frameworks) that allows users to:

- Enter club and personal information
- Select cricket kit items (playing whites, coloured kit, training kit, equipment, etc.)
- Choose colors and variations for each item
- See real-time previews of selected items with images
- View a live summary of all selections
- Add custom notes to orders

**Target Platform**: Designed for integration into BigCommerce Stencil themes (see INTEGRATION-GUIDE.md)

**Tech Stack**: Vanilla HTML, CSS, and JavaScript (ES5+ compatible, no build tools required)

## Repository Structure

```
ClubShopBuildForm/
├── index.html              # Main HTML structure with semantic markup
├── script.js              # Core application logic (~1357 lines)
├── styles.css             # Complete styling with responsive design
├── INTEGRATION-GUIDE.md   # BigCommerce integration instructions
├── assets/                # Product images (11 files)
│   ├── shirt-*.jpg       # Various shirt color combinations
│   ├── shorts-navy.jpg
│   └── trousers-navy.jpg
└── MaterialDesignTest/    # Legacy/experimental design (can be ignored)
    └── index.html
```

## Core Architecture

### Application Pattern: IIFE Module Pattern

The application uses an Immediately Invoked Function Expression (IIFE) to encapsulate all logic:

```javascript
(function() {
  'use strict';
  // All code isolated in this scope
})();
```

**Key Benefits**:
- No global namespace pollution
- Only exposes `window.CricketKitForm` API
- Prevents variable conflicts

### Data-Driven Configuration

All product data is defined in a single `CONFIG` object at script.js:4-686:

```javascript
const CONFIG = {
  clubFields: [...],      // Club information form fields
  personalFields: [...],  // Personal information form fields
  kitSections: [...]      // All product categories and items
};
```

**Important**: When adding/modifying products, update the CONFIG object, not the HTML.

### State Management

Global state is managed in the `formState` object (script.js:688):

```javascript
const formState = {};
```

**State Structure**:
- Simple fields: `formState['clubName'] = 'value'`
- File fields: `formState['club-logo'] = [{name, size, file, id}, ...]`
- Toggles: `formState['whites-shortSleeveCricketShirt-men\'s-toggle'] = true/false`
- Colors: `formState['training-shirts-men\'s'] = 'navy-yellow'`
- Notes: `formState['notes'] = 'text'`

### Event-Driven Architecture

The application uses **event delegation** (script.js:954-1227) with a single event listener on `document`:

```javascript
document.addEventListener('click', e => { /* handle all clicks */ });
document.addEventListener('change', e => { /* handle all changes */ });
document.addEventListener('input', e => { /* handle all inputs */ });
```

**Pattern**: Uses `data-*` attributes to identify interactive elements:
- `data-section-toggle` - Section visibility toggles
- `data-item-toggle` - Item visibility toggles
- `data-color` - Color selection dropdowns
- `data-field` - Form input fields
- `data-file-upload` - File upload inputs
- `data-remove-file` - File removal buttons

## Key Features & Implementation

### 1. Hierarchical Toggle System

**Three Levels**:
1. **Section Level**: "Playing Whites", "Training Kit", etc.
2. **Group Level**: "Short Sleeve Cricket Shirt", "Training Shorts", etc.
3. **Item Level**: "Men's", "Women's", "Junior"

**Toggle Behavior** (script.js:1040-1100):
- Deselecting a parent automatically deselects all children
- Deselecting clears all associated color selections
- Always updates the summary sidebar

### 2. Dynamic Image Display

**Image System** (script.js:1102-1204):
- Images load based on color selection
- Special "Masuri" combination images for training shirts (men's only)
- Images stored in `assets/` folder
- Each color option has `data-image` attribute pointing to image URL

**Masuri Combination Logic**:
- Men's training shirts can select both shirt color AND Masuri color
- Combined images show shirt + Masuri color combination
- Data structure at script.js:198-217

### 3. Real-Time Order Summary

**Live Updates** (script.js:1229-1339):
- Sidebar shows all current selections
- Updates on every form interaction
- Shows empty state when no selections made
- Organized by section (Club Info, Personal Info, Kit Selections, Notes)

**Summary Logic**:
- Only shows toggled items with color selections
- Handles "no-size-variation" items (bags, equipment, etc.)
- Formats display names automatically

### 4. File Upload System

**Multi-File Support** (script.js:1005-1037):
- Club logos and sponsor logos accept multiple files
- Files stored as objects: `{name, size, file, id}`
- Removable file list with visual feedback
- File names sanitized to remove paths

**File State Management**:
```javascript
formState['club-logo'] = [
  {name: 'logo.png', size: 12345, file: File, id: 1732567890123.456},
  // ... more files
];
```

### 5. Floating Label Inputs

**Modern UX Pattern** (styles.css:97-177):
- Labels float up when input has value or focus
- Uses `:placeholder-shown` CSS pseudo-class
- JavaScript fallback with `.has-value` class
- Supports text inputs, selects, and textareas

## Development Workflows

### Adding a New Product Category

1. **Update CONFIG** (script.js:37-685):
```javascript
{
  id: 'new-category',
  title: 'New Category',
  groups: [
    {
      id: 'new-item',
      title: 'New Item',
      items: ['men\'s', 'women\'s', 'junior'],
      colors: {
        options: [
          { value: 'navy', label: 'Navy', image: './assets/new-item-navy.jpg' }
        ]
      }
    }
  ]
}
```

2. **Add images** to `assets/` folder

3. **No HTML changes needed** - renders automatically via `renderKitSections()`

### Adding a New Color Option

1. Add to relevant group's `colors.options` array:
```javascript
{ value: 'purple', label: 'Purple', image: './assets/item-purple.jpg' }
```

2. Add corresponding image to `assets/`

### Adding a New Form Field

**For Club/Personal Info**:

1. Add to `CONFIG.clubFields` or `CONFIG.personalFields`:
```javascript
{ id: 'newField', label: 'New Field', type: 'text', required: true }
```

2. Field renders automatically via `renderClubInfo()` or `renderPersonalInfo()`

**Supported Field Types**:
- `text`, `email`, `tel` - Standard inputs
- `select` - Dropdown (requires `options` array)
- `file` - File upload (supports `multiple` and `accept`)

### Modifying Styles

**Color Scheme**: Primary blue gradient (`#2563eb`, `#1d4ed8`)

**Key CSS Classes**:
- `.cricket-kit-*` - Main component classes
- `.floating-input` - Form input wrapper
- `.section-toggle-header` - Collapsible section headers
- `.item-toggle-header` - Item-level toggles
- `.order-summary-*` - Sidebar summary components

**Responsive Breakpoints**:
- Mobile: `max-width: 640px`
- Tablet: `max-width: 768px`
- Desktop: `min-width: 1024px` (sticky sidebar activates)

## Code Conventions

### Naming Conventions

**Variables**: camelCase
```javascript
const formState = {};
const imageContainer = document.querySelector(...);
```

**CSS Classes**: kebab-case with BEM-like structure
```css
.cricket-kit-form-container
.section-toggle-header
.item-image-wrapper
```

**Data Attributes**: kebab-case
```html
data-section-toggle="whites"
data-item-toggle="whites-shortSleeveCricketShirt-men's"
```

**Key Generation Pattern**:
```javascript
const groupKey = `${sectionId}-${group.id}`;
const itemKey = `${groupKey}-${item}`;
```

### DOM Manipulation

**Prefer**:
- `querySelector` / `querySelectorAll` over `getElementById`
- Event delegation over individual listeners
- `innerHTML` for rendering blocks of HTML
- `classList` for class manipulation

**Avoid**:
- Direct DOM property manipulation
- Inline event handlers
- Global variables (except the exposed API)

### String Handling

**Escaping**: Be careful with quotes in item names:
```javascript
items: ['men\'s', 'women\'s', 'junior']  // Escaped single quotes
```

**Capitalization Helper**:
```javascript
function capitalizeWords(str) {
  return str.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}
```

## Common Tasks

### Testing the Form Locally

1. Open `index.html` in a web browser (any modern browser)
2. No build process or server required
3. Check browser console for any errors

### Inspecting Form State

Open browser console and run:
```javascript
// Get current form data
window.CricketKitForm.getFormData();

// View raw state
console.log(window.CricketKitForm.formState);
```

### Debugging Event Handlers

Add console logs in event delegation blocks:
```javascript
document.addEventListener('change', e => {
  console.log('Changed element:', e.target);
  console.log('Data attributes:', e.target.dataset);
  // ... rest of handler
});
```

### Testing Specific Sections

Use browser DevTools to manually set state:
```javascript
// Manually toggle a section
const checkbox = document.querySelector('[data-section-toggle="training"]');
checkbox.checked = true;
checkbox.dispatchEvent(new Event('change', { bubbles: true }));
```

## Integration Guidelines

### BigCommerce Integration

See `INTEGRATION-GUIDE.md` for complete instructions.

**Key Points**:
- Upload images to BigCommerce Image Manager
- Update `IMAGE_BASE_PATH` if using custom path
- Can be integrated as custom template or inline in page
- No dependencies on external libraries

### API Integration

The form exposes a public API at `window.CricketKitForm`:

```javascript
window.CricketKitForm = {
  getFormData: () => formState
};
```

**To add form submission**:

1. Add submit button to HTML
2. Add click handler in `setupEventListeners()`
3. Use `getFormData()` to retrieve current selections
4. POST to your API endpoint

**Example**:
```javascript
document.getElementById('submit-btn').addEventListener('click', () => {
  const data = window.CricketKitForm.getFormData();
  fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
});
```

## Important Notes for AI Assistants

### When Making Changes

1. **Always read the file first** before modifying
2. **Test locally** after changes (open index.html in browser)
3. **Check browser console** for JavaScript errors
4. **Verify responsive design** on mobile/tablet/desktop
5. **Update this CLAUDE.md** if architecture changes

### Code Organization Principles

- **Configuration-driven**: Add products via CONFIG, not hardcoded HTML
- **Event delegation**: Don't add individual event listeners
- **Single source of truth**: formState holds all data
- **Functional approach**: Pure functions where possible
- **No dependencies**: Keep it vanilla JavaScript

### Common Pitfalls to Avoid

1. **Don't** modify the HTML structure without updating script.js selectors
2. **Don't** add new global variables (use the IIFE scope)
3. **Don't** create duplicate event listeners (use delegation)
4. **Don't** hardcode product data in render functions (use CONFIG)
5. **Don't** forget to call `updateOrderSummary()` after state changes

### Performance Considerations

- Form state updates are synchronous (no debouncing needed)
- Image loading is lazy (only when color selected)
- Event delegation minimizes listener count
- Summary updates are efficient (no virtual DOM diffing)

### Security Considerations

- File uploads are client-side only (files not sent anywhere by default)
- No user input is executed as code
- No external scripts loaded
- No inline event handlers (CSP-friendly)

### Browser Compatibility

**Tested On**:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

**Uses**:
- Modern CSS (Grid, Flexbox)
- ES5+ JavaScript (const, let, arrow functions, template literals)
- `:placeholder-shown` pseudo-class (with fallback)

### File Upload Implementation Details

**Data Structure**:
```javascript
{
  name: 'filename.jpg',     // Sanitized filename
  size: 12345,              // Bytes
  file: File,               // Actual File object
  id: 1732567890123.456    // Unique timestamp-based ID
}
```

**Removal Logic**:
- Files identified by unique `id`
- Filters array to remove specific file
- Re-renders file list
- Updates summary

### Grid Layout Architecture

**Personal Info Fields** (styles.css:493-508):
- 2-column grid on desktop
- 1-column on mobile (< 768px)
- Consistent 18px gap

**Logo Upload Row** (styles.css:13-34):
- 2-column grid for club/sponsor logos side-by-side
- Stacks vertically on mobile

**Main Layout** (styles.css:227-231):
- Desktop (≥1024px): Form + sticky sidebar
- Mobile: Stacked layout

## Git Workflow

### Branch Naming

Branches follow pattern: `claude/<description>-<session-id>`

Example: `claude/add-notes-to-summary-01BFiY9PZhaNbsmpC4mMztUJ`

### Commit Messages

Follow the repository's existing style (from git log):
- Present tense, imperative mood
- Focus on "what" and "why"
- Examples:
  - "Fix input field spacing in personal information section"
  - "Add notes to summary"
  - "personal information grid"

### Pull Request Workflow

1. Develop on feature branch (starting with `claude/`)
2. Commit changes with clear messages
3. Push to origin with: `git push -u origin <branch-name>`
4. Create PR via GitHub UI (gh CLI not available)

## Recent Changes

Based on recent commit history:

1. **Personal Information Grid** - 2-column layout for name/role/email/phone
2. **Input Field Spacing Fix** - Improved spacing in personal info section
3. **Notes to Summary** - Additional notes now appear in order summary
4. **Comments Feature** - (Merged from dev branch)

## Testing Checklist

When making changes, verify:

- [ ] Form loads without console errors
- [ ] All sections can be toggled on/off
- [ ] All items can be toggled on/off
- [ ] Color selections display images correctly
- [ ] Masuri combinations work for men's training shirts
- [ ] File uploads show in file list
- [ ] File removal works correctly
- [ ] Order summary updates in real-time
- [ ] Summary shows correct selections
- [ ] Personal info fields are in 2-column grid
- [ ] Logo uploads are side-by-side
- [ ] Form is responsive on mobile/tablet/desktop
- [ ] Floating labels animate correctly
- [ ] No JavaScript errors in console
- [ ] Parent toggle deselects all children
- [ ] Notes appear in summary when filled

## Troubleshooting Guide

### Issue: Images not loading

**Check**:
1. Image paths in CONFIG match actual files in `assets/`
2. Browser console for 404 errors
3. Image file names (case-sensitive on some systems)

### Issue: Toggle not working

**Check**:
1. `data-section-toggle` or `data-item-toggle` attributes present
2. Event listeners are set up (check `setupEventListeners()` called)
3. Browser console for JavaScript errors

### Issue: Summary not updating

**Check**:
1. `updateOrderSummary()` is called after state changes
2. formState is being updated correctly
3. Check console for errors in summary generation

### Issue: Floating labels stuck

**Check**:
1. Input has `placeholder=" "` attribute
2. CSS includes `:placeholder-shown` rules
3. JavaScript adds `.has-value` class for selects

### Issue: File upload not working

**Check**:
1. Input has `data-file-upload` attribute
2. formState[fieldId] is initialized as array
3. File list container exists (`${fieldId}-list`)

## Future Enhancement Ideas

- Form validation before submission
- Size/quantity inputs for each item
- Price calculation and total
- Shopping cart integration
- PDF export of selections
- Email form data to sales team
- Save/load draft functionality
- Admin dashboard for viewing orders
- Localization/internationalization
- Accessibility improvements (ARIA labels)

## Conclusion

This is a well-structured, maintainable vanilla JavaScript application. The configuration-driven approach makes it easy to add products without changing core logic. The event delegation pattern keeps the codebase clean and performant.

**Key Philosophy**: Simple, dependency-free, maintainable code that works everywhere.

---

**Last Updated**: 2025-11-25
**Version**: Based on commit `1099a4b`
**Maintainer**: NX-Teamwear Development Team
