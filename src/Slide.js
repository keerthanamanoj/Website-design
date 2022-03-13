import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import './Slide.css';
import leftpic1 from './images/leftpic1.png'
import leftpic3 from './images/leftpic3.png'
import leftpic2 from './images/leftpic2.png'

const slideImages = [
  {
    url: "https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/8OHYcD4EA5hpJqQgtQmNVfLrO0YXspuEDfseTmXX.png",
    caption: 'Slide 1'
  },
  {
    url: "https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/T8KFRAQZrEa0ptImqcxSlURKmEMp2rzggcARfhoD.png",
    caption: 'Slide 2'
  },
  {
    url: "https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/8OHYcD4EA5hpJqQgtQmNVfLrO0YXspuEDfseTmXX.png",
    caption: 'Slide 1'
  }

];

const colors = [<img src={leftpic1} />, <img src={leftpic3} />];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => { };
  }, [index]);

  return (
    <div className="slide-img">
      <div className="slideshow">
        {/* <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {slideImages.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${backgroundColor.url})` }}
            ></div>
          ))}
        </div> */}

        <img className="img" src={leftpic1} />
      </div>
      <div className="static-img">
        <img className="img" src={leftpic2} />
      </div>
    </div>




  );
}
export default Slideshow;










