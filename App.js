
 /*const heading = React.createElement("h1", 
 {id: "heading", xyz = "abc"},
 "Hello world1");

 console.log(heading);
 */


const parent = React.createElement("div",
  {id = "parent"},
   React.createElement("div", {id = "child"}, 
   [React.createElement("h1", {}, "I am h1 tag"),
   React.createElement("h2", {}, "I am h2 tag")]
   ) )

const root = ReactDom.createRoot(document.getElementById("root"));

 root.render(parent);
 
