import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../styles/ASavoir.css";

/* Intaller le package  'npm i react-card-flip' dans le projet */

function ASavoir() {
  const [flips, setFlips] = useState([false, false]);

  function flipCard(index) {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index]; // Met à jour l'état de la carte spécifique
    setFlips(newFlips);
  }

  return (
    <main>
      <div className="main">
        <div className="container-flip">
          {/* Carte 1 */}
          <ReactCardFlip flipDirection="horizontal" isFlipped={flips[0]}>
            <div className="card card-front " onClick={() => flipCard(0)}>
              <h1>Taxation</h1>
            </div>

            <div className="card card-back" onClick={() => flipCard(0)}>
              <h1>DEFISCALISATION </h1>
              <p>
                DEFISCALISATION Vous souhaiteriez acquérir l’une ou plusieurs
                des oeuvres présentées sur ce site au nom de votre société et
                ainsi bénéficier du système fiscal mis en place pour soutenir le
                travail des artistes? Que vous soyez chef d’entreprise ou en
                profession libérale, c’est possible. Chacune des oeuvres de TONY
                R est accompagnée d’une facture et d’un certificat
                d’authenticité prouvant qu’il s’agit bien d’une oeuvre
                originale, car seules les oeuvres originales (éditée en 8
                exemplaires) peuvent bénéficier de cette déduction d’impôt.
                Depuis 2002, les entreprises qui achètent des oeuvres d’art
                peuvent déduire le prix de leur acquisition de leur résultat
                imposable selon les conditions suivantes: l’acquisition doit
                porter sur l’oeuvre d’un artiste vivant au moment de l’achat
                l’oeuvre doit être exposée dans un lieu accessible au public ou
                aux salariés durant cinq années à partir du jour de
                l’acquisition l’obligation d’inscrire à un compte de réserve
                spéciale au passif du bilan de l’entreprise le montant total de
                la déduction réalisée Modalités de la déduction fiscale: La
                somme correspondant au prix d’acquisition de l’œuvre est déduite
                par fractions égales sur les résultats de l’exercice
                d’acquisition et des quatre années suivantes. La déduction
                effectuée au titre de chaque exercice ne peut toutefois excéder
                la limite de 5 ‰ du chiffre d’affaires. Note: ce dispositif ne
                concerne pas les entreprises soumises à l’impôt sur le revenu
                dans la catégorie des bénéfices non commerciaux (BNC) qui n’ont
                pas la faculté de créer au passif de leur bilan un compte de
                réserve spéciale. Si vous êtes séduit par l’une de mes oeuvres,
                bénéficiez de cette disposition en me contactant !
              </p>
            </div>
          </ReactCardFlip>

          {/* Carte 2 */}
          <ReactCardFlip flipDirection="horizontal" isFlipped={flips[1]}>
            <div className="card card-front" onClick={() => flipCard(1)}>
              <h1>Mural</h1>
            </div>

            <div className="card card-back" onClick={() => flipCard(1)}>
              <h1>Mes peintures murales</h1>

              <p>
                Vous pouvez voir mes peintures murales extérieures et
                intérieures sur le site all-deco.fr. Je peux réaliser tout type
                de travaux sur commandes pour des entreprises, des particuliers,
                des collectivités, des associations et autres. Le projet est
                toujours élaborée en collaboration avec le commanditaire, dans
                le respect du lieu, des délais et du budget. Donc, si vous avez
                un projet, n'hésitez pas à me contacter.
              </p>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </main>
  );
}

export default ASavoir;
