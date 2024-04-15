import React, { useState } from "react";
import ReactDOM from "react-dom";
import { marked } from "marked";
import "./index.css";

function App() {
  const [markdown, setMarkdown] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks: true,
  });

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div id="container">
      <span>Markdown editor</span>
      <textarea
        id="editor"
        type="text"
        rows="13"
        cols="97"
        onChange={handleChange}
        value={markdown}
      />
      <span>Markdown Preview</span>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { sanitize: true }),
        }}
      ></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
