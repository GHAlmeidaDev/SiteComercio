import Slider from 'react-slick';

import avatar from '../../assets/images/avatar.png';

import Title from '../Title/Title';

import './Reviews.scss';

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className="py-5">
      <div className="container pb-5">
        <Title title="FUNCIONÁRIOS" />
        <Slider {...settings}>
          <div className="reviews">
            <h3 className="reviews__title">Cargo</h3>
            <div className="reviews__image-container">
              <img
                src={avatar}

                alt="our customer"
                className="reviews__image"
              />
            </div>
            <p className="reviews__text">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque ”
            </p>
            <p className="reviews__name">Nome</p>
            
          </div>

          <div className="reviews">
            <h3 className="reviews__title">Cargo</h3>
            <div className="reviews__image-container">
              <img
                src={avatar}
                alt="our customer"
                className="reviews__image"
              />
            </div>
            <p className="reviews__text">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque ”
            </p>
            <p className="reviews__name">Nome</p>
            
          </div>

          <div className="reviews">
            <h3 className="reviews__title">Cargo</h3>
            <div className="reviews__image-container">
              <img
                src={avatar}
                alt="our customer"
                className="reviews__image"
              />
            </div>
            <p className="reviews__text">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque ”
            </p>
            <p className="reviews__name">Nome</p>
            
          </div>
          <div className="reviews">
            <h3 className="reviews__title">Cargo</h3>
            <div className="reviews__image-container">
              <img
                src={avatar}
                
                alt="our customer"
                className="reviews__image"
              />
            </div>
            <p className="reviews__text">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque ”
            </p>
            <p className="reviews__name">Nome</p>
           
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
