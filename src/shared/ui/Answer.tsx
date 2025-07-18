import React from "react";

interface AnswerProps {
  answer?: string | null;
  className?: string;
}

export const Answer: React.FC<AnswerProps> = ({ answer, className }) => {
  if (!answer) return null;

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: answer }} />
  );
};
