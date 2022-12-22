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
  lobbies: "/lobbies",
};

export const publicRoutes = {
  index: "/",
  error: "/error",
};
