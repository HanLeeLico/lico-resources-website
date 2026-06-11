import type { Article } from "../articles";

export const boomerang: Article = {
  slug: "the-boomerang-offer",
  title: "The Boomerang Offer.",
  subtitle: "When your former employer comes back for you.",
  category: "CAREER TIPS",
  readTime: "5 MIN READ",
  publishedDate: "2026-06-12",
  excerpt:
    "A candidate called me this week with two offers — one from my client, one from a former employer she left eighteen months ago. The comfort of going back is real, but it's not a strategy. Here's what I told her.",
  cardExcerpt:
    "Two offers on the table. One from my client. One from her former employer. The comfort of going back is real — but it's not a strategy.",
  carousel: [
    { src: "/articles/boomerang-slide-1.png", alt: "The Boomerang Offer — slide 1" },
    { src: "/articles/boomerang-slide-2.png", alt: "The Boomerang Offer — slide 2" },
    { src: "/articles/boomerang-slide-3.png", alt: "The Boomerang Offer — slide 3" },
    { src: "/articles/boomerang-slide-4.png", alt: "The Boomerang Offer — slide 4" },
    { src: "/articles/boomerang-slide-5.png", alt: "The Boomerang Offer — slide 5" },
  ],
  linkedinUrl: "https://www.linkedin.com/in/hanleerecruitment/recent-activity/all/",
  body: [
    {
      type: "lead",
      text:
        "A candidate called me this week. \"Good problem to have,\" she said.",
    },
    {
      type: "paragraph",
      text:
        "Two offers on the table. One from my client. One from her former employer — a company she left eighteen months ago, stayed on good terms with, and genuinely liked.",
    },
    {
      type: "paragraph",
      text:
        "\"They reached out to me directly. Said they want me back. It feels safe. Familiar.\"",
    },
    { type: "paragraph", text: "Here's what I told her." },

    { type: "h2", text: "First question: Why did you leave?" },
    { type: "paragraph", text: "Not the polished interview answer. The real one." },
    {
      type: "paragraph",
      text:
        "If the reason she left — the manager, the ceiling, the culture — is still sitting there unchanged, going back just means rediscovering the same frustration. Faster this time, because she already knows where to look.",
    },
    {
      type: "paragraph",
      text:
        "If the problem has genuinely been fixed? Different conversation. At least worth considering seriously.",
    },

    { type: "h2", text: "Second question: Do you actually know what you're going back to?" },
    { type: "paragraph", text: "This is the part candidates underestimate." },
    {
      type: "paragraph",
      text:
        "Eighteen months is a long time. People have left. New people joined. Priorities shifted. The team she loved might look completely different. The manager she respected could be gone.",
    },
    { type: "paragraph", text: "**Familiarity feels like certainty. It isn't.**" },
    {
      type: "paragraph",
      text:
        "You know what that company *was*. You don't fully know what it *is* now. And you definitely don't know what it's *becoming*.",
    },

    { type: "h2", text: "Third question: Have you actually compared the two offers properly?" },
    { type: "paragraph", text: "Not just salary. Scope, growth path, team quality, leadership." },
    {
      type: "paragraph",
      text:
        "Don't default to the former employer simply because it feels known. \"I know what I'm getting\" is only reassuring if what you're getting is genuinely good.",
    },

    { type: "h2", text: "My honest take" },
    { type: "paragraph", text: "**The comfort of going back is real. But it's not a strategy.**" },
    { type: "paragraph", text: "Evaluate it like any other offer. With clear eyes. Not nostalgia." },
  ],
};
