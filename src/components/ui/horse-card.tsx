import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HorseCardProps {
  image: string;
  name: string;
  description: string;
  reversed?: boolean;
}

const HorseCard: React.FC<HorseCardProps> = ({ image, name, description, reversed = false }) => {
  return (
    <div className={`flex ${reversed ? 'flex-row-reverse' : ''} text-2xl`}>
      <img src={image} alt={name} className="" />
      <div className="w-1/2 p-4 flex flex-col justify-center">
        <h2 className="">{name}</h2>
        <p className="">{description}</p>
        <Link href='/faire-une-offre-form'>
          <Button>Faire une offre</Button>
        </Link>
      </div>
    </div>
  );
};

export default HorseCard;
