export const authRoutes = {
    index: '/auth',
    signup: '/auth/signup',
    forgotPassword: '/auth/forgot-password',
    google: '/auth/google', // FIXME: Delete them after connecting real google authentication
    facebook: '/auth/facebook', // FIXME: Delete them after connecting real google authentication
}

export const privateRoutes = {
    game: '/game/:roomId'
}

export const publicRoutes = {
    index: '/'
}