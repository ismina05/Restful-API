Hypermedia API Courses (Collection+JSON)
Deskripsi

Project ini merupakan implementasi REST API sederhana menggunakan standar Hypermedia dengan format Collection+JSON.
API ini dibuat untuk menampilkan data mata kuliah serta menyediakan link hypermedia sehingga client dapat melakukan navigasi antar resource melalui response API.

Project ini dibuat sebagai bagian dari tugas praktikum Standarisasi API.

Teknologi yang Digunakan
1. Node.js
2. Express.js
3. JSON
4. Hypermedia Format: Collection+JSON

Struktur Project

Berikut struktur file pada project ini:
Restful-API
│
├── data.js
├── server.js
├── package.json
├── package-lock.json
└── README.md

Penjelasan file:
- data.js : berisi data mata kuliah yang digunakan oleh API.
- server.js : file utama yang menjalankan server API dan mengatur endpoint.
- package.json : berisi konfigurasi project dan dependency yang digunakan.
- package-lock.json : file otomatis dari npm untuk mengunci versi dependency.
- README.md : dokumentasi project.

Cara Menjalankan Project
1. Clone Repository : git clone https://github.com/ismina05/Restful-API.git
2. Masuk ke Folder Project : cd Restful-API
3. Install Dependency : npm install
4. Jalankan Server : node server.js
Jika server berhasil dijalankan, maka akan muncul pesan:
Server running on http://localhost:3000

Endpoint API
Mendapatkan Data Mata Kuliah
Method:
GET /api/courses
Contoh URL:
http://localhost:3000/api/courses
Response API menggunakan format Collection+JSON yang berisi:
- version
- href
- links
- items
- queries
- template

Tujuan Project
Tujuan dari project ini adalah:
1. Memahami konsep RESTful API
2. Mengimplementasikan Hypermedia dalam API
3. Menggunakan standar Collection+JSON
4. Menerapkan konsep Standarisasi API

Author
Nama: Ismi Nuraini Azizah
Project ini dibuat untuk keperluan tugas praktikum Standarisasi API.