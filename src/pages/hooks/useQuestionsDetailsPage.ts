import { useParams } from "react-router-dom";

import { useGetPublicQuestionByIdQuery } from "@/entities/question/model/questionsApi";

export function useQuestionsDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: question,
    isLoading,
    error,
  } = useGetPublicQuestionByIdQuery(id!);

  return { question, isLoading, error };
}
