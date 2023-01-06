import express, { Express, Request, Response } from "express";
import { Signer } from "fuels";
import { arrayify } from "@ethersproject/bytes";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("⛽ fuel.network ⛽");
});

app.get(
  "/verify/:signature/:address/:message",
  async (req: Request, res: Response) => {
    const { signature, address, message } = req.params;
    const decodedMessage = atob(message);
    const addr = Signer.recoverAddress(
      Buffer.from(message),
      arrayify(signature)
    );
    res.send({ address: addr, message: decodedMessage });
  }
);

app.listen(port, () => {
  console.log(`[fuels-signer] running on port: ${port}`);
});
