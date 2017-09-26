// Type definitions for react-native-video 1.0.0
// Project: https://github.com/react-native-community/react-native-video
// Definitions by: Josh Baxley <https://github.com/joshbax>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3.2

declare module "react-native-video" {

    import React, { Component } from "react";
    import { ViewProperties, ImageURISource } from "react-native";

    export type VideoResizeMode = "cover" | "contain" | "stretch" | "none";
    export type SilentSwitchMode = "ignore" | "obey";
    export type VideoEventHandler = (event: VideoEvent) => void;

    export interface VideoEvent {
        target?: number; // [iOS?] View identifier. See: https://github.com/facebook/react-native/blob/master/React/Views/UIView%2BReact.m

        // onError event:
        error?: VideoError;

        // onLoad event:
        canPlaySlowForward?: boolean;
        canPlayFastForward?: boolean;
        canStepForward?: boolean;
        canStepBackward?: boolean;
        duration?: number;
        naturalSize?: VideoSize;
        canPlayReverse?: boolean;
        canPlaySlowReverse?: boolean;
        currentTime?: number; // currentTime is passed to onSeek and onProgress as well

        // onLoadStart event:
        src?: VideoSource;

        // onSeek event:
        seekTime?: number;

        // onProgress event:
        playableDuration?: number;
        atValue?: number;
        atTimescale?: number;
        seekableDuration?: number;

        // onPlaybackRateChange event:
        playbackRate?: number;

        // onBuffer:
        isBuffering?: boolean;
    }

    export interface VideoSource {
        target?: number;
        uri?: string;
        type?: string;
        isNetwork?: boolean;
    }

    export interface VideoSize {
        width?: number;
        height?: number;
        orientation?: string; // "landscape", "portrait", others possible?
    }

    export interface VideoError {
        code?: number;
        domain?: string;
        target?: number;
    }

    export interface VideoProperties extends ViewProperties {
        source: ImageURISource | ImageURISource[];
        poster?: string;
        rate?: number;                                      // 0 is paused, 1 is normal.
        volume?: number;                                    // 0 is muted, 1 is normal.
        muted?: boolean;                                    // Mutes the audio entirely.
        paused?: boolean;                                   // Pauses playback entirely.
        controls?: boolean;
        resizeMode?: VideoResizeMode;                       // Fill the whole screen at aspect ratio.
        repeat?: boolean;                                   // Repeat forever.
        playInBackground?: boolean;                         // Audio continues to play when app entering background.
        playWhenInactive?: boolean;                         // [iOS] Video continues to play when control or notification center are shown.
        ignoreSilentSwitch?: SilentSwitchMode;              // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
        progressUpdateInterval?: number;                    // [iOS] Interval to fire onProgress (default to ~250ms)
        onLoadStart?: VideoEventHandler;                    // Callback when video starts to load
        onLoad?: VideoEventHandler;                         // Callback when video loads
        onProgress?: VideoEventHandler;                     // Callback every ~250ms with currentTime
        onEnd?: VideoEventHandler;                          // Callback when playback finishes
        onError?: VideoEventHandler;                        // Callback when video cannot be loaded
        onBuffer?: VideoEventHandler;                       // Callback when remote video is buffering
        onTimedMetadata?: VideoEventHandler;                // Callback when the stream receive some metadata
        onSeek?: VideoEventHandler;
        onFullscreenPlayerWillPresent?: VideoEventHandler;
        onFullscreenPlayerDidPresent?: VideoEventHandler;
        onFullscreenPlayerWillDismiss?: VideoEventHandler;
        onFullscreenPlayerDidDismiss?: VideoEventHandler;
        onReadyForDisplay?: VideoEventHandler;
        onPlaybackStalled?: VideoEventHandler;
        onPlaybackResume?: VideoEventHandler;
        onPlaybackRateChange?: VideoEventHandler;
        onAudioFocusChanged?: VideoEventHandler;
        onAudioBecomingNoisy?: VideoEventHandler;
    }

    export default class Video extends Component<VideoProperties, any> {
        constructor(props: VideoProperties);

        public seek(time: number): void;
        public presentFullscreenPlayer(): void;
        public dismissFullscreenPlayer(): void;
    }
}
