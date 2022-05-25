import * as Notifications from "../elements/notifications";

let isOffline = false;

export function setToTrue(): void {
  Notifications.addBanner("You are offline", 0, "exclamation-triangle");
  isOffline = true;
}

export default function get(notify = true): boolean {
  if (isOffline) {
    if (notify) Notifications.add("You are offline", 0);
  }
  return isOffline;
}
