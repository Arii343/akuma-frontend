import { rest } from "msw";
import { tokenMock } from "./user/userMocks";
import { animesMock } from "./animes/animesMocks";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: tokenMock }));
  }),
  rest.get(`${apiUrl}anime`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ animes: animesMock }));
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
];
