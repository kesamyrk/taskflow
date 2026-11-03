export type Status = 'todo' | 'progress' | 'done';
export type Priority = 'low' | 'medium' | 'high';
export interface Project { id:string; name:string; description:string; color:string; dueDate:string; }
export interface Task { id:string; title:string; description:string; projectId:string; status:Status; priority:Priority; dueDate:string; assignee:string; }
export interface Profile { name:string; email:string; role:string; }