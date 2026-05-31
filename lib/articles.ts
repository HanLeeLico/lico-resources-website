// Article content system. Each article is a typed data file in lib/articles/.
// The /insights index lists them, /insights/[slug] renders them.

export type ArticleSection =
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "checklist"; items: string[] };

export type ArticleCarouselSlide = { src: string; alt: string };

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  publishedDate: string; // ISO yyyy-mm-dd
  excerpt: string;
  cardExcerpt?: string; // shorter, for cards
  carousel?: ArticleCarouselSlide[];
  body: ArticleSection[];
  linkedinUrl?: string; // original LinkedIn URL if applicable
};

import { plateau } from "./articles/plateau";

export const articles: Article[] = [plateau];

export const articlesBySlug: Record<string, Article> = Object.fromEntries(
  articles.map((a) => [a.slug, a])
);

export function getArticle(slug: string): Article | undefined {
  return articlesBySlug[slug];
}

export function getRecentArticles(limit = 3): Article[] {
  return [...articles]
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
    .slice(0, limit);
}

// Categories used across articles
export const ARTICLE_CATEGORIES = [
  "INDUSTRY INSIGHTS",
  "CAREER TIPS",
  "MARKET PULSE",
  "CASE STUDY",
  "LEADERSHIP",
] as const;
