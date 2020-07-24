export function hourRequest(hour) {
  return {
    type: '@schedule/HOUR_CHOICE',
    payload: { hour },
  };
}

export function durationRequest(duration) {
  return {
    type: '@schedule/DURATION_CHOICE',
    payload: { duration },
  };
}

export function orderRequest(professional_id, schedule, duration) {
  return {
    type: '@schedule/ORDER_REQUEST',
    payload: { professional_id, schedule, duration },
  };
}
