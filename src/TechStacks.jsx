import 'animate.css';
import js from './assets/js.png';
import ts from './assets/ts.png';
import react from './assets/react.png';
import redux from './assets/redux.png';
import tailwind from './assets/tailwind.svg';
import d3 from './assets/d3.svg';
import github from './assets/github.png';
import mui from './assets/mui.png';
import zustand from './assets/zusty.png';
import webpack from './assets/webpack.png';
import vite from './assets/vite.png';
import sql from './assets/post.png';
import mongodb from './assets/mongodb.png';
import node from './assets/node.png';
import jest from './assets/jest.png';
import graphql from './assets/file_type_graphql_icon_130564.png';
import html from './assets/html.png';
import css from './assets/css.png';
import docker from './assets/docker.png';
import aws from './assets/aws.png';

const TechStacks = () => {
  return (
    <>
      <div className="tech animate__animated animate__jackInTheBox">
        TECH STACKS
      </div>
      <div className="stack-container">
        <div className="stacks">
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '0.1s' }}
          >
            <img className="boxes" id="react" src={react}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '0.2s' }}
          >
            <img className="boxes" id="jest" src={jest}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '0.3s' }}
          >
            <img className="boxes" id="node" src={node}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '0.4s' }}
          >
            <img className="boxes" id="mongo" src={mongodb}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '0.5s' }}
          >
            <img className="boxes" src={js}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '0.6s' }}
          >
            <img className="boxes" src={zustand}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '0.7s' }}
          >
            <img className="boxes" src={ts}></img>
          </div>

          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '0.9s' }}
          >
            <img className="boxes" id="redux" src={redux}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox"
            style={{ animationDelay: '1s' }}
          >
            <img className="boxes" id="vite" src={vite}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '1.1s' }}
          >
            <img className="boxes" id="graphql" src={graphql}></img>
          </div>

          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '1.3s' }}
          >
            <img className="boxes" id="d3" src={d3}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '1.4s' }}
          >
            <img id="tailwind" className="boxes" src={tailwind}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '1.5s' }}
          >
            <img className="boxes" id="mui" src={mui}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox "
            style={{ animationDelay: '1.6s' }}
          >
            <img className="boxes" id="webpack" src={webpack}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox   "
            style={{ animationDelay: '1.7s' }}
          >
            <img className="boxes" id="sql" src={sql}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox   "
            style={{ animationDelay: '1.8s' }}
          >
            <img className="boxes" id="html" src={html}></img>
          </div>

          <div
            className="boxes animate__animated animate__jackInTheBox   "
            style={{ animationDelay: '2s' }}
          >
            <img className="boxes" id="github" src={github}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox   "
            style={{ animationDelay: '2.1s' }}
          >
            <img className="boxes" id="css" src={css}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox   "
            style={{ animationDelay: '2.2s' }}
          >
            <img className="boxes" id="docker" src={docker}></img>
          </div>
          <div
            className="boxes animate__animated animate__jackInTheBox   "
            style={{ animationDelay: '2.3s' }}
          >
            <img className="boxes" id="aws" src={aws}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStacks;
