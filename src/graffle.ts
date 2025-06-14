import { Graffle } from "graffle";
import { config } from "./config";
export const graffle = Graffle.create().transport(config.gqlTransport);
