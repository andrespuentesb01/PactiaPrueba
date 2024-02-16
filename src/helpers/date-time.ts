export function getFormattedDate(dateValue: string, timeValue: any): Date {
  let date: Date = new Date(dateValue);
  const time = timeValue.toString();
  const hours = time.substring(0, 2);
  const minutes = time.substring(3, 5);
  date.setHours(hours, minutes);
  return date;
}
