# Cricket Kit Order Form - BigCommerce Stencil Integration Guide

This guide will help you integrate the Cricket Kit Order Form into your BigCommerce Stencil theme.

## Files Included

- `cricket-kit-form.html` - The HTML structure
- `cricket-kit-form.css` - All styles
- `cricket-kit-form.js` - JavaScript functionality
- Image files (10 total):
  - Training shirts: `shirt-navy-yellow.jpg`, `shirt-white-black.jpg`, `shirt-blue-red.jpg`
  - Playing shirts: `shirt-green.jpg`, `shirt-black.jpg`, `shirt-navy.jpg`
  - Shorts: `shorts-black.jpg`, `shorts-navy.jpg`
  - Trousers: `trousers-black.jpg`, `trousers-navy.jpg`

## Integration Steps

### 1. Upload Images to BigCommerce

1. Download all image files from your React project's `src/assets/` folder
2. In BigCommerce admin, go to **Storefront** → **Image Manager**
3. Create a new folder called `cricket-kit` (or any name you prefer)
4. Upload all 10 image files to this folder
5. Note the image URLs (they'll be something like `/content/images/cricket-kit/shirt-navy-yellow.jpg`)

### 2. Update Image Paths in JavaScript

Open `cricket-kit-form.js` and update the `IMAGE_BASE_PATH` constant at the top:

```javascript
const IMAGE_BASE_PATH = '/content/images/cricket-kit/'; // Your actual path
```

### 3. Add CSS to Your Theme

**Option A: Add as a separate asset file (Recommended)**

1. Upload `cricket-kit-form.css` to your theme's `assets/css/` folder via WebDAV
2. Reference it in your template:
   ```handlebars
   {{#partial "head"}}
       <link rel="stylesheet" href="{{cdn 'assets/css/cricket-kit-form.css'}}">
   {{/partial}}
   ```

**Option B: Add to existing stylesheet**

Copy the contents of `cricket-kit-form.css` into your theme's main CSS file (e.g., `assets/scss/theme.scss`)

### 4. Add HTML to Your Template

1. Navigate to your theme's `templates/pages/` folder
2. Create a new custom template file (e.g., `custom-cricket-kit-order.html`) or edit an existing page
3. Add the HTML structure:

```handlebars
{{#partial "page"}}

<!-- Add the CSS -->
<link rel="stylesheet" href="{{cdn 'assets/css/cricket-kit-form.css'}}">

<!-- Add the HTML content from cricket-kit-form.html -->
<div class="cricket-kit-form-container">
    <!-- Paste the entire HTML from cricket-kit-form.html -->
</div>

<!-- Add the JavaScript -->
<script src="{{cdn 'assets/js/cricket-kit-form.js'}}"></script>

{{/partial}}

{{> layout/base}}
```

### 5. Add JavaScript to Your Theme

**Option A: Add as a separate asset file (Recommended)**

1. Upload `cricket-kit-form.js` to your theme's `assets/js/` folder via WebDAV
2. Reference it in your template (as shown in step 4)

**Option B: Add to page-specific script**

Wrap the JavaScript in a Stencil script partial:

```handlebars
{{#partial "page-scripts"}}
    <script>
        // Paste the contents of cricket-kit-form.js here
    </script>
{{/partial}}
```

### 6. Create a Custom Page in BigCommerce

1. In BigCommerce admin, go to **Storefront** → **Web Pages**
2. Click **Create a Web Page**
3. Set the page type to your custom template (e.g., `custom-cricket-kit-order`)
4. Add page content (title, URL, etc.)
5. Save and publish

## Alternative: Quick Integration (Single Page)

If you want a faster integration without modifying theme files:

1. Upload images as described in Step 1
2. Update the JavaScript image paths
3. Create a new Web Page in BigCommerce
4. In the page content editor, switch to HTML mode
5. Paste this complete code:

```html
<!-- CSS -->
<style>
    /* Paste entire contents of cricket-kit-form.css here */
</style>

<!-- HTML -->
<!-- Paste entire contents of cricket-kit-form.html here -->

<!-- JavaScript -->
<script>
    // Paste entire contents of cricket-kit-form.js here
</script>
```

## Testing

1. Navigate to your page in the storefront
2. Test all functionality:
   - Toggle section visibility (Training Shirts, Training Shorts, etc.)
   - Toggle individual items (Mens, Womens, Junior)
   - Select colors and verify images display correctly
   - Check that the success message appears when selections are made

## Accessing Form Data

The form exposes a global JavaScript API:

```javascript
// Get current form data
var formData = window.CricketKitForm.getFormData();
console.log(formData);

// Reset the form
window.CricketKitForm.resetForm();

// Access raw state
var state = window.CricketKitForm.formState;
```

## Adding Form Submission

To capture and submit the form data, you can add a submit button and handler:

### 1. Add Submit Button to HTML

Add this before the closing `</div>` of `.cricket-kit-card-content`:

```html
<div class="form-submit-section">
    <button id="submit-order" class="submit-button">Submit Order</button>
</div>
```

### 2. Add Submit Button Styles to CSS

```css
.form-submit-section {
  margin-top: 2rem;
  text-align: center;
}

.submit-button {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

### 3. Add Submit Handler to JavaScript

Add this at the end of the `init()` function in `cricket-kit-form.js`:

```javascript
// Setup submit button
var submitButton = document.getElementById('submit-order');
if (submitButton) {
  submitButton.addEventListener('click', function() {
    var formData = getFormData();
    
    // Example: Send to your API endpoint
    fetch('/api/cricket-kit-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      alert('Order submitted successfully!');
      resetForm();
    })
    .catch(function(error) {
      console.error('Error:', error);
      alert('Error submitting order. Please try again.');
    });
  });
}
```

## Customization

### Colors and Styling

The CSS uses standard color values. You can customize:
- Primary color (currently `#2563eb`)
- Background gradients
- Border colors
- Font sizes

### Adding More Product Options

To add new color options or product types:

1. Add new images and upload to BigCommerce
2. Update the image mapping objects in the JavaScript
3. Add new HTML sections following the existing pattern
4. Add corresponding state keys to the `formState` object

## Browser Support

This implementation uses vanilla JavaScript (ES5) and is compatible with:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- IE 11 (with minor polyfills if needed)

## Troubleshooting

### Images Not Loading
- Verify image paths in `cricket-kit-form.js` match your BigCommerce image URLs
- Check that images were uploaded correctly in Image Manager
- Open browser console to see any 404 errors

### Styling Issues
- Ensure CSS is loaded (check Network tab in browser dev tools)
- Check for CSS conflicts with your theme's existing styles
- Add more specific selectors if needed (e.g., `.cricket-kit-form-container .section-title`)

### JavaScript Not Working
- Check browser console for JavaScript errors
- Ensure the script is loaded after the HTML
- Verify no JavaScript conflicts with other theme scripts

## Support

For BigCommerce-specific issues:
- [BigCommerce Developer Documentation](https://developer.bigcommerce.com/)
- [Stencil Theme Documentation](https://developer.bigcommerce.com/stencil-docs)

## Next Steps

Consider adding:
- Form validation before submission
- Integration with BigCommerce cart/checkout
- Email notifications upon form submission
- Admin panel to view submitted orders
- Size/quantity selectors for each item
