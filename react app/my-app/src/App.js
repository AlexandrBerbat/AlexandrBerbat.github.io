// import logo from './logo.svg';
// import './App.css';

import Menu from './components/Menu.js';


function App() {

  const menuContent = [
    { name: "Главная", url: "/" },
    {
      name: "Проекты",
      submenu: [
        { name: "Проект1", url: "/project1" },
        { name: "Проект2", url: "/project2" },
        { name: "Проект3", url: "/project3" },
        { name: "Проект4", url: "/project4" }
      ]
    },
    {
      name: "О нас",
      submenu: [
        { name: "Магазин", url: "/ourshop" },
        { name: "Производство", url: "/prod" },
        { name: "Сервис", url: "/service" }
      ]
    },
    { name: "Контакты", url: "/contacts" }
  ];

  return (
    <div className="App">
      <Menu content={menuContent} />

    </div>
  );
}

export default App;
