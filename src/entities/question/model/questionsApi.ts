import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Question, QuestionsResponse } from "./types";

interface QuestionsParams {
  page?: number;
  limit?: number;
  search?: string;
  skills?: number[];
  complexity?: number[];
  rate?: number[];
  keywords?: string[];
  specialization?: number;
}

export const questionsApi = createApi({
  reducerPath: "questionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/questions" }),
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<QuestionsResponse, QuestionsParams>({
      query: (params = {}) => {
        const {
          page = 1,
          limit = 10,
          search,
          skills,
          complexity,
          rate,
          keywords,
          specialization,
        } = params;

        const sp = new URLSearchParams();

        sp.append("page", page.toString());
        sp.append("limit", limit.toString());

        const mapping: [string, unknown, (v: any) => string][] = [
          ["titleOrDescription", search, String],
          ["skills", skills, (v: number[]) => v.join(",")],
          ["complexity", complexity, (v: number[]) => v.join(",")],
          ["rate", rate, (v: number[]) => v.join(",")],
          ["keywords", keywords, (v: string[]) => v.join(",")],
          ["specialization", specialization, String],
        ];

        mapping.forEach(([key, value, serialize]) => {
          if (
            value !== undefined &&
            value !== null &&
            !(Array.isArray(value) && value.length === 0)
          ) {
            sp.append(key, serialize(value));
          }
        });

        return `/public-questions?${sp.toString()}`;
      },
      keepUnusedDataFor: 0,
    }),
    getPublicQuestionById: builder.query<Question, string>({
      query: (id) => `/public-questions/${id}`,
    }),
  }),
});

export const { useGetPublicQuestionsQuery, useGetPublicQuestionByIdQuery } =
  questionsApi;
