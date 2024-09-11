import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./pages/HomePage/Homepage"));
const CountryRoute = lazy(() => import("./pages/CountryRoute/CountryRoute"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const SpinnerFullPage = lazy(() =>
  import("./components/SpinnerFullPage/SpinnerFullPage")
);

// ✓ 70 modules transformed.
// dist/index.html                             0.79 kB │ gzip:  0.43 kB
// dist/assets/PageNotFound-CgD-P0wN.css       0.38 kB │ gzip:  0.23 kB
// dist/assets/index-B_Fxvvdq.css              0.50 kB │ gzip:  0.32 kB
// dist/assets/SpinnerFullPage-ArNVZueP.css    0.54 kB │ gzip:  0.33 kB
// dist/assets/Button-XuWfXUGY.css             0.62 kB │ gzip:  0.29 kB
// dist/assets/Header-Ckq7bhT0.css             1.01 kB │ gzip:  0.42 kB
// dist/assets/CountryRoute-BknByjc8.css       2.00 kB │ gzip:  0.63 kB
// dist/assets/Homepage-CRGelYWM.css           4.89 kB │ gzip:  1.26 kB
// dist/assets/useTheme-Bwqxs7ai.js            0.19 kB │ gzip:  0.17 kB
// dist/assets/MainPage-Cqw-DoDw.js            0.25 kB │ gzip:  0.20 kB
// dist/assets/Button-DDvTcTuP.js              0.47 kB │ gzip:  0.32 kB
// dist/assets/SpinnerFullPage-CL6Hzels.js     0.55 kB │ gzip:  0.31 kB
// dist/assets/Header-D7J-2PV6.js              0.85 kB │ gzip:  0.43 kB
// dist/assets/PageNotFound-BUFCLhFO.js        0.85 kB │ gzip:  0.43 kB
// dist/assets/sunny-outline-054qhwUO.js       1.23 kB │ gzip:  0.54 kB
// dist/assets/Homepage-DT74hYcV.js            6.20 kB │ gzip:  1.91 kB
// dist/assets/CountryRoute-ntPPquxt.js        7.62 kB │ gzip:  3.21 kB
// dist/assets/index-B-UR65dd.js             168.29 kB │ gzip: 54.94 kB
// ✓ built in 1.16s

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Homepage />} />
            <Route path="/:countryName" element={<CountryRoute />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
