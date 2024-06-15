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
    <div className={`flex ${reversed ? 'flex-row-reverse' : ''} mb-10`}>
      <img src={image} alt={name} className="w-1/2 h-48 object-cover" />
      <div className="w-1/2 p-4 flex flex-col justify-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{description}</p>
        <Link href='/faire-une-offre-form'>
            <Button>Faire une offre</Button>
        </Link>
      </div>
    </div>
  );
};

export default HorseCard;
