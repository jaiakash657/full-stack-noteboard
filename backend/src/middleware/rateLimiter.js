import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {

    const identifier = req.ip || "global";

    const { success } = await ratelimit.limit(identifier);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests — please slow down.",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    return res.status(500).json({ message: "Rate limit internal error." });
  }
};

export default rateLimiter;
