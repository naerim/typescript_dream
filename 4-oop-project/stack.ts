interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

class StackImpl implements Stack {
  private _size: number;
  get size() {
    return this._size;
  }
  push(value: string) {
    this._size++;
  }

  pop(): string {
    this._size--;
  }
}
