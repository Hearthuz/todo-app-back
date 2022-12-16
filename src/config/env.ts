import 'dotenv/config'

export const HOST = process.env.HOST || 'localhost';
export const PORT = parseInt(process.env.PORT || '4000', 10);