import styled from "styled-components";

export const Delete = styled.i`
  display: none;
  position: absolute;
  left: 4rem;
  &:before {
    content: "\f2f8";
  }
`;

const Article = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  cursor: pointer;
  border-bottom: ${(props) => props.theme.border};
  &:hover {
    background-color: ${(props) => props.theme.contrast};
  }

  &:hover ${Delete} {
    display: inline-block;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  width: 100%;
`;

export const ArticleContent = styled.p`
  font-size: ${(props) => props.theme.size};
  position: relative;

  ${(props) => {
    switch (props.variant) {
      case "author":
        return "color: #999";
        break;
      case "title":
        return "margin-right: .4rem;color: #333;";
        break;
      case "time":
        return "color:#333;margin-right:2rem";
        break;
    }
  }}
`;

export default Article;
