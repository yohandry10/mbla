import { PreloaderProvider } from './contexts/PreloaderContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AppRoutes } from './routes/index';

function App() {
  return (
    <PreloaderProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </PreloaderProvider>
  );
}

export default App;
