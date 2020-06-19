import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className='my-1'>
        This is a full stack React app demonstration by Steven Jenkins
      </p>
      <p className='bg-dark p'>
        Made with{' '}
        <span>
          <a
            href='https://www.udemy.com/course/modern-react-front-to-back'
            style={{ color: '#fff', textDecoration: 'underline' }}
          >
            Brad Traversy's Udemy course
          </a>
        </span>{' '}
      </p>
    </div>
  );
};

export default About;
