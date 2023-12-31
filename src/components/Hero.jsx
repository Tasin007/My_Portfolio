import { IoMdDownload } from "react-icons/io";
import pic from '../assets/Tasin (1).jpeg'
import "./Hero.css"

const pdf = '../../public/Tasin_CV.pdf';

const Hero = () => {

    const downloadPDF = () => {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = pdf;
    
        // Wait for the iframe to load the PDF content
        iframe.onload = () => {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const downloadLink = doc.createElement('a');
          downloadLink.href = pdf;
          downloadLink.download = 'Tasin_CV.pdf';
          doc.body.appendChild(downloadLink);
          downloadLink.click();
          doc.body.removeChild(downloadLink);
          iframe.remove();
        };
    
        document.body.appendChild(iframe);
      };


    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center mt-20 mx-20 gap-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-bold mb-4">Hello, I am Tasin</h1>
                    <h2 className="text-2xl font-semibold mb-4">Junior MERN Stack Developer</h2> 
                    <p className="text-lg mb-6">Dedicated to crafting dynamic and user-centric web solutions. Proficient in HTML, CSS, JavaScript, React, ExpressJs, and MongoDB technologies.</p>
                    <button onClick={downloadPDF} className="flex px-2 py-2 rounded-lg items-center gap-2 bg-black text-white hover:bg-gray-500">
                        <IoMdDownload /> Download CV
                    </button>               
                </div>
                <img src={pic} className="one w-96 lg:w-[430px] xl:w-[550px]" alt="Tasin" />
            </div>
        </div>
    );
};

export default Hero;
