import { type FC } from "react";

interface Props {
  link: string;
  src: string;
  alt: string;
}

const CardImage: FC<Props> = ({ link, src, alt }: any) => {
  return (
    <div className="w-fit flex flex-col m-auto relative overflow-hidden">
      <a href={link} target="_blank">
        <div className="hover:bg-black justify-center hover:opacity-80 rounded-lg duration-150 ease-in">
          <img src={src} className="rounded-lg shadow-xl/20" alt={alt} />
        </div>
      </a>
    </div>
  );
};

export default CardImage;
