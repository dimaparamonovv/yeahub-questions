import React from "react";

import styles from "./QuestionsAccordion.module.css";

import type { Question } from "@/entities/question/model/types";
import { QuestionsAccordionItem } from "./QuestionsAccordionItem";
import { Pagination } from "@/widgets/Pagination";

interface Props {
  questions: Question[];
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const QuestionsAccordion: React.FC<Props> = ({
  questions,
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <section className={`${styles.wrapper} card`}>
      <div className={styles.heading}>
        <h2>Список вопросов</h2>
      </div>

      <ul className={styles.list}>
        {questions.map((q) => (
          <QuestionsAccordionItem key={q.id} question={q} />
        ))}
      </ul>

      {totalPages > 1 && (
        <div className={styles.paginationContainer}>
          <Pagination
            current={currentPage}
            total={totalPages}
            onChange={onPageChange}
          />
        </div>
      )}
    </section>
  );
};

export default QuestionsAccordion;
