export { default as swaggerConfig } from './swagger.config.js';
import { config } from 'dotenv';
config();

const {
  DB_URI,
  PORT,
  JWT_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  S3_IMAGE_BUCKET_NAME,
  S3_FILE_BUCKET_NAME,
} = process.env;

export const port = PORT || 3001;
export const jwtSecretKey = JWT_SECRET_KEY;
export const refreshTokenSecretKey = REFRESH_TOKEN_SECRET_KEY;
export const dbUri = DB_URI;
export const awsAccessKey = AWS_ACCESS_KEY_ID;
export const awsSecretAccessKey = AWS_SECRET_ACCESS_KEY;
export const awsRegion = AWS_REGION;
export const imageBucketName = S3_IMAGE_BUCKET_NAME;
export const fileBucketName = S3_FILE_BUCKET_NAME;
export const prefix = '/api';
export const specs = '/docs';
