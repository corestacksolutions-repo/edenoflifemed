
import jwt from 'jsonwebtoken';

const authenticationCheck = (req, res, next) => {
  const { admintoken } = req.headers;

  if (!admintoken) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized. Please log in.'
    });
  }

  try {
    const decodedToken = jwt.verify(
      admintoken,
      process.env.JWT_SECRET_KEY
    );

    if (decodedToken.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized. Please log in.'
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token. Please log in again.'
    });
  }
};

export default authenticationCheck;
