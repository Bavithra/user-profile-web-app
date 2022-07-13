import { format, isValid } from "date-fns";

import { DATE_FORMAT } from "../Constants";

function getDisplayDateWithDay(date: Date, dateFormat: string = DATE_FORMAT) {
  const isValidDate = isValid(date);

  if (isValidDate) {
    return format(date, dateFormat);
  }

  return date.toString();
}

function toDate(date: string) {
  const isValidDate = isValid(date);

  if (isValidDate) {
    return new Date(date);
  }
}

export default {
  getDisplayDateWithDay,
  toDate,
};
