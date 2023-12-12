const AboutMe = () => {
    return (
      <div className="hero min-h-screen bg-slate-200">
        <div className="hero-content flex flex-col lg:flex-row items-center justify-center">
          <img
            src="/src/assets/Tasin (2).jpeg"
            alt="Profile"
            className="max-w-full lg:max-w-sm rounded-full shadow-2xl mb-6 lg:mb-0 lg:mr-6"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              About Me
            </h1>
            <p className="py-4 text-neutral-800">
              I'm Tasin, a final-year computer science student at Daffodil
              International University. I am a skilled MERN Stack Specialist with
              a passion for innovation. Actively seeking opportunities, I aspire
              to contribute my expertise to groundbreaking projects, craft
              immersive user experiences, and shape the future of the web.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;
  