export const config = {
  github: {
    login: "ethanchen8158", // github login name, not user name
    repo: "ethanchen8158.github.io", //"urodele",
    logInUrl: "",
    logInAuthUrl: "",
  },
  head: {
    title: "Ethan",
  },
  footer: {
    copyright: "© Glink",
    copyrightUrl: "https://github.com/glink25",
  },
  pagination: {
    size: 10,
  },
  giscus: false as object | false,
} as const;

export default config;
