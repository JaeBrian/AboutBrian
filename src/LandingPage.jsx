import TechStacks from './TechStacks';
import Projects from './Projects';
import 'animate.css';
import NavBar from './NavBar';
import './aboutme.scss';
import './index.scss';
import linkedin from './assets/linkedin.png';
import git from './assets/git.png';
import brian from './assets/brian.png';
import proj1 from './assets/proj1.jpg';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div class="w-90 h-screen flex items-center justify-center p-20">
        <div class="grid grid-cols-5 grid-rows-5 gap-4  w-full h-full">
          <div class="flex-center grid-card items-start rounded-radius  col-span-2 row-span-2 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-1">
            <img class="object-contain w-full h-full" src={brian} />
          </div>
          <div class="flex justify-center items-center grid-card rounded-radius col-span-2 row-span-2 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-2 ">
            <div className="text-lg text-center">
              <p className="flex-center text-center text-3xl fullstack">
                Fullstack Developer
              </p>
              Hi there! I'm Brian, I am a software engineer who loves creating,
              innovating, and buildling things that other people enjoy. I love
              learning new technologies and thats what I enjoy the most about
              software engineering, the learning never stops. If I am not
              coding, you can catch me playing some auto chess games, watching
              Primeagen, or watching Ratatouille.
            </div>
          </div>

          <div class="flex-center  grid-card rounded-radius row-span-4 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-4">
            PROJECTS HERE
          </div>

          <div
            class="flex-center  grid-card rounded-radius col-span-1 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-5"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/brian-jaekook-lee/',
                '_blank'
              )
            }
          >
            <img class="object-contain w-10 h-10" src={linkedin} />
          </div>

          <div
            class="flex-center  grid-card rounded-radius col-span-1 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-6"
            onClick={() => window.open('https://github.com/JaeBrian', '_blank')}
          >
            <img class="object-contain w-12 h-12" src={git}></img>
          </div>

          <div class="flex-center  grid-card rounded-radius col-span-1 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-7">
            <div class="text-2xl font-bold">RESUME</div>
          </div>
          <div
            class="flex-center  grid-card rounded-radius col-span-1 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-8"
            onClick={() =>
              window.open(
                'https://chromewebstore.google.com/detail/zusty/ckdnkkilcbkocfdpcaohdehnbeaefndo',
                '_blank'
              )
            }
          >
            <div class="text-2xl font-bold">ZUSTY</div>
          </div>

          <div class="flex justify-center items-center grid-card rounded-radius col-span-2 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-5">
            <div class="text-center text-xl">
              SKILLS: Typescript, Javascript, React, Node, Express, Redux, Jest,
              SQL, noSQL, Next.js, Zustand, GraphQL, D3, Tailwind, MUI, Webpack,
              HTML, CSS, Git, Docker, AWS
            </div>
          </div>
          <div class="flex-center object-contain grid-card rounded-radius row-span-2 col-span-2 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-6"></div>

          <div class="flex-center text-l grid-card rounded-radius col-span-2 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-8">
            Interests: Buildling Keyboards, Building PCs, Collecting Mystery
            Boxes, and Ratatuoille
          </div>
          <div class="flex-center  grid-card rounded-radius col-span-1 bg-gray-600 p-4 bg-opacity-45 hover:scale-102 transition-transform duration-200 animate__animated animate__fadeIn delay-8">
            OPEN SOURCE
          </div>
        </div>
      </div>
      <TechStacks className="whiteback" />
    </>
  );
};

export default LandingPage;

{
  /* <div className="clickables"></div>
<div className="about-me">
  <div className="container >
    <div className="intro animate__animated animate__backInDown">
      Hello, I&apos;m Brian!
      <p className="fullstack ">Fullstack Developer /p>
    </div>

    <p id="bio" className="animate__animated animate__backInLeft">
      I am a software engineer who loves creating, innovating, and
      buildling things that other people enjoy. Building great things as
      a software engineer is like sharing great food, you get to watch
      it be enjoyed! I love learning new technologies and thats what I
      enjoy the most about software engineer ng, the learning never       stops.
    </p>
  </div>
</div> */
}
