export type Lang = 'en' | 'id';

export function tr(record: Record<string, unknown>, key: string, lang: Lang): string {
  const localized = record[`${key}_${lang}`];
  const fallback = record[key];
  return String(localized ?? fallback ?? '');
}

export function routeFor(lang: Lang, route = ''): string {
  const clean = route.replace(/^\/+|\/+$/g, '');

  if (lang === 'id') {
    return clean ? `/id/${clean}` : '/id';
  }

  return clean ? `/${clean}` : '/';
}

export function alternateRoute(lang: Lang, route = ''): string {
  return routeFor(lang === 'en' ? 'id' : 'en', route);
}

export const labels = {
  en: {
    home: 'Home',
    about: 'About',
    teaching: 'Teaching',
    experience: 'Experience',
    works: 'Works',
    fluentic: 'Fluentic',
    gallery: 'Gallery',
    collaboration: 'Collaboration',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    language: 'Bahasa Indonesia',
    downloadCv: 'Download CV',
    whatsapp: 'WhatsApp',
    learnMore: 'Learn more',
    viewGallery: 'View gallery',
    collaborate: 'Collaborate with me',
    current: 'Current',
    backHome: 'Back to home'
  },
  id: {
    home: 'Beranda',
    about: 'Tentang',
    teaching: 'Pengajaran',
    experience: 'Pengalaman',
    works: 'Karya',
    fluentic: 'Fluentic',
    gallery: 'Galeri',
    collaboration: 'Kolaborasi',
    contact: 'Kontak',
    menu: 'Menu',
    close: 'Tutup',
    language: 'English',
    downloadCv: 'Unduh CV',
    whatsapp: 'WhatsApp',
    learnMore: 'Pelajari lebih lanjut',
    viewGallery: 'Lihat galeri',
    collaborate: 'Kolaborasi bersama',
    current: 'Sekarang',
    backHome: 'Kembali ke beranda'
  }
} as const;
