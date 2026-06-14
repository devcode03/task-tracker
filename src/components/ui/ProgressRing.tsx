type ProgressRingProps = {
    total: number;
    done: number;
}
const RADIUS = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ProgressRing ({ total, done }: ProgressRingProps){
    const percentage = total > 0 ? done/total : 0;
    const offset= CIRCUMFERENCE  - (percentage * CIRCUMFERENCE);

const strokeColor = percentage ===1 ? 'var(--co)' : 'var(--ac)';
    return (
        <svg width="68" height="68" viewBox="0 0 68 68" >
            <circle cx="34" cy="34" r={RADIUS} fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="4" />
            <circle cx="34" cy="34" style={{transition:'stroke-dashoffset 0.6s ease'}} r={RADIUS} fill="none" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" strokeDasharray={CIRCUMFERENCE} strokeDashoffset={offset} transform="rotate(-90 34 34)"></circle>
            <text x="34" y="34" textAnchor="middle" dominantBaseline="central" fill="var(--tx)" fontSize="11" fontFamily="var(--fm)">{done}/{total}</text>
        </svg>
    );
}