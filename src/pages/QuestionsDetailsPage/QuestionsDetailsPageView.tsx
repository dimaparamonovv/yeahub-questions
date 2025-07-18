import { QuestionLabels } from "@/widgets/QuestionLabels";
import { Answer } from "@/shared/ui/Answer";

import type { Question } from "@/entities/question/model/types";

import styles from "./QuestionsDetailsPage.module.css";

interface Props {
  question: Question;
}

export const QuestionsDetailsPageView: React.FC<Props> = ({ question }) => (
  <div className="container">
    <button className={styles.backBtn} onClick={() => window.history.back()}>
      <svg width="18" height="18" fill="none" stroke="currentColor">
        <path d="M12 4l-6 6 6 6" />
      </svg>
      Назад
    </button>

    <div className="grid">
      <div className="main-content">
        <div className={styles.card}>
          <h2 className={styles.title}>{question.title}</h2>

          <div className={styles.description}>{question.description}</div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.subtitle}>Краткий ответ</h3>

          <Answer
            answer={question.shortAnswer}
            className={styles.shortAnswer}
          />
        </div>

        <div className={styles.card}>
          <h3 className={styles.subtitle}>Развёрнутый ответ</h3>

          <Answer answer={question.longAnswer} className={styles.shortAnswer} />
        </div>
      </div>

      <div className="sidebar">
        <div className={styles.card}>
          <div className={styles.infoTitle}>Уровень:</div>
          <div className={styles.labelsRow}>
            <QuestionLabels
              className="customLabels"
              rate={question.rate}
              complexity={question.complexity}
            />
          </div>

          <div className={styles.infoGroup}>
            <div className={styles.infoTitle}>Навыки:</div>

            <div className={styles.skillsBlock}>
              {question.questionSkills.map((skill) => (
                <span key={skill.id} className={styles.skill}>
                  {skill.title}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.infoGroup}>
            <div className={styles.infoTitle}>Ключевые слова:</div>

            <div className={styles.keywordsBlock}>
              {question.keywords.map((kw) => (
                <span key={kw} className={styles.keyword}>
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.authorBlock}>
            Автор: <span>{question.createdBy?.username}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
