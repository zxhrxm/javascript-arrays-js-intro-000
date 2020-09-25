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

function destructivelyRemoveElementFromBeginningOfArray(a,e) {

}

function removeElementFromBeginningOfArray(a,e) {

}

function destructivelyRemoveElementFromEndOfArray(a,e) {

}

function removeElementFromEndOfArray(a,e) {

}
