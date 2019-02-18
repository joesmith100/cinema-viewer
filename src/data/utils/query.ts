import db from '../client'
import { Collection, Cursor, MongoError, FindAndModifyWriteOpResultObject } from 'mongodb';

/**
 * Generic function to perform a search that expects multiple responses from mongodb.
 * Will automatically convert to JS array when data is fetched.
 * 
 * @param collection mongodb collection name
 */
export function multiQ <T> (collection: string): (fn: (col: Collection<T>) => Cursor<T>) => Promise<T[]> {
  return (fn) => new Promise((resolve, reject) => {
    fn(db._db.collection(collection)).toArray((err: MongoError, results: T[]) => {
      if (err) reject(err)
      else resolve(results)
    })
  })
}

/**
 * Generic function to perform a sea.
 * 
 * @param collection mongodb collection name
 */
export function singleQ <T> (collection: string): (fn: (col: Collection<T>) => Promise<FindAndModifyWriteOpResultObject<T>>) => Promise<FindAndModifyWriteOpResultObject<T>> {
  return (fn) => fn(db._db.collection(collection))
}