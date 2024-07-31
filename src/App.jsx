import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Careers, { careersLoader } from "./pages/careers/Careers";
import NoPage from "./pages/NoPage";
import FAQ from "./pages/Help/FAQ";
import Contact from "./pages/Help/Contact";
import CareerDetails, {
  CareerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

//Layouts
import Rootlayout from "./layout/Rootlayout";
import Helplayout from "./layout/Helplayout";
import Careerlayout from "./layout/Careerlayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Helplayout />}>
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
        <Route
          path="career"
          element={<Careerlayout />}
          errorElement={<CareersError />}
        >
          <Route index element={<Careers />} loader={careersLoader} />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={CareerDetailsLoader}
          />
        </Route>

        <Route path="*" element={<NoPage />} />
      </Route>
    ),
    { basename: "/JavaRouters" } // Add the basename
  );

  return <RouterProvider router={router} />;
}

export default App;
