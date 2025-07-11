import { FC } from 'react';

interface Props {
  label: string;
  link: string;
}

const NavLink: FC<Props> = ({ label, link }) => {
  return (
    <li>
      <a
        href={link}
        className='inline-block text-base leading-loose text-white/70 underline-offset-2 hover:text-white hover:underline'
      >
        {label}
      </a>
    </li>
  );
};
export default NavLink;
