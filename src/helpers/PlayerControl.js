// import Sound from 'react-native-sound';

// Sound.setActive(true);
// Sound.setCategory('Playback', true);

// const PlayerControl = {
//     book: null,
//     track: null,
//     soundPointer: null,

//     load(book, trackIndex = 0, dispatch) {
//         const track = book?.tracks?.[trackIndex];
//         if (!track || !track.link) {
//             return;
//         }

//         if (this.soundPointer) {
//             if (this.soundPointer._filename === track.link) {
//                 this.togglePlay();
//                 return;
//             } else {
//                 this.unloadAudio();
//             }
//         }

//         track.index = trackIndex;
//         this.book = book;
//         this.track = track;
//         console.log('before dispatching load audio')
//         dispatch({
//             type: 'LOAD_AUDIO',
//             payload: {
//                 book,
//                 track,
//             }
//         });
//         console.log('dispatched load audio')
//         this.soundPointer = new Sound(track.link, '', this.onLoadAudio(dispatch));
//     },

//     getCurrentTime() {
//         return new Promise(resolve => {
//             if (!this.soundPointer) {
//                 resolve(0);
//             }
//             this.soundPointer.getCurrentTime(seconds =>
//                 resolve(parseInt(seconds, 10)),
//             );
//         });
//     },

//     playAudio(dispatch) {
//         if (!this.soundPointer) {
//             return;
//         }
//         dispatch({
//             type: 'PLAY_AUDIO',
//             payload: {
//                 duration: parseInt(this.soundPointer.getDuration(), 10),
//             }
//         });
//         this.soundPointer.play(this.onPlayEnd(dispatch));
//     },

//     pauseAudio(dispatch) {
//         if (!this.soundPointer) {
//             return;
//         }
//         dispatch({
//             type: 'PAUSE_AUDIO',
//         });
//         this.soundPointer.pause();
//     },

//     onPlayEnd(success, dispatch) {
//         if (success) {
//             dispatch({
//                 type: 'PLAY_AUDIO_ENDED',
//             });
//             const nextTrackIndex = this.track.index + 1;
//             const nextTrack = this.book.tracks[nextTrackIndex];
//             if (nextTrack && nextTrack.link) {
//                 this.load(this.book, nextTrackIndex);
//             }
//         }
//     },

//     onLoadAudio(error, dispatch) {
//         if (error) {
//             dispatch({
//                 type: 'LOAD_AUDIO_ERROR',
//             });
//             return;
//         }
//         this.playAudio(dispatch);
//     },

//     togglePlay() {
//         if (!this.soundPointer) {
//             return;
//         }
//         if (this.soundPointer._playing) {
//             this.pauseAudio();
//         } else {
//             this.playAudio();
//         }
//     },

//     stop() {
//         if (!this.soundPointer) {
//             return;
//         }
//         this.soundPointer.stop();
//     },

//     unloadAudio() {
//         dispatch({
//             type: 'UNLOAD_AUDIO',
//         });
//         if (this.soundPointer) {
//             this.soundPointer.stop();
//             this.soundPointer.release();
//             this.soundPointer.reset();
//             this.soundPointer = null;
//         }
//     },
// };

// export default PlayerControl;
