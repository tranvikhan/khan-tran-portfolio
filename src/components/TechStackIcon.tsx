import Image from "next/image";
export interface TechStackIconProps {
  imageUrl: string;
  title: string;
}
export const TechStackIcon = ({ title, imageUrl }: TechStackIconProps) => {
  return (
    <div className="flex flex-row p-4 items-center gap-4 rounded-lg">
      <Image
        src={imageUrl}
        alt="art cover"
        loading="lazy"
        width="50"
        height="50"
      />
      <p className="text-sm text-white">{title}</p>
    </div>
  );
};
