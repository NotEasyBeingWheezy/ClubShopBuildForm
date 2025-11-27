(function() {
  'use strict';

  // Configuration
  const CONFIG = {

  clubFields: [
    { id: 'clubName', label: 'Club Name', type: 'text', required: true },
    { id: 'clubWebsite', label: 'Club Website', type: 'text', required: true },
    { 
      id: 'salesperson', 
      label: 'NX-Teamwear Salesperson', 
      type: 'select', 
      required: true,
      options: [
        { value: '', label: '' },
        { value: 'James Kiening', label: 'James Kiening' },
        { value: 'Adam Gunn', label: 'Adam Gunn' },
        { value: 'Elliot Wright', label: 'Elliot Wright' },
        { value: 'Ben Louch', label: 'Ben Louch' },
        { value: 'Bob Bailey', label: 'Bob Bailey' },
      ]
    },
    { id: 'club-logo', label: 'Club Logo(s)', type: 'file', required: false, accept: 'image/*', multiple: true },
    { id: 'sponsor-logo', label: 'Sponsor Logo(s)', type: 'file', required: false, accept: 'image/*', multiple: true },
    
  ],
  
  personalFields: [
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
                { value: 'navy', label: 'Navy' },
                { value: 'black', label: 'Black' },
                { value: 'red', label: 'Red' },
                { value: 'green', label: 'Green' },
                { value: 'yellow', label: 'Yellow' },
                { value: 'maroon', label: 'Maroon' },
                { value: 'royalBlue', label: 'Royal Blue' },
                { value: 'skyBlue', label: 'Sky Blue' }
              ]
            }
          },
          {
            id: 'coloured-long-sleeve-cricket-shirt',
            title: 'Coloured Long Sleeve Cricket Shirt',
            items: ['men\'s', 'women\'s', 'junior'],
            colors: {
              options: [
                { value: 'navy', label: 'Navy' },
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
                { value: 'navy', label: 'Navy' },
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
                { value: 'green-black', label: 'Green/Black', image: './assets/shirt-navy-yellow.jpg' },
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
                { value: 'red', label: 'Red', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' },
                { value: 'royal-blue', label: 'Royal Blue', image: 'https://via.placeholder.com/400x500/001f3f/FFFFFF?text=Navy+Shorts' }
                
              ]
            }
          },
          {
            id: 'gilet',
            title: 'Gilet',
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
            items: [''],
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
            items: [''],
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
            items: [''],
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
            items: [''],
            colors: {
              options: [
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' }
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
            items: ['senior'],
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
            items: ['senior'],
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
            id: 'e-line-batting-pads',
            title: 'Masuri E Line Batting Pads',
            items: ['senior', 'junior'],
            colors: null
          },
          {
            id: 't-line-batting-pads',
            title: 'Masuri T Line Batting Pads',
            items: ['senior'],
            colors: null
          },
          {
            id: 'c-line-batting-pads',
            title: 'Masuri C Line Batting Pads',
            items: ['senior'],
            colors: null
          },
          {
            id: 'e-line-thigh-pad-combo',
            title: 'Masuri E Line Thigh Pad Combo',
            items: ['senior'],
            colors: null
          },
          {
            id: 't-line-thigh-pad-combo',
            title: 'Masuri T Line Thigh Pad Combo',
            items: ['senior', 'junior'],
            colors: null
          },
          {
            id: 'e-line-batting-gloves',
            title: 'Masuri E Line Batting Gloves',
            items: ['senior', 'junior'],
            colors: null
          },
          {
            id: 'e-line-pro-batting-gloves',
            title: 'Masuri E Line Pro Batting Gloves',
            items: ['senior'],
            colors: null
          },
          {
            id: 't-line-batting-gloves',
            title: 'Masuri T Line Batting Gloves',
            items: ['senior'],
            colors: null
          },
          {
            id: 'c-line-batting-gloves',
            title: 'Masuri C Line Batting Gloves',
            items: ['senior'],
            colors: null
          },
          {
            id: 'e-line-duffle-bag',
            title: 'Masuri E Line Duffle Bag',
            items: [''],
            colors: null
          },
          {
            id: 'e-line-pro-wheel-bag',
            title: 'Masuri E Line Pro Wheel Bag',
            items: [''],
            colors: null
          },
          {
            id: 'stem-guard',
            title: 'Masuri StemGuard',
            items: ['senior', 'junior'],
            colors: null
          },

        ]
      },
      { // Misc
        id: 'misc',
        title: 'Misc',
        groups: [
          {
            id: 'mug',
            title: 'Mug',
            items: [''],
            colors: {
              options: [
                { value: 'white', label: 'White', image: './assets/shirt-navy-yellow.jpg' },
              ]
            }
          },
          {
            id: 'aluminium-water-bottle',
            title: 'Aluminium Water Bottle with 2 Cap Styles',
            items: [''],
            colors: {
              options: [
                { value: 'white', label: 'White', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'silver', label: 'Silver', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 'stainless-steel-water-bottle',
            title: 'Stainless Steel Water Bottle ',
            items: [''],
            colors: {
              options: [
                { value: 'white', label: 'White', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 'sliders',
            title: 'Sliders',
            items: [''],
            colors: {
              options: [
                { value: 'white', label: 'White', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
          {
            id: 'masuri-tech-training-sock',
            title: 'Masuri Tech Training Sock',
            items: [''],
            colors: {
              options: [
                { value: 'white-navy', label: 'White/Navy', image: './assets/shirt-navy-yellow.jpg' },
              ]
            }
          },
          {
            id: 'masuri-pro-wool-sock',
            title: 'Masuri Pro Wool Sock',
            items: [''],
            colors: {
              options: [
                { value: 'white', label: 'White', image: './assets/shirt-navy-yellow.jpg' },
              ]
            }
          },
          {
            id: 'masuri-mini-replica-helmet',
            title: 'Masuri Mini Replica Helmet',
            items: [''],
            colors: {
              options: [
                { value: 'royal-blue', label: 'Royal Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'sky-blue', label: 'Sky Blue', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'yellow', label: 'Yellow', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'red', label: 'Red', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'black', label: 'Black', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'maroon', label: 'Maroon', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'green', label: 'Green', image: './assets/shirt-navy-yellow.jpg' },
                { value: 'navy', label: 'Navy', image: './assets/shirt-navy-yellow.jpg' }
              ]
            }
          },
        ] 
      }
    ]
  };

  const formState = {};

// Initialize form state for club fields
CONFIG.clubFields.forEach(field => {
  if (field.type === 'file') {
    formState[field.id] = [];
  } else {
    formState[field.id] = '';
  }
});

// Initialize form state for personal fields
CONFIG.personalFields.forEach(field => {
  if (field.type === 'file') {
    formState[field.id] = [];
  } else {
    formState[field.id] = '';
  }
});

formState['notes'] = '';

  // Map salespeople to their Formspree endpoints
  const SALESPERSON_ENDPOINTS = {
    'James Kiening': 'https://formspree.io/f/YOUR_ENDPOINT_JAMES',
    'Adam Gunn': 'https://formspree.io/f/YOUR_ENDPOINT_ADAM',
    'Elliot Wright': 'https://formspree.io/f/YOUR_ENDPOINT_ELLIOT',
    'Ben Louch': 'https://formspree.io/f/YOUR_ENDPOINT_BEN',
    'Bob Bailey': 'https://formspree.io/f/YOUR_ENDPOINT_BOB'
  };

  // Debounce helper function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Save form state to localStorage
  function saveDraft() {
    try {
      const draftData = {
        formState: formState,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('cricketKitFormDraft', JSON.stringify(draftData));
    } catch (error) {
      console.error('Error saving draft:', error);
    }
  }

  // Load form state from localStorage
  function loadDraft() {
    try {
      const savedDraft = localStorage.getItem('cricketKitFormDraft');
      if (savedDraft) {
        const draftData = JSON.parse(savedDraft);
        return draftData.formState;
      }
    } catch (error) {
      console.error('Error loading draft:', error);
    }
    return null;
  }

  // Clear draft from localStorage
  function clearDraft() {
    try {
      localStorage.removeItem('cricketKitFormDraft');
    } catch (error) {
      console.error('Error clearing draft:', error);
    }
  }

  // Calculate form completion progress
  function calculateProgress() {
    let totalFields = 0;
    let completedFields = 0;

    // Club fields
    CONFIG.clubFields.forEach(field => {
      totalFields++;
      if (field.type === 'file') {
        if (Array.isArray(formState[field.id]) && formState[field.id].length > 0) {
          completedFields++;
        }
      } else if (formState[field.id] && formState[field.id] !== '') {
        completedFields++;
      }
    });

    // Personal fields
    CONFIG.personalFields.forEach(field => {
      totalFields++;
      if (formState[field.id] && formState[field.id] !== '') {
        completedFields++;
      }
    });

    // Kit selections (at least one item selected)
    let hasKitSelection = false;
    CONFIG.kitSections.forEach(section => {
      section.groups.forEach(group => {
        const groupKey = `${section.id}-${group.id}`;
        group.items.forEach(item => {
          const itemKey = `${groupKey}-${item}`;
          if (item === '') {
            // No-size-variation items
            if (formState[itemKey] && formState[itemKey] !== '') {
              hasKitSelection = true;
            }
          } else {
            // Items with toggles
            if (formState[itemKey + '-toggle'] === true) {
              hasKitSelection = true;
            }
          }
        });
      });
    });

    totalFields++; // Count kit selections as one field
    if (hasKitSelection) {
      completedFields++;
    }

    return Math.round((completedFields / totalFields) * 100);
  }

  // Validate form
  function validateForm() {
    const errors = [];

    // Validate club fields
    CONFIG.clubFields.forEach(field => {
      if (field.required) {
        if (field.type === 'file') {
          if (!Array.isArray(formState[field.id]) || formState[field.id].length === 0) {
            errors.push(`${field.label} is required`);
          }
        } else if (!formState[field.id] || formState[field.id] === '') {
          errors.push(`${field.label} is required`);
        }
      }
    });

    // Validate personal fields
    CONFIG.personalFields.forEach(field => {
      if (field.required) {
        if (!formState[field.id] || formState[field.id] === '') {
          errors.push(`${field.label} is required`);
        }
      }
    });

    // Validate email format
    if (formState['email']) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState['email'])) {
        errors.push('Please enter a valid email address');
      }
    }

    return errors;
  }

  // Clear entire form
  function clearForm() {
    if (!confirm('Are you sure you want to clear all form data? This action cannot be undone.')) {
      return;
    }

    // Reset all form state
    Object.keys(formState).forEach(key => {
      if (Array.isArray(formState[key])) {
        formState[key] = [];
      } else {
        formState[key] = '';
      }
    });

    // Clear all inputs
    document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea').forEach(input => {
      input.value = '';
    });

    // Clear all selects
    document.querySelectorAll('select').forEach(select => {
      select.value = '';
      const floatingInput = select.closest('.floating-input');
      if (floatingInput) {
        floatingInput.classList.remove('has-value');
      }
    });

    // Uncheck all checkboxes
    document.querySelectorAll('[data-section-toggle], [data-item-toggle]').forEach(checkbox => {
      checkbox.checked = false;
    });

    // Hide all sections and items
    document.querySelectorAll('.section-content, .item-details').forEach(element => {
      element.classList.remove('active');
    });

    // Clear file lists
    document.querySelectorAll('.file-list').forEach(list => {
      list.innerHTML = '';
    });

    // Clear draft from localStorage
    clearDraft();

    // Update summary and progress
    updateOrderSummary();
    updateProgress();

    // Show success message
    showNotification('Form cleared successfully', 'success');
  }

  // Submit form
  function submitForm() {
    // Validate form
    const errors = validateForm();

    if (errors.length > 0) {
      // Show validation errors
      const errorMessage = 'Please fix the following errors:\n\n' + errors.join('\n');
      alert(errorMessage);

      // Highlight first error field
      const firstErrorField = errors[0].split(' is required')[0];
      CONFIG.clubFields.concat(CONFIG.personalFields).forEach(field => {
        if (field.label === firstErrorField) {
          const element = document.getElementById(field.id);
          if (element) {
            element.focus();
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });

      return;
    }

    // Show success message
    const formData = window.CricketKitForm.getFormData();
    console.log('Form submitted successfully:', formData);

    showNotification('Form submitted successfully! Check console for form data.', 'success');

    // Clear draft after successful submission
    clearDraft();

    // In a real implementation, you would send formData to your server here
    // Example:
    // fetch('/api/orders', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  }

  // Show notification
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    // Remove after 5 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 5000);
  }

  // Update progress indicator
  function updateProgress() {
    const progressBar = document.getElementById('form-progress-bar');
    const progressText = document.getElementById('form-progress-text');

    if (progressBar && progressText) {
      const progress = calculateProgress();
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', progress);
      progressText.textContent = `${progress}% Complete`;
    }
  }

  // Debounced save to localStorage
  const debouncedSave = debounce(saveDraft, 1000);

  // Debounced update for text inputs
  const debouncedUpdateSummary = debounce(updateOrderSummary, 300);

  // Format order data for email
  function formatOrderForEmail() {
    let emailBody = '';

    emailBody += '━━━━━━━━━━━━━━━━━━━━━━━━━━\n';
    emailBody += 'NEW CLUB BUILD FORM SUBMISSION\n';
    emailBody += '━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';

    // Club Information
    emailBody += 'CLUB INFORMATION\n';
    CONFIG.clubFields.forEach(field => {
      if (field.type !== 'file' && formState[field.id]) {
        emailBody += `${field.label}: ${formState[field.id]}\n`;
      }
    });
    emailBody += '\n';

    // Customer Details
    emailBody += 'CUSTOMER DETAILS\n';
    CONFIG.personalFields.forEach(field => {
      if (formState[field.id]) {
        emailBody += `${field.label}: ${formState[field.id]}\n`;
      }
    });
    emailBody += '\n';

    // Kit Selections
    emailBody += '━━━━━━━━━━━━━━━━━━━━━━━━━━\n';
    emailBody += 'KIT SELECTIONS\n';
    emailBody += '━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n';

    CONFIG.kitSections.forEach(section => {
      let sectionItems = [];

      section.groups.forEach(group => {
        const groupKey = `${section.id}-${group.id}`;

        group.items.forEach(item => {
          const itemKey = `${groupKey}-${item}`;
          const isNoSize = item === '';

          // Check if item is selected
          let isSelected = false;
          if (isNoSize) {
            // No-size items: check if color is selected
            isSelected = formState[itemKey] && formState[itemKey] !== '';
          } else {
            // Items with sizes: check toggle
            isSelected = formState[itemKey + '-toggle'] === true;
          }

          if (isSelected) {
            const itemLabel = isNoSize ? group.title : `${capitalizeWords(item)} ${group.title}`;
            let colorInfo = '';

            // Get color if available
            if (group.colors && formState[itemKey]) {
              const colorOption = group.colors.options.find(opt => opt.value === formState[itemKey]);
              if (colorOption) {
                colorInfo = ` (${colorOption.label})`;
              }
            }

            // Check for additional fields (like Masuri)
            if (group.additionalFields && group.additionalFields[item]) {
              group.additionalFields[item].forEach(addField => {
                const addFieldKey = `${itemKey}-${addField.id}`;
                if (formState[addFieldKey]) {
                  const addOption = addField.options.find(opt => opt.value === formState[addFieldKey]);
                  if (addOption) {
                    colorInfo += ` with ${addOption.label} ${capitalizeWords(addField.id)}`;
                  }
                }
              });
            }

            sectionItems.push(`✓ ${itemLabel}${colorInfo}`);
          }
        });
      });

      if (sectionItems.length > 0) {
        emailBody += section.title.toUpperCase() + '\n';
        sectionItems.forEach(item => {
          emailBody += item + '\n';
        });
        emailBody += '\n';
      }
    });

    // Files
    let hasFiles = false;
    let filesText = '';
    CONFIG.clubFields.forEach(field => {
      if (field.type === 'file' && Array.isArray(formState[field.id]) && formState[field.id].length > 0) {
        if (!hasFiles) {
          filesText += 'FILES ATTACHED\n';
          hasFiles = true;
        }
        filesText += `${field.label}:\n`;
        formState[field.id].forEach(fileData => {
          filesText += `  • ${fileData.name}\n`;
        });
      }
    });

    if (hasFiles) {
      emailBody += filesText + '\n';
    }

    // Additional Notes
    if (formState['notes'] && formState['notes'].trim() !== '') {
      emailBody += 'ADDITIONAL NOTES\n';
      emailBody += formState['notes'] + '\n\n';
    }

    emailBody += '━━━━━━━━━━━━━━━━━━━━━━━━━━\n';

    return emailBody;
  }

  // Helper function to capitalize each word
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

  // Render personal info fields
function renderClubInfo() {
  const container = document.getElementById('club-info-fields');
  
  // Render all fields first
  const renderedFields = CONFIG.clubFields.map(field => {
    // FILE INPUTS
    if (field.type === 'file') {
      return {
        id: field.id,
        html: `
          <div class="floating-input">
            <input
              type="file"
              id="${field.id}"
              name="${field.id}"
              class="form-input"
              ${field.multiple ? 'multiple' : ''}
              accept="${field.accept || '*/*'}"
              data-file-upload
              data-field="${field.id}"
              placeholder=" "
              aria-describedby="${field.id}-hint"
            />
            <label for="${field.id}">
              ${field.label} ${field.required ? '<span class="required">*</span>' : ''}
            </label>
            <div id="${field.id}-hint" class="file-upload-hint">
              Accepted formats: ${field.accept || 'All files'} • Max size: 10MB per file
            </div>
            <div id="${field.id}-list" class="file-list"></div>
          </div>
        `
      };
    }

    // SELECT FIELDS
    if (field.type === 'select') {
      return {
        id: field.id,
        html: `
          <div class="floating-input">
            <select
              id="${field.id}"
              name="${field.id}"
              class="form-input"
              ${field.required ? 'required' : ''}
              data-field="${field.id}"
            >
              ${field.options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
            </select>
            <label for="${field.id}">
              ${field.label} ${field.required ? '<span class="required">*</span>' : ''}
            </label>
          </div>
        `
      };
    }

    // STANDARD INPUTS
    return {
      id: field.id,
      html: `
        <div class="floating-input">
          <input
            type="${field.type}"
            id="${field.id}"
            name="${field.id}"
            class="form-input"
            ${field.required ? 'required' : ''}
            data-field="${field.id}"
            placeholder=" "
          />
          <label for="${field.id}">
            ${field.label} ${field.required ? '<span class="required">*</span>' : ''}
          </label>
        </div>
      `
    };
  });

  // Build the HTML with logos in a row
  let html = '';
  renderedFields.forEach((field, index) => {
    if (field.id === 'club-logo') {
      // Start the logo row
      html += '<div class="logo-upload-row">';
      html += field.html;
    } else if (field.id === 'sponsor-logo') {
      // End the logo row
      html += field.html;
      html += '</div>';
    } else {
      html += field.html;
    }
  });

  container.innerHTML = html;
}

// Render personal info fields
function renderPersonalInfo() {
  const container = document.getElementById('personal-info-fields');
  container.innerHTML = CONFIG.personalFields.map(field => {
    // STANDARD INPUTS (all personal fields are text/email/tel inputs)
    return `
      <div class="floating-input">
        <input
          type="${field.type}"
          id="${field.id}"
          name="${field.id}"
          class="form-input"
          ${field.required ? 'required' : ''}
          data-field="${field.id}"
          placeholder=" "
        />
        <label for="${field.id}">
          ${field.label} ${field.required ? '<span class="required">*</span>' : ''}
        </label>
      </div>
    `;
  }).join('');
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

// Render notes section
function renderNotesSection() {
  const container = document.getElementById('kit-sections');
  const notesHTML = `
    <div class="cricket-kit-section cricket-kit-section-border">
      <h2 class="section-title">Additional Notes</h2>
      <div class="form-group">
        <label for="customer-notes" class="form-label">Please add any additional information or special requirements:</label>
        <textarea id="customer-notes" name="notes" class="form-input" data-field="notes" rows="5"
                  placeholder="Add any additional notes here..."></textarea>
      </div>
    </div>

    <!-- Progress Indicator -->
    <div class="cricket-kit-section cricket-kit-section-border">
      <div class="progress-container">
        <div class="progress-header">
          <h3 class="progress-title">Form Completion</h3>
          <span id="form-progress-text" class="progress-text">0% Complete</span>
        </div>
        <div class="progress-bar-container" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div id="form-progress-bar" class="progress-bar"></div>
        </div>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', notesHTML);
}

function renderGroup(sectionId, group) {
    const groupKey = `${sectionId}-${group.id}`;
    return `
      <div class="item-group">
        <div class="section-toggle-header" data-toggle="${groupKey}">
          <h3 class="section-toggle-title">${group.title}</h3>
          <input type="checkbox" name="${groupKey}-toggle" class="cricket-checkbox" data-section-toggle="${groupKey}">
        </div>
        <div class="section-content" data-section="${groupKey}">
          ${group.items.map(item => renderItem(groupKey, item, group)).join('')}
        </div>
      </div>
    `;
}

function renderFileList(fieldId) {
    const listContainer = document.getElementById(`${fieldId}-list`);
    const files = formState[fieldId] || [];
    
    if (files.length === 0) {
      listContainer.innerHTML = '';
      return;
    }
    
    listContainer.innerHTML = files.map(fileData => `
      <div class="file-item">
        <span class="file-name">${fileData.name}</span>
        <button type="button" class="file-remove-btn" data-remove-file="${fieldId}" data-file-id="${fileData.id}">
          Remove
        </button>
      </div>
    `).join('');
}

function renderItem(groupKey, item, group) {
  const itemKey = `${groupKey}-${item}`;
  const itemLabel = item.charAt(0).toUpperCase() + item.slice(1);
  const hasAdditionalFields = group.additionalFields && group.additionalFields[item];
  
  // Check if item is empty string (no size variation)
  const isNoSizeVariation = item === '';
  
  if (isNoSizeVariation) {
    // Render without toggle, just the color dropdown
    return `
      <div class="item-section active">
        <div class="item-details active" data-item="${itemKey}">
          ${group.colors ? renderColorSelect(itemKey, item, group.title, group.colors) : ''}
          ${group.colors ? `<div class="item-image-container active" data-image="${itemKey}"></div>` : ''}
        </div>
      </div>
    `;
  }
  
  // Original render with toggle for items with size variations
  return `
    <div class="item-section">
      <div class="item-toggle-header" data-toggle="${itemKey}">
        <label class="item-toggle-label">${itemLabel} ${group.title}</label>
        <input type="checkbox" name="${itemKey}-toggle" class="cricket-checkbox" data-item-toggle="${itemKey}">
      </div>
      <div class="item-details" data-item="${itemKey}">
        ${group.colors ? renderColorSelect(itemKey, item, group.title, group.colors) : ''}
        ${hasAdditionalFields ?
          group.additionalFields[item].map(field => renderAdditionalField(itemKey, field)).join('') : ''}
        ${group.colors ? `<div class="item-image-container" data-image="${itemKey}" ${hasAdditionalFields ? `data-main-image="${itemKey}"` : ''}></div>` : ''}
      </div>
    </div>
  `;
}

function renderColorSelect(itemKey, item, title, colorConfig) {
  const itemLabel = item === '' ? '' : (item.charAt(0).toUpperCase() + item.slice(1) + ' ');
  return `
    <div class="color-field-container">
      <label class="color-label">${itemLabel}${title} Colour</label>
      <select class="color-select" name="${itemKey}" data-color="${itemKey}">
        <option value="">Select a colour option</option>
        ${colorConfig.options.map(opt => `<option value="${opt.value}" data-image="${opt.image}">${opt.label}</option>`).join('')}
      </select>
    </div>
  `;
}

function renderAdditionalField(itemKey, field) {
    const combinationData = field.imagesWithMasuri ? JSON.stringify(field.imagesWithMasuri).replace(/"/g, '&quot;') : '';
    return `
      <label class="color-label">${field.label}</label>
      <select class="color-select" name="${itemKey}-${field.id}" data-color="${itemKey}-${field.id}" data-replaces="${itemKey}" ${combinationData ? `data-combinations='${combinationData}'` : ''}>
        <option value="">Select a ${field.id} colour</option>
        ${field.options.map(opt => `<option value="${opt.value}" ${opt.image ? `data-image="${opt.image}"` : ''}>${opt.label}</option>`).join('')}
      </select>
    `;
}

// Event delegation
function setupEventListeners() {
    // Handle form submission
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form first
        const errors = validateForm();
        if (errors.length > 0) {
          const errorMessage = 'Please fix the following errors:\n\n' + errors.join('\n');
          alert(errorMessage);
          return;
        }

        // Format the order data
        const formattedOrder = formatOrderForEmail();

        // Build FormData
        const formData = new FormData();

        // Add formatted order as main message
        formData.append('message', formattedOrder);

        // Add subject line
        formData.append('_subject', `New Club Build Form Submission - ${formState.clubName}`);

        // Add reply-to as customer email
        if (formState.email) {
          formData.append('_replyto', formState.email);
        }

        // Add file attachments
        CONFIG.clubFields.forEach(field => {
          if (field.type === 'file' && Array.isArray(formState[field.id])) {
            formState[field.id].forEach(fileData => {
              if (fileData.file) {
                formData.append(field.id, fileData.file);
              }
            });
          }
        });

        // Get the selected salesperson and their endpoint
        const selectedSalesperson = formState.salesperson;
        if (!selectedSalesperson || selectedSalesperson === '') {
          alert('Please select a NX-Teamwear Salesperson before submitting.');
          return;
        }

        const formspreeEndpoint = SALESPERSON_ENDPOINTS[selectedSalesperson];
        if (!formspreeEndpoint) {
          alert('Invalid salesperson selected. Please contact support.');
          console.error('No endpoint found for salesperson:', selectedSalesperson);
          return;
        }

        // Disable submit button and show loading
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        // Submit to Formspree (endpoint based on selected salesperson)
        fetch(formspreeEndpoint, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            showNotification('Order submitted successfully! You will receive a confirmation email.', 'success');
            clearDraft();
            // Optionally clear the form
            setTimeout(() => {
              if (confirm('Would you like to clear the form for a new order?')) {
                clearForm();
              }
            }, 1000);
          } else {
            return response.json().then(data => {
              throw new Error(data.error || 'Submission failed');
            });
          }
        })
        .catch(error => {
          console.error('Error:', error);
          showNotification('Error submitting order. Please try again.', 'error');
        })
        .finally(() => {
          // Re-enable submit button
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
      });
    }

    document.addEventListener('click', e => {
      // Handle section toggle header clicks
      if (e.target.closest('.section-toggle-header')) {
        const header = e.target.closest('.section-toggle-header');
        const checkbox = header.querySelector('[data-section-toggle]');
        
        // Don't toggle if they clicked directly on the checkbox
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
          checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
      



      // Handle item toggle header clicks
      if (e.target.closest('.item-toggle-header')) {
        const header = e.target.closest('.item-toggle-header');
        const checkbox = header.querySelector('[data-item-toggle]');
        
        // Don't toggle if they clicked directly on the checkbox
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
          checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    });

    document.addEventListener('click', e => {
      if (e.target.matches('[data-remove-file]')) {
        const fieldId = e.target.dataset.removeFile;
        const fileId = e.target.dataset.fileId;
    
        formState[fieldId] = formState[fieldId].filter(f => f.id != fileId);
        renderFileList(fieldId);
        updateOrderSummary();
      }
    });

    document.addEventListener('input', e => {
      if (e.target.matches('[data-field]') && !e.target.matches('[data-file-upload]')) {
        formState[e.target.dataset.field] = e.target.value;
        debouncedUpdateSummary();
        updateProgress();
        debouncedSave();
      }
    });

    // Keyboard navigation support
    document.addEventListener('keydown', e => {
      // Allow Enter key to toggle section/item headers
      if (e.key === 'Enter' && (e.target.closest('.section-toggle-header') || e.target.closest('.item-toggle-header'))) {
        const header = e.target.closest('.section-toggle-header') || e.target.closest('.item-toggle-header');
        const checkbox = header.querySelector('[data-section-toggle], [data-item-toggle]');
        if (checkbox && e.target !== checkbox) {
          e.preventDefault();
          checkbox.checked = !checkbox.checked;
          checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }

      // Allow Space key to toggle when focused on header
      if (e.key === ' ' && (e.target.closest('.section-toggle-header') || e.target.closest('.item-toggle-header'))) {
        const header = e.target.closest('.section-toggle-header') || e.target.closest('.item-toggle-header');
        const checkbox = header.querySelector('[data-section-toggle], [data-item-toggle]');
        if (checkbox && e.target !== checkbox) {
          e.preventDefault();
          checkbox.checked = !checkbox.checked;
          checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    });

    document.addEventListener('change', e => {

// Handle file uploads
      if (e.target.matches('[data-file-upload]')) {
        const files = Array.from(e.target.files);
        const fieldId = e.target.dataset.field;
        
        if (files.length > 0) {
          // Initialize files array if it doesn't exist
          if (!Array.isArray(formState[fieldId])) {
            formState[fieldId] = [];
          }
          
          // Add new files to existing ones
          files.forEach(file => {
            // Extract just the filename (remove any path)
            const fileName = file.name.split('\\').pop().split('/').pop();
            
            const fileData = {
              name: fileName,
              size: file.size,
              file: file,
              id: Date.now() + Math.random()
            };
            
            formState[fieldId].push(fileData);
          });
          
          // Render file list
          renderFileList(fieldId);
          updateOrderSummary();
        }
        
        // Clear the input
        e.target.value = '';
      }


      if (e.target.matches('[data-section-toggle]')) {
        const section = document.querySelector(`[data-section="${e.target.dataset.sectionToggle}"]`);
        section.classList.toggle('active', e.target.checked);

        // If parent is deselected, deselect all children
        if (!e.target.checked) {
          // Clear child toggles (items with size variations)
          const childToggles = section.querySelectorAll('[data-item-toggle]');
          childToggles.forEach(toggle => {
            if (toggle.checked) {
              toggle.checked = false;
              const item = document.querySelector(`[data-item="${toggle.dataset.itemToggle}"]`);
              item.classList.remove('active');
              formState[toggle.dataset.itemToggle + '-toggle'] = false;

              // Clear color selections
              const selects = item.querySelectorAll('[data-color]');
              selects.forEach(sel => {
                sel.value = '';
                formState[sel.dataset.color] = '';
              });

              // Hide images
              const images = item.querySelectorAll('[data-image]');
              images.forEach(img => img.classList.remove('active'));
            }
          });

          // Also clear color selections for no-size-variation items (those without toggles)
          // These are in .item-section.active (always active) containers
          const noSizeItems = section.querySelectorAll('.item-section.active [data-color]');
          noSizeItems.forEach(sel => {
            sel.value = '';
            formState[sel.dataset.color] = '';
          });

          // Hide images in no-size-variation items
          const noSizeImages = section.querySelectorAll('.item-section.active [data-image]');
          noSizeImages.forEach(img => img.classList.remove('active'));
        }

        // Always update summary when toggling section (both on and off)
        updateOrderSummary();
        updateProgress();
        debouncedSave();
      }
      
if (e.target.matches('[data-item-toggle]')) {
        const item = document.querySelector(`[data-item="${e.target.dataset.itemToggle}"]`);
        item.classList.toggle('active', e.target.checked);
        formState[e.target.dataset.itemToggle + '-toggle'] = e.target.checked;

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
        updateProgress();
        debouncedSave();
      }
      
      if (e.target.matches('[data-color]')) {
        const colorKey = e.target.dataset.color;
        const value = e.target.value;
        formState[colorKey] = value;

        // For no-size-variation items, auto-toggle parent section if color is selected
        const itemDetails = e.target.closest('.item-details');
        if (itemDetails && itemDetails.classList.contains('active')) {
          const itemSection = itemDetails.closest('.item-section');
          if (itemSection && itemSection.classList.contains('active')) {
            // This is a no-size-variation item, check if parent section needs to be toggled
            const sectionContent = itemDetails.closest('.section-content');
            if (sectionContent && !sectionContent.classList.contains('active') && value) {
              const sectionId = sectionContent.dataset.section;
              const sectionToggle = document.querySelector(`[data-section-toggle="${sectionId}"]`);
              if (sectionToggle && !sectionToggle.checked) {
                sectionToggle.checked = true;
                sectionContent.classList.add('active');
              }
            }
          }
        }

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
        updateProgress();
        debouncedSave();
      }

                // Handle select changes
      if (e.target.matches('select[data-field]')) {
        formState[e.target.dataset.field] = e.target.value;
        updateOrderSummary();
        updateProgress();
        debouncedSave();
      }


// Handle floating label for selects
if (e.target.matches('select.form-input')) {
  const floatingInput = e.target.closest('.floating-input');
  if (floatingInput) {
    if (e.target.value && e.target.value !== '') {
      floatingInput.classList.add('has-value');
    } else {
      floatingInput.classList.remove('has-value');
    }
  }
}
    });
}

function updateOrderSummary() {
  const container = document.getElementById('order-summary-content');
  let html = '';
  let hasContent = false;

  // Club info
  const clubInfo = CONFIG.clubFields
    .filter(f => {
      if (f.type === 'file') {
        return Array.isArray(formState[f.id]) && formState[f.id].length > 0;
      }
      return formState[f.id] && formState[f.id] !== '';
    })
    .map(f => {
      let value = f.type === 'file' 
        ? formState[f.id].map(file => file.name).join(', ')
        : formState[f.id];
      return `<div class="summary-item"><span class="summary-label">${f.label}:</span> <span class="summary-value">${value}</span></div>`;
    })
    .join('');
  
  if (clubInfo) {
    hasContent = true;
    html += `<div class="summary-section"><div class="summary-section-title">Club Information</div>${clubInfo}</div>`;
  }

  // Personal info
  const personalInfo = CONFIG.personalFields
    .filter(f => {
      if (f.type === 'file') {
        return Array.isArray(formState[f.id]) && formState[f.id].length > 0;
      }
      return formState[f.id] && formState[f.id] !== '';
    })
    .map(f => {
      let value = f.type === 'file' 
        ? formState[f.id].map(file => file.name).join(', ')
        : formState[f.id];
      return `<div class="summary-item"><span class="summary-label">${f.label}:</span> <span class="summary-value">${value}</span></div>`;
    })
    .join('');
  
  if (personalInfo) {
    hasContent = true;
    html += `<div class="summary-section"><div class="summary-section-title">Personal Information</div>${personalInfo}</div>`;
  }

// Kit selections
  CONFIG.kitSections.forEach(section => {
    section.groups.forEach(group => {
      const groupKey = `${section.id}-${group.id}`;
      
      // Check if the parent section is toggled on
      const sectionToggle = document.querySelector(`[data-section-toggle="${groupKey}"]`);
      const isSectionActive = sectionToggle ? sectionToggle.checked : false;
      
      const selections = group.items.filter(item => {
        const itemKey = `${groupKey}-${item}`;
        const colorKey = itemKey; // Color is stored with same key
        
        // Check if this is a no-size-variation item (empty string)
        const isNoSizeVariation = item === '';
        
        // For no-size-variation items, check section toggle AND color selection
        if (isNoSizeVariation) {
          if (group.colors) {
            return isSectionActive && formState[colorKey] && formState[colorKey] !== '';
          }
          // No colors means just check if section is active
          return isSectionActive;
        }
        
        // For items with size variations, must be toggled on
        const isToggled = formState[itemKey + '-toggle'] === true;
        
        // If group has colors, must have a color selected
        if (group.colors) {
          return isToggled && formState[colorKey] && formState[colorKey] !== '';
        }
        
        // If no colors, just needs to be toggled
        return isToggled;
      }).map(item => {
        const itemKey = `${groupKey}-${item}`;
        const color = formState[itemKey];
        let colorLabel = '';
        if (group.colors && color && typeof color === 'string') {
          colorLabel = group.colors.options.find(o => o.value === color)?.label || '';
        }
        
        // For items with empty string (no size variation), just show the group title
        const itemDisplay = item === '' ? group.title : `${item.charAt(0).toUpperCase() + item.slice(1)} ${group.title}`;
        
        return `<div class="summary-item">✓ ${itemDisplay}${colorLabel ? ` - <span class="summary-value">${colorLabel}</span>` : ''}</div>`;
      }).join('');
      
      if (selections) {
        hasContent = true;
        html += `<div class="summary-section"><div class="summary-section-title">${group.title}</div>${selections}</div>`;
      }
    });
  });

  // Additional notes
  if (formState['notes'] && formState['notes'].trim() !== '') {
    hasContent = true;
    html += `<div class="summary-section"><div class="summary-section-title">Additional Notes</div><div class="summary-item"><span class="summary-value">${formState['notes']}</span></div></div>`;
  }

  container.innerHTML = hasContent ? html : '<div class="summary-empty"><div class="summary-empty-icon">📋</div><p>Start filling out the form to see your selections here</p></div>';
}

// Restore form from localStorage
function restoreFormState(savedState) {
  if (!savedState) return;

  // Restore text inputs, emails, tels, textareas
  Object.keys(savedState).forEach(key => {
    const value = savedState[key];

    // Handle regular input fields
    const input = document.getElementById(key) || document.querySelector(`[data-field="${key}"]`);
    if (input && (input.type === 'text' || input.type === 'email' || input.type === 'tel' || input.tagName === 'TEXTAREA')) {
      input.value = value || '';
      formState[key] = value;
    }

    // Handle select fields
    const select = document.getElementById(key);
    if (select && select.tagName === 'SELECT') {
      select.value = value || '';
      formState[key] = value;
      const floatingInput = select.closest('.floating-input');
      if (floatingInput && value) {
        floatingInput.classList.add('has-value');
      }
    }

    // Handle toggles
    if (key.includes('-toggle')) {
      const toggleKey = key.replace('-toggle', '');
      const toggle = document.querySelector(`[data-item-toggle="${toggleKey}"]`);
      if (toggle) {
        toggle.checked = value;
        const item = document.querySelector(`[data-item="${toggleKey}"]`);
        if (item) {
          item.classList.toggle('active', value);
        }
        formState[key] = value;
      }
    }

    // Handle section toggles
    const sectionToggle = document.querySelector(`[data-section-toggle="${key}"]`);
    if (sectionToggle) {
      sectionToggle.checked = value;
      const section = document.querySelector(`[data-section="${key}"]`);
      if (section) {
        section.classList.toggle('active', value);
      }
    }

    // Handle color selections
    const colorSelect = document.querySelector(`[data-color="${key}"]`);
    if (colorSelect) {
      colorSelect.value = value || '';
      formState[key] = value;
      // Trigger change to update images
      if (value) {
        colorSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  });

  updateOrderSummary();
  updateProgress();
}

// Initialize
function init() {
    renderClubInfo();
    renderPersonalInfo();
    renderKitSections();
    renderNotesSection();
    setupEventListeners();

    // Load saved draft
    const savedDraft = loadDraft();
    if (savedDraft) {
      // Show notification about loaded draft
      setTimeout(() => {
        if (confirm('A saved draft was found. Would you like to restore it?')) {
          restoreFormState(savedDraft);
          showNotification('Draft restored successfully', 'success');
        } else {
          clearDraft();
        }
      }, 500);
    }

    // Initial progress update
    updateProgress();

    // Add aria-live to summary
    const summaryContent = document.getElementById('order-summary-content');
    if (summaryContent) {
      summaryContent.setAttribute('aria-live', 'polite');
      summaryContent.setAttribute('aria-atomic', 'false');
    }

    // Add tabindex and role to toggle headers for keyboard accessibility
    document.querySelectorAll('.section-toggle-header, .item-toggle-header').forEach(header => {
      header.setAttribute('tabindex', '0');
      header.setAttribute('role', 'button');
      header.setAttribute('aria-expanded', 'false');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

  window.CricketKitForm = {
    getFormData: () => formState,
    saveDraft: saveDraft,
    loadDraft: loadDraft,
    clearDraft: clearDraft
  };
})();