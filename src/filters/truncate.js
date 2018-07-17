export default (value) => {
  var size = 75
  var str = ''
  if (value.length < size) {
    return value
  }
  str = value.slice(0, 75)
  str += '...'
  return str
}
