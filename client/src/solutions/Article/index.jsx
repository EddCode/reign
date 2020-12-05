import ArticleStyle, {
  ArticleContainer,
  ArticleContent,
  Delete,
} from "./styled";

const Article = (props) => {
  const {
    title,
    _id,
    author,
    story_title,
    created_at,
    url,
    story_url,
    setArticles,
    removeArticle,
  } = props;

  const handleRemove = async (e) => {
    e.preventDefault();
    const data = await fetch(`http://localhost:3000/article/${_id}`, {
      method: "delete",
    });
    await data.json();
    setArticles(removeArticle(_id));
  };

  const parseTime = (hours, minutes) => {
    hours = (hours + 24 - 2) % 24;
    const mid = "am";
    if (hours == 0) {
      //At 00 hours we need to show 12 am
      hours = 12;
    } else if (hours > 12) {
      hours = hours % 12;
      mid = "pm";
    }

    return `${hours}:${minutes} ${mid}`;
  };

  const parseDate = (created_at) => {
    const date = new Date(created_at);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMounth = today.getMonth() + 1;
    const todayDay = today.getDate();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate(); //.padStart(2, "0");

    if (currentYear == year && currentMounth == month && todayDay == day) {
      return parseTime(date.getHours(), date.getMinutes());
    }

    return `${months[month]} ${day}`;
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
