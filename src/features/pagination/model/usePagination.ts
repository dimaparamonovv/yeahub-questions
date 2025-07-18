import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

export const usePagination = (initialTotal: number, limit: number) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get("page");

    return page ? parseInt(page, 10) : 1;
  });

  const [total, setTotal] = useState(initialTotal);

  const totalPages = Math.max(1, Math.ceil(total / limit));

  useEffect(() => {
    const page = searchParams.get("page");

    const parsedPage = page ? parseInt(page, 10) : 1;

    if (parsedPage !== currentPage && parsedPage <= totalPages) {
      setCurrentPage(parsedPage);
    }
  }, [searchParams]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);

      setSearchParams({ page: "1" });
    } else {
      setSearchParams({ page: currentPage.toString() });
    }
  }, [currentPage, totalPages, setSearchParams]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      setSearchParams({ page: page.toString() });
    }
  };

  const updateTotal = (newTotal: number) => {
    setTotal(newTotal);
  };

  return { currentPage, totalPages, handlePageChange, updateTotal };
};
