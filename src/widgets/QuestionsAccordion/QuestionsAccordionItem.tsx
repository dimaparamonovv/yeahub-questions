import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./QuestionsAccordion.module.css";

import type { Question } from "@/entities/question/model/types";
import { QuestionLabels } from "@/widgets/QuestionLabels";
import { Answer } from "@/shared/ui/Answer";

interface Props {
  question: Question;
}

export const QuestionsAccordionItem: React.FC<Props> = ({ question }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [question]);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <li className={styles.item}>
      <button
        className={styles.header}
        onClick={handleToggle}
        aria-expanded={open}
      >
        <span className={styles.dot} />
        <span className={styles.title}>{question.title}</span>
        <span className={`${styles.chevron} ${open ? styles.open : ""}`}>
          ⌄
        </span>
      </button>
      {open && (
        <div className={styles.body}>
          <QuestionLabels
            rate={question.rate}
            complexity={question.complexity}
          />

          <Answer
            answer={question.shortAnswer}
            className={styles.shortAnswer}
          />

          <div className={styles.footer}>
            <button
              className={styles.moreBtn}
              onClick={() => navigate(`/questions/${question.id}`)}
            >
              Подробнее
              <span className={styles.arrow}>→</span>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};
