// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const app = {
//   songs: 'Nevada',
//   singer: 'Vicetone',
//   path:
// }

// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: {},
    // (1/2) Uncomment the line below to use localStorage
    // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
    songs: [{
            name: "Click Pow Get Down",
            singer: "Raftaar x Fortnite",
            path: "https://mp3.vlcmusic.com/download.php?track_id=34737&format=320",
            image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg",
        },
        {
            name: "Tu Phir Se Aana",
            singer: "Raftaar x Salim Merchant x Karma",
            path: "https://mp3.vlcmusic.com/download.php?track_id=34213&format=320",
            image: "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg",
        },
        {
            name: "Naachne Ka Shaunq",
            const $ = document.querySelector.bind(document);
            const $$ = document.querySelectorAll.bind(document);

            const playerWrapper = $('.player-wrapper');

            // Playlist elements
            const playlist = $('.playlist');
            const playlistWrapper = $('.playlist-wrapper');

            // Song's info elements
            const thumbnail = $('.thumbnail');
            const title = $('.title');
            const author = $('.author');
            const audio = $('#audio');

            // Control elements
            const playPause = $('#play-pause');
            const songFlow = $('#song-flow');
            const volumeIcon = $('#volume-icon');
            const volumeBar = $('.volume-bar');
            const progressBar = $('.progress-bar');
            const nextBtn = $('#next');
            const prevBtn = $('#prev');
            const openPlaylist = $('#open-playlist');
            const closePlaylist = $('#close-playlist');

            // Sound wave strokes
            const strokes = `
               <span class="stroke"></span>
               <span class="stroke"></span>
               <span class="stroke"></span>
               <span class="stroke"></span>
               <span class="stroke"></span>
            `
                // Mouse holding state for progress and volume bar
            let isHoldingProgress = false;
            let isHoldingVolume = false;

            const app = {
                // Current song index
                currentIndex: 0,

                // Control state
                songFlowStates: ['repeat', 'repeat_one', 'shuffle'],
                songFlowIndex: 0,

                // Volume state
                volumeState: 'volume_up',
                volumeOff: false,

                // Playlist is scrolled state
                isScrolled: true,

                // My playlist
                songs: [{
                        title: 'Faded',
                        author: 'Alan Walker',
                        path: './music/song0.mp3',
                        image: './image/image0.jpg'
                    },
                    {
                        title: 'Believer',
                        author: 'Imagine Dragons',
                        path: './music/song1.mp3',
                        image: './image/image1.jpg'
                    },
                    {
                        title: 'Radioactive',
                        author: 'Imagine Dragons',
                        path: './music/song2.mp3',
                        image: './image/image2.jpg'
                    },
                    {
                        title: 'Spectre',
                        author: 'Alan Walker',
                        path: './music/song3.mp3',
                        image: './image/image3.jpg'
                    },
                    {
                        title: 'Basta Boi Remix',
                        author: 'Alfons',
                        path: './music/song4.mp3',
                        image: './image/image4.jpg'
                    },
                    {
                        title: 'Havana',
                        author: 'Camila Cabello',
                        path: './music/song5.mp3',
                        image: './image/image5.jpg'
                    },
                    {
                        title: 'Memories',
                        author: 'Maroon 5',
                        path: './music/song6.mp3',
                        image: './image/image6.jpg'
                    },
                    {
                        title: 'Bones',
                        author: 'Imagine Dragons',
                        path: './music/song7.mp3',
                        image: './image/image7.jpg'
                    },
                    {
                        title: 'Demons',
                        author: 'Imagine Dragons',
                        path: './music/song8.mp3',
                        image: './image/image8.jpg'
                    },
                    {
                        title: 'Natural',
                        author: 'Imagine Dragons',
                        path: './music/song9.mp3',
                        image: './image/image9.jpg'
                    },
                    {
                        title: 'Whatever it takes',
                        author: 'Imagine Dragons',
                        path: './music/song10.mp3',
                        image: './image/image10.jpg'
                    },
                    {
                        title: 'Enemy',
                        author: 'Imagine Dragons',
                        path: './music/song11.mp3',
                        image: './image/image11.jpg'
                    },
                    {
                        title: 'Sugar',
                        author: 'Maroon 5',
                        path: './music/song12.mp3',
                        image: './image/image12.jpg'
                    },
                    {
                        title: 'Wellerman',
                        author: 'Nathen Evans',
                        path: './music/song13.mp3',
                        image: './image/image13.jpg'
                    },
                    {
                        title: 'Masked Heroes',
                        author: 'Vexento',
                        path: './music/song14.mp3',
                        image: './image/image14.jpg'
                    },
                    {
                        title: 'Nevada',
                        author: 'Vicetone',
                        path: './music/song15.mp3',
                        image: './image/image15.jpg'
                    },
                    {
                        title: 'Warriors',
                        author: 'Imagine Dragons',
                        path: './music/song16.mp3',
                        image: './image/image16.jpg'
                    },
                ],

                // Setting timer format
                timerFormat(duration) {
                    const rounded = Math.floor(duration);
                    return `${Math.floor(rounded/60) >= 10 ? Math.floor(rounded/60) : '0' + Math.floor(rounded/60)}:${rounded%60 >= 10 ? rounded%60 : '0' + rounded%60}`;
                },

                // Function runs every time song change event happens
                setChangeSong(newIndex) {
                    $$('.wave')[this.currentIndex].innerHTML = this.timerFormat($$('.duration-display')[this.currentIndex].duration);
                    this.currentIndex = newIndex;
                    $$('.wave')[this.currentIndex].innerHTML = strokes;
                    this.renderPlayer();
                    this.isScrolled = false;
                    audio.play();
                },

                // Handle events function
                eventHandler() {
                    const playListItems = $$('.playlist-item');

                    // Change song every time a song is clicked
                    playListItems.forEach((playListItem, index) => {
                        playListItem.onclick = () => {
                            this.setChangeSong(index);
                        }
                    })

                    // Spinning animation of the thumbnail
                    const thumbnailAnimation = thumbnail.animate([{
                        transform: 'rotate(360deg)'
                    }], {
                        duration: 8000,
                        iterations: Infinity
                    })

                    // Animation paused when initialized
                    thumbnailAnimation.pause();

                    // Updates song's duration when audio's metadata first update
                    audio.onloadedmetadata = () => {
                        $('#begin').innerText = this.timerFormat(audio.currentTime);
                        $('#end').innerText = this.timerFormat(audio.duration);
                    }

                    // Updates current time and progress bar
                    audio.ontimeupdate = () => {
                        let progressBarWidth = (audio.currentTime / audio.duration) * 100;
                        $('#begin').innerText = this.timerFormat(audio.currentTime);
                        $('.progress').style.width = `${progressBarWidth}%`;
                    }

                    // Volume change event
                    audio.onvolumechange = () => {
                        if (audio.muted) volumeIcon.innerHTML = 'volume_off';
                        else volumeIcon.innerText = audio.volume >= 0.5 ? 'volume_up' :
                            audio.volume < 0.05 ? 'volume_mute' : 'volume_down';
                        $('.volume').style.width = `${audio.volume*100}%`;
                    }

                    // Song's change flow every time a song is ended
                    audio.onended = () => {
                        if (this.songFlowIndex === 2) {
                            // Making sure that the song is not repeated
                            let newIndex;
                            do {
                                newIndex = Math.floor(Math.random() * this.songs.length);
                            } while (newIndex === this.currentIndex);

                            this.setChangeSong(newIndex);
                        } else nextBtn.click();
                    }

                    // Play and pause event
                    audio.onplay = () => {
                        playPause.innerText = 'pause_circle';
                        thumbnailAnimation.play();
                    }
                    audio.onpause = () => {
                        playPause.innerText = 'play_circle';
                        thumbnailAnimation.pause();
                    }

                    // Open playlist
                    openPlaylist.onclick = () => {
                        playlist.classList.add('active');

                        if (!this.isScrolled) {
                            setTimeout(() => {
                                $$('.playlist-item')[this.currentIndex].scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                });
                            }, 200);

                            this.isScrolled = true;
                        }
                    }

                    // Clost playlist
                    closePlaylist.onclick = () => playlist.classList.remove('active');

                    // Skip to next or previous song
                    nextBtn.onclick = () => {
                        if (this.currentIndex === this.songs.length - 1) this.setChangeSong(0);
                        else this.setChangeSong(this.currentIndex + 1);
                    }
                    prevBtn.onclick = () => {
                        if (this.currentIndex === 0) this.setChangeSong(this.songs.length - 1);
                        else this.setChangeSong(this.currentIndex - 1);
                    }

                    // Change the flow state
                    songFlow.onclick = () => {
                        this.songFlowIndex = this.songFlowIndex + 1 > 2 ? 0 : this.songFlowIndex + 1;
                        songFlow.innerText = this.songFlowStates[this.songFlowIndex];
                        if (this.songFlowIndex === 1) audio.loop = true;
                        else audio.loop = false;
                    }

                    // Play pause button event
                    playPause.onclick = () => {
                        audio.paused ? audio.play() : audio.pause();
                    }

                    // Turn on and off the volume
                    volumeIcon.onclick = () => {
                        audio.muted = !audio.muted;
                    }

                    // ----------------DRAGGING ANIMATION ON PROGRESS AND VOLUME BAR----------------
                    // Mouse down event
                    volumeBar.onmousedown = (e) => {
                        isHoldingVolume = true;
                        audio.volume = e.offsetX / e.target.offsetWidth;
                    }
                    progressBar.onmousedown = (e) => {
                        isHoldingProgress = true;
                        audio.currentTime = (e.offsetX / e.target.offsetWidth) * audio.duration;
                    }

                    // Dragging event
                    volumeBar.onmousemove = (e) => {
                        if (isHoldingVolume) audio.volume = e.offsetX / e.target.offsetWidth;
                    }
                    progressBar.onmousemove = (e) => {
                        if (isHoldingProgress) audio.currentTime = (e.offsetX / e.target.offsetWidth) * audio.duration;
                    }

                    // Mouse up event
                    window.onmouseup = () => {
                        isHoldingProgress = false;
                        isHoldingVolume = false;
                    }

                    // Accessibility improvement with keydown events on space bar & arrow keys
                    window.onkeydown = (e) => {
                        switch (e.keyCode) {
                            case 32:
                                e.preventDefault();
                                playPause.click();
                                break;
                            case 37:
                                e.preventDefault();
                                audio.currentTime -= 5;
                                break;
                            case 38:
                                e.preventDefault();
                                audio.volume + 0.05 < 1 ? audio.volume += 0.05 : audio.volume = 1;
                                break;
                            case 39:
                                e.preventDefault();
                                audio.currentTime += 5;
                                break;
                            case 40:
                                e.preventDefault();
                                audio.volume - 0.05 > 0 ? audio.volume -= 0.05 : audio.volume = 0;
                                break;
                        }
                    }
                },

                // Render the song playlist
                renderPlaylist() {
                    const htmls = this.songs.map(song => {
                        return `
                        <li class="playlist-item">
                           <div class="playlist-thumb" style="background-image: url(${song.image})"></div>
                           <div class="song-info">
                              <span class="playlist-title">${song.title}</span>
                              <span class="playlist-author">${song.author}</span>
                           </div>
                           <audio class="duration-display" preload="metadata" src=${song.path}></audio>
                           <div class="wave"></div>
                        </li>
                     `
                    }).join('');

                    playlistWrapper.innerHTML = htmls;
                    const durations = $$('.duration-display');
                    const wave = $$('.wave');

                    // Initialize isPlaying state and add song's duration at the end for every song in
                    // the playlist
                    durations.forEach((duration, index) => {
                        duration.onloadedmetadata = () => {
                            wave[index].innerHTML = index === this.currentIndex ? strokes : this.timerFormat(duration.duration);
                        }
                    })
                },

                // Render the player
                renderPlayer() {
                    const currentSong = this.songs[this.currentIndex];
                    thumbnail.style.backgroundImage = `url(${currentSong.image})`;
                    title.innerText = currentSong.title;
                    author.innerText = currentSong.author;
                    audio.src = currentSong.path;
                },

                start() {
                    this.renderPlayer();
                    this.renderPlaylist();
                    this.eventHandler();

                    // Initialize the default volume
                    audio.volume = 0.5;
                }
            }

            app.start();

            /** P/S:
             * - audio.volume only works on desktop devices for some reasons
             */
            singer: "Raftaar x Brobha V",
            path: "https://mp3.filmysongs.in/download.php?id=Naachne Ka Shaunq Raftaar Ft Brodha V Mp3 Hindi Song Filmysongs.co.mp3",
            image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
        },
        {
            name: "Mantoiyat",
            singer: "Raftaar x Nawazuddin Siddiqui",
            path: "https://mp3.vlcmusic.com/download.php?track_id=14448&format=320",
            image: "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg",
        },
        {
            name: "Aage Chal",
            singer: "Raftaar",
            path: "https://mp3.vlcmusic.com/download.php?track_id=25791&format=320",
            image: "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg",
        },
        {
            name: "Damn",
            singer: "Raftaar x kr$na",
            path: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
            image: "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg",
        },
        {
            name: "Feeling You",
            singer: "Raftaar x Harjas",
            path: "https://mp3.vlcmusic.com/download.php?track_id=27145&format=320",
            image: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp",
        },
    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        // (2/2) Uncomment the line below to use localStorage
        // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
        });
        playlist.innerHTML = htmls.join("");
    },
    defineProperties: function() {
        Object.defineProperty(this, "currentSong", {
            get: function() {
                return this.songs[this.currentIndex];
            },
        });
    },
    handleEvents: function() {
        const _this = this;
        const cdWidth = cd.offsetWidth;

        // Xử lý CD quay / dừng
        // Handle CD spins / stops
        const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10 seconds
            iterations: Infinity,
        });
        cdThumbAnimate.pause();

        // Xử lý phóng to / thu nhỏ CD
        // Handles CD enlargement / reduction
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };

        // Xử lý khi click play
        // Handle when click play
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // Khi song được play
        // When the song is played
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add("playing");
            cdThumbAnimate.play();
        };

        // Khi song bị pause
        // When the song is pause
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdThumbAnimate.pause();
        };

        // Khi tiến độ bài hát thay đổi
        // When the song progress changes
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
            }
        };

        // Xử lý khi tua song
        // Handling when seek
        progress.onchange = function(e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        };

        // Khi next song
        // When next song
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Khi prev song
        // When prev song
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };

        // Xử lý bật / tắt random song
        // Handling on / off random song
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom;
            _this.setConfig("isRandom", _this.isRandom);
            randomBtn.classList.toggle("active", _this.isRandom);
        };

        // Xử lý lặp lại một song
        // Single-parallel repeat processing
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig("isRepeat", _this.isRepeat);
            repeatBtn.classList.toggle("active", _this.isRepeat);
        };

        // Xử lý next song khi audio ended
        // Handle next song when audio ended
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };

        // Lắng nghe hành vi click vào playlist
        // Listen to playlist clicks
        playlist.onclick = function(e) {
            const songNode = e.target.closest(".song:not(.active)");

            if (songNode || e.target.closest(".option")) {
                // Xử lý khi click vào song
                // Handle when clicking on the song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }

                // Xử lý khi click vào song option
                // Handle when clicking on the song option
                if (e.target.closest(".option")) {}
            }
        };
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $(".song.active").scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }, 300);
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    start: function() {
        // Gán cấu hình từ config vào ứng dụng
        // Assign configuration from config to application
        this.loadConfig();

        // Định nghĩa các thuộc tính cho object
        // Defines properties for the object
        this.defineProperties();

        // Lắng nghe / xử lý các sự kiện (DOM events)
        // Listening / handling events (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        // Load the first song information into the UI when running the app
        this.loadCurrentSong();

        // Render playlist
        this.render();

        // Hiển thị trạng thái ban đầu của button repeat & random
        // Display the initial state of the repeat & random button
        randomBtn.classList.toggle("active", this.isRandom);
        repeatBtn.classList.toggle("active", this.isRepeat);
    },
};

app.start();