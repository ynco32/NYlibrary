import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddLibrary from "./components/AddLibrary";
import Librarys from "./components/Library/Librarys";
import About from "./components/About";
import LibraryDetail from "./components/Library/LibraryDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddLibrary />} exact />
          <Route path="/librarys" element={<Librarys />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/librarys/:id" element={<LibraryDetail />} exact />
          {/* <Route path="/search" element={<Search />} exact/> */}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;