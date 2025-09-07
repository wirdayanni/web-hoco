import Hero from "../components/Hero.jsx";
import AboutPreview from "../components/AboutPreview";
import MenuPreview from "../components/MenuPreview";
import ContactPreview from "../components/ContactPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <MenuPreview />
      <ContactPreview />
    </div>
  );
}