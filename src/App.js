const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Mac", animal: "Dog", breed: "Springer Spaniel"}),
    React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Love Bird"}),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed"})
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
