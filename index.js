const Express = require("express")
const mongoose = require("mongoose");
const app = Express()
app.use(Express.json())
const port = 3000

const Film = mongoose.model('Film', {
  tittle: String
});

app.get("/", async (req, res) => {
  const films = await Film.find()
  return res.send(films)
});

app.put("/:id", async(req, res) => {
  const film = await Film.findByIdAndUpdate(req.params.id,{
    tittle: req.body.tittle
  }, {
    new: true
  })
  return res.send(film)
})

app.delete("/:id", async(req,res) => {
  const film = await Film.findByIdAndDelete(req.params.id)
  return res.send(film)
})

app.post("/", async (req, res) => {
  const film = new Film({
    tittle: req.body.tittle
  })
  await film.save()
  return res.send(film) 
})

app.listen(port, () => {
  mongoose.connect("mongodb+srv://euSuez:123@cluster0.q0e1z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  console.log("app caralho <3")
});

