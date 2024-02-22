// 联合类型
// 类型约束

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
