import React from "react";
import "./Flashcard.scss";

interface FlashcardProps {
  frontHTML: string;
  frontCardStyle?: React.CSSProperties;
  frontContentStyle?: React.CSSProperties;
  backHTML: string;
  backCardStyle?: React.CSSProperties;
  backContentStyle?: React.CSSProperties;
  className?: string;
  height?: string;
  width?: string;
  resetState?: boolean;
  style?: React.CSSProperties;
  onCardFlip?: (state: boolean) => void;
}

export default function Flashcard({
  frontHTML,
  frontCardStyle,
  frontContentStyle,
  backHTML,
  backCardStyle,
  backContentStyle,
  style,
  className = "",
  height,
  width,
  resetState = false,
  onCardFlip = (state = false) => {},
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  React.useEffect(() => {
    setIsFlipped(false);
  }, [resetState]);

  return (
    <div
      className={`FlashcardWrapper ${className}`}
      style={{ height: height, width: width, ...style }}
    >
      <div
        className={`FlashcardWrapper__item ${
          isFlipped ? "FlashcardWrapper__item--flip" : ""
        }`}
        onClick={() => {
          setIsFlipped(!isFlipped);
          onCardFlip(!isFlipped);
        }}
      >
        <div className="FlashcardWrapper__item--front" style={frontCardStyle}>
          <div
            className="FlashcardWrapper__item--content"
            dangerouslySetInnerHTML={{ __html: frontHTML }}
            style={frontContentStyle}
          />
        </div>
        <div className="FlashcardWrapper__item--back" style={backCardStyle}>
          <div
            className="FlashcardWrapper__item--content"
            dangerouslySetInnerHTML={{ __html: backHTML }}
            style={backContentStyle}
          />
        </div>
      </div>
    </div>
  );
}
