import { House, SearchX } from "lucide-react";
import { Link } from "react-router";
import { translations } from "../constants/translations";
import useLanguage from "../hooks/useLanguage";

const NotFound = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <SearchX
          size={56}
          aria-hidden="true"
          className="mx-auto text-orange-500"
        />
        <p className="mt-6 text-lg font-semibold text-orange-600">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t.notFound.title}
        </h1>

        <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-gray-600">
          {t.notFound.text}
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
        >
          <House size={20} aria-hidden="true" />
          {t.notFound.backHome}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
