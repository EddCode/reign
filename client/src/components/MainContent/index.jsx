import MainContent from "./styled";
import { useArticles } from "../../hooks/articles";
import Article from "../../solutions/Article";

const Main = () => {
  const [articles, setArticles, removeArticle] = useArticles();

  return (
    <MainContent>
      {articles.map((article) => (
        <Article
          key={article._id}
          {...article}
          setArticles={setArticles}
          removeArticle={removeArticle}
        />
      ))}
    </MainContent>
  );
};

export default Main;
