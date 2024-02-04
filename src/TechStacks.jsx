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
        <div
          className={`tech ${
            observed.tech ? 'animate__animated animate__jackInTheBox' : ''
          }`}
          ref={addToRefs}
          id="tech"
        >
          TECHNOLOGIES{' '}
        </div>
        <div className="stack-container">
          <div className="stacks">
            <div
              className={`boxes ${
                observed.react ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '0.1s' }}
              ref={addToRefs}
              id="react"
            >
              <img className="boxes" id="react" src={react}></img>
            </div>
            <div
              className={`boxes ${
                observed.jest ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '0.13s' }}
              ref={addToRefs}
              id="jest"
            >
              <img className="boxes" id="jest" src={jest}></img>
            </div>
            <div
              className={`boxes ${
                observed.node ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '0.16s' }}
              ref={addToRefs}
              id="node"
            >
              <img className="boxes" id="node" src={node}></img>
            </div>
            <div
              className={`boxes ${
                observed.mongo ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '0.19s' }}
              ref={addToRefs}
              id="mongo"
            >
              <img className="boxes" id="mongo" src={mongodb}></img>
            </div>
            <div
              className={`boxes ${
                observed.boxes ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '0.22s' }}
              ref={addToRefs}
              id="boxes"
            >
              <img className="boxes" src={js}></img>
            </div>
            <div
              className={`boxes ${
                observed.boxes ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '0.25s' }}
              ref={addToRefs}
            >
              <img className="boxes" src={zustand}></img>
            </div>
            <div
              className={`boxes ${
                observed.boxes ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '0.28s' }}
              ref={addToRefs}
            >
              <img className="boxes" src={ts}></img>
            </div>

            <div
              className={`boxes ${
                observed.redux ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '0.31s' }}
              ref={addToRefs}
              id="redux"
            >
              <img className="boxes" id="redux" src={redux}></img>
            </div>
            <div
              className={`boxes ${
                observed.vite ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '.34s' }}
              ref={addToRefs}
              id="vite"
            >
              <img className="boxes" id="vite" src={vite}></img>
            </div>
            <div
              className={`boxes ${
                observed.graphql
                  ? 'animate__animated animate__jackInTheBox'
                  : ''
              }`}
              style={{ animationDelay: '.37s' }}
              ref={addToRefs}
              id="graphql"
            >
              <img className="boxes" id="graphql" src={graphql}></img>
            </div>

            <div
              className={`boxes ${
                observed.d3 ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '.4s' }}
              ref={addToRefs}
              id="d3"
            >
              <img className="boxes" id="d3" src={d3}></img>
            </div>
            <div
              className={`boxes ${
                observed.tailwind
                  ? 'animate__animated animate__jackInTheBox'
                  : ''
              }`}
              style={{ animationDelay: '.43s' }}
              ref={addToRefs}
              id="tailwind"
            >
              <img id="tailwind" className="boxes" src={tailwind}></img>
            </div>
            <div
              className={`boxes ${
                observed.mui ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '.46s' }}
              ref={addToRefs}
              id="mui"
            >
              <img className="boxes" id="mui" src={mui}></img>
            </div>
            <div
              className={`boxes ${
                observed.webpack
                  ? 'animate__animated animate__jackInTheBox'
                  : ''
              }`}
              style={{ animationDelay: '.49s' }}
              ref={addToRefs}
              id="webpack"
            >
              <img className="boxes" id="webpack" src={webpack}></img>
            </div>
            <div
              className={`boxes ${
                observed.sql ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '.52s' }}
              ref={addToRefs}
              id="sql"
            >
              <img className="boxes" id="sql" src={sql}></img>
            </div>
            <div
              className={`boxes ${
                observed.html ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '.55s' }}
              ref={addToRefs}
              id="html"
            >
              <img className="boxes" id="html" src={html}></img>
            </div>

            <div
              className={`boxes ${
                observed.github ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '.58s' }}
              ref={addToRefs}
              id="github"
            >
              <img className="boxes" id="github" src={github}></img>
            </div>
            <div
              className={`boxes ${
                observed.css ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '.61s' }}
              ref={addToRefs}
              id="css"
            >
              <img className="boxes" id="css" src={css}></img>
            </div>
            <div
              className={`boxes ${
                observed.docker ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '.64s' }}
              ref={addToRefs}
              id="docker"
            >
              <img className="boxes" id="docker" src={docker}></img>
            </div>
            <div
              className={`boxes ${
                observed.aws ? 'animate__animated animate__jackInTheBox' : ''
              }`}
              style={{ animationDelay: '.67s' }}
              ref={addToRefs}
              id="aws"
            >
              <img className="boxes" id="aws" src={aws}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStacks;
