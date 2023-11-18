function songs(information) {
  const numberOfSongs = information.shift();
  const neededTypeList = information.pop();
  const songs = information.map((song) => song);
  const songsAndTypes = {};

  for (const song of songs) {
    const [typeList, songName, songTime] = song.split("_");
    songsAndTypes[songName] = typeList;
  }

  for (const [songName, typeList] of Object.entries(songsAndTypes)) {
    if (neededTypeList === "all") {
      console.log(songName);
    } else {
      if (neededTypeList === typeList) {
        console.log(songName);
      }
    }
  }
}
