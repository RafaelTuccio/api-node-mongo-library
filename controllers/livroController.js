const express = require("express")

const Livro = require("../models/livros")

const router = express.Router()


// cria a rota e insert dados dentro do mongo
router.post("/cadastrar", async (req, res) => {
    try {
        const novoLivro = await Livro.create(req.body)
        
        return res.send({ novoLivro })
    } catch (err) {
        return res.status(400).send({ error: "Falha ao cadastrar"})
    }
})

router.get("/listar", async (req, res) => {
    try{
        const listarLivros = await Livro.find()

        return res.send({listarLivros})
    } catch (err) {
        return res.status(400).send({error: "Erro na leitura dos dados"})
    }
})

router.patch("/:livroId", async (req, res) => {
    try {

        const livroId = req.params.livroId
        const update = req.body
        const result = await Livro.findByIdAndUpdate(livroId, update)

        return res.send(result)
    } catch (err) {
        return res.status(400).send({ error: "Falha ao sobrescrever"})
    }
})

router.delete("/:livroId", async (req, res) => {
    try{
        await Livro.findByIdAndDelete(req.params.livroId)

        return res.send()
    }catch (err) {
        return res.status(400).send({ error: "Erro ao deletar arquivo"})
    }
})



//aqui eu importo o app ja mapeando o caminhos livros
module.exports = app => app.use("/livros", router)