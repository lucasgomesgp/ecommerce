interface Props {
  title: string;
}

export function TitleWithBar({ title }: Props) {
  return (
    <h3
      className={`relative font-coreSans font-medium flex items-center text-[28px] after:absolute after:w-[6px] after:h-7 after:bg-purple-principal after:rounded-[10px] after:-left-[15px] `}
    >
      {title}
    </h3>
  );
}
