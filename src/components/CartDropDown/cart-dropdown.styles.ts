import clsx from 'clsx';

const wrapperDiv = clsx(
  ['absolute', 'top-[90px]', 'right-[40px]'],
  'w-60',
  'p-5',
  ['flex', 'flex-col'],
  'bg-white',
  ['border', 'border-solid', 'border-black'],
  'z-[1]'
);
const div = clsx('h-[240px]', ['flex', 'flex-col'], 'bg-white', 'overflow-y-scroll');

export default {
  wrapperDiv,
  div,
};
