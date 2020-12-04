import MainContent from "./styled";
import { useArticles } from "../../hooks/articles";
import Article from "../../solutions/Article";

const Main = () => {
  const [articles] = useArticles();

  return (
    <MainContent>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </MainContent>
  );
};

export default Main;
