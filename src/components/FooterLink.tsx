import { IFooterLinks } from "@/utils/IFooterLinks";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  links?: Array<IFooterLinks>;
  children?: ReactNode;
}
export default function FooterLink({ title, links, children }: Props) {
  return (
    <div className="flex flex-col">
      <h4 className="font-bold">{title}</h4>
      {links?.map(({ id, name, destination }) => (
        <Link href={destination} key={id}>
          {name}
        </Link>
      ))}
      {children}
    </div>
  );
}
