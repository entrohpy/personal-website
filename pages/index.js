import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const PageContainer = ({children}) => {
  return (
    <div data-aos="fade-in">
      <div className="flex h-screen items-center justify-center">
        {children}
      </div>
    </div>
  );
}

{/* <div className="container mx-auto p-6"> */}
const Home = () => {
  const [headerClassesScroll, setHeaderClassesScroll] = useState("");
  useEffect(() => {
    const options = { passive: true }; // options must match add/remove event
    const scroll = (event) => {
      const header = document.getElementById("track-header");
      const headerDistToTop = header.getBoundingClientRect().top;
      // console.log(headerDistToTop)
      if (headerDistToTop == 0) {
        setHeaderClassesScroll("");
      }
      else {
        setHeaderClassesScroll("");
      }

    };
    document.addEventListener("scroll", scroll, options);
    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener("scroll", scroll, options);
  }, []);
  return (
    <div className="text-sky-900 dark:text-sky-100">
      <PageContainer>
        <div id="track-header"></div>
        <div className={"text-center md:text-left md:flex " + headerClassesScroll} >
          <img className="mx-auto w-64 h-64 rounded-full" src="/images/profile.png" /> {/* image */}
          <div className="my-auto p-6 text-lg">
            <div className="font-display font-semibold text-3xl">
              Rohit Nema
            </div>
            <div>
              PhD student, Applied Cryptography at Stanford University
            </div>
            <div className="text-sm">
              Previously, Computer Science and Mathematics at UCLA '22
            </div>
            <div className="space-x-4 mt-3 " style={{fontSize: 32}}>
              <button className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-500">
                <a href="mailto:rohit@rohitnema.me">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                  />
                </a>
              </button>
              <button className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-500">
                <a target="_blank" href="/CV.pdf">
                  <FontAwesomeIcon
                    icon={faFileLines}
                  />
                </a>
              </button>
              <button className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-500">
                <a target="_blank" href="https://github.com/entrohpy/">
                  <FontAwesomeIcon
                    icon={faGithub}
                  />
                </a>
              </button>
              <button className="text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-500">
                <a target="_blank" href="https://linkedin.com/in/rohit-nema/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </PageContainer>
      <PageContainer>
          <div className="my-auto p-6 text-lg text-center">
            <div className="font-display font-semibold text-3xl">
              About
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Viverra aliquet eget sit amet tellus cras adipiscing. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Ipsum faucibus vitae aliquet nec ullamcorper. Laoreet non curabitur gravida arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada. Lacinia at quis risus sed vulputate odio ut enim blandit. Arcu risus quis varius quam. Interdum consectetur libero id faucibus nisl tincidunt eget. Nisl purus in mollis nunc sed id. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Id ornare arcu odio ut. Enim lobortis scelerisque fermentum dui. Vitae sapien pellentesque habitant morbi tristique senectus. At varius vel pharetra vel turpis. Rutrum quisque non tellus orci. Gravida in fermentum et sollicitudin. Ut placerat orci nulla pellentesque dignissim.
            </div>
          </div>
      </PageContainer>
    </div>
  );
}

export default Home;
