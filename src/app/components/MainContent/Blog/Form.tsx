import { FC } from 'react';

interface Props {
  subtitle?: string;
  title: string;
  metaText?: string;
  placeholder?: string;
  buttonText?: string;
  color: string;
}

const Form: FC<Props> = ({
  subtitle,
  title,
  metaText,
  placeholder,
  buttonText,
  color,
}) => {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
      <div
        style={{ backgroundColor: color }}
        className='relative mx-auto mb-10 max-w-[370px] overflow-hidden rounded px-11 py-[60px] text-center lg:px-8'
      >
        <h3 className='mb-2 text-2xl font-semibold'>{subtitle}</h3>
        <p className='mb-8 text-base'>{title}</p>
        <form>
          <input
            type='email'
            placeholder={placeholder}
            className='mb-4 w-full rounded border border-transparent bg-white/20 p-3 text-center text-sm font-medium placeholder-white placeholder-opacity-60 outline-none focus:border-white focus-visible:shadow-none'
          />
          <input
            type='submit'
            value={buttonText}
            className='mb-6 w-full cursor-pointer rounded bg-[#13C296] p-3 text-center text-sm font-medium transition hover:bg-opacity-90'
          />
        </form>
        <p className='text-sm font-medium'>{metaText}</p>
        <div>
          <span className='absolute right-0 top-0'>
            <svg
              width='46'
              height='46'
              viewBox='0 0 46 46'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='1.39737'
                cy='44.6026'
                r='1.39737'
                transform='rotate(-90 1.39737 44.6026)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='1.39737'
                cy='7.9913'
                r='1.39737'
                transform='rotate(-90 1.39737 7.9913)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='13.6943'
                cy='44.6026'
                r='1.39737'
                transform='rotate(-90 13.6943 44.6026)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='13.6943'
                cy='7.9913'
                r='1.39737'
                transform='rotate(-90 13.6943 7.9913)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='25.9911'
                cy='44.6026'
                r='1.39737'
                transform='rotate(-90 25.9911 44.6026)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='25.9911'
                cy='7.9913'
                r='1.39737'
                transform='rotate(-90 25.9911 7.9913)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='38.288'
                cy='44.6026'
                r='1.39737'
                transform='rotate(-90 38.288 44.6026)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='38.288'
                cy='7.9913'
                r='1.39737'
                transform='rotate(-90 38.288 7.9913)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='1.39737'
                cy='32.3058'
                r='1.39737'
                transform='rotate(-90 1.39737 32.3058)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='13.6943'
                cy='32.3058'
                r='1.39737'
                transform='rotate(-90 13.6943 32.3058)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='25.9911'
                cy='32.3058'
                r='1.39737'
                transform='rotate(-90 25.9911 32.3058)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='38.288'
                cy='32.3058'
                r='1.39737'
                transform='rotate(-90 38.288 32.3058)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='1.39737'
                cy='20.0086'
                r='1.39737'
                transform='rotate(-90 1.39737 20.0086)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='13.6943'
                cy='20.0086'
                r='1.39737'
                transform='rotate(-90 13.6943 20.0086)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='25.9911'
                cy='20.0086'
                r='1.39737'
                transform='rotate(-90 25.9911 20.0086)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='38.288'
                cy='20.0086'
                r='1.39737'
                transform='rotate(-90 38.288 20.0086)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
            </svg>
          </span>
          <span className='absolute bottom-0 left-0'>
            <svg
              width='46'
              height='46'
              viewBox='0 0 46 46'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='1.39737'
                cy='44.6026'
                r='1.39737'
                transform='rotate(-90 1.39737 44.6026)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='1.39737'
                cy='7.9913'
                r='1.39737'
                transform='rotate(-90 1.39737 7.9913)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='13.6943'
                cy='44.6026'
                r='1.39737'
                transform='rotate(-90 13.6943 44.6026)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='13.6943'
                cy='7.9913'
                r='1.39737'
                transform='rotate(-90 13.6943 7.9913)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='25.9911'
                cy='44.6026'
                r='1.39737'
                transform='rotate(-90 25.9911 44.6026)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='25.9911'
                cy='7.9913'
                r='1.39737'
                transform='rotate(-90 25.9911 7.9913)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='38.288'
                cy='44.6026'
                r='1.39737'
                transform='rotate(-90 38.288 44.6026)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='38.288'
                cy='7.9913'
                r='1.39737'
                transform='rotate(-90 38.288 7.9913)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='1.39737'
                cy='32.3058'
                r='1.39737'
                transform='rotate(-90 1.39737 32.3058)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='13.6943'
                cy='32.3058'
                r='1.39737'
                transform='rotate(-90 13.6943 32.3058)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='25.9911'
                cy='32.3058'
                r='1.39737'
                transform='rotate(-90 25.9911 32.3058)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='38.288'
                cy='32.3058'
                r='1.39737'
                transform='rotate(-90 38.288 32.3058)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='1.39737'
                cy='20.0086'
                r='1.39737'
                transform='rotate(-90 1.39737 20.0086)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='13.6943'
                cy='20.0086'
                r='1.39737'
                transform='rotate(-90 13.6943 20.0086)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='25.9911'
                cy='20.0086'
                r='1.39737'
                transform='rotate(-90 25.9911 20.0086)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
              <circle
                cx='38.288'
                cy='20.0086'
                r='1.39737'
                transform='rotate(-90 38.288 20.0086)'
                fill='white'
                fillOpacity='0.44'
              ></circle>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Form;
