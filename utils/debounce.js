export default function debounce (func, wait, context) {
  let timeoutId
  return !wait
    ? func
    : (...params) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          timeoutId = null
          func.apply(context, params)
        }, wait)
      }
}
