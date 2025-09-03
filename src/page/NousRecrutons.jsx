import React from 'react';
import Header from './composant/Headercomposant';
import Footer from './composant/Footer';
import Entreprise from './composant/Entreprise';
import EntrepriseSection2 from './composant/Entreprisesection2';


const NousRecrutons = ()=>{


    const data = {
        nousRecrutons:{
            title1:" Rejoignez nos équipes",
            title:" Consultez nos offres d’emplois",
            text:" Nous sommes toujours à la recherche de talents pour renforcer notre équipe et contribuer au succès de nos projets. Si vous avez des compétences et une passion pour le développement rural et agricole durable, nous sommes ouverts à votre candidature.Pour toute candidature spontanée, veuillez adresser votre CV ainsi qu’une lettre de motivation (format PDF exclusivement) à l’adresse suivante : nya.agritek@gmail.com en indiquant « candidature spontanée » en objet. ",
            image:"/",
            petittitre:"",
            points:[],
            
        }
    }

    return (
        <>
            <Header></Header>
            <Entreprise title="Nous recrutons"></Entreprise>
            <EntrepriseSection2 title={data.nousRecrutons.title1} petittitre={data.nousRecrutons.petittitre} text={data.nousRecrutons.text} points={data.nousRecrutons.points}></EntrepriseSection2>
            <Footer></Footer>
        </>
    )
}

export default NousRecrutons;