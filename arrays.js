var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a,e) {
  var b = [e, ...a]
  return b
}

function destructivelyAddElementToBeginningOfArray(a,e) {
  a.unshift(e)
  return a
}

function addElementToEndOfArray(a,e) {
  var b = [...a, e]
  return b
}

function destructivelyAddElementToEndOfArray(a,e) {
  a.push(e)
  return a
}

function accessElementInArray(a,n) {
  return a[n]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  b = a.shift()
  return b
}

function removeElementFromBeginningOfArray(a) {
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a) {
  b = a.slice(0,a.length-1)
  return b
}

function removeElementFromEndOfArray(a) {
  return a.slice(0,a.length-1)
}
