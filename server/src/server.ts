import Fastify from "fastify";

const app = Fastify();

/*
* Método HTTP: Get, Post, Put, Patch, Delete
*/

app.get('/', () => {
    return 'Hello world!'
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('Servidor rodando na porta 3333')
})