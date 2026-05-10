/**
 * App.jsx — Root component.
 *
 * Composes the three top-level layout regions:
 *   <Header />  — sticky nav, always visible
 *   <main>      — scrollable page content
 *   <Footer />  — page-end credits / contact
 */
import { Header, Footer } from '@/components/layout';
import { Home } from '@/pages';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
