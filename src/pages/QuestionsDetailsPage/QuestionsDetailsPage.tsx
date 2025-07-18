import { useQuestionsDetailsPage } from "../hooks/useQuestionsDetailsPage";

import { QuestionsDetailsPageView } from "./QuestionsDetailsPageView";

export const QuestionsDetailsPage = () => {
  const { question, isLoading, error } = useQuestionsDetailsPage();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки: {JSON.stringify(error)}</div>;
  if (!question) return <div>Вопрос не найден</div>;

  return <QuestionsDetailsPageView question={question} />;
};
