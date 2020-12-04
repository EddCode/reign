import { useState, useEffect } from "react";

const sample = [
  {
    id: 1,
    story_title: "Wordpress 3.4 would be rewritten in Node.js.",
    title: "wordpress 3.4 would be rewritten in Node.js.",
    time: "4:00 pm",
    author: "Garbage",
  },
];

export const useArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(sample);
  }, []);

  return [articles];
};
