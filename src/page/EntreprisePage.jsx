import React from 'react';
import Header from './composant/Headercomposant';
import Footer from './composant/Footer';
import EntrepriseSection2 from './composant/Entreprisesection2';
import Entreprise from './composant/Entreprise';
import { useParams } from 'react-router-dom';


const EntreprisePage = () => {
    const { id } = useParams();
    const data = {
            Qui_Somme_Nous: {
                        title: "Qui sommes-nous",
                        text: `Nous sommes une organisation engagée dans le développement rural et agricole durable.
                Notre mission est claire : soutenir nos partenaires en leur offrant des solutions novatrices, adaptées à leurs besoins spécifiques, afin de relever les défis actuels et futurs.

                Nous combinons expertise stratégique, créativité et technologies pour proposer des accompagnements sur mesure, et nous nous engageons à être aux côtés de nos clients à chaque étape de la mise en œuvre de leurs projets.

                Guidés par nos valeurs fondamentales — Intégrité, Excellence et Collaboration — nous construisons des relations solides, fiables et durables, au service du progrès partagé.`,
                        points:[],
                        petittitre:""
            },
            Notre_Vision: {
                title: "Notre vision",
                text: `Soutenir le développement rural et agricole durable en forgeant des partenariats solides et en offrant des solutions novatrices, adaptées aux besoins uniques de nos partenaires, face aux défis actuels et futurs.`,
                points:[],
                petittitre:""
            },
            Notre_Mission: {
                title: "Notre mission",
                text: ` accompagner nos clients vers le succès. 
Nous combinons expertise stratégique, créativité et technologies pour fournir des prestations sur mesure qui répondent aux besoins uniques de chaque client. Notre engagement envers l'excellence et notre passion pour ce que nous faisons nous permettent d'accompagner nos clients à chaque étape de mise en œuvre de leurs projets et programmes de développement agricole durable.`,
                points:[],
                petittitre:"Notre mission est simple :"
            },
            Nos_Valeurs: {
                title: "Nos valeurs",
                text: `Intégrité, excellence et collaboration: nos valeurs fondamentales guident nos actions et renforcent nos relations.Ces valeurs fondamentales assurent une base solide pour guider nos actions quotidiennes et renforcer les relations professionnelles et humaines. Elles posent les piliers d’une entreprise fiable, performante et tournée vers le progrès durable.`,
                points:[
                    {
                        titre:"Intégrité ",
                        text:"Nous agissons avec honnêteté, transparence et responsabilité. En valorisant cette valeur, notre entreprise s'engage à établir une relation de confiance durable avec ses partenaires et clients, en respectant les engagements pris et en favorisant des pratiques équitables."
                    },
                    {
                        titre:"Excellence ",
                        text:"Notre entreprise est impliquée dans une recherche continue d'amélioration, d'innovation et d'expertise dans chacun de nos domaines d'activité. L’excellence, pour nous, inspire une culture où le travail est réalisé avec précision et passion pour garantir des prestations et solutions remarquables."
                    },
                    {
                        titre:"Collaboration ",
                        text:"Nous valorisons la synergie et le travail d'équipe entre l'entreprise, ses partenaires, clients et autres acteurs. En favorisant des partenariats solides, notre entreprise crée un environnement où les idées et les efforts collectifs sont intégrés pour atteindre nos objectifs communs."
                    }
                ],
                petittitre:""
            },
      };

      const currentData = data[id] || {
        title: "Page non trouvée",
        text: "Le contenu demandé n’existe pas.",
        image:
          "https://images.unsplash.com/photo-1545972152-705d5bdeae12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      };


    return (
        <>
            <Header />
            <Entreprise />
            <EntrepriseSection2 title={currentData.title} petittitre={currentData.petittitre} text={currentData.text} points={currentData.points}/>
            <Footer />
        </>
    );
}

export default EntreprisePage;