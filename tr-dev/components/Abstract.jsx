import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkReact from "remark-react";
import fs from "fs";
import path from "path";

const Abstract = ({ content }) => {
  const renderMarkdown = () => {
    const processor = unified().use(remarkParse).use(remarkReact);
    const htmlContent = processor.processSync(content).result;
    return <div>{htmlContent}</div>;
  };

  return <div>{renderMarkdown()}</div>;
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "resumeFiles", "abstract.md");
  const fileContent = fs.readFileSync(filePath, "utf8");

  return {
    props: {
      content: fileContent,
    },
  };
}

export default Abstract;
