export default {
    jwtsecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB:{
        URI: process.env.MONGODB_URI || 'mongodb://localhost/jwtdb',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASWORD
    }
}
