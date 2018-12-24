class Node {
    constructor(val=null) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class DequeIterator {
    constructor(start) {
        this.end = start;
        this.startPtr = this.end.right;
    }

    nextElement() {
        if (!this.hasNextElement()) {
            return null;
        }
        let grabbed = this.startPtr.val;
        this.startPtr = this.startPtr.right;
        return grabbed;
    }

    hasNextElement() {
        return this.startPtr != this.end;
    }
}


class CircularDeque {
    constructor() {
        this.size = 0;
        this.start = new Node();
        this.start.right = this.start;
        this.start.left = this.start;
    }

    insertBetween(lhs, rhs, target) {
        target.left = lhs;
        target.right = rhs;
        rhs.left = target;
        lhs.right = target;
        this.size++;
    }
    
    pushBack(val) {
        this.insertBetween(this.start, this.start.right, new Node(val));
    }

    pushFront(val) {
        this.insertBetween(this.start.left, this.start, new Node(val));
    }

    front() {
        return this.start.left.val;
    }

    back() {
        return this.start.right.val;
    }

    empty() {
        return this.size == 0;
    }

    numElements() {
        return this.size;
    }

    popBack() {
        if (this.empty()) return false;
        this.start.right = this.start.right.right;
        this.start.right.left = this.start;
        this.size--;
        return true;
    }

    popFront() {
        if (this.empty()) return false;
        this.start.left = this.start.left.left;
        this.start.left.right = this.start;
        this.size--;
        return true;
    }

    getIterator() {
        return new DequeIterator(this.start);
    }
}
