export default class Stack{
    private array: Array<any>;
    private topIndex: number;
    
    public constructor(){
        this.array = [];
        this.topIndex = -1;
    }

    public size() {
        return this.topIndex + 1;
    }

    public push(x: any): Stack{
        this.array[++this.topIndex] = x;
        return this;
    }

    public pop(): any{
        this.array.splice(this.topIndex, 1);
        return this.array[this.topIndex--];
    }
    
    public toString(): string{
        return `[${this.array.toString()}]`;
    }

    public isEmpty(): Boolean{
        return this.topIndex == -1;
    }

    public clear(){
        this.topIndex = -1;
    }
    
}