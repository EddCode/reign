import ArticleStyle, {
  ArticleContainer,
  ArticleContent,
  Delete,
} from "./styled";

const Article = (props) => {
  const { title, id, author, story_title, time } = props;

  const handleRemove = () => {
    console.log("delete element", id);
  };

  return (
    <a
      href="https://duckduckgo.com/"
      target="_blank"
      style={{ display: "inline-block", width: "100%" }}
    >
      <ArticleStyle>
        <ArticleContainer>
          <div style={{ display: "flex" }}>
            <ArticleContent variant="title">
              {story_title || title}
            </ArticleContent>
            <ArticleContent variant="author"> - {author} - </ArticleContent>
          </div>
          <ArticleContent variant="time">
            {time}
            <Delete onClick={handleRemove}></Delete>
          </ArticleContent>
        </ArticleContainer>
      </ArticleStyle>
    </a>
  );
};

export default Article;
