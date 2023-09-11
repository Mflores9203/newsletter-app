import { Metadata } from "next";

export const socials = [
    {
      id: 1,
      name: "Twitter",
      url: "https://twitter.com/YenneferIlw",
      handle: "@YenneferIlw",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/ilwyennefer",
      handle: "ilwyennefer",
    },
  ];

  const title = 'Newsletter-Miguel'
  const description = 'Frontend Engineer'

  export const metaData: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title,
      description,
      url: "",
      siteName: "Newsletter-Miguel",
      images: [],
      locale: "en-US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: title,
      description: description,
      card: "summary_large_image",
      images: [],
      creator: "@YenneferIlw",
    },
  };