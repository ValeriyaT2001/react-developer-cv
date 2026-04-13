import { useScrollToTop } from "../hooks/useScrollToTop";
export const ScrollButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop(72);
  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      &#8679;
    </button>
  );
};
