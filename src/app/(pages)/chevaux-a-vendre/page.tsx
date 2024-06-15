import React from 'react'
import HorseCard from '@/components/ui/horse-card';

const horseData = [
    {
      image: '/eclair.webp',
      name: 'Éclair',
      description: "Éclair est un magnifique étalon arabe de 5 ans, au pelage blanc éclatant. Doué pour les compétitions de dressage et doté d'un tempérament doux, il est parfait pour les cavaliers de tous niveaux. Éclair a également un excellent pedigree et a été entraîné par des professionnels depuis son plus jeune âge.",
    },
    {
      image: '/tempete.webp',
      name: 'Tempête',
      description: "Tempete est une superbe jument de race Pur-sang anglais, âgée de 8 ans, au pelage brun profond. Elle excelle dans les courses de vitesse et possède un esprit compétitif remarquable. Tempête est également très affectueuse et bien dressée, ce qui en fait un excellent choix pour les cavaliers passionnés et expérimentés.",
    },
    {
      image: '/tonere.webp',
      name: 'Tonere',
      description: "Tonere est un étalon. Il est très doux et affectueux. Il est très bien dressé et a un excellent pedigree. Il est parfait pour les cavaliers de tous niveaux. Il est très facile à monter et à manipuler. Il est très bien dressé et a un excellent pedigree. Il est parfait pour les cavaliers de tous niveaux.",
    },
    {
      image: '/mirage.webp',
      name: 'Mirage',
      description: "Mirage est une jument de race Pur-sang anglais, âgée de 8 ans, au pelage brun profond. Elle excelle dans les courses de vitesse et possède un esprit compétitif remarquable. Tempête est également très affectueuse et bien dressée, ce qui en fait un excellent choix pour les cavaliers passionnés et expérimentés.",
    },
  ];

const ChevauxAVendre: React.FC = () => {
  return (
    <div className="my-10 mx-20">
      <h1 className="text-center">Liste des chevaux à vendre</h1>
      <p>Voici les chevaux qui sont en vente, il n'y a pas de prix d'afficher. C'est a vous de faire une offre en cliquant sur le bouton faire une offre</p>
      <p>Si vous ne trouvez pas le cheval qui vous convient, vous pouvez cliquer ici (bouton contact) et vous pouvez specifier l'age, la taille le prix etc souhaitez</p>
      <div>
        {horseData.map((horse, index) => (
          <HorseCard
            key={index}
            image={horse.image}
            name={horse.name}
            description={horse.description}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ChevauxAVendre;
