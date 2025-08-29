import { lazy, Suspense } from "react";
import NavbarComponent from "./components/NavbarComponent";
const HeaderSection = lazy(() => import('./sections/HeaderSection'));
const HeaderFallback = lazy(() => import('./fallbacks/HeaderFallback'));

const App = () => {

  return (
    <>
      <NavbarComponent />

      <Suspense fallback={HeaderFallback}>
        <HeaderSection />
      </Suspense>
    </>
  );
};

export default App;
