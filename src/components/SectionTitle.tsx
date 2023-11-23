export interface SectionTitleProps {
  title: string;
  subTitle?: string;
}
export const SectionTitle = ({ title, subTitle }: SectionTitleProps) => {
  return (
    <div className="space-y-2 text-start">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
        {title}
      </h2>
      {subTitle && (
        <p className="text-lg font-light text-gray-800 dark:text-white max-w-[500px]">
          {subTitle}
        </p>
      )}
    </div>
  );
};
