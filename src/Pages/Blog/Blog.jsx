import './Blog.css';
import React from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Development",
      date: "March 15, 2024",
      category: "React",
      image: image1,
      excerpt: "Learn the fundamentals of React and building modern web applications."
    },
    {
      id: 2,
      title: "Flutter vs React Native",
      date: "March 10, 2024",
      category: "Mobile Development",
      image: image2,
      excerpt: "Comparing two popular frameworks for mobile app development."
    },
    {
      id: 3,
      title: "Best Practices in Web Development",
      date: "March 5, 2024",
      category: "Web Development",
      image: image3,
      excerpt: "Essential tips and tricks for modern web development."
    }
  ];

  return (
    <LayOut>
      <div className="blog-wrapper">
        <div className="blog-container">
          <h1>Latest Blog Posts</h1>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <span className="blog-category">{post.category}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="blog-date">{post.date}</span>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Blog;