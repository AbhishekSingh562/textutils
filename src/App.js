import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enables", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enables", "Success");
    }
  };
  // return (
  //   <>
  //     <Router>
  //       <Navbar
  //         title="TextUtils"
  //         mode={mode}
  //         aboutText="AboutTextUtils"
  //         toggleMode={toggleMode}
  //       />
  //       <Alert alert={alert} />
  //       <div className="container my-3">
  //         <Routes>
  //           <Route path="/about">
  //             <About />
  //           </Route>
  //           <Route path="/">
  //             <TextForm
  //               showAlert={showAlert}
  //               heading="Enter the text to analyze below"
  //               mode={mode}
  //             />
  //           </Route>
  //         </Routes>

  //         {/* <About /> */}
  //       </div>
  //     </Router>
  //   </>
  // );

  //updated after version 6
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="AboutUs"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
