import React from 'react';
import './TestimonialsDetails.css';
import { useParams } from 'react-router-dom';
import LayOut from '../../Components/LayOut/LayOut';

const TestimonialDetails = () => {
    const testimonials = [
        {
          id: "1",
          name: "John Smith",
          position: "CTO, TechStart Inc",
          image: "/client1.jpg",
          rating: 5,
          text: "Ahmad developed our entire e-commerce platform using React. The attention to detail and clean code structure made future maintenance a breeze. His expertise in both frontend and backend technologies resulted in a seamless user experience.",
          date: "March 15, 2024",
          project: "E-commerce Platform"
        },
        {
          id: "2",
          name: "Sarah Johnson",
          position: "Product Manager, MobileApp Co",
          image: "/client2.jpg",
          rating: 5,
          text: "Working with Ahmad on our Flutter mobile app was fantastic. He delivered a cross-platform solution that exceeded our expectations. His problem-solving skills and commitment to quality are outstanding.",
          date: "February 28, 2024",
          project: "Mobile App Development"
        },
        {
          id: "3",
          name: "Michael Chen",
          position: "Founder, EdTech Solutions",
          image: "/client3.jpg",
          rating: 5,
          text: "Ahmad helped us create an educational platform that serves thousands of students. His expertise in React and Node.js was crucial in building a scalable and responsive application.",
          date: "January 20, 2024",
          project: "Educational Platform"
        },
        {
          id: "4",
          name: "Emily Williams",
          position: "Marketing Director, Digital First",
          image: "/client4.jpg",
          rating: 5,
          text: "The website Ahmad built for us perfectly captures our brand identity. His understanding of UI/UX principles and attention to responsive design ensures our site looks great on all devices.",
          date: "December 15, 2023",
          project: "Corporate Website"
        }
      ];
      

        const { id } = useParams();
        const testimonial = testimonials.find(t => t.id === id) || testimonials[0];
        // ...rest of the component

  return (
    <LayOut>
      <div className="testimonial-details-wrapper">
        <div className="testimonial-details-container">
          <div className="testimonial-details-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-content">
              <h1>{testimonial.name}</h1>
              <p className="position">{testimonial.position}</p>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="review-text">{testimonial.text}</p>
              <div className="review-meta">
                <p>Project: {testimonial.project}</p>
                <p>Date: {testimonial.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default TestimonialDetails;