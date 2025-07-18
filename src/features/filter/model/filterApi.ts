import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type {
  Specialization,
  QuestionSkill,
  PaginatedResponse,
} from "@/entities/question/model/types";

export const filterApi = createApi({
  reducerPath: "filterApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
  endpoints: (builder) => ({
    getSpecializations: builder.query<PaginatedResponse<Specialization>, void>({
      query: () => "specializations",
    }),
    getSkills: builder.query<PaginatedResponse<QuestionSkill>, void>({
      query: () => "skills",
    }),
  }),
});

export const { useGetSpecializationsQuery, useGetSkillsQuery } = filterApi;
