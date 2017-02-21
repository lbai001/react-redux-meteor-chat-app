export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const FINISHED_LOADING = 'FINISHED_LOADING';

export function loading() {
  return {
    type: LOADING,
  }
}
export function error(err) {
  return {
    type: ERROR,
    err,
  }
}
export function finishedLoading() {
  return {
    type: FINISHED_LOADING,
  }
}