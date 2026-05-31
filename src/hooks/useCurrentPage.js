import { useLocation } from 'react-router-dom';

export const useCurrentPage = () => {
  const location = useLocation();
  return location.pathname;
};