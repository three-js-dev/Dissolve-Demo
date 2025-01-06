import { Header } from "./Header";
import { InstallationGuide } from "./InstallationGuide";
import { Usage } from "./Usage";
import { PropertiesTable } from "./PropertiesTable";
import { Footer } from "./Footer";
import "./Documentation.css";

export default function Documentation() {
  return (
    <div className="documentation">
      <Header />
      <InstallationGuide />
      <Usage />
      <PropertiesTable />
      <Footer />
    </div>
  );
}
