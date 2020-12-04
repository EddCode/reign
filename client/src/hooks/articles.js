import { useState, useEffect } from "react";

export const useArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    const data = await fetch("http://localhost:3000/article");
    const result = await data.json();
    setArticles(result);
  }, []);

  return [articles];
};
