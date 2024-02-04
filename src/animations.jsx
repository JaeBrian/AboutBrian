const Animations = () => {
  const createRandomShapes = (numShapes, shapeClass) => {
    let shapes = [];
    for (let i = 0; i < numShapes; i++) {
      const top = Math.random() * 100; // Random top position from 0% to 100%
      const left = Math.random() * 100; // Random left position from 0% to 100%
      const delay = Math.random() * -5; // Random animation delay from 0s to -5s

      shapes.push(
        <span
          key={i}
          className={`floating ${shapeClass}`}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
          }}
        ></span>
      );
    }
    return shapes;
  };

  return (
    <div className="backwrap gradient">
      <div className="back-shapes">
        {createRandomShapes(3, 'circle')}
        {createRandomShapes(3, 'triangle')}
        {createRandomShapes(3, 'square')}
        {createRandomShapes(3, 'x')}
      </div>
    </div>
  );
};

export default Animations;
