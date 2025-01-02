import React from 'react';
import './Testimonials.css';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpeg';
import image6 from '../../assets/image6.jpeg';
import LayOut from '../../Components/LayOut/LayOut';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, Tech Corp",
      image:  image4,
      rating: 5,
      text: "Working with Ahmad was a great experience. His expertise in React and Flutter development helped us create an outstanding application."
    },
    {
      id: 2,
      name: "Sarah Smith",
      position: "Product Manager",
      image: image5,
      rating: 5,
      text: "Exceptional work on our mobile app. The Flutter implementation was flawless and the user experience is amazing."
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Startup Founder",
      image: image6,
      rating: 5,
      text: "Ahmad's React development skills helped turn our vision into reality. Highly recommended for any web development project."
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <FontAwesomeIcon 
        key={index} 
        icon={faStar} 
        className="star-icon"
      />
    ));
  };

  return (
    <LayOut>
      <div className="testimonials-wrapper">
        <div className="testimonials-container">
          <h1>CLIENT TESTIMONIALS</h1>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="client-info">
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Testimonials;