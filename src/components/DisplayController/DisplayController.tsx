'use client';

import { useEffect, useRef, useState } from "react";
import Display, { LCDDisplayProps } from "../Display/Display";

interface DisplayOptions {
    demoOn?: boolean;
    // displayMode?: "" | "" | "";
    playbackData?: {
        trackNumber: number;
        trackName: string;
        albumName: string;
        artist: string;
        currentTime: number;
        playingFolder: number;
    }
}

interface OtherIndicationSettings {
    EQ?: {
        EQ?: ((timer: number) => boolean) | boolean;
        line?: ((timer: number) => boolean) | boolean;
        CLASSIC?: ((timer: number) => boolean) | boolean;
        HIPHOP?: ((timer: number) => boolean) | boolean;
        JAZZ?: ((timer: number) => boolean) | boolean;
        ROCK?: ((timer: number) => boolean) | boolean;
        POPS?: ((timer: number) => boolean) | boolean;
        USER?: ((timer: number) => boolean) | boolean;
    };
    LOUD?: ((timer: number) => boolean) | boolean;
    CH?: ((timer: number) => boolean) | boolean;
    DISC?: ((timer: number) => boolean) | boolean;
    RND?: {
        RND_disp?: ((timer: number) => boolean) | boolean;
        trackRnd?: ((timer: number) => boolean) | boolean;
        folderRnd?: ((timer: number) => boolean) | boolean;
    };
    RPT?: {
        RPT_disp?: ((timer: number) => boolean) | boolean;
        trackRpt?: ((timer: number) => boolean) | boolean;
        folderRpt?: ((timer: number) => boolean) | boolean;
    };
    HOLD?: ((timer: number) => boolean) | boolean;
    HD?: ((timer: number) => boolean) | boolean;

    TAG?: {
        TAG_disp?: ((timer: number) => boolean) | boolean;
        trackTag?: ((timer: number) => boolean) | boolean;
        folderTag?: ((timer: number) => boolean) | boolean;
    };
    AF?: ((timer: number) => boolean) | boolean;
    REG?: ((timer: number) => boolean) | boolean;
    TP?: ((timer: number) => boolean) | boolean;
    PTY?: ((timer: number) => boolean) | boolean;
    ST?: ((timer: number) => boolean) | boolean;
    MO?: ((timer: number) => boolean) | boolean;

    currentTimeDivider01?: ((timer: number) => boolean) | boolean;
    currentTimeDivider02?: ((timer: number) => boolean) | boolean;

    trackNumberIndication?: ((timer: number) => boolean) | boolean;
};

interface DisplayDemoData {
    animation: {
        mode: "default" | "move" | "default-new";
        direction?: "left" | "right" | null;
    }
    text: string;
    otherIndication?: OtherIndicationSettings;
    nextDelay: number;
}

export default function DisplayController({ demoOn, playbackData }: DisplayOptions) {

    // const demoInfo: DisplayDemoData[] = [
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null,
    //         },
    //         text: "   DEMO    ",
    //         nextDelay: 125,
    //     },
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null,
    //         },
    //         text: "    USB    ",
    //         nextDelay: 125,
    //     },
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null,
    //         },
    //         text: " FRONT AUX ",
    //         nextDelay: 125,
    //     },
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null,
    //         },
    //         text: "  WMA/MP3  ",
    //         nextDelay: 125,
    //     },
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null,
    //         },
    //         text: "  3 BAND   ",
    //         nextDelay: 60,
    //     },
    //     {
    //         animation: {
    //             mode: "move",
    //             direction: "left",
    //         },
    //         text: "PARAMETRIC ",
    //         nextDelay: 60,
    //     },
    //     {
    //         animation: {
    //             mode: "move",
    //             direction: "left",
    //         },
    //         text: " EQUALIZER ",
    //         nextDelay: 60,
    //     },
    //     {
    //         animation: {
    //             mode: "move",
    //             direction: "left",
    //         },
    //         text: "           ",
    //         nextDelay: 0,
    //     },
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null
    //         },
    //         text: "  CLASSIC  ",
    //         nextDelay: 125,
    //     },
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null
    //         },
    //         text: "  HIP HOP  ",
    //         nextDelay: 125,
    //     },
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null
    //         },
    //         text: "   JAZZ    ",
    //         nextDelay: 125,
    //     },
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null
    //         },
    //         text: "   ROCK    ",
    //         nextDelay: 125,
    //     },
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null
    //         },
    //         text: "   POPS    ",
    //         nextDelay: 125,
    //     },
    //     {
    //         animation: {
    //             mode: "default",
    //             direction: null,
    //         },
    //         text: "           ",
    //         nextDelay: 0
    //     }
    // ];

    const demoInfo: DisplayDemoData[] = [
        {
            animation: {
                mode: "default-new",
            },
            text: "   DEMO    ",
            nextDelay: 125,
            // otherIndication: {
            //     EQ: {
            //         CLASSIC: (t) => (t % 64) < 32
            //     }
            // },
        },
        {
            animation: {
                mode: "default-new",
            },
            text: "255+ FOLDER",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left",
            },
            text: "  READING  ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left",
            },
            text: "           ",
            nextDelay: 10,
        },
        {
            animation: {
                mode: "default-new",
            },
            text: " FRONT AUX ",
            nextDelay: 115,
        },
        {
            animation: {
                mode: "default-new",
            },
            text: "USB 2.0/3.0",
            nextDelay: 115,
        },
        {
            animation: {
                mode: "default-new"
            },
            text: "ОТОБРАЖАЕТ ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left",
            },
            text: "  РУССКИЙ  ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left",
            },
            text: "   ТЕКСТ   ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left",
            },
            text: "           ",
            nextDelay: 10,
        },
        {
            animation: {
                mode: "default-new",
            },
            text: "WMA/MP3/WAV",
            nextDelay: 115,
        },
        // {
        //     animation: {
        //         mode: "default-new",
        //     },
        //     text: "AUTO ON/OFF",
        //     nextDelay: 115,
        // },
        {
            animation: {
                mode: "default-new",
            },
            text: " BUILT-IN  ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left",
            },
            text: " BLUETOOTH ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left",
            },
            text: "  MODULE   ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left",
            },
            text: "",
            nextDelay: 10,
        },
        {
            animation: {
                mode: "default-new"
            },
            text: " AUTOMATIC ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left"
            },
            text: "  VOLUME   ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left"
            },
            text: "  CONTROL  ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left"
            },
            text: "",
            nextDelay: 10,
        },
        {
            animation: {
                mode: "default-new",
            },
            text: "  99-LIST  ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left"
            },
            text: " PLAY MODE ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left"
            },
            text: "",
            nextDelay: 10,
        },

        {
            animation: {
                mode: "default-new"
            },
            text: "  3 BAND   ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left"
            },
            text: "PARAMETRIC ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left"
            },
            text: " EQUALIZER ",
            nextDelay: 70,
        },
        {
            animation: {
                mode: "move",
                direction: "left"
            },
            text: "",
            nextDelay: 10,
        },

        {
            animation: {
                mode: "default-new"
            },
            text: "  CLASSIC  ",
            nextDelay: 162,
            otherIndication: {
                EQ: {
                    CLASSIC: (t) => (t % 64) < 32
                }
            },
        },
        {
            animation: {
                mode: "default-new"
            },
            text: "  HIP HOP  ",
            nextDelay: 162,
            otherIndication: {
                EQ: {
                    HIPHOP: (t) => (t % 64) < 32
                }
            },
        },
        {
            animation: {
                mode: "default-new"
            },
            text: "   JAZZ    ",
            nextDelay: 162,
            otherIndication: {
                EQ: {
                    JAZZ: (t) => (t % 64) < 32
                }
            },
        },
        {
            animation: {
                mode: "default-new"
            },
            text: "   ROCK    ",
            nextDelay: 162,
            otherIndication: {
                EQ: {
                    ROCK: (t) => (t % 64) < 32
                }
            },
        },
        {
            animation: {
                mode: "default-new"
            },
            text: "   POPS    ",
            nextDelay: 162,
            otherIndication: {
                EQ: {
                    POPS: (t) => (t % 64) < 32
                }
            },
        },
        {
            animation: {
                mode: "default-new"
            },
            text: "",
            nextDelay: 0,
        },

    ];

    const otherIndicationRef = useRef<LCDDisplayProps['otherIndication'] | undefined>(undefined);
    const [otherIndication, setOtherIndication] = useState<LCDDisplayProps['otherIndication'] | undefined>();

    const dataRef = useRef<string[][]>([
        [], [], [], [], [], [], [], [], [], [], []
    ]);

    const [data, setData] = useState<(string[])[]>([
        [], [], [], [], [], [], [], [], [], [], []
        // ["Х"], ["Ц"], ["Ч"], ["Ш"], ["Щ"], ["Ы"], ["Ъ"], ["Ь"], ["Э"], ["Ю"], ["Я"]
    ]);

    const updateOtherIndication = (data?: LCDDisplayProps['otherIndication']) => {
        setOtherIndication(data);
        otherIndicationRef.current = data;
    }

    const displayOtherIndication = (timer: number, indicationOptions: OtherIndicationSettings | Record<string, any>): LCDDisplayProps['otherIndication'] => {
        let result: LCDDisplayProps['otherIndication'] = {};
        for (const k in indicationOptions) {
            const key = k as keyof OtherIndicationSettings;
            if (typeof indicationOptions[key] === 'object') {
                result = {
                    ...result,
                    [key]: displayOtherIndication(timer, indicationOptions[key])
                }
            } else if (typeof indicationOptions[key] === 'function') result[key] = indicationOptions[key](timer);
            else result[key] = indicationOptions[key];
        }
        return result;
    }

    const updateData = (data: string[][]) => {
        setData(data);
        dataRef.current = data;
    }

    useEffect(() => {
        let timer = 0;
        let frameId: number;
        let animIdx = 0;


        let demoPosition = 0;
        let demoNextTimer = 0;
        let demoAnimationData = demoInfo[demoPosition].animation;

        const displayUpdate = () => {
            timer++;

            if (demoOn) {
                if (demoNextTimer > 0) {
                    if (demoInfo[demoPosition - 1]?.otherIndication) {
                        updateOtherIndication(
                            // displayOtherIndication(timer, otherIndicationRef.current as OtherIndicationSettings)
                            displayOtherIndication(((demoInfo[demoPosition - 1]?.nextDelay || 0) - demoNextTimer), demoInfo[demoPosition - 1].otherIndication as OtherIndicationSettings)
                        );
                    }
                    demoNextTimer--;
                } else if (timer % 4 === 0) {
                    if (animIdx < 45) {

                        if (demoAnimationData.mode === 'default') {
                            if (animIdx < 12) {
                                updateData(data.map((s, i) => (i === (12 - animIdx)) ? [] : (i === (11 - animIdx)) ? ["lineTop", "lineBottom"] : dataRef.current[i]));
                            } else if (animIdx === 12) {
                                updateData(data.map((s, i) => (i === (12 - animIdx)) ? ["line_left"] : dataRef.current[i]));
                            } else if (animIdx > 12) {
                                updateData(data.map((s, i) => (i === (animIdx - 14)) ? [
                                    demoInfo[demoPosition] ? demoInfo[demoPosition].text[(animIdx - 14)] : ""
                                ] : (i === (animIdx - 13)) ? ["-"] : dataRef.current[i]));
                            } else animIdx = 999;

                            animIdx++;
                        } else if (demoAnimationData.mode === 'default-new') {

                            if (animIdx < 27) {
                                updateData(data.map((s, i) => {
                                    return [
                                        (
                                            [(animIdx - 1), (animIdx)].includes(i)
                                        ) ? "lineTop" : "",
                                        (
                                            [(11 - animIdx), (10 - animIdx)].includes(i)
                                        ) ? "lineBottom" : "",
                                        (
                                            (i === 0 && [11, 12].includes(animIdx))
                                        ) ? "line_bottom_left" : "",
                                        (
                                            // (i === (animIdx - 12) && animIdx > 11)
                                            ([(animIdx - 12), (animIdx - 13)].includes(i) && (animIdx > 11 && animIdx < 18))
                                        ) ? "-" : "",

                                        (
                                            (i === 10 && [11, 12].includes(animIdx))
                                        ) ? "line_top_right" : "",
                                        (
                                            // (i === (10 - (animIdx - 12)) && animIdx > 11)
                                            ([(10 - (animIdx - 12)), (10 - (animIdx - 13))].includes(i) && (animIdx > 11 && animIdx < 18))
                                        ) ? "-" : "",

                                        (
                                            (animIdx < 25 && (animIdx > 18 && [(animIdx - 14), (11 - (animIdx - 13))].includes(i)))
                                        ) ? "LINE_CENTER_SEGMENT-02" : "",
                                        (
                                            (animIdx < 25 && (animIdx > 18 && [(animIdx - 14), (11 - (animIdx - 13))].includes(i)))
                                        ) ? "LINE_CENTER_SEGMENT-03" : "",

                                        (
                                            demoInfo[demoPosition - 1] && (animIdx < 18) &&
                                            (i < 5 && i > (animIdx))
                                        ) ? demoInfo[demoPosition - 1]?.text.split('')[i] : "",

                                        (
                                            demoInfo[demoPosition - 1] && (animIdx < 18) &&
                                            (i > 4 && i < (10 - animIdx))
                                        ) ? demoInfo[demoPosition - 1]?.text.split('')[i] : "",



                                        (
                                            ((i < 5) && animIdx > 18 && i > (5 - (animIdx - 19)))
                                        ) ? demoInfo[demoPosition]?.text.split('')[i] : "",

                                        (
                                            ((i > 4) && animIdx > 18 && i < ((animIdx - 19) + 4))
                                        ) ? demoInfo[demoPosition]?.text.split('')[i] : ""
                                    ];
                                }));
                                // alert(animIdx);
                                // updateData(data.map((s, i) =>
                                // (animIdx === 5 && i === animIdx) ? ["lineTop", "lineBottom"] :
                                //     (i === (12 - animIdx) && (
                                //         // !dataRef.current[(i)]?.includes('lineTop') &&
                                //         !dataRef.current[(i + 1)]?.includes('lineTop')
                                //     )) ? [] : (i === (11 - animIdx)) ? [...dataRef.current[i], "lineBottom"] : (i === (10 - animIdx)) ? [...dataRef.current[i], "lineBottom"] :
                                //     (i === (animIdx - 2) && (
                                //         // !dataRef.current[(animIdx + 1)]?.includes('lineBottom') &&
                                //         true// !dataRef.current[(i + 1)]?.includes('lineBottom')
                                //     )) ? [] : (i === (animIdx - 1)) ? [...dataRef.current[i], "lineTop"] : (i === (animIdx)) ? [...dataRef.current[i], "lineTop"] : dataRef.current[i]

                                // ));
                                // alert(animIdx)
                            } else animIdx = 999;

                            animIdx++;
                        } else if (demoAnimationData.mode === 'move') {
                            if (animIdx === 0) {
                                if (demoAnimationData.direction === 'left') updateData(
                                    [...dataRef.current, ...demoInfo[demoPosition].text.split('').map(i => [i])]
                                );

                            } else if (animIdx < 12) {
                                // updateData(dataRef.current.map((s, i) => (i === (animIdx - 1)) ? [""] : dataRef.current[i]  ));
                                updateData(dataRef.current.filter((s, i) => i !== 0));
                                // alert(JSON.stringify(dataRef.current));
                            } else animIdx = 999; // Reset animation
                            animIdx++;
                        }

                    } else {
                        if (demoAnimationData.mode === 'default') updateData(data.map((s, i) => (i === (10 - animIdx)) ? [] : dataRef.current[i]));

                        demoPosition++;
                        if (demoInfo[demoPosition]) {
                            // demoNextTimer = 120;
                            demoNextTimer = demoInfo[demoPosition - 1].nextDelay;
                            // alert(demoNextTimer);
                            demoAnimationData = demoInfo[demoPosition].animation;
                        } else {
                            demoPosition = 0;
                            demoNextTimer = 99999;
                        }


                        animIdx = 0;
                    }
                }
            }

            frameId = requestAnimationFrame(displayUpdate);
        }

        frameId = requestAnimationFrame(displayUpdate);

        return () => cancelAnimationFrame(frameId);

    }, []);

    return (
        <Display data={data} otherIndication={otherIndication} />
    )
}