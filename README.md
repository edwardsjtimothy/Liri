# Liri

The purpose of this node application is to provide users with a way to query Spotify, OMDB, and Bands in Town from console and recieve information back. The variables used to accept input from console and the variables used to define the api search parameters are stated globally. The functions to call the apis follow. Finally, a switch case is used to determine which function to run based on the value of process.argv[2]. The value of process.argv.slice(3).join(" ") is seached by the function and api specified by process.argv[2]. I have left comments in the js file to describe the few bits of the application that I have not been able to make function correctly so far. 

-OMDB Call- 
demo-captures\OMDB.PNG

-Bands in Town-
demo-captures\Bands-in-Town.PNG

-Spotify-
demo-captures\Spotify.PNG