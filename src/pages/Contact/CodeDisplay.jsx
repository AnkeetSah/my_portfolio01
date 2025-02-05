import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const CodeDisplay = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `
const button = document.querySelector('#sendBtn');

const message = {
    name: "Jonathan Davis",
    email: "",
    message: "",
    date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
    form.send(message);
})`;

  return (
    <div className="max-w-[800px]  my-5 rounded-lg overflow-hidden ">
      <div className=" px-5 py-3 text-[#FEA55F] font-mono ">
        
      </div>
      <pre className="m-0 p-4 rounded-none bg-transparent">
        <code className="language-javascript">{code}</code>
      </pre>

      <style>{`
        /* Syntax highlighting colors */
        .token.comment {
            color: #C98BDF !important;
        }
        .token.string {
            color: #FEA55F !important;
        }
        .token.function {
            color: #5565E8 !important;
        }
        .token.keyword {
            color: #C98BDF !important;
        }
        .token.operator {
            color: #5565E8 !important;
        }
        .token.punctuation {
            color: #FEA55F !important;
        }
        .token.property {
            color: #5565E8 !important;
        }
        /* Remove background color */
        pre[class*="language-"] {
            background: transparent !important;
        }
        code[class*="language-"] {
            color: #FEA55F !important;
        }
      `}</style>
    </div>
  );
};

export default CodeDisplay;
