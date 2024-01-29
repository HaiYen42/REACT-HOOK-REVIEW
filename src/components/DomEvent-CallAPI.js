import React, { useInsertionEffect, useState } from "react";
import { useEffect } from "react";

export default function DomEvent() {
  const [posts, setPosts] = useState([]);
  const tabs = ["posts", "comments", "albums", "photos"];
  const [type, setType] = useState("posts");

  const [showGoToTop, setShowGoToTop] = useState(false);

  // console.log(type);
  //Call API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 200) {
        console.log("window.scrollY>200");
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log("Component mount....");

    return () => {
      console.log("Component Unmount....");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGoToTop = () => {
    window.scrollY = 10;
  };

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setType(tab);
          }}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
        >
          {tab}
        </button>
      ))}
      <h1>Dom Event</h1>
      {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{ position: "fixed", right: 20, bottom: 20, padding: 10 }}
          onClick={handleGoToTop}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}
