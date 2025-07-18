import React from "react";

import styles from "./Pagination.module.css";

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  onChange,
}) => {
  const first = 1;
  const last = total;

  let pages: (number | string)[] = [];

  if (total <= 7) {
    pages = range(1, total);
  } else {
    const leftBound = Math.max(2, current - 2);
    const rightBound = Math.min(total - 1, current + 2);

    pages = [
      first,
      ...(leftBound > 2 ? ["..."] : []),
      ...range(leftBound, rightBound),
      ...(rightBound < total - 1 ? ["..."] : []),
      ...(total > 1 ? [last] : []),
    ];
  }

  return (
    <nav className={styles.pagination}>
      <button
        className={styles.arrow}
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
        aria-label="Назад"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`dots-${idx}`} className={styles.dots}>
            ...
          </span>
        ) : (
          <button
            key={page}
            className={
              page === current ? `${styles.page} ${styles.active}` : styles.page
            }
            onClick={() => onChange(Number(page))}
            aria-current={page === current ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        className={styles.arrow}
        disabled={current === total}
        onClick={() => onChange(current + 1)}
        aria-label="Вперед"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </nav>
  );
};
