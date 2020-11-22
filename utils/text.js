export function normalize (text, accentInsensitive) {
  return accentInsensitive
    ? text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
    : text.toLowerCase()
}

export function equalInsensitive (a, b, accentInsensitive = false) {
  return normalize(a, accentInsensitive) === normalize(b, accentInsensitive)
}

export function commonStartLength (
  text1,
  text2,
  maxLength,
  accentInsensitive = false
) {
  const length = Math.min(text1.length, text2.length, maxLength)
  for (let index = 0; index < length; index += 1) {
    if (!equalInsensitive(text1[index], text2[index])) {
      return index
    }
  }
  return length
}

export function startsWith (text, start, accentInsensitive = false) {
  return (
    !!text &&
      normalize(text, accentInsensitive).startsWith(
        normalize(start, accentInsensitive)
      )
  )
}
