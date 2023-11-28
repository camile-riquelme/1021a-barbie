import { useState, useEffect } from 'react';
import Filme from './../filme/Filme';
import axios from 'axios';
import './Main.css';

type FilmeType = {
  id: number;
  titulo: string;
  sinopse: string;
  imagem: string;
};

const URL_API = "http://localhost:3000/filmes";

export default function Main() {
  const [texto, setTexto] = useState('');
  const [filminhos, setFilminhos] = useState<FilmeType[]>([]);

  useEffect(() => {
    const buscaFilminhos = async () => {
      try {
        const resposta = await axios.get<FilmeType[]>(URL_API, {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY,
          },
        });
        setFilminhos(resposta.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    buscaFilminhos();
  }, []);

  function TrataTexto(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }


  const filmesLocais: FilmeType[] = [
    {
      id: 1,
      titulo:'Pousando no Amor (2019)',
      sinopse:'Um acidente de parapente leva uma herdeira sul-coreana à Coreia do Norte. Ali, ela acaba conhecendo um oficial do exército, que vai ajudá-la a se esconder.',
      imagem:'/pousando-no-amor.jpg',
    },
    {
      id: 2,
      titulo:'Twinkling Watermelon (2023)',
      sinopse:'Em 2023, Eun Gyeol é um estudante do ensino médio apaixonado por música. Durante o dia, ele é um aluno exemplar e estudioso... mas à noite, ele se destaca como guitarrista de uma banda. Mas quando ele se depara com uma loja de música estranha, mas atraente, ele volta no tempo até 1995. No cenário, ele fica cara a cara com o seu pai, Ha Yi Chan — como um estudante do ensino médio!',
      imagem:'/twinkling-watermelon.jpg',
    },
    {
      id: 3,
      titulo:'O que há de errado com a secretária Kim? (2018)',
      sinopse:'Lee Young-joon é o vice-presidente de uma enorme corporação. Porém, seu mundo é tirado do eixo quando sua competente secretária, Kim Mi-so, anuncia sua imediata demissão de seu cargo depois de trabalhar com ele por nove anos. Lee Young-joon, então, decide que fará o que for necessário para convencer Kim Mi-so a não abandoná-lo.',
      imagem:'/o-que-há-de-errado-com-a-secretária-kim.jpg',
    },
    {
      id: 4,
      titulo:'Uma Advogada Extraordinária (2022)',
      sinopse:'Woo Young Woo é uma advogada de 27 anos no espectro autista. Tendo um QI altíssimo, de 164, ela se formou como a melhor estudante da turma na prestigiada Universidade Nacional de Seoul. Devido à sua inteligência e memória fotográfica, ela conseguiu um trabalho em um grande escritório de advocacia se envolvendo com casos criminais incomuns e complexos. Por outro lado, emocionalmente, Young Woo não se dá muito bem com interações sociais, ela enfrentará desafios dentro e fora do tribunal.',
      imagem:'/uma-advogada-extraordinária.jpg',
    },
  ];


  const todosOsFilmes: FilmeType[] = [...filminhos, ...filmesLocais];

  return (
    <>
      <div className="campo_pesquisa">
        <p>Busque um Dorama</p>
        <input
          type="text"
          className="botao_pesquisa"
          placeholder="Pesquise um Título"
          onChange={TrataTexto}
        />
        {texto && <p>Resultados Para: {texto} </p>}
      </div>
      <main className="content-main">
        {todosOsFilmes
          .filter((filme) => filme.titulo.toLowerCase().includes(texto))
          .map((filme) => (
            <Filme
              key={filme.id}
              sinopse={filme.sinopse}
              titulo={filme.titulo}
              imagem={filme.imagem}
            />
          ))}

                
                {/* <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser.'
                    imagem='/KEN.png'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                />
                <Filme titulo='Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                    sinopse='Depois de ser expulsa da 
                   Barbieland por ser uma boneca de aparência 
                   menos do que perfeita, Barbie parte para o 
                   mundo humano em busca da verdadeira felicidade.'
                    imagem='/boneca.jpg'
                /> */}

            </main>
        </>
    )
}