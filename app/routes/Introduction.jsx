import React from "react";

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-profile">
        <img src="https://www.degandpartners.com/wp-content/uploads/2021/03/EM.png" />
        <span style={{fontWeight : 'bold' , textAlign : 'center'}}>Emmanuel Degrève</span> 
        <span style={{fontSize : 15}}>Fondateur & CEO</span>
      </div>
      <div className="intro-paragraphe">
        <h2 style={{fontWeight : 600 , fontSize : 36 }}>Qui sommes nous</h2>
        <p style={{textAlign : 'justify' , color : "#888"}}>
          <span style={{ color: "#4d4d4d", fontSize: 17, lineHeight: "170%" }}>
            Deg & Partners est un cabinet conseil actif dans les métiers de la
            comptabilité, de la gestion et de la fiscalité, en y intégrant de
            manière exhaustive l’ensemble des besoins de ses clients.
          </span> <br /> <br />
          Fiduciaire fondée en 1992 par Emmanuel Degrève, le cabinet n’a eu de
          cesse de se repenser et de se renouveler afin de parvenir à une
          structure actuelle des plus performantes. Aussi depuis 2002, Deg &
          Partners est agrée par l’IEC. La vocation de notre cabinet est de
          parfaire, sans relâche, son expérience et son savoir faire dans le
          domaine des PMEs et des indépendants afin de garantir à nos clients un
          service de qualité, toujours à la pointe de la législation fiscale.
          Historiquement créé à Charleroi, Deg & Partners a aujourd’hui atteint
          une taille significative au niveau national de part sa présence dans
          l’ensemble de la Belgique francophone, notamment par le biais de ses
          bureaux sur Bruxelles et Liège. En outre, le cabinet a créé une
          cellule dédiée exclusivement à l’optimisation fiscale. Nos clients
          bénéficient alors de toute l’expertise de nos conseillers fiscaux et
          peuvent alors prétendre au régime qui leur sera le plus favorable.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
