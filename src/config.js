import dotenv from 'dotenv'
dotenv.config()

const config = {
    PORT: process.env.PORTDEV,
    STRC: process.env.STRCDEV,
    NAMEBASE: process.env.NAMEBASEDEV,
    PERSISTENCE: process.env.PERSISTENCEDEV || ""
}

export default config