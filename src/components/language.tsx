interface LanguageProps {
  language: string;
}

export function Language({ language }: LanguageProps) {
  return (
    <div className="mt-2 flex gap-2">
      <p className="py-2 px-4  bg-teal-950 text-emerald-300 flex items-center justify-center rounded-3xl ">
        {language}
      </p>
    </div>
  );
}
