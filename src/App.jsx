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
import Careers from "./pages/careers/Careers";
import NoPage from "./pages/NoPage";
import FAQ from "./pages/Help/FAQ";
import Contact from "./pages/Help/Contact";

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
        <Route path="career" element={<Careerlayout />}>
          <Route index element={<Careers />} />
        </Route>

        <Route path="*" element={<NoPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
