type TaskStatus = "pending" | "completed" | "failed";
type Task = { id: string; text: string; status: TaskStatus };
type TaskData = Record<string, Task[]>;

export type { TaskStatus, Task, TaskData };
