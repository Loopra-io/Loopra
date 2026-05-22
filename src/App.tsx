import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import type { JSX } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from "./contexts/ThemeContext";
import Documentacion from './pages/Documentacion';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import SobreEstudio from './pages/SobreEstudio';
import Privacidad from './pages/Privacidad';
import Terminos from './pages/Terminos';
import Cumplimiento from './pages/Cumplimiento';
import Contacto from './pages/Contacto';
import Carreras from './pages/Carreras';
import Prensa from './pages/Prensa';

/**
 * Componente principal de la aplicación Loopra.
 *
 * @remarks
 * - Configurado con `basename="/"` para usar el dominio personalizado `https://loopra.me`
 * - Si necesitas volver a GitHub Pages (loopra-io.github.io/Loopra/), cambia a `basename="/Loopra"`
 * - React Router gestiona todas las rutas de la aplicación
 * - El ErrorBoundary captura errores en componentes
 * - ThemeProvider gestiona el tema light/dark
 *
 * @returns {JSX.Element} El árbol de componentes de la aplicación
 */
function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          {/* 
            basename="/" para dominio personalizado (https://loopra.me)
            Cambiar a basename="/Loopra" si vuelves a GitHub Pages standard
          */}
          <Router basename="/">
            <ScrollToTop />
            <Toaster />
            <Routes>
              <Route path="/" element={<Layout><Home /></Layout>} />
              <Route path="/proyectos" element={<Layout><Proyectos /></Layout>} />
              <Route path="/sobre-estudio" element={<Layout><SobreEstudio /></Layout>} />
              <Route path="/docs" element={<Layout><Documentacion /></Layout>} />
<Route
                  path="/privacidad"
                  element={
                    <Layout>
                      <Privacidad />
                    </Layout>
                  }
                />
<Route
                  path="/terminos"
                  element={
                    <Layout>
                      <Terminos />
                    </Layout>
                  }
                />
                <Route
                  path="/cumplimiento"
                  element={
                    <Layout>
                      <Cumplimiento />
                    </Layout>
                  }
                />
                <Route
                  path="/contacto"
                  element={
                    <Layout>
                      <Contacto />
                    </Layout>
                  }
                />
                <Route
                  path="/carreras"
                  element={
                    <Layout>
                      <Carreras />
                    </Layout>
                  }
                />
                <Route
                  path="/prensa"
                  element={
                    <Layout>
                      <Prensa />
                    </Layout>
                  }
                />

              <Route path="/404" element={<Layout><NotFound /></Layout>} />
              <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
