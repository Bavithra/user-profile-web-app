import { format } from "date-fns";

import { DATE_FORMAT } from "../Constants";

function getDisplayDateWithDay(date: Date) {
  return format(date, DATE_FORMAT);
}

export default {
  getDisplayDateWithDay,
};
