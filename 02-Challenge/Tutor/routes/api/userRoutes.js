const router = require("express").Router();
const {User} = require("../../models")

router.get("/", async (req, res) => {
    res.json(await User.find())
})
router.get("/:id", async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        console.log(users)
        res.json(users)
    } catch (error) {
        console.log(error)
        res.json(null)
    }
})
router.post("/", async (req, res) => {
    try{
        const users = await User.create({
        username: req.body.username,
        email: req.body.email
    })
    console.log(users)
        res.json(users)
    } catch (error) {
        console.log(error)
        res.json(null)
    }
})
router.put("/:id", async (req, res) => {
    try{
    const users= await User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        email: req.body.email
    })
    console.log(users)
        res.json(users)
    } catch (error) {
        console.log(error)
        res.json(null)
    }
})
router.delete("/:id", async (req, res) => {
        try{
    const users = await User.findByIdAndDelete(req.params.id)
    console.log(users)
        res.json(users)
    } catch (error) {
        console.log(error)
        res.json(null)
    }
})


module.exports = router;