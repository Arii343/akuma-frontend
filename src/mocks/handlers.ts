import { rest } from "msw";
import { tokenMock } from "./user/userMocks";
import { animesMock, newAnimeMiraiNikkiMock } from "./animes/animesMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),

  rest.get(`${apiUrl}anime`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ animes: animesMock }));
  }),

  rest.delete(`${apiUrl}anime/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Anime deleted" }));
  }),

  rest.post(`${apiUrl}anime`, (_req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        anime: newAnimeMiraiNikkiMock,
      })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}user/login`, (_req, res, ctx) => {
    return res(
      ctx.status(401),
      ctx.json({
        message: "Wrong credentials",
      })
    );
  }),

  rest.get(`${apiUrl}anime`, (_req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        message: "Internal server error",
      })
    );
  }),

  rest.delete(`${apiUrl}anime/:id`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Anime not found" }));
  }),
];
