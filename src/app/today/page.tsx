'use client';

import ProgressRing from "@/components/ui/ProgressRing";
import StatPills from "@/components/ui/StatPills";
import { formatDateLabel, todayKey } from "@/lib/utils";
export default function TodayPage(){
    const key = todayKey();
    const {dayFull, num, month, year} = formatDateLabel(key);
    return (
        <main className="pb-20">
            <header className="pt-14 px-6 pb-4 relative">
                <p className="[font-family:var(--fm)] text-[var(--ac)] text-xs tracking-widest uppercase">{key}</p>
                <h1 className="text-5xl [font-family:var(--fd)] font-semibold leading-none tracking-tight">{dayFull}</h1>
                <p className="text-sm text-[var(--tx2)] font-light mt-1">{month} {num}, {year}</p>
                <div className="absolute top-14 right-6 flex flex-col items-center gap-1">
                    <ProgressRing done={3} total={5} />
                    <span className="text-[10px] text-[var(--tx2)] font-[family-name:var(--fm)] tracking-wider">today</span>
                </div>
            </header>
            <StatPills completed={3} failed={1} pending={1}/>
        </main>
    );
}