import clsx from 'clsx';

const div = clsx(
  'group',
  ['h-60', 'min-w-[30%]'],
  ['m-0', 'mx-[7.5px]', 'mb-[15px]', 'first:mr-[7.5px]', 'last:ml-[7.5px]'],
  ['flex', 'flex-col', 'flex-auto', 'items-center', 'justify-center'],
  ['border', 'border-solid', 'border-black'],
  'hover:cursor-pointer',
  'overflow-hidden'
);

const bgImg = clsx(
  ['h-full', 'w-full'],
  ['bg-cover', 'bg-center'],
  'transform',
  'group-hover:scale-110',
  'group-hover:transition-transform',
  'group-hover:duration-[6000ms]',
  'group-hover:ease-[cubic-bezier(0.25,0.45,0.45,0.95)]'
);

const textBox = clsx(
  'absolute',
  'h-24',
  ['py-0', 'px-6'],
  ['border', 'border-solid', 'border-black'],
  ['flex', 'flex-col', 'items-center', 'justify-center'],
  'bg-white',
  ['opacity-70', 'group-hover:opacity-90']
);

export default { div, bgImg, textBox };
