import {EventData} from "@/lib/happenings";

type ParsedEvent = EventData & { _ts: number };

const parseDdMmToTimestamp = (ddMm: string, now: Date): number | null => {
    const m = /^(\d{2})\.(\d{2})$/.exec(ddMm.trim());
    if (!m) return null;

    const day = Number(m[1]);
    const month = Number(m[2]); // 1..12
    if (month < 1 || month > 12 || day < 1 || day > 31) return null;

    // Choose the next occurrence: this year if still ahead; otherwise next year.
    const year = now.getFullYear();
    const candidateThisYear = new Date(year, month - 1, day, 12, 0, 0, 0); // noon to avoid DST edges
    if (Number.isNaN(candidateThisYear.getTime())) return null;

    if (candidateThisYear.getTime() >= startOfToday(now).getTime()) {
        return candidateThisYear.getTime();
    }

    const candidateNextYear = new Date(year + 1, month - 1, day, 12, 0, 0, 0);
    return Number.isNaN(candidateNextYear.getTime()) ? null : candidateNextYear.getTime();
};

const startOfToday = (d: Date): Date => {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
};

/**
 * Returns the nearest upcoming event (>= today), or the last event if all have passed.
 * If the input is empty or all dates are invalid, returns null.
 */
export const getNearestUpcomingOrLast = (events: EventData[]): EventData => {
    const now = new Date();
    const todayStartTs = startOfToday(now).getTime();

    const parsed: ParsedEvent[] = events
        .map((e) => {
            const ts = parseDdMmToTimestamp(e.date, now);
            return ts === null ? null : ({...e, _ts: ts} as ParsedEvent);
        })
        .filter((x): x is ParsedEvent => x !== null);

    // Sort by date ascending
    parsed.sort((a, b) => a._ts - b._ts);

    // Nearest upcoming: first with date >= today
    const upcoming = parsed.find((e) => e._ts >= todayStartTs);
    if (upcoming) {
        // strip internal field
        const {_ts, ...rest} = upcoming;
        return rest;
    }

    // If everything is in the past (for this year logic), return the last by date
    const last = parsed[parsed.length - 1];
    const {_ts, ...rest} = last;
    return rest;
};
