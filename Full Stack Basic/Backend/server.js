import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('server is empty');
});

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id : 1,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id : 2,
            title: 'Another Joke',
            content: 'This is a joke'
        },
        {
            id : 3,
            title: 'A Third Joke',
            content: 'This is a joke'
        },
        {
            id : 4,
            title: 'A Fourth Joke',
            content: 'This is a joke'
        },
        {
            id : 5,
            title: 'A Fifth Joke',
            content: 'This is a joke'
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`serve at http://localhost${port} `);
});
