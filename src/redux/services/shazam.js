// 请求接口
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "321bb7c862mshfdd524341eeb528p1e6201jsnaed0d1cabf40"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    // 获取全球热榜
    getTopCharts: builder.query({
      query: () => "/charts/world",
    }),
    getTopChartsByGenre: builder.query({
      query: (genreCode) => `/charts/genre-world?genre_code=${genreCode}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: () => "/charts/country?country_code=CH",
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetTopChartsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamApi;
