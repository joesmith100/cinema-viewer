/**
 * Defines the structure of a User object
 */
export interface IUser {
  _id?: string,
  name?: {
    givenName?: string,
    familyName?: string
  }
}

/**
 * Defines the structure of a film object
 */
export interface IFilm {
  _id?: string|Object,
  title?: string,
  dateAdded?: Date|string,
  edis?: string[],
  poster?: string,
  releaseDate?: Date|string,
  showtimes?: null | IShowtimes,
  synopsis?: string,
  trailer?: string,
  unlimited?: boolean,
  url?: string
  userData?: IUserData,
  selected?: boolean,
  [key: string]: any
}

export interface IShowtimes {
  [key: string]: IShowtime
}

/**
 * Defines the structure of a showtime object
 */
export interface IShowtime {
  [key: string]: {
    time: Date|string,
    url: string,
    audioType?: string
  }[]
}

/**
 * Defines the structure of a userData objcet
 */
export interface IUserData {
  _id?: Object|string,
  filmId?: string,
  userId?: string,
  favourite?: boolean|string,
  hidden?: boolean|string,
  new?: boolean,
  watched?: IWatched,
  [key: string]: any
}

/**
 * Defines the structure of a watched object
 */
export interface IWatched {
  rating: number,
  format: string,
  notes: string,
  dateTime: Date|string
}