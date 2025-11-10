import jwt from "jsonwebtoken"
function generateToken(data)
{
  return jwt.sign(data,process.env.JWT_SECRET);
}

export default generateToken;