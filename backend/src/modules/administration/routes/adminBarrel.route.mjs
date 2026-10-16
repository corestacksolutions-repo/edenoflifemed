import { Router } from "express";
import adminRouter from "./admin.routes.mjs";

const adminBarrelRouter = Router()

adminBarrelRouter.use('/admin', adminRouter)

export default adminBarrelRouter;