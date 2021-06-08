const express = require('express')
const app = express()
app.use(express.json())

const genres =[{
    "id": 1,
    "genre": "genre1"
},
{
    "id": 2,
    "genre": "genre2"
},{
    "id": 3,
    "genre": "genre3"
},{
    "id": 4,
    "genre": "genre4"
}]


app.get('/api/genres',(req,res)=>{
res.send(genres)
})

app.get('/api/genres/:id',(req,res)=>{
    const {id} = req.params
    const genre = genres.find(i=> i.id == id)
    // const genre = genres.filter(i=> i.id == id)
    res.send(genre)
})

app.post('/api/genres',(req,res)=>{
    const genre = req.body
    genre.id = genres[genres.length -1].id + 1
    genres.push(genre)
    res.send(genre)

})

app.put('/api/genres/:id',(req,res)=>{
    const {id} = req.params
    const genre = req.body
    const genreUpdate = genres.find((g)=>g.id == id)
    genreUpdate.genre = genre.genre
    res.send(genreUpdate)
    

})

app.delete('/api/genres/:id',(req,res)=>{
 
    const {id} = req.params
    console.log(id)
    console.log(genres)
    const genre = genres.find((g)=>g.id == id)
    const index = genres.indexOf(genre)
     genres.splice(index,1)
    res.send(genres)
})


const port = process.env.PORT || 1337
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})