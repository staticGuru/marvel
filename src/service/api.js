import axios from "axios";

export async function getCharecterList(search = "", offset = 0) {
  try {
    const fetchedData = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?ts=1632998235&apikey=ff7d1b4aefa575448f941959adefe76d&hash=bc74402412971310d7a50ccd0dff3c7b${
        !!search ? `&nameStartsWith=${search}` : ""
      }&limit=3&offset=${offset}`
    );
    console.log({fetchedData:fetchedData})
    return fetchedData;
  } catch (err) {
    throw new Error("Couldn't fetch characters");
  }
}
