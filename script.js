const songs = [
    {
        title: 'Team TOMODACHI',
        artist: '200, Raoul, SIVAA, YOSI',
        file: 'musique/チーム友達 TEAM TOMODACHI (KR Remix) - 200, Raoul, SIVAA, YOSI ( Music Video).mp3',
        image: 'Photo/hq720.jpg'
    },
    {
        title: 'Royalty',
        artist: 'Egzod & Maestro Chives ft. Neoni',
        file: 'musique/Egzod & Maestro Chives - Royalty (ft. Neoni) [Official Lyric Video].mp3',
        image: 'Photo/Royality.jpg'
    },
    {
        title: 'yes, and',
        artist: 'Ariana Grande',
        file: 'musique/Ariana Grande - yes, and (Official Music Video).mp3',
        image: 'Photo/1.jpg'
    },
    {
        title: 'i like the way you kiss me',
        artist: 'Artemas ',
        file: 'musique/Artemas - i like the way you kiss me (official music video).mp3',
        image: 'Photo/2.jpg'
    },
    {
        title: 'My Oh My ',
        artist: 'Ava Max',
        file: 'musique/Ava Max - My Oh My (Official Video).mp3',
        image: 'Photo/3.jpg'
    },
    {
        title: 'Beautiful Things',
        artist: 'Benson Boone',
        file: 'musique/Benson Boone - Beautiful Things (Official Music Video).mp3',
        image: 'Photo/4.jpg'
    },
    {
        title: ' HOT UPTOWN',
        artist: 'Camila Cabello(ft. Drake)',
        file: 'musique/Camila Cabello - HOT UPTOWN (ft. Drake)(Official Visualizer).mp3',
        image: 'Photo/5.jpg'
    },
    {
        title: 'Imagine ',
        artist: 'Carbonne ',
        file: 'musique/Carbonne - Imagine (Visualizer).mp3',
        image: 'Photo/6.jpg'
    },
    {
        title: 'feelslikeimfallinginlove ',
        artist: 'Coldplay ',
        file: 'musique/Coldplay - feelslikeimfallinginlove (Official Video).mp3',
        image: 'Photo/7.jpg'
    },
    {
        title: ' Stumblin In ',
        artist: 'CYRIL ',
        file: 'musique/CYRIL - Stumblin In (Official Music Video).mp3',
        image: 'Photo/8.jpg'
    },
    {
        title: 'When We Were Young ',
        artist: 'David Guetta & Kim Petras',
        file: 'musique/David Guetta & Kim Petras - When We Were Young (The Logical Song) [Official Video].mp3',
        image: 'Photo/9.jpg'
    },
    {
        title: '  I Dont Wanna Wait ',
        artist: ' David Guetta & OneRepublic',
        file: 'musique/David Guetta & OneRepublic - I Dont Wanna Wait (Official Video).mp3',
        image: 'Photo/9.jpg'
    },
    {
        title: 'The Sound Of Silence  ',
        artist: ' Disturbed ',
        file: 'musique/Disturbed - The Sound Of Silence (CYRIL Remix) [Official Audio].mp3',
        image: 'Photo/10.jpg'
    },
    {
        title: 'Houdini ',
        artist: ' Dua Lipa',
        file: 'musique/Dua Lipa - Houdini (Official Music Video).mp3',
        image: 'Photo/11.jpg'
    },
    {
        title: ' Training Season ',
        artist: 'Dua Lupa ',
        file: 'musique/Dua Lipa - Training Season (Official Music Video).mp3',
        image: 'Photo/11.jpg'
    },
    {
        title: 'Business  ',
        artist: 'DYSTINCT ft. Naza ',
        file: 'musique/DYSTINCT - Business ft. Naza (prod. YAM & Unleaded).mp3',
        image: 'Photo/12.jpg'
    },
    {
        title: 'Espresso ',
        artist: 'Espresso ',
        file: 'musique/Espresso.mp3',
        image: 'Photo/13.jpg'
    },
    {
        title: ' Position ',
        artist: 'Franglish  ',
        file: 'musique/Franglish - Position (Clip Officiel).mp3',
        image: 'Photo/14.jpg'
    },
    {
        title: ' MAMI WATA',
        artist: 'Gazo, Tiakola ',
        file: 'musique/Gazo, Tiakola - MAMI WATA (Visualizer).mp3',
        image: 'Photo/15.jpg'
    },
    {
        title: ' SPIDER ',
        artist: 'GIMS & DYSTINCT ',
        file: 'musique/GIMS & DYSTINCT - SPIDER (Clip officiel).mp3',
        image: 'Photo/16.jpg'
    },
    {
        title: 'Si Antes Te Hubiera Conocido ',
        artist: ' KAROL G ',
        file: 'musique/KAROL G - Si Antes Te Hubiera Conocido (Official Video).mp3',
        image: 'Photo/17.jpg'
    },
    {
        title: ' CONTIGO ',
        artist: 'Karol G Tiësto ',
        file: 'musique/KAROL G, Tiësto - CONTIGO (Official Video).mp3',
        image: 'Photo/17.jpg'
    },
    {
        title: 'Boucan  ',
        artist: 'Keblack Ft. Franglish ',
        file: 'musique/Keblack Ft. Franglish - Boucan (Clip Officiel).mp3',
        image: 'Photo/19.jpg'
    },
    {
        title: ' TEMPS EN TEMPS',
        artist: 'KOBA LA D x @Binkszola91 ',
        file: 'musique/KOBA LA D x @Binkszola91 - TEMPS EN TEMPS.mp3',
        image: 'Photo/20.jpg'
    },
    {
        title: 'Whatever  ',
        artist: 'Kygo & Ava Max ',
        file: 'musique/Kygo & Ava Max - Whatever (Official Video).mp3',
        image: 'Photo/21.jpg'
    },
    {
        title: ' Overdrive ',
        artist: 'Ofenbach feat. Norma Jean Martine',
        file: 'musique/Ofenbach - Overdrive feat. Norma Jean Martine (Official Music Video).mp3',
        image: 'Photo/22.jpg'
    },
    {
        title: 'Nobody (from Kaiju No. 8)  ',
        artist: 'OneRepublic ',
        file: 'musique/OneRepublic - Nobody (from Kaiju No. 8) [Official Music Video].mp3',
        image: 'Photo/23.jpg'
    },
    {
        title: ' Wayeh',
        artist: 'THEODORT ',
        file: 'musique/THEODORT - Wayeh.mp3',
        image: 'Photo/24.jpg'
    },
    {
        title: 'MILLION DOLLAR BABY ',
        artist: 'Tommy Richman ',
        file: 'musique/Tommy Richman - MILLION DOLLAR BABY (Official Lyric Video) SHOT BY BELVEDERE.mp3',
        image: 'Photo/25.jpg'
    }
];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio(songs[currentSongIndex].file);

const playButton = document.getElementById('play');
const progressBar = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');
const clockDisplay = document.getElementById('clock');
const albumCoverImg = document.getElementById('album-cover-img');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playButton.innerHTML = '&#9654;'; // Play icon
    } else {
        audio.play();
        playButton.innerHTML = '&#10074;&#10074;'; // Pause icon
    }
    isPlaying = !isPlaying;
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    changeSong();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSong();
}

function changeSong() {
    audio.src = songs[currentSongIndex].file;
    audio.load();
    audio.play();
    playButton.innerHTML = '&#10074;&#10074;'; // Pause icon
    isPlaying = true;
    updateSongInfo();
}

function updateSongInfo() {
    songTitle.textContent = songs[currentSongIndex].title;
    songArtist.textContent = songs[currentSongIndex].artist;
    albumCoverImg.src = songs[currentSongIndex].image;
}

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    progressBar.value = (currentTime / duration) * 100;
    currentTimeDisplay.textContent = formatTime(currentTime);
});

progressBar.addEventListener('input', () => {
    const duration = audio.duration;
    const value = progressBar.value;
    audio.currentTime = (value / 100) * duration;
});

audio.addEventListener('loadedmetadata', () => {
    totalTimeDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', nextSong);

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clockDisplay.textContent = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();

// Initialize the first song information
updateSongInfo();