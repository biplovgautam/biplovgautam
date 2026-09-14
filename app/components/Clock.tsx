"use client";

import { useEffect, useState } from "react";
import { site } from "../data/site";

const { timeZone, city, country } = site.location;

function format(date: Date) {
  const day = new Intl.DateTimeFormat("en-GB", { day: "numeric", timeZone }).format(date);
  const month = new Intl.DateTimeFormat("en-US", { month: "short", timeZone }).format(date);
  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone,
  }).format(date);
  return `${day} ${month} — ${time} ${city}, ${country}`;
}

/** Local date and time in Kathmandu, refreshed every 15 seconds. */
export default function Clock() {
  const [now, setNow] = useState("");

  useEffect(() => {
    const tick = () => setNow(format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="mt-1 min-h-5 text-sm text-ink-3" suppressHydrationWarning>
      {now || " "}
    </p>
  );
}
