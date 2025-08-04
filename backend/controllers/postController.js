import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
    console.log(req.userId)
    const { title, content } = req.body;
    if (!title) return res.status(400).send({ message: "Please provide title" })
    if (!content) return res.status(400).send({ message: "Please provide content" })
    let post = await Post.create({ title, content, author: req.userId.userId })
    res.status(201).send({ mesage: "post created successfully", post: post })
}