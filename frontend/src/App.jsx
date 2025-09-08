import { lazy, Suspense } from "react";
import NavbarComponent from "./components/NavbarComponent";
import WhatWeDoFallback from "./fallbacks/WhatWeDoFallback";
const CarouselSection = lazy(() => import('./sections/CarouselSection'));
const CarouselFallback = lazy(() => import('./fallbacks/CarouselFallback'));
const WhatWeDoSection = lazy(() => import('./sections/WhatWeDoSection'));

// const WhatWeDoSection = lazy(() => 
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('./sections/WhatWeDoSection'))
//     }, 20000)
//   })
// )

// const CarouselSection = lazy(() => 
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('./sections/CarouselSection'))
//     }, 20000)
//   })
// )

{/**Under construction pa 'to parey dont tats it */}
const WhySolanoSection = lazy(() => import('./sections/WhySolanoSection')); 
const WhySolanoFallback = lazy(() => import('./fallbacks/WhySolanoFallback'))

const App = () => {

  return (
    <>
      <NavbarComponent />

      <Suspense fallback={<CarouselFallback />}>
        <CarouselSection />
      </Suspense>

      <Suspense fallback={<WhatWeDoFallback />}>
        <WhatWeDoSection />
      </Suspense>

      <Suspense fallback={<WhySolanoFallback/>}>
        <WhySolanoSection />
      </Suspense>

    </>
  );
};

export default App;
