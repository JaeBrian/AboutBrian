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
import { useState, useRef, useEffect } from 'react';

const TechStacks = () => {
  const [observed, setObserved] = useState({});
  const observer = useRef(null);
  const boxesRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el);
    }
  };

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(`Element ${entry.target.id} is now visible`);
        setObserved((prev) => ({ ...prev, [entry.target.id]: true }));
      }
    });
  };

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      console.log('Intersection Observer not supported');
      return;
    }

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0,
    });

    boxesRef.current.forEach((box) => {
      observer.current.observe(box);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div className="whiteback">
        {/* <div className="tech" id="tech">
          TECHNOLOGIES{' '}
        </div> */}
        <div className="stack-container">
          <div className="stacks">
            <div className="boxes" id="react">
              <img className="boxes" id="react" src={react}></img>
            </div>
            <div className="boxes" id="jest">
              <img className="boxes" id="jest" src={jest}></img>
            </div>
            <div className="boxes" id="node">
              <img className="boxes" id="node" src={node}></img>
            </div>
            <div className="boxes" id="mongo">
              <img className="boxes" id="mongo" src={mongodb}></img>
            </div>
            <div className="boxes" id="boxes">
              <img className="boxes" src={js}></img>
            </div>
            <div className="boxes" ref={addToRefs}>
              <img className="boxes" src={zustand}></img>
            </div>
            <div className="boxes" ref={addToRefs}>
              <img className="boxes" src={ts}></img>
            </div>

            <div className="boxes" id="redux">
              <img className="boxes" id="redux" src={redux}></img>
            </div>
            <div className="boxes" id="vite">
              <img className="boxes" id="vite" src={vite}></img>
            </div>
            <div className="boxes" id="graphql">
              <img className="boxes" id="graphql" src={graphql}></img>
            </div>

            <div className="boxes" id="d3">
              <img className="boxes" id="d3" src={d3}></img>
            </div>
            <div className="boxes" id="tailwind">
              <img id="tailwind" className="boxes" src={tailwind}></img>
            </div>
            <div className="boxes" id="mui">
              <img className="boxes" id="mui" src={mui}></img>
            </div>
            <div className="boxes" id="webpack">
              <img className="boxes" id="webpack" src={webpack}></img>
            </div>
            <div className="boxes" id="sql">
              <img className="boxes" id="sql" src={sql}></img>
            </div>
            <div className="boxes" id="html">
              <img className="boxes" id="html" src={html}></img>
            </div>

            <div className="boxes" id="github">
              <img className="boxes" id="github" src={github}></img>
            </div>
            <div className="boxes" id="css">
              <img className="boxes" id="css" src={css}></img>
            </div>
            <div className="boxes" id="docker">
              <img className="boxes" id="docker" src={docker}></img>
            </div>
            <div className="boxes" id="aws">
              <img className="boxes" id="aws" src={aws}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStacks;
