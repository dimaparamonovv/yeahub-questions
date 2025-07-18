import { useQuestionsPage } from "../hooks/useQuestionsPage";

import { QuestionsAccordion } from "@/widgets/QuestionsAccordion";
import { FilterSidebar } from "@/features/filter/ui/FilterSidebar";

export const QuestionsPage = () => {
  const {
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
  } = useQuestionsPage();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки: {JSON.stringify(error)}</div>;
  if (!questions.length) return <div>Нет данных</div>;

  return (
    <div className="grid">
      <div className="main-content">
        <div className="card">
          <QuestionsAccordion
            questions={questions}
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <div className="sidebar">
        <div className="card">
          <FilterSidebar
            filterState={filters}
            onChange={(patch) => {
              Object.entries(patch).forEach(([key, value]) => {
                updateFilter(key as keyof typeof filters, value);
              });
            }}
            specializations={specializations}
            specsLoading={specsLoading}
            skills={skills}
            skillsLoading={skillsLoading}
            onReset={resetFilters}
          />
        </div>
      </div>
    </div>
  );
};
