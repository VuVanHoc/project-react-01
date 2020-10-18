import React from "react";
import ReactDOM from "react-dom";

const Root = () => {
  return (
    <>
      <div>Hello React</div>
      <img src="https://picsum.photos/300/300" />
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
