import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, MainContainer } from "./components";

function App() {
  return (
    <AnimatePresence mode='wait'>

        <div className="w-screen h-auto flex flex-col">
          <Header />

          <main className="mt-14 md:mt-20 w-screen">
            <Routes>
              <Route path="/*" element={<MainContainer/>}/>
              <Route path="/createItem" element={<CreateContainer/>}/>
            </Routes>
          </main>
      </div>

   </AnimatePresence>
  );
}
export default App;
