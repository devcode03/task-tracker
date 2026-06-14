type StatPillsProps = {
    completed: number;
    failed: number;
    pending: number;
}
type StatPillProps = {
    value: string;
    label: string;
    color: string;
}

export default function StatPills({ completed, failed, pending }: StatPillsProps) {
    return (
        <div className="flex gap-3 px-4 pb-5">
            <StatPill value={String(completed)} label="Completed" color="var(--co)" />
            <StatPill value={String(failed)} label="Failed" color="var(--fa)" />
            <StatPill value={String(pending)} label="Pending" color="var(--tx)" />
        </div>
    )
}

function StatPill({ value, label, color }: StatPillProps) {
    return (
        <div className="flex-1 flex flex-col gap-1 bg-[var(--s2)] border border-[var(--br)] rounded-2xl p-3">
            <span className="text-lg font-[family-name:var(--fm)]" style={{ color: color }}>{value}</span>
            <span className="uppercase tracking-widest text-[12px] text-[var(--tx3)]">{label}</span>
        </div>
    )
}