import Fastify from "fastify";
import cors from "@fastify/cors";

import { drivers } from "./repositories/drivers.repository";
import { teams } from "./repositories/teams.repository";

import { ContentType } from "./utils/content-type";
import { StatusCode } from "./utils/status-code";

interface DriverParams {
  id: string;
}

const PORT = Number(process.env.PORT) || 8000;

const server = Fastify({
  logger: true,
});

server.register(cors, {
  origin: "*",
  methods: "GET"
});

server.get("/teams", async (req, res) => {
  res.type(ContentType.JSON).code(StatusCode.OK);

  return { teams }
});

server.get("/drivers", async (req, res) => {
  res.type(ContentType.JSON).code(StatusCode.OK);

  return { drivers }
});

// Com filter
server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
  // Service
  const id = parseInt(req.params.id);
  const driver = drivers.find(item => item.id === id)

  if (!driver) {
    res.type(ContentType.JSON).code(404);
    return { message: "Driver not found" };
  } else {
    res.type(ContentType.JSON).code(StatusCode.OK);
    return { driver };
  }
});

server.listen({ port: PORT }, (err) => {
  if (err) throw err;
  console.log(`Server is running on http://localhost:${PORT}/`);
})
