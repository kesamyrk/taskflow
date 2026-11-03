
import type { Project, Task } from './types';

const day = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};

export const initialProjects: Project[] = [
  {
    id: 'p1',
    name: 'Редизайн сайта',
    description: 'Обновление цифрового опыта и визуальной системы бренда.',
    color: '#8b7cf6',
    dueDate: day(12)
  },
  {
    id: 'p2',
    name: 'Мобильное приложение',
    description: 'Запуск нового клиентского приложения для iOS и Android.',
    color: '#48a99a',
    dueDate: day(25)
  },
  {
    id: 'p3',
    name: 'Маркетинговая кампания',
    description: 'Контент, запуск и аналитика осенней кампании.',
    color: '#e6a34c',
    dueDate: day(18)
  },
  {
    id: 'p4',
    name: 'Внутренние процессы',
    description: 'Улучшение командных процессов и документации.',
    color: '#e47d91',
    dueDate: day(35)
  }
];

type TaskSeed = [
  id: string,
  title: string,
  projectId: string,
  status: Task['status'],
  priority: Task['priority'],
  offset: number,
  assignee: string
];

const taskSeeds: TaskSeed[] = [
  ['t1', 'Собрать референсы для главной страницы', 'p1', 'done', 'medium', -3, 'Анна'],
  ['t2', 'Подготовить новую дизайн-систему', 'p1', 'progress', 'high', 2, 'Марк'],
  ['t3', 'Согласовать прототип с командой', 'p1', 'todo', 'high', 4, 'Анна'],
  ['t4', 'Спроектировать экран авторизации', 'p2', 'progress', 'high', 1, 'Денис'],
  ['t5', 'Описать пользовательские сценарии', 'p2', 'todo', 'medium', 5, 'Ольга'],
  ['t6', 'Подготовить тексты для onboarding', 'p2', 'todo', 'low', 8, 'Анна'],
  ['t7', 'Составить контент-план', 'p3', 'done', 'medium', -2, 'Марк'],
  ['t8', 'Запустить рекламные креативы', 'p3', 'progress', 'high', 3, 'Денис'],
  ['t9', 'Настроить аналитику кампании', 'p3', 'todo', 'medium', 7, 'Ольга'],
  ['t10', 'Обновить базу знаний команды', 'p4', 'todo', 'low', 10, 'Анна'],
  ['t11', 'Провести ретроспективу спринта', 'p4', 'done', 'low', -1, 'Марк'],
  ['t12', 'Собрать обратную связь', 'p1', 'todo', 'medium', 6, 'Ольга']
];

export const initialTasks: Task[] = taskSeeds.map(
  ([id, title, projectId, status, priority, offset, assignee]) => ({
    id,
    title,
    description: '',
    projectId,
    status,
    priority,
    dueDate: day(offset),
    assignee
  })
);
