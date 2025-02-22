import { PropsWithChildren, useLayoutEffect } from 'react';
import { HomePage, AboutPage } from './pages';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}


