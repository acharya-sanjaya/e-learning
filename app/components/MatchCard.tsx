import {cn} from "~/lib/utils";

interface MatchCardProps {
  activeCards: {question: string; answer: string};
  incorrectCards: {question: string; answer: string};
  cardId: string;
  content: string;
  handleCardClick: (cardType: "question" | "answer", cardId: string) => void;
  cardType: "question" | "answer";
  matched: boolean;
}

const MatchCard = ({
  matched,
  cardType,
  incorrectCards,
  activeCards,
  cardId,
  content,
  handleCardClick,
}: MatchCardProps) => {
  const isSelected = activeCards[cardType] === cardId;
  const disabled = activeCards[cardType] !== "" && activeCards[cardType] !== cardId;
  const isIncorrect = incorrectCards[cardType] === cardId;

  return (
    <button
      onClick={() => {
        if (matched || disabled) return;
        handleCardClick(cardType, cardId);
      }}
      className={cn(
        "flex items-center justify-center rounded-md border-2 border-gray-500 p-4 font-bold",
        cardType === "question" ? "text-2xl" : "text-lg",
        isSelected && "border-blue-500 text-blue-500",
        !matched && disabled && "border-gray-500/20 text-gray-500/20",
        !matched && !disabled && !isIncorrect && "active:scale-95",
        (matched || disabled) && "cursor-not-allowed",
        matched && "border-green-500 text-green-500",
        isIncorrect && "border-red-500 text-red-500",
      )}
    >
      {content}
    </button>
  );
};

export default MatchCard;
