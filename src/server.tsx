import { render } from "@jaredpalmer/after";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/styles";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App/App";

let assets: any;
const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get("/*", async (req, res) => {
    const sheets = new ServerStyleSheets();
    const markupFromAfterjs = await render({
      assets,
      req,
      res,
      ...App,
    });
    res.status(200).send(markupFromAfterjs);
  });

export default server;
