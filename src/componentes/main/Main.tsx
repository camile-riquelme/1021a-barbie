import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
export default function Main(){
    //let textodigitado = 'Barbie'
    function TrataTexto(){
        const [variavel,funcaoMudaVariavel]=useState("Barbie")
        

        //
        function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
            console.log(e.target)
            //Como mudar o texto para "TERE"
            funcaoMudaVariavel("TERE")
        }
    }
    return(
        <>
            <div className='campo_pesquisa'>
                <p>Busque um filme</p>
                <input type='text' className='botao_pesquisa' placeholder='Pesquise um Filme' onChange={TrataTexto} ></input>
                <p>Digitando: {textodigitado} </p>
            </div>
            <main className="content-main">
                <Filme titulo='Barbie'
                sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                imagem='/barbie.png'
                />
                <Filme titulo='Filme Barbie'
                sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                imagem='/KEN.jpg'
                />
                <Filme titulo='Filme Barbie'
                sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                imagem='/boneca.jpg'
                />
                <Filme titulo='Filme Barbie'
                sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                imagem='/boneca.jpg'
                />
                <Filme titulo='Filme Barbie'
                sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                imagem='/boneca.jpg'
                />
                <Filme titulo='Filme Barbie'
                sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                imagem='/boneca.jpg'
                />
            </main>
        </>
    

    )
}