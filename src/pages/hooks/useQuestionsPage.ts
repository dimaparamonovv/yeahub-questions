import { useEffect } from "react";

import {
  useGetSpecializationsQuery,
  useGetSkillsQuery,
} from "@/features/filter/model/filterApi";
import { useGetPublicQuestionsQuery } from "@/entities/question/model/questionsApi";

import { usePagination } from "@/features/pagination/model/usePagination";
import { useFilter } from "@/features/filter/model/useFilter";

import { DEFAULT_PAGE_LIMIT } from "@/shared/constants/constants";

export function useQuestionsPage() {
  const { data: specializationsData, isLoading: specsLoading } =
    useGetSpecializationsQuery();

  const { data: skillsData, isLoading: skillsLoading } = useGetSkillsQuery();

  const specializations = specializationsData?.data || [];
  const skills = skillsData?.data || [];

  const { filters, updateFilter, resetFilters } = useFilter();

  const { currentPage, totalPages, handlePageChange, updateTotal } =
    usePagination(0, DEFAULT_PAGE_LIMIT);

  const { data, isLoading, error } = useGetPublicQuestionsQuery(
    {
      page: currentPage,
      limit: DEFAULT_PAGE_LIMIT,
      search: filters.search,
      skills: filters.skills,
      complexity: filters.difficulty,
      rate: filters.rate,
      specialization: filters.specializations[0],
    },
    { refetchOnMountOrArgChange: true }
  );

  const questions = data?.data || [];
  const totalItems = data?.total || 0;

  useEffect(() => {
    if (totalItems > 0) {
      updateTotal(totalItems);
    }
  }, [totalItems, updateTotal]);

  return {
    questions,
    isLoading,
    error,
    totalPages,
    currentPage,
    handlePageChange,
    filters,
    updateFilter,
    resetFilters,
    specializations,
    specsLoading,
    skills,
    skillsLoading,
  };
}
