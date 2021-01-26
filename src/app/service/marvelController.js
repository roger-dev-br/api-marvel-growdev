import axios from 'axios';

class MarvelController {
    constructor() {
        this.urlBase = `https://gateway.marvel.com/v1/public/`;
        this.autenticacao = `?apikey=8b0223911c50629c4a9c4c76d96105f4&hash=eb74672f8bf6d58342c6c006109a2435&ts=1609890812920`;
        this.registrosPorPagina = 100;
    }

    // http://localhost:3000/personagens?pagina=1&nome=iron
    index = (req, res) => {
        const { pagina, nome } = req.query;

        let offset = 0;

        if (pagina && pagina > 1) {
            offset = ((pagina - 1) * this.registrosPorPagina) + 1;
        }

        let url = `${this.urlBase}/characters${this.autenticacao}&limit=${this.registrosPorPagina}&offset=${offset}`;

        if (nome) {
            url += `&nameStartsWith=${nome}`;
        }

        axios.get(url).then(resposta => {
            return res.json(resposta.data.data);
        });
    }

    // localhost:3000/personagens/1111200
    show = (req, res) => {
        const { id } = req.params;

        axios.get(`${this.urlBase}/characters/${id}${this.autenticacao}`).then(resposta => {
            return res.json(resposta.data.data);
        });
    }
}

export default new MarvelController();