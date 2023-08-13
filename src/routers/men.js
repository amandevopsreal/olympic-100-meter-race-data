const express = require("express")
const router = express.Router()
const MensRanking = require("../models/mens");

router.post("/mens", async (req, res) => {

    try {
        const men = await MensRanking.create(req.body);
        res.status(201).json(men)
    }
    catch (e) {
        res.status(400).json(e)
    }

})

router.get("/mens", async (req, res) => {

    try {
        const mens = await MensRanking.find({}).sort({ "ranking": 1 });
        res.json(mens)
    }
    catch (e) {
        res.status(400).json(e)
    }

})

router.get("/mens/:id", async (req, res) => {

    try {
        const _id = req.params.id
        const men = await MensRanking.findById(_id);
        res.json(men)
    }
    catch (e) {
        res.status(400).json(e)
    }

})

router.patch("/mens/:id", async (req, res) => {

    try {
        const _id = req.params.id
        const men = await MensRanking.findByIdAndUpdate(_id, req.body, { new: true });
        res.json(men)
    }
    catch (e) {
        res.status(500).json(e)
    }

})

router.patch("/mens/:id", async (req, res) => {

    try {
        const _id = req.params.id
        const men = await MensRanking.findByIdAndUpdate(_id, req.body, { new: true });
        res.json(men)
    }
    catch (e) {
        res.status(500).json(e)
    }

})

router.delete("/mens/:id", async (req, res) => {

    try {
        const _id = req.params.id
        const men = await MensRanking.findByIdAndDelete(_id);
        res.json(men)
    }
    catch (e) {
        res.status(500).json(e)
    }

})

module.exports = router