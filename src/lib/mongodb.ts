import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

if (!uri) {
  throw new Error("MONGODB_URI not defined");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

let client = new MongoClient(uri);

if (!global._mongoClientPromise) {
  global._mongoClientPromise = client.connect();
}

const clientPromise = global._mongoClientPromise;

export default clientPromise;