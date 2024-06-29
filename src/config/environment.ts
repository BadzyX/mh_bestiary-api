import dotenv from 'dotenv';
import path from 'path';

export const environment = () => dotenv.config({ path: path.join(process.cwd(), '.env') });