import React from 'react';
import Header from './composant/Headercomposant';
import Footer from './composant/Footer';
import EntrepriseSection2 from './composant/Entreprisesection2';
import Entreprise from './composant/Entreprise';
import { useParams } from 'react-router-dom';
import BiodiversityHeader from './composant/BiodiversityComponents';


const EntreprisePage = () => {
    const { id } = useParams();
    const data = {
            Qui_Somme_Nous: {
                title1:"L ENTREPRISE",
                title: "Qui sommes-nous",
                text: `NYA AGRITEK incarne une ambition forte : contribuer à un développement équilibré et durable en s’appuyant sur des collaborations solides et des approches novatrices. Depuis sa création, l’entreprise s’engage à accompagner la transformation des territoires et des filières, en contribuant à apporter des réponses concrètes aux enjeux économiques, sociaux et environnementaux qui façonnent notre époque.\n\n Nous sommes persuadés que la performance durable repose sur la combinaison d’une expertise solide, de la technologie et d’un engagement constant. Pour cette raison, nous concevons des approches modernes et des outils performants qui permettent aux organisations de concrétiser leurs projets stratégiques, d’améliorer leur efficacité et de s’adapter aux évolutions rapides de leurs environnements. Chaque action que nous entreprenons vise à créer un impact positif, en conciliant compétitivité et responsabilité. \n\n Notre objectif est simple : proposer des méthodes et solutions qui renforcent la compétitivité, la résilience et la durabilité des acteurs avec lesquels nous collaborons. Nous travaillons en étroite synergie avec nos partenaires pour faire évoluer les pratiques, intégrer des innovations pertinentes et bâtir des modèles capables de répondre aux défis d’aujourd’hui tout en anticipant ceux de demain.\n\n Chez NYA AGRITEK, nous plaçons l’accompagnement au cœur de notre démarche. En tant que partenaire de confiance, nous apportons un soutien opérationnel et stratégique à chaque étape, afin de transformer les ambitions en résultats concrets. Notre approche repose sur la proximité, l’écoute et l’innovation, pour garantir des solutions qui créent de la valeur durable et renforcent la compétitivité de nos clients.`,
                        points:[],
                        petittitre:""
            },
            Notre_Vision: {
                title1:"Notre vision",
                title: "Notre vision de l entreprise",
                text: `Soutenir le développement rural et agricole durable, c’est bien plus qu’un objectif : c’est notre raison d’être. Chez NYA AGRITEK, nous croyons que la transformation des territoires passe par des partenariats solides et une approche collaborative. Nous travaillons main dans la main avec nos partenaires pour concevoir des solutions innovantes, adaptées à leurs réalités et capables de répondre aux défis actuels tout en anticipant ceux de demain. \n\n Notre vision s’appuie sur une conviction simple: l’avenir des filières rurales et agricoles dépend de l’intégration de pratiques responsables, de technologies adaptées et d’une stratégie orientée vers la durabilité. En combinant expertise, innovation et engagement, nous voulons contribuer à bâtir des écosystèmes résilients, compétitifs et inclusifs, au service d’un développement harmonieux et durable.`,
                points:[],
                petittitre:"Soutenir le développement rural et agricole durable en forgeant des partenariats solides et en offrant des solutions novatrices, adaptées aux besoins uniques de nos partenaires, face aux défis actuels et futurs. "
            },
            Notre_Mission: {
                title1:"Notre mission",
                title: "La mission de l entreprise",
                text: ` Nous combinons expertise stratégique, créativité et technologies pour fournir des prestations sur mesure qui répondent aux besoins uniques de chaque client. Notre engagement envers l'excellence et notre passion pour ce que nous faisons nous permettent d'accompagner nos clients à chaque étape de mise en œuvre de leurs projets et programmes de développement agricole durable.`,
                points:[],
                petittitre:"Notre mission est simple : accompagner nos clients vers le succès. "
            },
            Nos_Valeurs: {
                title1:"Nos valeurs",
                title: "Intégrité, excellence et collaboration : nos valeurs fondamentales guident nos actions et renforcent nos relations.",
                text: `Ces valeurs fondamentales assurent une base solide pour guider nos actions quotidiennes et renforcer les relations professionnelles et humaines. Elles posent les piliers d’une entreprise fiable, performante et tournée vers le progrès durable.`,
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
            <Entreprise  title={currentData.title1}/>
            <EntrepriseSection2 title={currentData.title} petittitre={currentData.petittitre} text={currentData.text} points={currentData.points}/>
            <Footer />
        </>
    );
}

export default EntreprisePage;