import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";

const validateToken = expressAsyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("Not Authorized, token failed");
      }

      req.user = decoded.user; // Attach user info to request object
      next(); // ✅ Allow request to continue
    });
  } else {
    res.status(401);
    throw new Error("Not Authorized, no token provided");
  }
});

export default validateToken;
