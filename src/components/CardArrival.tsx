import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    imageSrc: string;
    link: string;
    name: string;
}

export default function CardArrival({ imageSrc, link, name }: Props) {
    return (
        <Link href={link} className="hover:opacity-90 transition-opacity">
            <Image src={imageSrc} alt={name} width={262} height={262} />
            <p className="mt-8 text-gray-text-menu text-[20px] font-bold">{name}</p>
        </Link>
    );

}