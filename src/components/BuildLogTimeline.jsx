"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import FadeIn from "@/components/FadeIn";
import { areaLabel } from "@/data/autowabaBuildLog";

// One phase = one chapter of the build. Groups inside it are already sorted by
// area, so filtering just hides groups rather than reshuffling anything.
function Phase({ phase, activeArea }) {
  const groups = useMemo(
    () =>
      activeArea === "all"
        ? phase.groups
        : phase.groups.filter((g) => g.area === activeArea),
    [phase.groups, activeArea]
  );

  const itemCount = groups.reduce((n, g) => n + g.items.length, 0);

  if (groups.length === 0) return null;

  return (
    <FadeIn>
      <section
        aria-labelledby={`phase-${phase.id}`}
        className="border-t border-neutral-950/10 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8"
      >
        {/* Left rail: when, and how big */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="font-display text-base font-semibold text-neutral-950">
                {phase.period}
              </p>
              {phase.status ? (
                <span className="rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
                  {phase.status}
                </span>
              ) : null}
            </div>
            <p className="mt-2 font-mono text-xs text-neutral-500">
              {phase.range}
            </p>
            <p className="mt-6 text-sm text-neutral-500">
              {itemCount} {itemCount === 1 ? "change" : "changes"} across{" "}
              {groups.length} {groups.length === 1 ? "area" : "areas"}
            </p>
          </div>
        </div>

        {/* Right: the actual log */}
        <div className="mt-8 lg:col-span-2 lg:mt-0">
          <h3
            id={`phase-${phase.id}`}
            className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl"
          >
            {phase.title}
          </h3>
          <p className="mt-4 text-base text-neutral-600">{phase.summary}</p>

          <div className="mt-10 space-y-10">
            {groups.map((group) => (
              <div key={`${group.area}-${group.title}`}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h4 className="font-display text-base font-semibold text-neutral-950">
                    {group.title}
                  </h4>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
                    {areaLabel(group.area)}
                  </span>
                </div>
                <ul role="list" className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="relative pl-6 text-base text-neutral-600"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.65rem] h-1.5 w-1.5 rounded-full bg-neutral-300"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default function BuildLogTimeline({ phases, areas }) {
  const [activeArea, setActiveArea] = useState("all");

  // Only offer filters for areas that actually appear in the log.
  const usedAreas = useMemo(() => {
    const used = new Set();
    for (const phase of phases) {
      for (const group of phase.groups) used.add(group.area);
    }
    return areas.filter((a) => used.has(a.id));
  }, [phases, areas]);

  const visiblePhases = useMemo(
    () =>
      activeArea === "all"
        ? phases
        : phases.filter((p) => p.groups.some((g) => g.area === activeArea)),
    [phases, activeArea]
  );

  const filters = [{ id: "all", label: "Everything" }, ...usedAreas];

  return (
    <>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by area">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveArea(filter.id)}
            aria-pressed={activeArea === filter.id}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              activeArea === filter.id
                ? "bg-neutral-950 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {visiblePhases.length > 0 ? (
        <div key={activeArea} className="mt-16 space-y-16 lg:space-y-24">
          {visiblePhases.map((phase) => (
            <Phase key={phase.id} phase={phase} activeArea={activeArea} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-base text-neutral-600">
          Nothing logged in this area yet.
        </p>
      )}
    </>
  );
}
