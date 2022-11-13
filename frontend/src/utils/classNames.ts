type ClassNameType = number | string | number[] | string[] | undefined;

// merge multiple className into one className
const classNames = (...classes: ClassNameType[]) => {
  const result: (string | number)[] = [];
  classes.forEach((arg) => {
    if (typeof arg === 'string' || typeof arg === 'number') {
      result.push(arg);
    } else if (Array.isArray(arg)) {
      result.push(...arg);
    }
  });

  return result.join(' ');
};

export default classNames;
