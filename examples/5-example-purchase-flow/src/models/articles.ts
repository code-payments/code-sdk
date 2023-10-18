import { CurrencyCode } from '@code-wallet/library';

const defaultCurrency: CurrencyCode = 'usd';
const defaultPrice = 0.25;

export interface Article {
  id: string;
  price: number;
  currency: CurrencyCode;
  content: {
    title: string;
    body: string;
  }
}

// You should use a database instead of an in-memory object. This is just for
// demonstration purposes.
const articles: { [key: string]: Article } = {};

// Use something like MDX/MarkDoc/Vitepress to compile your articles into HTML.
export const loadArticles = () => {
  const id = 'example-article';
  articles[id] = {
    id,
    price: defaultPrice,
    currency: defaultCurrency,
    content: {
      title: '<h1>Example Article</h1>',
      body: '<p>This is a <u>test</u> article. You have purchased the full content.</p>',
    }
  }
  return articles;
}

export const filterArticles = (filter: (item: Article) => boolean): Article | undefined => {
  return Object.values(articles).find(filter);
};

export const findArticle = (props: Partial<Article>): Article | undefined => {
  return filterArticles((item) => {
    return Object.entries(props).every(([key, value]) => {
      return item[key as keyof Article] === value;
    });
  });
};

export const getArticleById = (id: string): Article | undefined => {
  return articles[id];
};

export const getFirstArticle = (): Article | undefined => {
  return Object.values(articles)[0];
}
