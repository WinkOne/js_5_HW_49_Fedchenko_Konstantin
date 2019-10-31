var hash = ''
var size = 8

for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        (i + j) % 2 ? hash += '[#]': hash += '[ ]'
    }
    hash += '\n'
}
console.log(hash)