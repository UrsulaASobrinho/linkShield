"use client";
import { getLink, payLink } from "@/services/web3Service";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";


export default function Home() {
    const [message, setMessage] = useState("");
    const [link, setLink] = useState({fee: "0"});
    const params = useParams();

    useEffect(()=> {
        setMessage("Buscando dados do link ... aguarde...");
        getLink(params.linkId)
        .then(link => {
            setMessage("");
            if(link.url)
                window.location.href = link.url;
            else
                setLink(link);
        })
        .catch(err => setMessage(err.message));
    }, []
    )

    function btnAccessClick(){
        setMessage("Pagando pelo acesso.. aguarde...");
        payLink(params.linkId, link.fee)
        .then(() =>{
            setMessage("Pagemento realizado... redirecionando...");
            return getLink(params.linkId)
        })
        .then(link => window.location.href = link.url)
        .catch(err => setLink(err.message));

    }

    
  return (
   <>
  <div className="container px-4 py-5">
  <div className="row flex-lg-reverse align-items-center g-5 py-5">
   
    <div className="col-6">
      <h1 className="display-5 fw-bold text-doby-emphasis lh-l mb-3">Link Protegido</h1>
      <p className="lead">Este link está protegido pela LinkShield </p>
      <hr />
      <p>Para acessar o conteúdo original, conecte sua carteira abaixo e confirme o pga,aneot da taxa de <strong>X{link.fee}</strong> wei .</p>
    
    <div className="row mb-3">
     
    <div className="col-6">
      <button type="button" className="btn btn-primary w-100 h-100" onClick={btnAccessClick} >
        <img src="./logo-carteira-met.png" width={32} className="me-2"/>
        Pagar e acessar link 
        </button>
    </div>
    </div>
    {
        message
        ? <div className="alert alert-success p-3 col-12 mt-3" role="alert"> {message}</div>
        : <></>
    }
    
    </div>
     <div className="col-6">
    <img src="./Gemini_Generated_Image.png" className="d-block mx-lg-auto img-fluid" width="700" height="500" alt="Imagem criada por AI " />
    </div>
  </div>
</div>
   </>
  );
}
