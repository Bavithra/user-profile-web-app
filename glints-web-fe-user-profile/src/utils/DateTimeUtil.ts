import { format, isValid } from "date-fns";

import { DATE_FORMAT } from "../Constants";

function getDisplayDateWithDay(date: Date, dateFormat: string = DATE_FORMAT) {
  const isValidDate = isValid(date);

  if (isValidDate) {
    return format(date, dateFormat);
  }

  return date.toString();
}


function getDate(startDate: string): Date | undefined {
  return startDate.length > 0 ? new Date(startDate) : undefined;
}

function getEndDate(checked: boolean, endDate: string): string {
  return checked
    ? getDisplayDateWithDay(new Date())
    : endDate;
}

export default {
  getDisplayDateWithDay,
  getDate,
  getEndDate,
};
