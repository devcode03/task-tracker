const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December",];
const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];

export function fmt(date: Date): string {
  // fmt(new Date(2026, 5, 14)) => "2026=06-14"
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function todayKey(): string {
  // todayKey() => "2026=06-14"
  return fmt(new Date());
}

export function parseKey(key: string): Date {
  // parseKey("2026-06-14") => Date { Sun Jun 14 2026 }
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export type DateLabel = {
  dayFull: string;
  num: number;
  month: string;
  year: number;
};

export function formatDateLabel(key: string): DateLabel {
  // formatDateLabel("2026-06-14") => { dayFull: "Sunday", num: 14, month: "June", year: 2026 }
  const date = parseKey(key);
  return {
    dayFull: DAYS[date.getDay()],
    num: date.getDate(),
    month: MONTHS[date.getMonth()],
    year: date.getFullYear(),
  }
};