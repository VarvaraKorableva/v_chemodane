// ---------- Images ----------
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.webp';
declare module '*.avif';
declare module '*.svg';

// ---------- Video/Media ----------
declare module '*.mp4';
declare module '*.webm';
declare module '*.mp3';
declare module '*.wav';
declare module '*.ogg';

// ---------- Raw files (optional) ----------
declare module '*.txt';
declare module '*.pdf';

// ---------- CSS (global) ----------
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// ---------- CSS Modules ----------
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
