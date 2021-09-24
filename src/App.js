import logo from './images/samgyup-kita-logo.png';
import menu1 from './images/menu-1.jpg';
import menu2 from './images/menu-2.jpg';
import menu3 from './images/menu-3.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import Slider from 'react-touch-drag-slider'
import './App.css';

const images = [
  { url: menu1, title: 'Menu1' },
  { url: menu2, title: 'Menu2' },
  { url: menu3, title: 'Menu3' },
];


function App() {
  console.log(logo);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <SimpleImageSlider
          width={614}
          height={1024}
          showNavs={true}
          showBullets={true}
          images={images}
        />

        {/* <Slider
          onSlideComplete={(i) => {
            console.log('finished dragging, current slide is', i)
          }}
          onSlideStart={(i) => {
            console.log('started dragging on slide', i)
          }}
          activeIndex={0}
          threshHold={100}
          transition={0.5}
          scaleOnDrag={true}
        >
          {images.map(({ url, title }, index) => (
            <img src={url} key={index} alt={title} />
          ))}
        </Slider> */}

      </header>
    </div >
  );
}

export default App;
