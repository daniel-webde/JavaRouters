import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-4 mb-2 text-center text-gray-700">
      <p>Copyright &copy; {currentYear} Java-Routers</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-5 h-5 hover:text-gray-900 transition" />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 hover:text-blue-900 transition" />
        </a>
        <a href="https://www.youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="w-5 h-5 hover:text-red-500 hover:font-semibold transition" />
        </a>
      </div>
    </div>
  );
};

export default Footer;