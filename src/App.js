import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import CreateAd from "./Components/CreateAd/CreateAd";
import TextAd from "./Components/TextAd/TextAd";
import MediaAd from "./Components/MediaAd/MediaAd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createad" element={<CreateAd />} />
          <Route path="/textad" element={<TextAd />} />
          <Route path="/mediaad" element={<MediaAd />} />
        </Routes>
        <div
          class="modal fade"
          id="submitModal"
          tabindex="-1"
          aria-labelledby="submitModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <CheckCircleIcon />
                <h5>Submitted</h5>
                <button
                  id="hiddenButtonRef"
                  style={{ display: "none" }}
                  data-bs-dismiss="modal"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
