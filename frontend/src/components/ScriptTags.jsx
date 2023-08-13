"use client";
import Script from "next/script";
import { useState } from "react";

const ScriptTags = () => {
  const randomNumber = Math.ceil(Math.random() * 100);
  const refresh = "?v=" + randomNumber;

  const [isjqReady, setIsJqReady] = useState(false);
  const [isBootsTrapReady, setIsBootsTrapReady] = useState(false);
  const [isPuglinReady, setIsPuglinReady] = useState(false);
  return (
    <>
      {!isjqReady && (
        <Script
          onLoad={() => setIsJqReady(true)}
          src={`https://cdn.jsdelivr.net/gh/yohanangulo/cdn/js/jquery.min.js${refresh}`}
        ></Script>
      )}
      {isjqReady && !isBootsTrapReady && (
        <Script
          onLoad={() => setIsBootsTrapReady(true)}
          src={`https://cdn.jsdelivr.net/gh/yohanangulo/cdn/js/bootstrap.min.js${refresh}`}
        ></Script>
      )}
      {isBootsTrapReady && !isPuglinReady && (
        <Script
          onLoad={() => setIsPuglinReady(true)}
          src={`https://cdn.jsdelivr.net/gh/yohanangulo/cdn/js/plugins.js${refresh}`}
        ></Script>
      )}
      {isPuglinReady && (
        <Script
          src={`https://cdn.jsdelivr.net/gh/yohanangulo/cdn/js/scripts.js${refresh}`}
        ></Script>
      )}
    </>
  );
};
export default ScriptTags;
