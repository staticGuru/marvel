import axios from "axios";

export async function getCharecterList(search = "", offset = 0) {
  try {
    return await axios.get(
      `${process.env.REACT_APP_MARVEL_API}/characters?ts=${process.env.REACT_APP_HASH_KEY}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_PUBLIC_KEY}${
        !!search ? `&nameStartsWith=${search}` : ""
      }&limit=3&offset=${offset}`
    );
  } catch (err) {
    throw new Error("Couldn't fetch characters");
  }
}
