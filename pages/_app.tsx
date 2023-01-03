import React from "react";
import { MDXProvider } from "@mdx-js/react";
import App from "next/app";
import { useGoogleAnalytics } from "~/analytics/client";
import "~/main.styl";

// This is really dumb... https://mdxjs.com/guides/syntax-highlighting
const components = {
  code: (props) => <code {...props} />, //<HighlightedCode {...props} />,
};

function NewApp(props) {
  useGoogleAnalytics();
  return (
    <MDXProvider components={components}>
      <App {...props}></App>
    </MDXProvider>
  );
}

export default NewApp;
