import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl text-center">
                      Hi there! I'm Amit Gupta
                      </h2>
                      <p className="mt-6 text-gray-600">
                      <p>I'm a passionate web developer currently pursuing my B.Tech in software engineering. I specialize in creating beautiful, functional, and user-friendly websites. With a strong foundation in both front-end and back-end development, I aim to bring your ideas to life and help your business grow online.</p>
        
        <p>My journey in web development began several years ago, and since then, I've had the opportunity to work on a variety of projects ranging from simple landing pages to complex web applications. My skills include HTML, CSS, JavaScript, React, Node.js, and more. I am dedicated to continuously learning and staying up-to-date with the latest technologies to provide the best solutions for my clients.</p>
        
        <p>Beyond coding, I have a keen interest in exploring new technologies and trends in the tech industry. I believe in the transformative power of technology and its ability to drive innovation. When I'm not coding, you can find me reading tech blogs, experimenting with new frameworks, or participating in tech communities.</p>
        
        <p>Let's collaborate to create something exceptional. Whether you're looking to launch a new website, optimize an existing one, or develop a custom web application, I'm here to help. Feel free to reach out, and let's turn your vision into reality!</p>
                      </p>
                    
                  </div>
              </div>
          </div>
      </div>
  );
}