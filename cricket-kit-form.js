/**
 * Cricket Kit Order Form - BigCommerce Stencil Integration
 * Vanilla JavaScript implementation
 */

(function() {
  'use strict';

  // Image paths configuration - UPDATE THESE PATHS to match your BigCommerce asset URLs
  const IMAGE_BASE_PATH = '/content/images/cricket-kit/'; // Adjust this path as needed
  
  const trainingColorImages = {
    'navy-yellow': IMAGE_BASE_PATH + 'shirt-navy-yellow.jpg',
    'white-black': IMAGE_BASE_PATH + 'shirt-white-black.jpg',
    'blue-red': IMAGE_BASE_PATH + 'shirt-blue-red.jpg'
  };

  const playingColorImages = {
    'green': IMAGE_BASE_PATH + 'shirt-green.jpg',
    'black': IMAGE_BASE_PATH + 'shirt-black.jpg',
    'navy': IMAGE_BASE_PATH + 'shirt-navy.jpg'
  };

  const shortsColorImages = {
    'black': IMAGE_BASE_PATH + 'shorts-black.jpg',
    'navy': IMAGE_BASE_PATH + 'shorts-navy.jpg'
  };

  const trousersColorImages = {
    'black': IMAGE_BASE_PATH + 'trousers-black.jpg',
    'navy': IMAGE_BASE_PATH + 'trousers-navy.jpg'
  };

  const trainingColorLabels = {
    'navy-yellow': 'Navy/Yellow',
    'white-black': 'White/Black',
    'blue-red': 'Blue/Red'
  };

  const playingColorLabels = {
    'green': 'Green',
    'black': 'Black',
    'navy': 'Navy'
  };

  const shortsColorLabels = {
    'black': 'Black',
    'navy': 'Navy'
  };

  const trousersColorLabels = {
    'black': 'Black',
    'navy': 'Navy'
  };

  // Form state
  const formState = {
    mens: false,
    womens: false,
    junior: false,
    mensColor: '',
    womensColor: '',
    juniorColor: '',
    mensPlaying: false,
    womensPlaying: false,
    juniorPlaying: false,
    mensPlayingColor: '',
    womensPlayingColor: '',
    juniorPlayingColor: '',
    mensShorts: false,
    womensShorts: false,
    juniorShorts: false,
    mensShortsColor: '',
    womensShortsColor: '',
    juniorShortsColor: '',
    mensTrousers: false,
    womensTrousers: false,
    juniorTrousers: false,
    mensTrousersColor: '',
    womensTrousersColor: '',
    juniorTrousersColor: ''
  };

  // Initialize the form
  function init() {
    setupSectionToggles();
    setupItemToggles();
    setupColorSelects();
  }

  // Setup section toggle handlers (Training Shirts, Training Shorts, etc.)
  function setupSectionToggles() {
    const sectionToggles = [
      { toggleId: 'training-section-toggle', sectionId: 'training-shirts-section' },
      { toggleId: 'training-shorts-section-toggle', sectionId: 'training-shorts-section' },
      { toggleId: 'playing-section-toggle', sectionId: 'playing-shirts-section' },
      { toggleId: 'playing-trousers-section-toggle', sectionId: 'playing-trousers-section' }
    ];

    sectionToggles.forEach(function(config) {
      const toggle = document.getElementById(config.toggleId);
      const section = document.getElementById(config.sectionId);
      
      if (toggle && section) {
        toggle.addEventListener('change', function() {
          section.style.display = this.checked ? 'block' : 'none';
        });
      }
    });
  }

  // Setup item toggle handlers (Mens, Womens, Junior)
  function setupItemToggles() {
    const itemToggles = [
      { toggleId: 'mens-toggle', sectionId: 'mens-section', stateKey: 'mens', colorKey: 'mensColor' },
      { toggleId: 'womens-toggle', sectionId: 'womens-section', stateKey: 'womens', colorKey: 'womensColor' },
      { toggleId: 'junior-toggle', sectionId: 'junior-section', stateKey: 'junior', colorKey: 'juniorColor' },
      { toggleId: 'mens-playing-toggle', sectionId: 'mens-playing-section', stateKey: 'mensPlaying', colorKey: 'mensPlayingColor' },
      { toggleId: 'womens-playing-toggle', sectionId: 'womens-playing-section', stateKey: 'womensPlaying', colorKey: 'womensPlayingColor' },
      { toggleId: 'junior-playing-toggle', sectionId: 'junior-playing-section', stateKey: 'juniorPlaying', colorKey: 'juniorPlayingColor' },
      { toggleId: 'mens-shorts-toggle', sectionId: 'mens-shorts-section', stateKey: 'mensShorts', colorKey: 'mensShortsColor' },
      { toggleId: 'womens-shorts-toggle', sectionId: 'womens-shorts-section', stateKey: 'womensShorts', colorKey: 'womensShortsColor' },
      { toggleId: 'junior-shorts-toggle', sectionId: 'junior-shorts-section', stateKey: 'juniorShorts', colorKey: 'juniorShortsColor' },
      { toggleId: 'mens-trousers-toggle', sectionId: 'mens-trousers-section', stateKey: 'mensTrousers', colorKey: 'mensTrousersColor' },
      { toggleId: 'womens-trousers-toggle', sectionId: 'womens-trousers-section', stateKey: 'womensTrousers', colorKey: 'womensTrousersColor' },
      { toggleId: 'junior-trousers-toggle', sectionId: 'junior-trousers-section', stateKey: 'juniorTrousers', colorKey: 'juniorTrousersColor' }
    ];

    itemToggles.forEach(function(config) {
      const toggle = document.getElementById(config.toggleId);
      const section = document.getElementById(config.sectionId);
      
      if (toggle && section) {
        toggle.addEventListener('change', function() {
          formState[config.stateKey] = this.checked;
          section.style.display = this.checked ? 'block' : 'none';
          
          if (!this.checked) {
            formState[config.colorKey] = '';
            const imageContainer = document.getElementById(config.sectionId.replace('-section', '-image'));
            if (imageContainer) {
              imageContainer.style.display = 'none';
              imageContainer.innerHTML = '';
            }
          }
          
          updateSuccessMessage();
        });
      }
    });
  }

  // Setup color select handlers
  function setupColorSelects() {
    const colorSelects = [
      { selectId: 'mens-color', imageId: 'mens-image', colorKey: 'mensColor', type: 'training' },
      { selectId: 'womens-color', imageId: 'womens-image', colorKey: 'womensColor', type: 'training' },
      { selectId: 'junior-color', imageId: 'junior-image', colorKey: 'juniorColor', type: 'training' },
      { selectId: 'mens-playing-color', imageId: 'mens-playing-image', colorKey: 'mensPlayingColor', type: 'playing' },
      { selectId: 'womens-playing-color', imageId: 'womens-playing-image', colorKey: 'womensPlayingColor', type: 'playing' },
      { selectId: 'junior-playing-color', imageId: 'junior-playing-image', colorKey: 'juniorPlayingColor', type: 'playing' },
      { selectId: 'mens-shorts-color', imageId: 'mens-shorts-image', colorKey: 'mensShortsColor', type: 'shorts' },
      { selectId: 'womens-shorts-color', imageId: 'womens-shorts-image', colorKey: 'womensShortsColor', type: 'shorts' },
      { selectId: 'junior-shorts-color', imageId: 'junior-shorts-image', colorKey: 'juniorShortsColor', type: 'shorts' },
      { selectId: 'mens-trousers-color', imageId: 'mens-trousers-image', colorKey: 'mensTrousersColor', type: 'trousers' },
      { selectId: 'womens-trousers-color', imageId: 'womens-trousers-image', colorKey: 'womensTrousersColor', type: 'trousers' },
      { selectId: 'junior-trousers-color', imageId: 'junior-trousers-image', colorKey: 'juniorTrousersColor', type: 'trousers' }
    ];

    colorSelects.forEach(function(config) {
      const select = document.getElementById(config.selectId);
      const imageContainer = document.getElementById(config.imageId);
      
      if (select && imageContainer) {
        select.addEventListener('change', function() {
          const color = this.value;
          formState[config.colorKey] = color;
          
          if (color) {
            displayImage(imageContainer, color, config.type);
          } else {
            imageContainer.style.display = 'none';
            imageContainer.innerHTML = '';
          }
          
          updateSuccessMessage();
        });
      }
    });
  }

  // Display the selected item image
  function displayImage(container, color, type) {
    let imageUrl, colorLabel, itemLabel;
    
    if (type === 'training') {
      imageUrl = trainingColorImages[color];
      colorLabel = trainingColorLabels[color];
      itemLabel = 'Training Shirt';
    } else if (type === 'playing') {
      imageUrl = playingColorImages[color];
      colorLabel = playingColorLabels[color];
      itemLabel = 'Playing Shirt';
    } else if (type === 'shorts') {
      imageUrl = shortsColorImages[color];
      colorLabel = shortsColorLabels[color];
      itemLabel = 'Training Shorts';
    } else if (type === 'trousers') {
      imageUrl = trousersColorImages[color];
      colorLabel = trousersColorLabels[color];
      itemLabel = 'Playing Trousers';
    }

    container.innerHTML = 
      '<div class="item-image-wrapper">' +
        '<img src="' + imageUrl + '" alt="' + colorLabel + ' cricket ' + itemLabel.toLowerCase() + '" class="item-image">' +
        '<div class="item-image-label">' +
          '<p class="item-image-text">' + colorLabel + ' ' + itemLabel + '</p>' +
        '</div>' +
      '</div>';
    
    container.style.display = 'block';
  }

  // Update success message visibility
  function updateSuccessMessage() {
    const hasAnySelection = Object.keys(formState).some(function(key) {
      if (key.includes('Color')) return false; // Skip color keys
      return formState[key] === true;
    });

    const successMessage = document.getElementById('success-message');
    if (successMessage) {
      successMessage.style.display = hasAnySelection ? 'block' : 'none';
    }
  }

  // Get form data (useful for submission)
  function getFormData() {
    return Object.assign({}, formState);
  }

  // Reset form
  function resetForm() {
    Object.keys(formState).forEach(function(key) {
      if (key.includes('Color')) {
        formState[key] = '';
      } else {
        formState[key] = false;
      }
    });

    // Reset all checkboxes
    document.querySelectorAll('.cricket-checkbox').forEach(function(checkbox) {
      checkbox.checked = false;
    });

    // Reset all selects
    document.querySelectorAll('.color-select').forEach(function(select) {
      select.value = '';
    });

    // Hide all sections
    document.querySelectorAll('.section-content, .item-details').forEach(function(section) {
      section.style.display = 'none';
    });

    // Hide all images
    document.querySelectorAll('.item-image-container').forEach(function(container) {
      container.style.display = 'none';
      container.innerHTML = '';
    });

    updateSuccessMessage();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose public API
  window.CricketKitForm = {
    getFormData: getFormData,
    resetForm: resetForm,
    formState: formState
  };

})();
