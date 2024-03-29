import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./testimonial.css";
import Sonali from "../../assets/img/testimonial/sonali.JPG";
import Maneesh from "../../assets/img/testimonial/maneesh.JPG";
import Ravi1 from "../../assets/img/profile/profile.jpeg";
import Ravi2 from "../../assets/img/projects/portfolio_new.png";

const slideData = [
  {
    index: 0,
    headline: "Great work by Ravi Roy",
    description: "We thank Flatworld Solutions for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.",
    src: Sonali,
    alt: "sonali Suman"
  },
  {
    index: 1,
    headline: "Great work by Ravi Roy",
    description: "We thank Flatworld Solutions for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.",
    src: Maneesh,
    alt: "Maneesh Negi"
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    description: "We thank Flatworld Solutions for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.",
    src: Ravi1,
    alt: "Ravi Roy"

  },
  {
    index: 3,
    headline: "Focus On The Writing",
    description: "We thank Flatworld Solutions for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.",
    src: Ravi2,
    alt: "Ravi Roy"

  }
];

// =========================
// Slide
// =========================

class Slide extends Component {
  constructor(props) {
    super(props);
    this.slide = React.createRef();
  }

  handleMouseMove = event => {
    const el = this.slide.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  handleMouseLeave = event => {
    this.slide.current.style.setProperty("--x", 0);
    this.slide.current.style.setProperty("--y", 0);
  };

  handleSlideClick = event => {
    this.props.handleSlideClick(this.props.slide.index);
  };

  imageLoaded = event => {
    event.target.style.opacity = 1;
  };

  render() {
    const { src, description, headline, index, alt } = this.props.slide;
    const current = this.props.current;
    let classNames = "slide";

    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";

    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            alt={alt}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>

        <article className="slide__content">
          <h4 className="slide__headline">{headline}</h4>
          <h6 className="slide__description">{description}</h6>
          {/* <button className="slide__action btn">{button}</button> */}
        </article>
      </li>
    );
  }
}

// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

// =========================
// Slider
// =========================

class Testimonails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      heading: "Example Slider"
    };
  }

  handlePreviousClick = () => {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous
    });
  };

  handleNextClick = () => {
    const next = this.state.current + 1;

    this.setState({
      current: next === slideData.length ? 0 : next
    });
  };

  handleSlideClick = index => {
    if (this.state.current !== index) {
      this.setState({
        current: index
      });
    }
  };

  renderSlide = (slides, current) => {
    return slideData.map(slide => {
      return (
        <Slide
          key={slide.index}
          slide={slide}
          current={current}
          handleSlideClick={this.handleSlideClick}
        />
      );
    });
  };

  render() {
    const { current, heading } = this.state;
    const { slides } = this.props;
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slideData.length)}%)`
    };
    return (
      <div className="slider" aria-labelledby={headingId}>
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} className="visuallyhidden">
            {heading}
          </h3>
          {this.renderSlide(slides, current)}
        </ul>
        <div className="slider__controls">
          <SliderControl
            type="previous"
            title="Go to previous slide"
            handleClick={this.handlePreviousClick}
          />
          <SliderControl
            type="next"
            title="Go to next slide"
            handleClick={this.handleNextClick}
          />
        </div>
        <a
          id="author"
          href="https://tympanus.net/codrops/2019/08/20/react-slider-with-parallax-hover-effects"
        >
          Author
        </a>
      </div>
    );
  }
}

export default Testimonails;