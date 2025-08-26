import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";
import Family from "./components/Family";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar onSelect={setSelectedMenu} />

      {/* Main content */}
      <div className="main-container">
        <div className="page-content">
          {selectedMenu === "Home" && <Home />}
          {selectedMenu === "Family" && <Family/>}
          {selectedMenu === "Messages" && <h2>Messages Section</h2>}
          {selectedMenu === "Video Call" && <h2>Video Call Feature</h2>}
          {selectedMenu === "Voice Call" && <h2>Voice Call Feature</h2>}
          {selectedMenu === "Events" && <h2>Upcoming Family Events</h2>}
          {selectedMenu === "Notifications" && <h2>Notifications</h2>}
          {selectedMenu === "Settings" && <h2>Settings Page</h2>}
          {selectedMenu === "About" && <h2>About Family Chat</h2>}
          {selectedMenu === "Inbox" && <h2>Inbox Messages</h2>}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
