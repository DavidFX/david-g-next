import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
    language: string;
    codeString: string;
}

const CodeBlock = ({ language, codeString }: CodeBlockProps) => {
    return (
        <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
            {codeString}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
