import { Navigate } from 'react-router-dom';

const detectPreferredLang = () => {
  // implement detection logic (cookies, browser, etc.)
  return 'en';
};

const AnitimeDetectLangRedirect = () => {
  const preferred = detectPreferredLang();
  return <Navigate to={`/anitime-2025/${preferred}`} replace />;
};

export default AnitimeDetectLangRedirect;
