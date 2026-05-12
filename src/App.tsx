import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from "./contexts/ThemeContext";
import Documentacion from './pages/Documentacion';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import SobreEstudio from './pages/SobreEstudio';
import ConsolaControl from './pages/ConsolaControl';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Router>
            <ScrollToTop />
            <Toaster />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <Home />
                    </Layout>
                  }
                />
                <Route
                  path="/proyectos"
                  element={
                    <Layout>
                      <Proyectos />
                    </Layout>
                  }
                />
                <Route
                  path="/sobre-estudio"
                  element={
                    <Layout>
                      <SobreEstudio />
                    </Layout>
                  }
                />
                <Route
                  path="/documentacion"
                  element={
                    <Layout>
                      <Documentacion />
                    </Layout>
                  }
                />
                <Route
                  path="/consola-control"
                  element={
                    <Layout>
                      <ConsolaControl />
                    </Layout>
                  }
                />
                <Route
                  path="/404"
                  element={
                    <Layout>
                      <NotFound />
                    </Layout>
                  }
                />
                {/* Final fallback route */}
                <Route
                  path="*"
                  element={
                    <Layout>
                      <NotFound />
                    </Layout>
                  }
                />
              </Routes>
            </Router>
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

export default App;
