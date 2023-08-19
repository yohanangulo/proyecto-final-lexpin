"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarLayout = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#1c1c1c"
        options={{ showSpinner: false }}
        shallowRouting
        delay={300}
      />
    </>
  );
};
export default ProgressBarLayout;
