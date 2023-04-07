import Navbar from "../Navbar";
import MainContent from "../MainContent";
import SideContent from "../SideContent";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="container">
        <MainContent />
        <SideContent />
      </div>
    </div>
  );
}
