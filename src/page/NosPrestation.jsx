import React from 'react';
import Header from './composant/Headercomposant';
import Footer from './composant/Footer';
import { PrestationContent, PrestationHeader } from './composant/PrestationComposant';
import ForestryServicesCard from './composant/ForestryServicesCard';
import { useParams } from 'react-router-dom';

const NosPrestation = () => {
    const {id} = useParams();

    const data = {
        Production:{
            titre1:"Production de plants forestiers et fruitiers",
            titre2:"Production végétale spécialisée",
            title:"Production",
            icon:"/arbre.png",
            petittitre:"",
            paragraph1:"Notre service de production de plants forestiers et fruitiers constitue le fondement de toute initiative de reforestation réussie. Nous disposons de pépinières modernes équipées des technologies les plus avancées pour garantir la production de plants de haute qualité génétique et phytosanitaire.",
            paragraph2:"Nos installations comprennent des serres climatisées, des systèmes d'irrigation automatisés et des laboratoires de contrôle qualité où chaque lot de plants fait l'objet d'analyses rigoureuses. Nous produisons annuellement plus de 500 000 plants d'essences forestières autochtones et exotiques, ainsi que 200 000 plants fruitiers adaptés aux conditions climatiques locales.",
            paragraph3:"Notre processus de production s'appuie sur une sélection minutieuse des semences provenant d'arbres mères certifiés, garantissant ainsi la traçabilité et la qualité génétique de nos plants. Nous collaborons étroitement avec les instituts de recherche forestière pour intégrer les dernières innovations en matière de multiplication végétative et de techniques de greffage.",
            paragraph4:"Les espèces forestières que nous produisons incluent les essences à croissance rapide comme l'eucalyptus, le teck et l'acacia, mais également les espèces locales de grande valeur écologique telles que l'iroko, le samba, le fraké et l'okoumé. Pour les plants fruitiers, notre gamme couvre les agrumes, les manguiers, les avocatiers, les cacaoyers et de nombreuses espèces fruitières tropicales.",
            paragraph5:"Chaque plant est accompagné d'un certificat phytosanitaire et d'une fiche technique détaillant les conditions optimales de plantation et d'entretien. Nous proposons également un service de livraison sur site et un suivi post-plantation pour maximiser les taux de survie.",
            points:[]
        },
        Télédétection:{
            titre1:"Télédétection & cartographie forestière ",
            titre2:"Analyse spatiale forestière",
            title:"Analyse spatiale",
            icon:"/location.png",
            petittitre:"",
            paragraph1:"Notre service de télédétection et cartographie forestière utilise les technologies spatiales les plus avancées pour fournir des données précises et actualisées sur l'état des ressources forestières. Grâce à l'exploitation d'images satellites haute résolution (Sentinel, Landsat, SPOT) et de drones équipés de capteurs multispectraux, nous réalisons des analyses détaillées de la couverture forestière à différentes échelles spatiales et temporelles.",
            paragraph2:"Nos équipes d'ingénieurs géomaticiens maîtrisent parfaitement les logiciels de traitement d'images (ENVI, ArcGIS, QGIS) et développent des algorithmes de classification automatisée pour identifier les différents types de végétation, détecter la déforestation, cartographier les zones de dégradation et évaluer la biomasse forestière.",
            paragraph3:"Les services de cartographie que nous proposons comprennent l'élaboration de cartes thématiques de végétation, la délimitation précise des aires protégées, la cartographie des risques d'incendie, l'identification des zones de reboisement prioritaires et le suivi de l'évolution du couvert forestier. Nos analyses permettent de quantifier les pertes de superficie forestière, d'évaluer l'efficacité des mesures de conservation et de planifier les interventions forestières.",
            paragraph4:"Nous réalisons également des inventaires forestiers par télédétection, combinant données satellites et relevés de terrain pour estimer les volumes de bois, la densité des peuplements et la diversité spécifique. Ces informations sont essentielles pour l'aménagement forestier durable et la gestion rationnelle des ressources ligneuses.",
            paragraph5:"Nos rapports de cartographie forestière incluent des analyses statistiques approfondies, des recommandations techniques et des projections d'évolution basées sur des modèles prédictifs. Nous livrons nos résultats sous forme de cartes numériques géoréférencées, de bases de données géospatiales et de rapports techniques illustrés.",
            points:[]
        },
        Formation:{
            titre1:"Formation en sylviculture & techniques de production de plants",
            titre2:"Techniques sylvicoles appliquées",
            title:"Formation",
            icon:"/edu.png",
            petittitre:"",
            paragraph1:"Notre programme de formation en sylviculture et techniques de production de plants vise à renforcer les capacités techniques des acteurs de la filière forestière. Nous proposons des formations théoriques et pratiques adaptées aux différents niveaux de qualification : agents techniques, techniciens forestiers, ingénieurs et responsables de projets",
            paragraph2:"Les modules de formation en sylviculture couvrent l'ensemble des techniques de gestion forestière : choix des espèces, techniques de plantation, opérations d'entretien (débroussaillage, élagage, éclaircies), protection phytosanitaire, exploitation forestière durable et aménagement des écosystèmes. Chaque formation alterne séances théoriques en salle et travaux pratiques sur le terrain dans nos sites de démonstration.",
            paragraph3:"Concernant les techniques de production de plants, nos formations abordent tous les aspects de la pépiniculture moderne : préparation et stérilisation des substrats, techniques de semis et de repiquage, gestion de l'irrigation et de la fertilisation, lutte contre les maladies et parasites, techniques de greffage et de bouturage, conditionnement et transport des plants.",
            paragraph4:"Nous organisons également des formations spécialisées sur les nouvelles technologies forestières : utilisation des drones pour la cartographie, applications des SIG en foresterie, techniques de télédétection, méthodes d'inventaire assistées par GPS, logiciels de gestion forestière. Ces formations s'adressent principalement aux cadres techniques et aux ingénieurs souhaitant actualiser leurs compétences.",
            paragraph5:"Nos formateurs sont des experts reconnus disposant d'une solide expérience pratique et d'excellentes qualités pédagogiques. Chaque participant reçoit un support de formation détaillé, des fiches techniques illustrées et un certificat de participation reconnu par les organismes professionnels. Nous proposons également un suivi post-formation et un accompagnement technique pour la mise en application des acquis.",
            points:[]
        },
        Gestion:{
            titre1:"Gestion des écosystèmes & sensibilisation des communautés",
            titre2:"Préservation & sensibilisation",
            title:"Gestion",
            icon:"/formation.png",
            petittitre:"",
            paragraph1:"La gestion durable des écosystèmes forestiers nécessite une approche holistique intégrant les dimensions écologiques, sociales et économiques. Nos services de gestion écosystémique s'appuient sur les principes de l'écologie du paysage et visent à maintenir l'intégrité fonctionnelle des écosystèmes tout en répondant aux besoins des communautés locales.",
            paragraph2:"Nous élaborons des stratégies de conservation adaptative tenant compte des changements climatiques, de la fragmentation des habitats et de la pression anthropique croissante. Nos interventions incluent la délimitation et la gestion des aires protégées, la restauration des corridors écologiques, la conservation ex-situ des espèces menacées et la mise en place de systèmes de surveillance écologique à long terme.",
            paragraph3:"La sensibilisation des communautés constitue un volet essentiel de notre approche. Nous développons des programmes d'éducation environnementale adaptés aux différents publics : écoliers, agriculteurs, femmes rurales, leaders communautaires, décideurs politiques. Ces programmes utilisent des supports pédagogiques variés : séances de formation, campagnes de communication, matériel audiovisuel, démonstrations pratiques.",
            paragraph4:"Nos campagnes de sensibilisation abordent les thématiques suivantes : importance des forêts pour l'équilibre climatique, services écosystémiques rendus par les arbres, techniques agricoles respectueuses de l'environnement, valorisation durable des produits forestiers non ligneux, prévention des feux de brousse, gestion participative des ressources naturelles.",
            paragraph5:"Nous favorisons l'approche participative en impliquant activement les communautés dans la conception et la mise en œuvre des projets forestiers. Cette démarche s'appuie sur les savoirs traditionnels, respecte les systèmes de tenure foncière locaux et garantit une répartition équitable des bénéfices générés par les projets.",
            points:[]
        },
        Suivi:{
            titre1:"SUIVI DE REBOISEMENT & RÉALISATION DE PLANS D'AMÉNAGEMENT",
            titre2:"Suivi des projets forestiers",
            title:"Suivi",
            icon:"/herbe.png",
            petittitre:"",
            paragraph1:"Le suivi rigoureux des opérations de reboisement constitue un élément clé du succès de tout projet forestier. Nos services de suivi utilisent des protocoles scientifiques standardisés pour évaluer de manière objective l'évolution des plantations forestières et mesurer l'atteinte des objectifs fixés.",
            paragraph2:"Nos équipes de techniciens forestiers réalisent des inventaires périodiques basés sur un échantillonnage statistiquement représentatif, utilisant des placettes permanentes géoréférencées pour suivre l'évolution des paramètres dendrométriques (diamètre, hauteur, surface terrière), phytosanitaires (taux de mortalité, attaques parasitaires) et écologiques (régénération naturelle, diversité floristique et faunistique)",
            paragraph3:"Les données collectées sont traitées à l'aide de logiciels spécialisés (R, SPSS, Excel) pour produire des indicateurs de performance standardisés : taux de survie, accroissement annuel moyen, indice de diversité de Shannon, biomasse accumulée, séquestration carbone. Ces analyses permettent d'identifier rapidement les problèmes éventuels et d'adapter les pratiques sylvicoles en conséquence.",
            paragraph4:"Concernant les plans d'aménagement, nous élaborons des documents techniques complets définissant les objectifs de gestion, les pratiques sylvicoles recommandées, le calendrier des interventions et les mesures de conservation de la biodiversité. Chaque plan d'aménagement est précédé d'un diagnostic approfondi incluant l'inventaire des ressources, l'analyse socio-économique, l'évaluation des contraintes et opportunités, et la consultation des parties prenantes.",
            paragraph5:"Nos plans d'aménagement forestier respectent les principes de gestion durable définis par les standards internationaux (FSC, PEFC) et intègrent les préoccupations environnementales, sociales et économiques. Ils définissent précisément les zones d'exploitation, les zones de conservation, les infrastructures à développer et les mesures d'atténuation des impacts environnementaux.",
            points:[]
        },
        Agroforesterie:{
            titre1:"AGROFORESTERIE & REFORESTATION",
            titre2:"Reboisement & agroforesterie",
            title:"Agroforesterie",
            icon:"/reboisement.png",
            petittitre:"",
            paragraph1:"L'agroforesterie représente une approche innovante qui combine harmonieusement la production agricole et la conservation forestière. Nos services en agroforesterie visent à développer des systèmes productifs durables où les arbres, les cultures et parfois l'élevage coexistent de manière symbiotique, optimisant l'utilisation des ressources naturelles tout en préservant la biodiversité.",
            paragraph2:"Nous concevons et mettons en œuvre différents modèles agroforestiers adaptés aux contextes locaux : les systèmes agrisilvicoles associant cultures et arbres, les systèmes sylvopastoraux combinant élevage et foresterie, et les systèmes agrosylvopastoraux intégrant les trois composantes. Chaque système est conçu en fonction des objectifs des bénéficiaires, des contraintes pédoclimatiques et des opportunités de marché.",
            paragraph3:"Nos interventions en reforestation s'appuient sur une approche écosystémique privilégiant la restauration de forêts naturelles diversifiées plutôt que les monocultures d'espèces exotiques. Nous élaborons des plans de reforestation tenant compte de la succession écologique naturelle, de la connectivité des habitats et de la participation des communautés locales.",
            paragraph4:"Les techniques de reforestation que nous employons incluent la plantation directe, la régénération naturelle assistée, l'ensemencement aérien dans les zones difficiles d'accès et la restauration de forêts ripicoles le long des cours d'eau. Nous accordons une attention particulière à la préparation du terrain, au choix des espèces, à l'espacement des plants et aux techniques de protection contre les facteurs de stress biotiques et abiotiques",
            paragraph5:"Nos projets de reforestation intègrent systématiquement des mesures de suivi-évaluation permettant d'évaluer le taux de survie des plants, la croissance des peuplements, l'évolution de la biodiversité et l'impact socio-économique sur les communautés riveraines. Nous organisons également des campagnes de sensibilisation et des formations pour impliquer activement les populations locales dans la gestion durable des espaces reboisés.",
            points:[]
        }
    }

    const currentData = data[id] || {
        title: "Page non trouvée",
        text: "Le contenu demandé n’existe pas.",
        image:
          "https://images.unsplash.com/photo-1545972152-705d5bdeae12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      };

    return (
        <>
            <Header />
            <PrestationHeader title={currentData.title} description={currentData.titre2} icon={currentData.icon}/>
            <PrestationContent title={currentData.titre1} description={currentData.paragraph1}/>
            <ForestryServicesCard titre={currentData.titre1} paragraph1={currentData.paragraph2} paragraph2={currentData.paragraph3} paragraph3={currentData.paragraph4} paragraph4={currentData.paragraph5} ></ForestryServicesCard>
            <Footer />
        </>
    );
};

export default NosPrestation;
