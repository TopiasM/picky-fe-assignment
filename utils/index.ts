import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const formatDateString = (dateStr: string): Date => new Date(dateStr);

export const dateFromNow = (date: Date): string => {
  dayjs.extend(relativeTime);
  return dayjs(date).fromNow();
};
