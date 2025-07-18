import React from "react";

import styles from "./QuestionLabels.module.css";

interface Props {
  rate?: number | null;
  complexity?: number | null;
  className?: string;
}

export const QuestionLabels: React.FC<Props> = ({
  rate,
  complexity,
  className,
}) => (
  <div className={`${styles.labels} ${className ?? ""}`}>
    <div className={styles.label}>
      Рейтинг: <span className={styles.badge}>{rate ?? 0}</span>
    </div>

    <div className={styles.label}>
      Сложность: <span className={styles.badge}>{complexity ?? "-"}</span>
    </div>
  </div>
);
