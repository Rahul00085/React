import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Namaste React"
);

//JSX ?? ==> React.createElement ==> object ==> HTML(DOM)

const heading2 = (
  <h1 id="title" key="h2">
    Namaste Reactsss
  </h1>
);

// React Component
// - Functional - New - usese most time in porjects
const Title = () => (
  <h1 id="title" key="h2">
    Namaste Reactsss
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h1>Namaste React Functional Component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(<HeaderComponent />);
