import { useNavigate } from 'react-router-dom';
import { ArticleCard } from '@sitecore-search/ui';
import PropTypes from 'prop-types';

const DEFAULT_IMG_URL = 'https://placehold.co/500x300?text=No%20Image'; // TODO: Update with corresponding fallback image

const ArticleHorizontalItemCard = ({ className = '', article, onItemClick, index }) => {
  const navigate = useNavigate();
  return (
    <ArticleCard.Root
      key={article.id}
      className={`group flex flex-row p-4 my-4 flex-nowrap max-h-52 w-full relative border border-gray-300 dark:border-gray-600 rounded-md hover:shadow-lg hover:scale-105 hover:transition-all hover:ease-linear	hover:duration-300 focus-within:scale-105 focus-within:transition-all focus-within:ease-linear focus-within:duration-300 focus-within:hover:shadow-lg ${className}`}
    >
      <div className="w-[25%] flex-none overflow-hidden bg-gray-200 ">
        <ArticleCard.Image
          src={article?.image_url || DEFAULT_IMG_URL}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="pl-4 grow flex-col">
        <a
          className="focus:outline-indigo-500"
          href={article.url}
          onClick={(event) => {
            event.preventDefault();
            onItemClick({
              id: article.id,
              index,
              sourceId: article.source_id,
            });
            navigate(`/detail/${article.id}`);
          }}
        >
          <span aria-hidden="true" className="absolute inset-0"></span>
          <ArticleCard.Title className="text-base">{article.name || article.title}</ArticleCard.Title>
        </a>
        <ArticleCard.Subtitle className="mt-3 text-sm text-gray-600 dark:text-gray-300 h-[100px] overflow-hidden">
          {article.subtitle}
        </ArticleCard.Subtitle>
      </div>
    </ArticleCard.Root>
  );
};
ArticleHorizontalItemCard.propTypes = {
  className: PropTypes.string,
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    source_id: PropTypes.string,
    image_url: PropTypes.string,
    url: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  onItemClick: PropTypes.func,
  index: PropTypes.number,
}

export default ArticleHorizontalItemCard;
