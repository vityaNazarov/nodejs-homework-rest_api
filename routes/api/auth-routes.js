const express = require("express");
const ctrl = require("../../controllers/auth-controllers");

const { validateBody } = require("../../decorators");

const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/users");

const router = express.Router();

// signUp
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// signIn
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
