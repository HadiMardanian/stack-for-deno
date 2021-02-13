import Node from './lib/node';
export default class Stack {
    private first: Node;
    private last: Node;
    private size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    public push(val: any): Stack {
        let newNode = new Node(val);
        if (this.size == 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }
        this.size++;
        return this;
    }
    public pop(): Node {
        if (this.size == 0) {
            return null;
        }
        let oldNode = this.first;;
        
        if (this.size == 1) {
            this.first = null;
            this.last = null;
        } else {
            let next = this.first.next;
            console.log(this.first);
            this.first = next;
        }
        oldNode.next = null;
        this.size--;
        return oldNode;
    }
    public get Size(): number{
        return this.size;
    }
    public get First(): Node{ 
        return this.first;
    }
    public get Last(): Node { 
        return this.last;
    }
}