interface Props{
  classNames: string;
}
export function ArrowMenu({classNames}:Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="12"
      fill="none"
      viewBox="0 0 5 12"
      className={classNames}
    >
      <path
        fill="#807D7E"
        fillRule="evenodd"
        d="M.158 10.936a.5.5 0 01-.022-.707l3.79-4.033a.297.297 0 000-.392L.136 1.77a.5.5 0 01.728-.685l3.79 4.033c.461.49.461 1.272 0 1.762l-3.79 4.033a.5.5 0 01-.706.022z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
