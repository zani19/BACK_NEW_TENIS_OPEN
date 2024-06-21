import { MongoClient, GridFSBucket } from 'mongodb';
import { Readable } from 'stream';

const uri = process.env.DATABASE_URL as string;

export const uploadImageToGridFS = async (buffer: Buffer, filename: string): Promise<string> => {
  const client = new MongoClient(uri);
  await client.connect();
  const database = client.db();
  const bucket = new GridFSBucket(database, { bucketName: 'images' });

  const uploadStream = bucket.openUploadStream(filename);
  const readableStream = new Readable();
  readableStream.push(buffer);
  readableStream.push(null);

  readableStream.pipe(uploadStream);

  return new Promise((resolve, reject) => {
    uploadStream.on('finish', () => {
      resolve(uploadStream.id.toString());
    });

    uploadStream.on('error', (error) => {
      reject(error);
    });
  });
};
