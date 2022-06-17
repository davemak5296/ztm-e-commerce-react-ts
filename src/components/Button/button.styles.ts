import clsx from 'clsx';

const baseStyle = clsx(
  ['flex', 'justify-center'],
  ['h-[50px]', 'w-auto', 'min-w-[165px]'],
  'px-9',
  'leading-[50px]',
  ['text-xs', 'font-bold'],
  'cursor-pointer',
  'uppercase'
);

const vanilla = clsx(baseStyle, 'bg-black', 'text-white', [
  'hover:bg-white',
  'hover:text-black',
  'hover:border',
  'hover:border-black',
]);

const google = clsx(baseStyle, 'bg-[#4285f4]', 'text-white', [
  'hover:bg-[#357ae8]',
  'hover:text-white',
]);

const inverted = clsx(
  baseStyle,
  'bg-white',
  'text-black',
  ['border', 'border-black'],
  ['hover:bg-black', 'hover:text-white', 'hover:border-0']
);

export default { vanilla, google, inverted };
