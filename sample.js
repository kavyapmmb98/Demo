import express from 'express';

const app = express();
const port = 4000;

let a;
let b=0;
// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });


//   // POST route
// app.post('/data', (req, res) => {
//     const { name } = req.body;
//     res.status(201).send(`Data received: ${name}`);
//   });
  
//   // PUT route
//   app.put('/data/:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     res.send(`Data with ID ${id} updated with name: ${name}`);
//   });
  

  
  const server = app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
  });
  
  // Export both the app and server
  export { app, server };
  