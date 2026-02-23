import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Country from "./Country";
import State from "./State";
import District from "./District";
import Language from "./Language";
import Image from "./Image";
import Radio from "./Radio";
import Searching from "./Searching";
import Pagination from "./Pagination";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">

        {/* Top Navbar */}
        <nav className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container-fluid">
            <NavLink className="navbar-brand fw-bold" to="/">
              Siwansh Solutions
            </NavLink>
          </div>
        </nav>

        {/* Main Layout */}
        <div className="container-fluid flex-grow-1">
          <div className="row">

            {/* Sidebar */}
            <div className="col-md-3 col-lg-2 bg-light p-3 border-end">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/language">
                    Language
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/country">
                    Country
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/state">
                    State
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/district">
                    District
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/image">
                    Image Upload
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/radio">
                    Radio button
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/searching">
                    Searching
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pagination">
                    Pagination
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Content Area */}
            <div className="col-md-9 col-lg-10 p-4">
              <Routes>
                <Route path="/Language" element={<Language />} />
                <Route path="/Country" element={<Country />} />
                <Route path="/State" element={<State />} />
                <Route path="/District" element={<District />} />
                <Route path="/Image" element={<Image />} />
                <Route path="/Radio" element={<Radio />} />
                <Route path="/Searching" element={<Searching />} />
                <Route path="/Pagination" element={<Pagination />} />
              </Routes>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-light py-3 mt-auto">
          <div className="container text-center">
            © {new Date().getFullYear()} Siwansh Solutions. All rights reserved.
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
