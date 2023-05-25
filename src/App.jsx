import React, { useState } from "react";

import Modal from "./components/modal";
import styles from "./style";
import { Business, CTA, Footer, Navbar, Hero } from "./components";

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChat = () => {
    setIsChatOpen(true);
  };
  const closeChat = () => {
    setIsChatOpen(false);
  };
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar openChat={openChat} />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Business openChat={openChat} />
          <CTA openChat={openChat} />
          <Footer />
          {isChatOpen && <Modal isChatOpen={isChatOpen} onClose={closeChat} />}
        </div>
      </div>
    </div>
  );
};

export default App;
