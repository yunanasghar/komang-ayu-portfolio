# Mulai dari sini — panduan untuk pemula

Website ini sudah dibuat dalam bentuk proyek **Astro** agar cepat, rapi, bisa memiliki banyak halaman, dan dapat dipasang gratis di Netlify.

## A. Membuka website di VS Code

1. Ekstrak file ZIP.
2. Buka VS Code.
3. Pilih **File → Open Folder**.
4. Pilih folder `komang-ayu-portfolio`.
5. Buka menu **Terminal → New Terminal**.
6. Jalankan:

```bash
npm install
```

Setelah selesai, jalankan:

```bash
npm run dev
```

7. Tekan `Ctrl` sambil klik alamat yang muncul, biasanya:

```text
http://localhost:4321
```

Untuk menghentikannya, tekan:

```text
Ctrl + C
```

## B. Bagian pertama yang perlu diganti

### 1. Foto utama

Masukkan foto ke:

```text
public/media/
```

Contoh nama:

```text
komang-ayu-portrait.webp
```

Buka:

```text
src/data/site.json
```

Ubah:

```json
"profile_image": "/media/profile-placeholder.svg"
```

menjadi:

```json
"profile_image": "/media/komang-ayu-portrait.webp"
```

### 2. Foto galeri

Buka:

```text
src/data/gallery.json
```

Setiap foto sudah mempunyai:

- judul Bahasa Inggris dan Indonesia;
- tahun;
- lokasi;
- peran ibuk;
- caption;
- deskripsi gambar;
- tombol tampil atau sembunyikan.

### 3. Video

Buka:

```text
src/data/videos.json
```

Masukkan tautan YouTube ke bagian:

```json
"youtube_url": "TAUTAN_VIDEO"
```

Kemudian ubah:

```json
"published": false
```

menjadi:

```json
"published": true
```

### 4. Judul buku, skripsi, dan tesis

Buka:

```text
src/data/works.json
```

Data yang belum lengkap sengaja ditulis **Title to be added** agar tidak mengarang informasi.

## C. Mencoba hasil akhir sebelum diunggah

Jalankan:

```bash
npm run build
```

Jika berhasil, akan muncul folder:

```text
dist/
```

## D. Mengunggah gratis

1. Buat akun GitHub gratis.
2. Buat repository baru.
3. Upload seluruh isi folder proyek.
4. Buat akun Netlify gratis.
5. Pilih **Add new project → Import an existing project**.
6. Hubungkan GitHub dan pilih repository website.
7. Pastikan:

```text
Build command: npm run build
Publish directory: dist
```

8. Tekan deploy.

## E. Panel sederhana untuk mengubah isi

File `.pages.yml` sudah disiapkan.

Setelah proyek ada di GitHub:

1. Buka `app.pagescms.org`.
2. Masuk menggunakan GitHub.
3. Pasang Pages CMS untuk repository website.
4. Pilih repository tersebut.
5. Ubah teks, foto, video, pengalaman, karya, statistik, dan program Fluentic melalui panel.

Perubahan dari panel akan disimpan ke GitHub. Netlify kemudian memperbarui website.

## F. Catatan biaya

Proyek dapat digunakan tanpa membayar dengan:

- GitHub gratis;
- Netlify paket gratis;
- Pages CMS;
- alamat gratis berakhiran `.netlify.app`.

Biaya hanya diperlukan apabila membeli domain khusus atau penggunaan website nantinya melewati batas layanan gratis.
