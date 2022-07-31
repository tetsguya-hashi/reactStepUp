

export const aaa = () => {
  let bool: boolean = true;
  let num: number = 0;
  let str: string = 'a';
  let arr: Array<number> = [0, 1, 2];//下と同じ
  let arr2: number[] = [0, 1, 2];
  let tuple: [number, string] = [0, 'a'];
  let any1: any = false;//何でもいい
  const funcA = (): void => {
    const test = 'TEST';
  }
  let null1: null = null;
  let undefined1: undefined = undefined;

  let obj1: object = {};
  let obj2: { id: number, name: string } = { id: 0, name: 'AAA' }
}