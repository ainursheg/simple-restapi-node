import {Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'sample_db',
    port: 5432
});