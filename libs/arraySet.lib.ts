export class ArraySet extends Set<any> {
  override add(arr: any): any {
    super.add(arr.toString());
  }
  override has(arr): boolean {
    return super.has(arr.toString());
  }
}
