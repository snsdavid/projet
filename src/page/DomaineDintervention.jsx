import React from 'react';
import Header from "./composant/Headercomposant";
import Footer from "./composant/Footer";
import {BiodiversityHeader} from "./composant/BiodiversityComponents";
import {BiodiversityContent} from "./composant/BiodiversityComponents";
import EntrepriseSection2 from "./composant/Entreprisesection2";
import { useParams } from 'react-router-dom';
import MapWithMarkers from "./composant/MapWithMarkers";

export default function DomaineDintervention() {
    const { id } = useParams();

    const data = { 
        FORESTERIE_ENVIRONNEMENT:{
            title1: "FORESTERIE & ENVIRONNEMENT",
            title2: "Objectif du domaine ",
            title: "Activités du domaine ",
            description: "Accompagner les acteurs ",
            icon: "/arbre.png",
            petittitre: "",
            text: "Accompagner les acteurs publics, privés et communautaires dans la mise en conformité réglementaire (notamment RDUE), la mise en œuvre de solutions fondées sur la nature et la gestion durable des écosystèmes, en s’appuyant sur des approches participatives, des outils de suivi terrain et des technologies de cartographie et de télédétection adaptées aux réalités locales.",
            points: [
                {
                    titre: "",
                    text: "Appui à la conformité réglementaire et à la gouvernance forestière"
                },
                {
                    titre: "",
                    text: "Solutions fondées sur la nature : production végétale et restauration des écosystèmes"
                },
                {
                    titre: "",
                    text: "Cartographie opérationnelle et suivi forestier assisté par télédétection"
                }
            ]
        },
        AGRICULTURE:{
            title1: "AGRICULTURE",
            title2: "Objectif du domaine ",
            title: "Activité sous domaine AGRICULTURE",
            description: "Accompagner les acteurs ",
            icon: "/herbe.png",
            petittitre: "",
            text: "Accompagner la création, l’optimisation et la pérennisation des exploitations agricoles en offrant des solutions techniques, économiques et humaines intégrées, afin d’améliorer la productivité, la rentabilité et la durabilité des systèmes de production.",
            points: [
                {
                    titre: "",
                    text: "Développement et gestion des exploitations agricoles"
                },
                {
                    titre: "",
                    text: "Appui-conseil et accompagnement de projets agricoles"
                },
                {
                    titre: "",
                    text: "Formation et transfert de compétences agricoles"
                }
            ]
        },
        NEGOCE_AGRICOLE:{
            title1: "NEGOCE AGRICOLE",
            title2: "Objectif du domaine ",
            title: "Activité sous domaine NEGOCE AGRICOLE",
            description: "Accompagner les acteurs ",
            icon: "/herbe.png",
            petittitre: "",
            text: "Faciliter l’accès aux marchés, optimiser la chaîne de valeur et garantir la qualité des produits agricoles à travers des services intégrés de commercialisation, intermédiation et logistique, adaptés aux réalités des producteurs et aux exigences des acheteurs.",
            points: [
                {
                    titre: "",
                    text: "Commercialisation et valorisation des produits agricoles"
                },
                {
                    titre: "",
                    text: "Intermédiation et partenariat marchand"
                },
                {
                    titre: "",
                    text: "Logistique et gestion de la qualité"
                }
            ]
        },
        ETUDE_ET_CONSEIL:{
            title1: "ETUDE ET CONSEIL",
            title2: "Objectif du domaine ",
            title: "Activité du domaine ETUDE & CONSEIL",
            description: "Accompagner les acteurs ",
            icon: "/edu.png",
            petittitre: "",
            text: "Fournir aux acteurs du secteur agricole des analyses fiables, des projets structurés, afin de sécuriser leurs investissements, optimiser leurs performances et renforcer leur compétitivité sur les marchés.",
            points: [
                {
                    titre: "",
                    text: "Etudes de marché et analyse de filières agricoles"
                },
                {
                    titre: "",
                    text: "Etudes de faisabilité et montage de projets agricoles"
                },
                {
                    titre: "",
                    text: "Conseil en financement agricole et accompagnement institutionnel"
                }
            ]
        },
        DIGITALISATION_AGRICOLE:{
            title1: "DIGITALISATION AGRICOLE",
            title2: "Objectif du domaine ",
            title: "Activité du domaine DIGITALISATION AGRICOLE",
            description: "Passer à la digitalisation ",
            icon: "/ordi.png",
            petittitre: "",
            text: "Accélérer la transformation numérique du secteur agricole en concevant, déployant et accompagnant des solutions digitales intégrées qui optimisent la gestion des exploitations, renforcent la traçabilité et facilitent l’accès aux marchés, tout en développant les compétences numériques des acteurs.",
            points: [
                {
                    titre: "",
                    text: "Conception et déploiement de solutions numériques pour la gestion agricole"
                },
                {
                    titre: "",
                    text: "Digitalisation des circuits de commercialisation et de traçabilité des produits agricoles"
                },
                {
                    titre: "",
                    text: "Formation digitale et accompagnement à l’usage des outils numériques agricoles"
                }
            ]
        }
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
            <BiodiversityHeader title={currentData.title1} description={currentData.description} icon={currentData.icon} />
            <BiodiversityContent title={currentData.title2} description={currentData.text} icon={currentData.icon}/>
            <EntrepriseSection2 title={currentData.title} petittitre={currentData.petittitre} points={currentData.points}/>
            <Footer />
        </>
    );
}