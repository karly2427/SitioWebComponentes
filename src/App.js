import './App.css';
import './index.css';
import logo from './images/cafe-removebg-preview.png';
import MyNavegacion from './components/navbar';
import MySeccion from './components/seccion';
import MyServices from './components/seccService';
import MyAbout from './components/secAbout';
import MyFourSec from './components/secFourt';
import MyContacto from './components/secContact';
import MyFoot from './components/footer';

function App() {
  return (
    <div className="App">
    <body className="bg-[#fff8f3] w-full">
    <header className="text-gray-600 body-font mt-20">
    <div className="bg-[#5b4b45] flex flex-wrap flex-col md:flex-row items-center px-5 py-5 fixed top-0 left-0 right-0">
    <MyNavegacion/>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    <img src={logo} className="w-32" alt=""></img>
    </a>
   </div>
    </header>
    <section id="home" className="bg-[#fedfdd] w-full">
      <MySeccion/>
    </section>
    <section id="services" className="flex flex-col items-center font-raleway text-xl w-full py-5 px-6 md:px-0">
    <MyServices/>
    </section>
    <section id="about_us" className="flex flex-col md:flex-row w-full font-raleway">
    <MyAbout/>
    </section> 
    <section className="flex flex-col font-raleway w-full">
    <MyFourSec/>
    </section> 
    <section id="contact" className="font-raleway flex flex-row bg-[#e0de90] w-full">
    <MyContacto/>
    </section>
    <footer
     className="bg-[#5b4b45] text-white flex flex-row justify-center md:justify-between items-center py-6 md:py-12 px-28 md:px-8 lg:px-28 w-full">
      <MyFoot/> 
    </footer>

    </body>
     
    </div>
  );
};

export default App;
