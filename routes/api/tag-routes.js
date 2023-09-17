const router = require("express").Router();
const { Tag, Product } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const tagData = await Tag.findAll({
            include: [{ model: Product }],
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json({ message: "Tags Not Found" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id, {
            include: [{ model: Product }],
        });
        if (!tagData) {
            res.status(404).json({ message: "No tag found with this ID!" });
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json({ message: "Tag Not Found!" });
    }
});

router.post("/", async (req, res) => {
    try {
        const tagData = await Tag.create(req.body);
        res.status(200).json(tagData);
    } catch (err) {
        res.status(400).json({ message: "Tag creation failed" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updated = await Tag.update(req.body, {
            where: { id: req.params.id },
        });
        !updated[0]
            ? res.status(400).json({ message: "No tag found with this ID!" })
            : res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ message: "Tag update failed" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Tag.destroy({ where: { id: req.params.id } });
        !deleted
            ? res.status(404).json({ message: "No tag found with this ID!" })
            : res.status(200).json(deleted);
    } catch (err) {
        res.status(500).json({ message: "Tag deletion failed" });
    }
});

module.exports = router;