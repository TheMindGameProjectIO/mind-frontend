export const authRoutes = {
  index: "/auth",
  forgotPassword() {
    return `${this.index}/forgot-password`;
  },
  login() {
    return `${this.index}/login`;
  },
  signup() {
    return `${this.index}/signup`;
  },
};

export const privateRoutes = {
  lobbiesRoutes: {
    index: "/lobbies",
    list() {
      return `${this.index}/list`;
    },
    create() {
      return `${this.index}/create`;
    },
    lobby() {
      return `${this.index}/lobby`;
    }
  },
  game: "/game/:gameId",
};

export const publicRoutes = {
  index: "/",
  error: "/error",
};
