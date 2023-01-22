export const authRoutes = {
  index: "/auth",
  get forgotPassword() {
    return `${this.index}/forgot-password`;
  },
  get login() {
    return `${this.index}/login`;
  },
  get signup() {
    return `${this.index}/signup`;
  },
};

export const privateRoutes = {
  lobbiesRoutes: {
    index: "/lobbies",
    get list() {
      return `${this.index}/list`;
    },
    get create() {
      return `${this.index}/create`;
    },
    get lobby() {
      return `${this.index}/`;
    },
  },
  game(id = ":id") {
    return "/game/" + id;
  },
};

export const publicRoutes = {
  index: "/",
  error: "/error",
};
