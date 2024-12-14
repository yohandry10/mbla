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
      <main className="min-h-screen">{children}</main>
      <Footer />
      
      {/* Botón de WhatsApp Global */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/51933371159" // Reemplaza con el número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.556 4.128 1.523 5.868L0 24l6.206-1.49C8.07 23.444 9.996 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.073c-1.851 0-3.658-.479-5.215-1.37l-.373-.213-3.693.884.876-3.588-.243-.379C2.305 16.11 1.76 14.105 1.76 12c0-5.663 4.607-10.27 10.27-10.27 5.662 0 10.27 4.607 10.27 10.27 0 5.662-4.607 10.27-10.27 10.27z" />
            <path d="M17.545 14.322c-.276-.138-1.638-.808-1.892-.898-.253-.092-.438-.138-.622.138-.183.276-.714.898-.876 1.083-.162.183-.322.207-.598.069-.276-.138-1.166-.43-2.223-1.371-.821-.732-1.375-1.638-1.537-1.914-.162-.276-.018-.426.12-.564.124-.123.276-.322.414-.483.138-.161.183-.23.276-.391.092-.184.046-.345-.023-.483-.07-.138-.622-1.497-.853-2.043-.224-.538-.452-.463-.622-.47-.162-.008-.346-.008-.532-.008-.183 0-.483.069-.735.345-.253.276-.966.944-.966 2.299s.99 2.664 1.127 2.849c.138.184 1.948 2.984 4.714 4.182.659.285 1.172.456 1.57.585.659.207 1.259.178 1.732.108.529-.08 1.638-.668 1.87-1.31.23-.643.23-1.193.161-1.31-.067-.116-.252-.184-.529-.322z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </>
  );
};
