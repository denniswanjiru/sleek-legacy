const cleanup = dirty => {
  const semiDirty = dirty && dirty.split('(')[0].trim()
   const clean = semiDirty && semiDirty.split('[')[0].trim();
  return clean && (clean.length > 30 ? clean.substr(0, 30) + '...' : clean);
}

export const getTrack = title => {
  let [artist, song] = title.toLowerCase().split(' - ');

  artist = cleanup(artist);
  song = cleanup(song);
  return [artist, song];
}
