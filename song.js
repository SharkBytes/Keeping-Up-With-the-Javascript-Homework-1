
// my favorite song containing the artist, song name, year released,genre
let Favorite_song = {
	artist:"Avicii",
	song:"Wake Me Up",
	year:2013,
	genre:["Country music", "Dance/electronic"],
	durationInSeconds:272,
	IsArtistSwedish:true

}

//print out each attribute
console.log("My favorite song is "+Favorite_song["song"]);
console.log("artist is "+Favorite_song["artist"]);
console.log("year song released "+Favorite_song["year"]);
console.log("genre of song "+Favorite_song["genre"][0]+" and "+Favorite_song["genre"][1]);
console.log("song duration in seconds:"+Favorite_song["durationInSeconds"]);
console.log("Is "+Favorite_song["artist"]+" Swedish? "+Favorite_song["IsArtistSwedish"]);