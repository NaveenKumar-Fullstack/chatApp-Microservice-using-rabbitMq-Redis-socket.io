import express from 'express';
import { getAllUser, GetUserByID, loginUser, myProfile, updateMyProfile, verifyUser } from '../controllers/user.js';
import { isAuth } from '../middleware/isAuth.js';
const router = express.Router();
router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth, myProfile);
router.put("/me", isAuth, updateMyProfile);
router.get("/users", isAuth, getAllUser);
router.get("/user/:id", GetUserByID);
export default router;
//# sourceMappingURL=user.js.map