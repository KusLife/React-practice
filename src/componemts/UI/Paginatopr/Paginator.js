import { usePagesArreyCounter } from '../../../utils/getPagesCount';

const Paginatopr = ({ totalPages, page, changePage }) => {
  const pagesArrey = usePagesArreyCounter(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArrey.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page__current' : 'page'}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Paginatopr;
  