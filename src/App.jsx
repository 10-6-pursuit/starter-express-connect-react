// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/colors" element={<Index />} />
            <Route path="/colors/new" element={<New />} />
            <Route path="/colors/:id" element={<Show />} />
            <Route path="/colors/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}


// Frontend      Backend
// ---------------------
// Index         Index
// Show          Show
// New           Create
// Edit          Update
// Delete (button) Destroy

export default App;
