import * as React from "react";
import { WritableDraft } from "immer";

import "./seed-slot.scss";
import { Artist, Track } from "../../interfaces";
import { isString } from "lodash";

interface SeedSlotProps {
    seed: string | WritableDraft<Artist> | WritableDraft<Track> | null;
}

export const SeedSlot: React.FC<SeedSlotProps> = ({ seed }) => {
    if (isString(seed)) {
        return <span>{seed}</span>;
    }
    if (seed?.type === "artist") {
        return <span>{(seed as Artist).name}</span>;
    }
    if (seed?.type === "track") {
        return <span>{(seed as Track).name}</span>;
    }
    return <span>Empty</span>;
};
