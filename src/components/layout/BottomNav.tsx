'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    { label: 'Today', href: '/today', Icon: TodayIcon },
    { label: 'Calendar', href: '/calendar', Icon: CalendarIcon },
    { label: 'Stats', href: '/stats', Icon: StatsIcon },
]
function TodayIcon() {
    return (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
    )
};
function CalendarIcon() {
    return (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    )
}
function StatsIcon() {
    return (
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
        </svg>

    )
}

export default function BottomNav() {
    const pathname = usePathname();
    return (
        <nav className="fixed max-w-sm mx-auto bottom-0 left-0 right-0 h-18 flex items-center justify-around z-50 border-t border-(--br) bg-(--s1) backdrop-blur-xl">
            {NAV_ITEMS.map(item => {
                const active = pathname === item.href;
                return (<Link href={item.href} key={item.href} className=" flex flex-col items-center gap-1 text-[11px] font-medium tracking-widest uppercase px-5 py-2 rounded-xl cursor-pointer">
                    <span className={`${active ? "text-(--ac)" : "text-(--tx)"}`}><item.Icon/></span>
                    <span className={`${active ? "text-(--ac)" : "text-(--tx)"}`}>{item.label}</span>
                </Link>)
            })}
        </nav>
    );

}