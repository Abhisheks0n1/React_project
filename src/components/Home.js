import React from 'react';
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h2 className="display-4 font-weight-bold">Welcome!!</h2>
        </div>
        <div className="mb-4">
          <h3 className="font-weight-bold">Abhishek Soni</h3>
          <p><strong>Email:</strong> Yashasvisoni5@gmail.com</p>
          <p><strong>Phone:</strong> +91 9044424336</p>
          <p>
            <strong>Social Links:</strong> 
            <a href="https://www.linkedin.com/in/abhisheksoni" target="_blank" rel="noopener noreferrer" className="mx-2">LinkedIn</a>|
            <a href="https://github.com/abhisheksoni-dev" target="_blank" rel="noopener noreferrer" className="mx-2">GitHub</a>
          </p>
        </div>

        <div className="bg-light p-4 rounded shadow-sm mb-4">
          <h4 className="font-weight-bold">Objective</h4>
          <p className="text-muted">
            A passionate and results-driven Full Stack Developer with over 2+ years of experience in designing, developing, and deploying scalable web applications. Skilled in utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) and various other technologies to build user-centric applications. Seeking to leverage expertise in both frontend and backend technologies to contribute to innovative and impactful projects.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="font-weight-bold">Work Experience</h4>

          <div className="bg-light p-3 rounded shadow-sm mb-3">
            <h5>Jio Platforms Limited</h5>
            <p><strong>Role:</strong> Software Developer 1 (MERN Full Stack Developer)</p>
            <p><strong>Location:</strong> Mumbai, India</p>
            <p><strong>Duration:</strong> October 2022 – December 2024</p>
            <ul>
              <li>Led the development of a cloud-based telephony platform using Node.js for backend and React.js for frontend, improving communication for enterprise users.</li>
              <li>Developed and maintained scalable RESTful APIs in Node.js (Express.js), optimizing backend performance.</li>
              <li>Worked with MySQL and MongoDB for efficient data retrieval and management.</li>
              <li>Collaborated with cross-functional teams to implement features and troubleshoot issues.</li>
            </ul>
          </div>

          <div className="bg-light p-3 rounded shadow-sm">
            <h5>Fynd Shopsense Retail Technologies Ltd.</h5>
            <p><strong>Role:</strong> Python Full Stack Developer (Internship)</p>
            <p><strong>Location:</strong> Remote, India</p>
            <p><strong>Duration:</strong> April 2022 – October 2022</p>
            <ul>
              <li>Developed a web application using Python for backend and HTML/CSS for frontend.</li>
              <li>Implemented the structure and layout of web pages ensuring responsive design.</li>
              <li>Collaborated for frontend integration and streamlined the deployment workflow.</li>
            </ul>
          </div>
        </div>

        <div className="bg-light p-4 rounded shadow-sm mb-4">
          <h4 className="font-weight-bold">Education</h4>
          <p><strong>B. Tech (Computer Science)</strong> - FGIET (CGPA: 7.34/10), 2018 - 2022</p>
        </div>

        <div className="bg-light p-4 rounded shadow-sm mb-4">
          <h4 className="font-weight-bold">Skills</h4>
          <p><strong>Languages:</strong> HTML, CSS, JavaScript, C, Python</p>
          <p><strong>Libraries/Frameworks:</strong> NodeJS, ExpressJS, Mongoose, ReactJS, Flask</p>
          <p><strong>Tools and Software:</strong> Visual Studio Code, Postman, MySQL Workbench, MongoDB Compass</p>
          <p><strong>Databases:</strong> MySQL, MongoDB</p>
          <p><strong>Subjects:</strong> Data Structures, OOPS, SDLC, Database Management Systems</p>
        </div>

        <div className="bg-light p-4 rounded shadow-sm">
          <h4 className="font-weight-bold">Projects</h4>

          <div className="mb-3">
            <h5>Jio Cloud Middleware</h5>
            <ul>
              <li>Developed APIs to create multiple modules, streamlining the development process.</li>
              <li>Managed backend with MySQL and MongoDB for data handling and optimization.</li>
              <li>Optimized API structures for modularity, allowing future functionalities.</li>
            </ul>
          </div>

          <div className="mb-3">
            <h5>Jio Cloud Telephony</h5>
            <ul>
              <li>Developed APIs and worked on React.js frontend for a telephony platform.</li>
              <li>Created functionality to parse and validate phone numbers from Excel sheets.</li>
              <li>Ensured smooth front-end and back-end integration for real-time updates.</li>
            </ul>
          </div>

          <div>
            <h5>Result Management System</h5>
            <ul>
              <li>Developed a Student Result Management platform using HTML, CSS, JavaScript, Python, and Flask.</li>
              <li>Implemented an Admin Portal for management and a Student Portal for accessing results and course enrollment.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
