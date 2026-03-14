const express = require('express');
const app = express();
const port = 3000;

// Data dummy
const courses = [
  { id: 1, name: 'Pemrograman Web', credits: 3 },
  { id: 2, name: 'Basis Data', credits: 3 },
  { id: 3, name: 'Jaringan Komputer', credits: 2 },
  { id: 4, name: 'Sistem Operasi', credits: 2 },
  { id: 5, name: 'Artificial Intelligence', credits: 4 }
];

// Helper membuat item Collection+JSON
function buildItem(course) {
  return {
    href: `/api/courses/${course.id}`,
    data: [
      { name: 'id', value: course.id, prompt: 'ID Mata Kuliah' },
      { name: 'name', value: course.name, prompt: 'Nama Mata Kuliah' },
      { name: 'credits', value: course.credits, prompt: 'Jumlah SKS' }
    ],
    links: [
      { rel: 'self', href: `/api/courses/${course.id}` }
    ]
  };
}

// Endpoint daftar mata kuliah
app.get('/api/courses', (req, res) => {

  const page = parseInt(req.query.page) || 1;
  const limit = 2;

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedCourses = courses.slice(start, end);
  const totalPages = Math.ceil(courses.length / limit);

  const links = [
    { rel: 'self', href: `/api/courses?page=${page}` },
    { rel: 'first', href: '/api/courses?page=1' },
    { rel: 'last', href: `/api/courses?page=${totalPages}` }
  ];

  if (page < totalPages) {
    links.push({ rel: 'next', href: `/api/courses?page=${page + 1}` });
  }

  if (page > 1) {
    links.push({ rel: 'prev', href: `/api/courses?page=${page - 1}` });
  }

  const queries = [
    {
      rel: 'search',
      href: '/api/courses',
      prompt: 'Cari mata kuliah berdasarkan nama',
      data: [
        { name: 'q', value: '' }
      ]
    }
  ];

  const template = {
    data: [
      { name: 'name', value: '', prompt: 'Nama Mata Kuliah' },
      { name: 'credits', value: '', prompt: 'Jumlah SKS' }
    ]
  };

  const response = {
    collection: {
      version: '1.0',
      href: '/api/courses',
      links: links,
      items: paginatedCourses.map(course => buildItem(course)),
      queries: queries,
      template: template
    }
  };

  res.json(response);
});

// Endpoint detail mata kuliah
app.get('/api/courses/:id', (req, res) => {

  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);

  if (!course) {
    return res.status(404).json({ error: 'Mata kuliah tidak ditemukan' });
  }

  const response = {
    collection: {
      version: '1.0',
      href: `/api/courses/${id}`,
      links: [
        { rel: 'self', href: `/api/courses/${id}` },
        { rel: 'parent', href: '/api/courses' }
      ],
      items: [buildItem(course)],
      template: {
        data: [
          { name: 'name', value: course.name, prompt: 'Nama Mata Kuliah' },
          { name: 'credits', value: course.credits, prompt: 'Jumlah SKS' }
        ]
      }
    }
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});