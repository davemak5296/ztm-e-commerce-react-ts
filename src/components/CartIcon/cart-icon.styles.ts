import clsx from 'clsx';

const div = clsx(
  'relative',
  ['h-11', 'w-11'],
  ['flex', 'justify-center', 'items-center'],
  'cursor-pointer'
);

const span = clsx(['absolute', 'bottom-3'], ['font-bold', 'text-[10px]']);

export default { div, span };
