import React from "react";
import fetch from "isomorphic-unfetch";

HackerNews.getInitialProps = async function() {
  let data = await fetch(
    "https://hn.algolia.com/api/v1/search?query=" + "react"
  );
  const response = await data.json();
  // .then(response => response.json())
  // .then(result => (data = result));
  console.log("DATA", response);
  return {
    response
  };
};

export default function HackerNews(props) {
  const style = {
    border: "1px  solid black",
    padding: 10,
    margin: 5
  };
  console.log("PROPS", props);
  return (
    <div style={style}>
      <h1>Hacker News</h1>
      <hr />
      {/* {props.data.map(item => (
        <div key={item.objectID}>{item.title}</div>
      ))} */}
    </div>
  );
}
