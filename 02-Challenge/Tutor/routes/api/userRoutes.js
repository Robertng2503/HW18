const router = require("express").Router();
const {User} = require("../../models")

router.get("/", async (req, res) => {
    return await User.find();
})
router.get("/:id", async (req, res) => {
    return await User.findById(req.params.id)
})
router.post("/", async (req, res) => {
    return await User.create({
        username: req.body.username,
        email: req.body.email
    })
})
router.put("/:id", async (req, res) => {
    return await User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        email: req.body.email
    })
})
router.delete("/:id", async (req, res) => {
        return await User.findByIdAndDelete(req.params.id)
})


module.exports = router;