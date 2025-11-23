(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    personalFields: [
      { id: 'clubName', label: 'Club Name', type: 'text', required: true },
      { id: 'clubWebsite', label: 'Club Website', type: 'text', required: true },
      { id: 'name', label: 'Name', type: 'text', required: true },
      { id: 'role', label: 'Role', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'phone', label: 'Phone', type: 'tel', required: true }
    ],
    
    kitSections: [

      { // Playing Whites
        id: 'whites',
        title: 'Playing Whites',
        groups: [
          {
            id: 'shortSleeveCricketShirt',
            title: 'Short Sleeve Cricket Shirt',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: null
          },
          {
            id: 'longSleeveCricketShirt',
            title: 'Long Sleeve Cricket Shirt',
            items: ['unisex', 'junior'],
            colors: null
          },
          {
            id: 'sleevelessSlipover',
            title: 'Sleeveless Slipover',
            items: ['unisex', 'junior'],
            colors: null
          },
          {
            id: 'longSleeveSlipover',
            title: 'Long Sleeve Slipover',
            items: ['unisex', 'junior'],
            colors: null
          },
          {
            id: 'whites-trousers',
            title: 'Playing Trousers',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: null
          }
        ]
      },
            { // Coloured Playing Kit
        id: 'playing',
        title: 'Coloured Playing Kit',
        groups: [
          {
            id: 'coloured-short-sleeve-cricket-shirt',
            title: 'Coloured Short Sleeve Cricket Shirt',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy' },
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black' },
                { value: 'red', label: 'Red', image: 'https://via.placeholder.com/400x500/FF4136/FFFFFF?text=Red' },
                { value: 'green', label: 'Green', image: 'https://via.placeholder.com/400x500/2ECC40/FFFFFF?text=Green' },
                { value: 'yellow', label: 'Yellow', image: 'https://via.placeholder.com/400x500/FFDC00/000000?text=Yellow' },
                { value: 'maroon', label: 'Maroon', image: 'https://via.placeholder.com/400x500/85144b/FFFFFF?text=Maroon' },
                { value: 'royalBlue', label: 'Royal Blue', image: 'https://via.placeholder.com/400x500/0074D9/FFFFFF?text=Royal+Blue' },
                { value: 'skyBlue', label: 'Sky Blue', image: 'https://via.placeholder.com/400x500/7FDBFF/000000?text=Sky+Blue' }
              ]
            }
          },
          {
            id: 'coloured-long-sleeve-cricket-shirt',
            title: 'Coloured Long Sleeve Cricket Shirt',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy' },
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black' },
                { value: 'red', label: 'Red', image: 'https://via.placeholder.com/400x500/FF4136/FFFFFF?text=Red' },
                { value: 'green', label: 'Green', image: 'https://via.placeholder.com/400x500/2ECC40/FFFFFF?text=Green' },
                { value: 'yellow', label: 'Yellow', image: 'https://via.placeholder.com/400x500/FFDC00/000000?text=Yellow' },
                { value: 'maroon', label: 'Maroon', image: 'https://via.placeholder.com/400x500/85144b/FFFFFF?text=Maroon' },
                { value: 'royalBlue', label: 'Royal Blue', image: 'https://via.placeholder.com/400x500/0074D9/FFFFFF?text=Royal+Blue' },
                { value: 'skyBlue', label: 'Sky Blue', image: 'https://via.placeholder.com/400x500/7FDBFF/000000?text=Sky+Blue' }
              ]
            }
          },
          {
            id: 'coloured-sleeveless-slipover',
            title: 'Coloured Sleeveless Slipover',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy' },
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black' },
                { value: 'red', label: 'Red', image: 'https://via.placeholder.com/400x500/FF4136/FFFFFF?text=Red' },
                { value: 'green', label: 'Green', image: 'https://via.placeholder.com/400x500/2ECC40/FFFFFF?text=Green' },
                { value: 'yellow', label: 'Yellow', image: 'https://via.placeholder.com/400x500/FFDC00/000000?text=Yellow' },
                { value: 'maroon', label: 'Maroon', image: 'https://via.placeholder.com/400x500/85144b/FFFFFF?text=Maroon' },
                { value: 'royalBlue', label: 'Royal Blue', image: 'https://via.placeholder.com/400x500/0074D9/FFFFFF?text=Royal+Blue' },
                { value: 'skyBlue', label: 'Sky Blue', image: 'https://via.placeholder.com/400x500/7FDBFF/000000?text=Sky+Blue' }
              ]
            }
          },
          {
            id: 'coloured-long-sleeve-slipover',
            title: 'Coloured Long Sleeve Slipover',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy' },
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black' },
                { value: 'red', label: 'Red', image: 'https://via.placeholder.com/400x500/FF4136/FFFFFF?text=Red' },
                { value: 'green', label: 'Green', image: 'https://via.placeholder.com/400x500/2ECC40/FFFFFF?text=Green' },
                { value: 'yellow', label: 'Yellow', image: 'https://via.placeholder.com/400x500/FFDC00/000000?text=Yellow' },
                { value: 'maroon', label: 'Maroon', image: 'https://via.placeholder.com/400x500/85144b/FFFFFF?text=Maroon' },
                { value: 'royalBlue', label: 'Royal Blue', image: 'https://via.placeholder.com/400x500/0074D9/FFFFFF?text=Royal+Blue' },
                { value: 'skyBlue', label: 'Sky Blue', image: 'https://via.placeholder.com/400x500/7FDBFF/000000?text=Sky+Blue' }
              ]
            }
          },
          {
            id: 'coloured-playing-trousers',
            title: 'Coloured Playing Trousers',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Trousers' },
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Trousers' },
                { value: 'green', label: 'Green', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Trousers' }
              ]
            }
          }
        ]
      },
      { // Training Kit
        id: 'training',
        title: 'Training Kit',
        groups: [
          {
            id: 'shirts',
            title: 'Training Shirt',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'navy-yellow', label: 'Navy/Yellow', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'navy-white', label: 'Navy/White', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'navy-skyblue', label: 'Navy/Sky Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'navy-red', label: 'Navy/Red', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'gren-black', label: 'Green/Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'royalblue-navy', label: 'Royal Blue/Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'red-blue', label: 'Red/Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'green-yellow', label: 'Green/Yellow', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black-lime', label: 'Black/Lime', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black-grey', label: 'Black/Grey', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'maroon-black', label: 'Maroon/Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'white-black', label: 'White/Black', image: 'https://via.placeholder.com/400x500/FFFFFF/000000?text=White+Black' },
                { value: 'blue-red', label: 'Blue/Red', image: 'https://via.placeholder.com/400x500/0074D9/FF4136?text=Blue+Red' }
              ]
            },
            additionalFields: {
              'men\'s': [
                {
                  id: 'masuri',
                  label: 'Masuri Colour',
                  options: [
                    { value: 'yellow', label: 'Yellow' },
                    { value: 'navy', label: 'Navy' },
                    { value: 'white', label: 'White' },
                    { value: 'black', label: 'Black' }
                  ],
                  // Images for each shirt+masuri combination
                  imagesWithMasuri: {
                    'navy-yellow': {
                      'yellow': './assets/shirt-navy-yellow-masuri-yellow.jpg',
                      'navy': './assets/shirt-navy-yellow-masuri-navy.jpg',
                      'white': './assets/shirt-navy-yellow-masuri-white.jpg',
                      'black': './assets/shirt-navy-yellow-masuri-black.jpg'
                    },
                    'white-black': {
                      'yellow': './assets/shirt-white-black-masuri-yellow.jpg',
                      'navy': './assets/shirt-white-black-masuri-navy.jpg',
                      'white': './assets/shirt-white-black-masuri-white.jpg',
                      'black': './assets/shirt-white-black-masuri-black.jpg'
                    },
                    'blue-red': {
                      'yellow': './assets/shirt-blue-red-masuri-yellow.jpg',
                      'navy': './assets/shirt-blue-red-masuri-navy.jpg',
                      'white': './assets/shirt-blue-red-masuri-white.jpg',
                      'black': './assets/shirt-blue-red-masuri-black.jpg'
                    }
                  }
                }
              ]
            }
          },
          {
            id: 'training-shorts',
            title: 'Training Shorts',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Shorts' },
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' },
                { value: 'white', label: 'White', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Shorts' }
              ]
            }
          },
          {
            id: 'skort',
            title: 'Skort',
            items: ['women\'s', 'junior'],
            colors: {
              options: [
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Shorts' },
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' }
              ]
            }
          },
          {
            id: 'polo',
            title: 'Polo - Active Polo? - ask Benji',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Shorts' },
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' }
                
              ]
            }
          },
          {
            id: 'performance-polo',
            title: 'Performance Polo',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Shorts' },
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' },
                { value: 'green', label: 'Green', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' }
                
              ]
            }
          },
          {
            id: 'full-zip-tech-fleece',
            title: 'Full Zip Tech Fleece',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Shorts' },
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' },
                { value: 'red', label: 'Red', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' }
                
              ]
            }
          },
          {
            id: 'hoodie',
            title: 'Hoodie',
            items: ['unisex', 'junior'],
            colors: {
              options: [
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Shorts' },
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' },
                { value: 'red', label: 'Red - ask Benji', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' },
                { value: 'royal-blue', label: 'Royal Blue - ask Benji', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' }
                
              ]
            }
          },
          {
            id: 'gilet',
            title: 'Gilet - ask Benji',
            items: ['unisex', 'junior'],
            colors: {
              options: [
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Shorts' },
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' }
                
              ]
            }
          },
          {
            id: 'tracksuit-bottoms',
            title: 'Tracksuit Bottoms',
            items: ['men\'s','women\'s', 'junior'],
            colors: {
              options: [
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Shorts' },
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' }
                
              ]
            }
          },
          {
            id: 'slimfit-trousers',
            title: 'Slimfit Trousers',
            items: ['men\'s','women\'s', 'junior'],
            colors: {
              options: [
                { value: 'black', label: 'Black', image: 'https://via.placeholder.com/400x500/111111/FFFFFF?text=Black+Shorts' },
                { value: 'navy', label: 'Navy', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' }
                
              ]
            }
          }
        ]
      },
      { // Outerwear
        id: 'outerwear',
        title: 'Outerwear',
        groups: [
          {
            id: 'outerwear',
            title: 'Outerwear',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          }
        ]
      },
            { // Bags
        id: 'bags',
        title: 'Bags',
        groups: [
          {
            id: 'boot-bag',
            title: 'Boot Bag',
            items: ['unisex'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 'rucksack',
            title: 'Rucksack',
            items: ['unisex'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 'holdall',
            title: 'Holdall',
            items: ['unisex'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          }
        ]
      },
      { // Headwear
        id: 'headwear',
        title: 'Headwear',
        groups: [
          {
            id: 'basic-cap',
            title: 'Basic Cap',
            items: ['unisex'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'green', label: 'Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'maroon', label: 'Maroon', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'purple', label: 'Purple', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'red', label: 'Red', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'royal-blue', label: 'Royal Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'white', label: 'White', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 'flexfit-cap',
            title: 'Flexfit Cap',
            items: ['unisex'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'fresh-green', label: 'Fresh Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'emerald-green', label: 'Emerald Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'spruce-green', label: 'Spruce Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'green', label: 'Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'maroon', label: 'Maroon', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'brown', label: 'Brown', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'orange', label: 'Orange', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'red', label: 'Red', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'royal-blue', label: 'Royal Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'sky-blue', label: 'Sky Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'white', label: 'White', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 'tech-beanie',
            title: 'Tech Beanie',
            items: ['unisex'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'emerald-green', label: 'Emerald Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'bottle-green', label: 'Bottle Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'maroon', label: 'Maroon', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'red', label: 'Red', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'royal-blue', label: 'Royal Blue', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 'sunhat',
            title: 'Sunhat',
            items: ['unisex'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'white', label: 'White', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 'bucket-hat',
            title: 'Bucket Hat',
            items: ['unisex'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'midnight-camo', label: 'Midnight Camo', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          }
        ]
      },
      { // Helmets
        id: 'helmets',
        title: 'Helmets',
        groups: [
          {
            id: 't-line-steel',
            title: 'Masuri T Line Steel',
            items: ['senior', 'junior'],
            colors: {
              options: [
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'sky-blue', label: 'Sky Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'royal-blue', label: 'Royal Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'red', label: 'Red', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'maroon', label: 'Maroon', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'green', label: 'Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'yellow', label: 'Yellow', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 't-line-titanium',
            title: 'Masuri T Line Titanium',
            items: ['senior', 'junior'],
            colors: {
              options: [
                { value: 'sky-blue', label: 'Sky Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'royal-blue', label: 'Royal Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'red', label: 'Red', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'maroon', label: 'Maroon', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'green', label: 'Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'yellow', label: 'Yellow', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'white', label: 'White', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 'e-line-titanium',
            title: 'Masuri E Line Titanium',
            items: ['senior', 'junior'],
            colors: {
              options: [
                { value: 'sky-blue', label: 'Sky Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'royal-blue', label: 'Royal Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'red', label: 'Red', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'maroon', label: 'Maroon', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'green', label: 'Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'yellow', label: 'Yellow', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          }
        ]
      },
      { // Equipment
        id: 'equipment',
        title: 'Equipment',
        groups: [
          {
            id: 'e-line-junior-batting-pads',
            title: 'Masuri E Line Junior Batting Pads',
            items: ['senior', 'junior'],
            colors: {
              options: [
              ]
            }
          }
        ]
      } 
    ]
  };

  const formState = {};

  // Initialize form state
  CONFIG.personalFields.forEach(field => formState[field.id] = '');

  // Helper function to capitalize each word
  function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  // Render personal info fields
  function renderPersonalInfo() {
    const container = document.getElementById('personal-info-fields');
    container.innerHTML = CONFIG.personalFields.map(field => `
      <div class="form-group">
        <label for="${field.id}" class="form-label">
          ${field.label} ${field.required ? '<span class="required">*</span>' : ''}
        </label>
        <input type="${field.type}" id="${field.id}" class="form-input" ${field.required ? 'required' : ''} 
               data-field="${field.id}">
      </div>
    `).join('');
  }

  // Render kit sections
  function renderKitSections() {
    const container = document.getElementById('kit-sections');
    container.innerHTML = CONFIG.kitSections.map(section => `
      <div class="cricket-kit-section cricket-kit-section-border">
        <h2 class="section-title">${section.title}</h2>
        ${section.groups.map(group => renderGroup(section.id, group)).join('')}
      </div>
    `).join('');
  }

  function renderGroup(sectionId, group) {
    const groupKey = `${sectionId}-${group.id}`;
    return `
      <div class="item-group">
        <div class="section-toggle-header" data-toggle="${groupKey}">
          <h3 class="section-toggle-title">${group.title}</h3>
          <input type="checkbox" class="cricket-checkbox" data-section-toggle="${groupKey}">
        </div>
        <div class="section-content" data-section="${groupKey}">
          ${group.items.map(item => renderItem(groupKey, item, group)).join('')}
        </div>
      </div>
    `;
  }

  function renderItem(groupKey, item, group) {
    const itemKey = `${groupKey}-${item}`;
    const itemLabel = item.charAt(0).toUpperCase() + item.slice(1);
    
    // Determine item type from group title
    const lowerTitle = group.title.toLowerCase();
    let itemType;
    if (lowerTitle.includes('training shirt')) {
      itemType = 'Training Shirt';
    } else if (lowerTitle.includes('coloured playing shirt')) {
      itemType = 'Coloured Playing Shirt';
    } else if (lowerTitle.includes('playing shirt')) {
      itemType = 'Playing Shirt';
    } else if (lowerTitle.includes('short')) {
      itemType = 'Shorts';
    } else if (lowerTitle.includes('trouser')) {
      itemType = 'Trousers';
    } else {
      itemType = 'Item';
    }
    
    const hasAdditionalFields = group.additionalFields && group.additionalFields[item];
    
    return `
      <div class="item-section">
        <div class="item-toggle-header" data-toggle="${itemKey}">
          <label class="item-toggle-label">${itemLabel} ${group.title}</label>
          <input type="checkbox" class="cricket-checkbox" data-item-toggle="${itemKey}">
        </div>
        <div class="item-details" data-item="${itemKey}">
          ${group.colors ? renderColorSelect(itemKey, item, itemType, group.colors) : ''}
          ${hasAdditionalFields ? 
            group.additionalFields[item].map(field => renderAdditionalField(itemKey, field)).join('') : ''}
          ${group.colors ? `<div class="item-image-container" data-image="${itemKey}" ${hasAdditionalFields ? `data-main-image="${itemKey}"` : ''}></div>` : ''}
        </div>
      </div>
    `;
  }

  function renderColorSelect(itemKey, item, itemType, colorConfig) {
    const itemLabel = item.charAt(0).toUpperCase() + item.slice(1);
    return `
      <label class="color-label">${itemLabel} ${itemType} Colour</label>
      <select class="color-select" data-color="${itemKey}">
        <option value="">Select a colour option</option>
        ${colorConfig.options.map(opt => `<option value="${opt.value}" data-image="${opt.image}">${opt.label}</option>`).join('')}
      </select>
    `;
  }

  function renderAdditionalField(itemKey, field) {
    const combinationData = field.imagesWithMasuri ? JSON.stringify(field.imagesWithMasuri).replace(/"/g, '&quot;') : '';
    return `
      <label class="color-label">${field.label}</label>
      <select class="color-select" data-color="${itemKey}-${field.id}" data-replaces="${itemKey}" ${combinationData ? `data-combinations='${combinationData}'` : ''}>
        <option value="">Select a ${field.id} colour</option>
        ${field.options.map(opt => `<option value="${opt.value}" ${opt.image ? `data-image="${opt.image}"` : ''}>${opt.label}</option>`).join('')}
      </select>
    `;
  }

  // Event delegation
  function setupEventListeners() {
    document.addEventListener('input', e => {
      if (e.target.matches('[data-field]')) {
        formState[e.target.dataset.field] = e.target.value;
        updateOrderSummary();
      }
    });

    document.addEventListener('change', e => {
      if (e.target.matches('[data-section-toggle]')) {
        const section = document.querySelector(`[data-section="${e.target.dataset.sectionToggle}"]`);
        section.classList.toggle('active', e.target.checked);
      }
      
      if (e.target.matches('[data-item-toggle]')) {
        const item = document.querySelector(`[data-item="${e.target.dataset.itemToggle}"]`);
        item.classList.toggle('active', e.target.checked);
        formState[e.target.dataset.itemToggle] = e.target.checked;
        
        if (!e.target.checked) {
          const selects = item.querySelectorAll('[data-color]');
          selects.forEach(sel => {
            sel.value = '';
            formState[sel.dataset.color] = '';
          });
          const images = item.querySelectorAll('[data-image]');
          images.forEach(img => img.classList.remove('active'));
        }
        updateOrderSummary();
      }
      
      if (e.target.matches('[data-color]')) {
        const colorKey = e.target.dataset.color;
        const value = e.target.value;
        formState[colorKey] = value;
        
        // Check if this select replaces another image (like Masuri replacing shirt image)
        const replacesKey = e.target.dataset.replaces;
        
        if (replacesKey) {
          // This is a replacement field (like Masuri) - update the main image container
          const imageContainer = document.querySelector(`[data-image="${replacesKey}"]`);
          
          if (value && imageContainer) {
            // Check if this field has combination images
            const combinationsData = e.target.dataset.combinations;
            let imageUrl, label;
            
            if (combinationsData) {
              try {
                // Get the main shirt color
                const mainSelect = document.querySelector(`[data-color="${replacesKey}"]`);
                const mainColor = mainSelect ? mainSelect.value : '';
                
                // Parse combination images and get the right one
                const combinations = JSON.parse(combinationsData);
                if (combinations[mainColor] && combinations[mainColor][value]) {
                  imageUrl = combinations[mainColor][value];
                  const selectedOption = e.target.options[e.target.selectedIndex];
                  const mainOption = mainSelect ? mainSelect.options[mainSelect.selectedIndex] : null;
                  label = mainOption && selectedOption ? `${mainOption.text} with ${selectedOption.text} Masuri` : selectedOption.text;
                }
              } catch (error) {
                console.error('Error parsing combination images:', error);
              }
            }
            
            if (imageUrl) {
              imageContainer.innerHTML = `
                <div class="item-image-wrapper">
                  <img src="${imageUrl}" alt="${label}" class="item-image">
                  <div class="item-image-label">
                    <p class="item-image-text">${label}</p>
                  </div>
                </div>
              `;
              imageContainer.classList.add('active');
            }
          } else if (!value && imageContainer) {
            // If replacement field is cleared, show the main shirt image if selected
            const mainSelect = document.querySelector(`[data-color="${replacesKey}"]`);
            if (mainSelect && mainSelect.value) {
              const mainOption = mainSelect.options[mainSelect.selectedIndex];
              const mainImageUrl = mainOption.dataset.image;
              const mainLabel = mainOption.text;
              
              imageContainer.innerHTML = `
                <div class="item-image-wrapper">
                  <img src="${mainImageUrl}" alt="${mainLabel}" class="item-image">
                  <div class="item-image-label">
                    <p class="item-image-text">${mainLabel}</p>
                  </div>
                </div>
              `;
            } else {
              imageContainer.classList.remove('active');
            }
          }
        } else {
          // This is a main color field - only update image if no replacement field has a value
          const imageContainer = document.querySelector(`[data-image="${colorKey}"]`);
          
          if (imageContainer) {
            // Check if there's a replacement field with a value
            const parentItem = imageContainer.closest('[data-item]');
            const replacementSelect = parentItem ? parentItem.querySelector(`[data-replaces="${colorKey}"]`) : null;
            const hasReplacementValue = replacementSelect && replacementSelect.value;
            
            if (value) {
              const selectedOption = e.target.options[e.target.selectedIndex];
              const imageUrl = selectedOption.dataset.image;
              const label = selectedOption.text;
              
              if (!hasReplacementValue) {
                // No replacement value, show main image
                imageContainer.innerHTML = `
                  <div class="item-image-wrapper">
                    <img src="${imageUrl}" alt="${label}" class="item-image">
                    <div class="item-image-label">
                      <p class="item-image-text">${label}</p>
                    </div>
                  </div>
                `;
                imageContainer.classList.add('active');
              } else {
                // Has replacement value, trigger it to update with new combination
                const changeEvent = new Event('change', { bubbles: true });
                replacementSelect.dispatchEvent(changeEvent);
              }
            } else if (!value) {
              imageContainer.classList.remove('active');
            }
          }
        }
        updateOrderSummary();
      }
    });
  }

  function updateOrderSummary() {
    const container = document.getElementById('order-summary-content');
    let html = '';
    let hasContent = false;

    // Personal info
    const personalInfo = CONFIG.personalFields.filter(f => formState[f.id]).map(f => 
      `<div class="summary-item"><span class="summary-label">${f.label}:</span> <span class="summary-value">${formState[f.id]}</span></div>`
    ).join('');
    
    if (personalInfo) {
      hasContent = true;
      html += `<div class="summary-section"><div class="summary-section-title">Personal Information</div>${personalInfo}</div>`;
    }

    // Kit selections
    CONFIG.kitSections.forEach(section => {
      section.groups.forEach(group => {
        const groupKey = `${section.id}-${group.id}`;
        const selections = group.items.filter(item => formState[`${groupKey}-${item}`]).map(item => {
          const itemKey = `${groupKey}-${item}`;
          const color = formState[itemKey];
          let colorLabel = '';
          if (group.colors && color) {
            colorLabel = group.colors.options.find(o => o.value === color)?.label || '';
          }
          return `<div class="summary-item">✓ ${item.charAt(0).toUpperCase() + item.slice(1)} ${group.title}${colorLabel ? ` - <span class="summary-value">${colorLabel}</span>` : ''}</div>`;
        }).join('');
        
        if (selections) {
          hasContent = true;
          html += `<div class="summary-section"><div class="summary-section-title">${group.title}</div>${selections}</div>`;
        }
      });
    });

    container.innerHTML = hasContent ? html : '<div class="summary-empty"><div class="summary-empty-icon">📋</div><p>Start filling out the form to see your selections here</p></div>';
  }

  // Initialize
  function init() {
    renderPersonalInfo();
    renderKitSections();
    setupEventListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.CricketKitForm = { getFormData: () => formState };
})();
