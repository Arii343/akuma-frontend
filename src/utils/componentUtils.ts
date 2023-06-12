import { RefObject } from "react";

const scrollTo = (elementRef: RefObject<HTMLHeadingElement>) => {
  window.scrollTo({
    top: elementRef?.current?.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

export default scrollTo;
