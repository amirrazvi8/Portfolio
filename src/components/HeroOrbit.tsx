import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

function HeroOrbit({
    children,
    size,
    rotation,
    shouldOrbit = false,
    orbitDuration,
    shouldSpin = false,
    spinDuration,
}: PropsWithChildren<{
    size: number;
    rotation: number;
    shouldOrbit?: boolean;
    orbitDuration?: string;
    shouldSpin?: boolean;
    spinDuration?: string;
}>) {
    return (
        <div className="absolute left-20 top-20 -translate-x-1/2 -translate-y-1/2 -z-20">
            <div className={twMerge(shouldOrbit===true && "animate-spin")}
            style={{
                animationDuration:orbitDuration
            }}>
                <div
                    className="flex items-start justify-start "
                    style={{
                        height: `${size}px`,
                        width: `${size}px`,
                        transform: `rotate(${rotation}deg)`,
                    }}
                >
                    <div className={twMerge(shouldSpin===true && "animate-spin")}
                    style={{
                        animationDuration:spinDuration
                    }}>
                        <div
                            className="inline-flex"
                            style={{
                                transform: `rotate(${rotation * -1}deg)`,
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroOrbit;
