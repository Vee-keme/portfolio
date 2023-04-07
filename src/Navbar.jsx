import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  //set navbar button to toggle
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="Navbar">
      <div className="Navbar-title">
        <h1>!velia</h1>
      </div>

      <div className="Navbar-menu" onClick={toggle}>
        {isOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
    </div>
  );
}
