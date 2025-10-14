
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'My Way',
    details: {
    author: 'Frank Sinatra',
    year: 1969
    }
}
const song = 'New Song';

// Destructuracion de objetos 
//Al momento de desesctructurar un objeto y hay una variable con el mismo nombre 
// de la propiedad, se puede renombrar con :
// const { song:anotherSong} = audioPlayer;
const { song:anotherSong, songDuration:duration} = audioPlayer;
//Desesctructuracion de objetos anidados
const { details: { author } } = audioPlayer;


//Desestructuracion de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.error('Personaje 3:', dbz[2])







console.log('Song', anotherSong );
console.log('Duraction',duration );
console.log('Author', author);


export{};