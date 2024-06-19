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
    <div className={`flex ${reversed ? 'flex-row-reverse' : ''} text-2xl border my-7 rounded-2xl border-primary`}>
      <img src={image} alt={name} className="rounded-2xl" />
      <div className="w-1/2 py-5 px-20 flex flex-col justify-center">
        <h2 className="text-xl text-foreground">{name}</h2>
        <p className="text-muted-foreground text-base my-7">{description}</p>
        <Link href='/faire-une-offre-form'>
          <Button>Faire une offre</Button>
        </Link>
      </div>
    </div>
  );
};

export default HorseCard;
