import { useScrollToSection } from "../hooks/useScrollToSection";
const Header = () => {
const scrollToSection = useScrollToSection();
  return (
    <header className="header">
      <nav className="header-nav">
        <button 
          className="header-nav-button"
          onClick={() => scrollToSection('home')}
        >
          Главная
        </button>
        <button 
          className="header-nav-button"
          onClick={() => scrollToSection('about')}
        >
          Обо мне
        </button>
        <button 
          className="header-nav-button"
          onClick={() => scrollToSection('projects')}
        >
          Проекты
        </button>
        <button 
          className="header-nav-button"
          onClick={() => scrollToSection('contacts')}
        >
          Контакты
        </button>
      </nav>
    </header>
  );
};

export default Header;