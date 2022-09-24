class ArraySet extends Set<any> {
  add(arr: any): any {
    super.add(arr.toString());
  }
  has(arr): boolean {
    return super.has(arr.toString());
  }
}
