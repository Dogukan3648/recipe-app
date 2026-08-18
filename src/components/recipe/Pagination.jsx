import { translations } from "../../constants/translations";
import useLanguage from "../../hooks/useLanguage";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { language } = useLanguage();
  const t = translations[language];

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-2"
      aria-label={t.pagination.ariaLabel}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {t.pagination.previous}
      </button>
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`h-10 w-10 rounded-lg font-semibold ${
              currentPage === page
                ? "bg-orange-500 text-white"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {t.pagination.next}
      </button>
    </nav>
  );
};

export default Pagination;
