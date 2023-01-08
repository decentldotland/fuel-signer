import express, { Express, Request, Response } from "express";
import { Wallet, Signer } from "fuels";
import { concat, hexlify, arrayify } from "@ethersproject/bytes";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("⛽ fuel.network ⛽");
});

app.get(
  "/verify/:signature/:message",
  async (req: Request, res: Response) => {
    const { signature, message } = req.params;
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
