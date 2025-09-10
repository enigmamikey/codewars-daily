function findNextSquare(sq) {
    if (sq**0.5 % 1 != 0) {
        return -1
    }
    else {
        sq++
        while (sq**0.5 % 1 != 0) {
            sq++
        }
        return sq
    }
}