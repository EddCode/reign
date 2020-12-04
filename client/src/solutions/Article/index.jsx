import ArticleStyle, {
  ArticleContainer,
  ArticleContent,
  Delete,
} from "./styled";

const Article = (props) => {
  const { title, id, author, story_title, created_at, url, story_url } = props;

  const handleRemove = (e) => {
    e.preventDefault();
    console.log("delete element", id);
  };

  const parseDate = (created_at) => {
    const date = new Date(created_at);

    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");

    return `${month}/${day}/${year}`;
  };

  return (
    <a
      href={url || story_url}
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
            {parseDate(created_at)}
            <Delete onClick={handleRemove}></Delete>
          </ArticleContent>
        </ArticleContainer>
      </ArticleStyle>
    </a>
  );
};

export default Article;
