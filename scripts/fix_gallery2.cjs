const fs = require('fs');
const filePath = 'D:\\shanmugam_associates\\src\\pages\\GalleryPage.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace lines 63-98 (the broken galleryImages tail) with clean version
const broken = `    // In progress (4)
    { id: 'prog-1', category: 'in-progress', label: 'Structural Civil Work - Multi-Storey Block', src: '/images/gallery/in-progress-01.jpg' },
    { id: 'prog-2', category: 'in-progress', label: 'Facade Scaffolding & Exterior Coating Work', src: '/images/gallery/in-progress-02.jpg' },
    { id: 'prog-3', category: 'in-progress', label: 'Active Site Construction & Surface Prep', src: '/images/gallery/in-progress-03.jpg' },
    { id: 'prog-4', category: 'in-progress', label: 'Terrace Waterproofing & Membrane Laying', src: '/images/gallery/in-progress-04.jpg' }
      // In progress (4)
    { id: 'prog-1', category: 'in-progress', label: 'Structural Civil Work - Multi-Storey Block', src: '/images/gallery/in-progress-01.jpg' },
    { id: 'prog-2', category: 'in-progress', label: 'Facade Scaffolding & Exterior Coating Work', src: '/images/gallery/in-progress-02.jpg' },
    { id: 'prog-3', category: 'in-progress', label: 'Active Site Construction & Surface Prep', src: '/images/gallery/in-progress-03.jpg' },
    { id: 'prog-4', category: 'in-progress', label: 'Terrace Waterproofing & Membrane Laying', src: '/images/gallery/in-progress-04.jpg' },

    // Extra images (22) - added automatically
    { id: 'extra-01', category: 'apartments', label: 'Extra Image 01', src: '/images/gallery/extra-01.jpeg' },
    { id: 'extra-02', category: 'apartments', label: 'Extra Image 02', src: '/images/gallery/extra-02.jpg' },
    { id: 'extra-03', category: 'apartments', label: 'Extra Image 03', src: '/images/gallery/extra-03.jpeg' },
    { id: 'extra-04', category: 'apartments', label: 'Extra Image 04', src: '/images/gallery/extra-04.jpeg' },
    { id: 'extra-05', category: 'apartments', label: 'Extra Image 05', src: '/images/gallery/extra-05.jpeg' },
    { id: 'extra-06', category: 'apartments', label: 'Extra Image 06', src: '/images/gallery/extra-06.jpeg' },
    { id: 'extra-07', category: 'apartments', label: 'Extra Image 07', src: '/images/gallery/extra-07.jpeg' },
    { id: 'extra-08', category: 'apartments', label: 'Extra Image 08', src: '/images/gallery/extra-08.jpeg' },
    { id: 'extra-09', category: 'apartments', label: 'Extra Image 09', src: '/images/gallery/extra-09.jpeg' },
    { id: 'extra-10', category: 'apartments', label: 'Extra Image 10', src: '/images/gallery/extra-10.jpeg' },
    { id: 'extra-11', category: 'apartments', label: 'Extra Image 11', src: '/images/gallery/extra-11.jpg' },
    { id: 'extra-12', category: 'apartments', label: 'Extra Image 12', src: '/images/gallery/extra-12.jpeg' },
    { id: 'extra-13', category: 'apartments', label: 'Extra Image 13', src: '/images/gallery/extra-13.jpg' },
    { id: 'extra-14', category: 'apartments', label: 'Extra Image 14', src: '/images/gallery/extra-14.jpeg' },
    { id: 'extra-15', category: 'apartments', label: 'Extra Image 15', src: '/images/gallery/extra-15.jpg' },
    { id: 'extra-16', category: 'apartments', label: 'Extra Image 16', src: '/images/gallery/extra-16.jpeg' },
    { id: 'extra-17', category: 'apartments', label: 'Extra Image 17', src: '/images/gallery/extra-17.jpg' },
    { id: 'extra-18', category: 'apartments', label: 'Extra Image 18', src: '/images/gallery/extra-18.jpeg' },
    { id: 'extra-19', category: 'apartments', label: 'Extra Image 19', src: '/images/gallery/extra-19.jpg' },
    { id: 'extra-20', category: 'apartments', label: 'Extra Image 20', src: '/images/gallery/extra-20.jpeg' },
    { id: 'extra-21', category: 'apartments', label: 'Extra Image 21', src: '/images/gallery/extra-21.jpeg' },
    { id: 'extra-22', category: 'apartments', label: 'Extra Image 22', src: '/images/gallery/extra-22.jpeg' },

];`;

const fixed = `    // In progress (4)
    { id: 'prog-1', category: 'in-progress', label: 'Structural Civil Work - Multi-Storey Block', src: '/images/gallery/in-progress-01.jpg' },
    { id: 'prog-2', category: 'in-progress', label: 'Facade Scaffolding & Exterior Coating Work', src: '/images/gallery/in-progress-02.jpg' },
    { id: 'prog-3', category: 'in-progress', label: 'Active Site Construction & Surface Prep', src: '/images/gallery/in-progress-03.jpg' },
    { id: 'prog-4', category: 'in-progress', label: 'Terrace Waterproofing & Membrane Laying', src: '/images/gallery/in-progress-04.jpg' },

    // Extra gallery images (22)
    { id: 'extra-01', category: 'apartments', label: 'Project Photo 01', src: '/images/gallery/extra-01.jpeg' },
    { id: 'extra-02', category: 'apartments', label: 'Project Photo 02', src: '/images/gallery/extra-02.jpg' },
    { id: 'extra-03', category: 'apartments', label: 'Project Photo 03', src: '/images/gallery/extra-03.jpeg' },
    { id: 'extra-04', category: 'apartments', label: 'Project Photo 04', src: '/images/gallery/extra-04.jpeg' },
    { id: 'extra-05', category: 'apartments', label: 'Project Photo 05', src: '/images/gallery/extra-05.jpeg' },
    { id: 'extra-06', category: 'apartments', label: 'Project Photo 06', src: '/images/gallery/extra-06.jpeg' },
    { id: 'extra-07', category: 'villas', label: 'Project Photo 07', src: '/images/gallery/extra-07.jpeg' },
    { id: 'extra-08', category: 'villas', label: 'Project Photo 08', src: '/images/gallery/extra-08.jpeg' },
    { id: 'extra-09', category: 'villas', label: 'Project Photo 09', src: '/images/gallery/extra-09.jpeg' },
    { id: 'extra-10', category: 'institutional', label: 'Project Photo 10', src: '/images/gallery/extra-10.jpeg' },
    { id: 'extra-11', category: 'institutional', label: 'Project Photo 11', src: '/images/gallery/extra-11.jpg' },
    { id: 'extra-12', category: 'gated-communities', label: 'Project Photo 12', src: '/images/gallery/extra-12.jpeg' },
    { id: 'extra-13', category: 'gated-communities', label: 'Project Photo 13', src: '/images/gallery/extra-13.jpg' },
    { id: 'extra-14', category: 'gated-communities', label: 'Project Photo 14', src: '/images/gallery/extra-14.jpeg' },
    { id: 'extra-15', category: 'landscape', label: 'Project Photo 15', src: '/images/gallery/extra-15.jpg' },
    { id: 'extra-16', category: 'landscape', label: 'Project Photo 16', src: '/images/gallery/extra-16.jpeg' },
    { id: 'extra-17', category: 'landscape', label: 'Project Photo 17', src: '/images/gallery/extra-17.jpg' },
    { id: 'extra-18', category: 'in-progress', label: 'Project Photo 18', src: '/images/gallery/extra-18.jpeg' },
    { id: 'extra-19', category: 'in-progress', label: 'Project Photo 19', src: '/images/gallery/extra-19.jpg' },
    { id: 'extra-20', category: 'in-progress', label: 'Project Photo 20', src: '/images/gallery/extra-20.jpeg' },
    { id: 'extra-21', category: 'in-progress', label: 'Project Photo 21', src: '/images/gallery/extra-21.jpeg' },
    { id: 'extra-22', category: 'in-progress', label: 'Project Photo 22', src: '/images/gallery/extra-22.jpeg' }
  ];`;

if (content.includes(broken)) {
  content = content.replace(broken, fixed);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('SUCCESS: Fixed galleryImages array - removed duplicates, added 22 extra images.');
} else {
  console.log('ERROR: Could not find exact broken block. Dumping lines 63-98:');
  const lines = content.split('\n');
  for (let i = 62; i < 99 && i < lines.length; i++) {
    console.log(`${i+1}: |${lines[i]}|`);
  }
}

