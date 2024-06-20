
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Testimonial from './components/testimonial';
import Information from './components/infomation';
import Partnership from './components/partnership';
import Product from './components/products';
import Perks from './components/perks';
import Contact from './components/contact';
import Programme from './components/programme';
import Footer from './components/footer';


// const meta = {
//   title: 'Light Heights',
//   description: 'I am a description, and I can create multiple tags',
//   meta: {
//       charset: 'utf-8',
//       name: {
//           keywords: 'react,meta,document,html,tags',
//           content: 'width=device-width, initial-scale=1.0'
//       }
//   }}

function App() {

     
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Testimonial/>
      <Information/>
      <Partnership/>
      <Product/>
      <Perks/>
      <Programme/>
      {/* <Contact/> */}
      <Footer/>
    </>
  );
}

export default App;
