const router = require("express").Router();
const apiRoute = require("./api")

router.use("/api", apiRoutes);

router.use("/", (req, res) => {
    res.send("Not an api route!")
})


module.exports = router;