import styled from "styled-components";

export const Delete = styled.i`
  display: none;
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
    margin-left: 1em;
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

  ${(props) => {
    return props.variant == "author"
      ? "color: #999"
      : "margin-right: .4rem; color: #333";
  }}
`;

export default Article;
