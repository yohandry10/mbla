import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PreloaderAnimation } from '../preloader/PreloaderAnimation';
import { usePreloader } from '../../contexts/PreloaderContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isLoading } = usePreloader();

  return (
    <>
      {isLoading && <PreloaderAnimation />}
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};