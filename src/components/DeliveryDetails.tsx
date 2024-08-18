import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export function DeliveryDetails({ title, children }: Props) {
  return (
    <div className="flex items-center gap-[15px]">
      {children}
      <p className="text-gray-text-menu text-lg font-medium">{title}</p>
    </div>
  );
}
