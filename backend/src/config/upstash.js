import { Redis } from "@upstash/redis"; // ✅ This works as it's ESM
import ratelimitPkg from "@upstash/ratelimit"; // ✅ CommonJS
const { Ratelimit } = ratelimitPkg;

import dotenv from "dotenv";
dotenv.config();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(60, "60 s"),
});

export default ratelimit;
