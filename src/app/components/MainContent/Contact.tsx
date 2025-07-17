import { FC } from 'react';
import { ContactStoryblok } from '../../../../component-types-sb';
import Button from '../Button';

interface Props {
  blok: ContactStoryblok;
  mainColor: string;
  darkTheme: boolean;
}

const Contact: FC<Props> = ({ blok, mainColor, darkTheme }) => {
  const { title, description, phone, email, address, form } = blok;

  return (
    <section className='relative z-10 overflow-hidden py-16'>
      <div className='container justify-self-center px-4 md:px-0'>
        <div className='-mx-4 flex flex-wrap items-center'>
          <div className='w-full px-4 lg:w-1/2 xl:w-5/12'>
            <div>
              <div className='mb-12 w-full max-w-[435px]'>
                <h2 className='mb-5 text-4xl font-bold !leading-[1.2] sm:text-5xl md:text-[60px] lg:text-5xl xl:text-[60px]'>
                  {title}
                </h2>
                <p className='text-lg font-medium text-body-color dark:text-dark-6'>
                  {description}
                </p>
              </div>
              <div className='mb-6'>
                <p className='text-base text-body-color dark:text-dark-6'>
                  Phone
                </p>
                <p className='text-base font-medium'>{phone}</p>
              </div>
              <div className='mb-6'>
                <p className='text-base text-body-color dark:text-dark-6'>
                  Email
                </p>
                <p className='text-base font-medium'>{email}</p>
              </div>
              <div className='mb-6'>
                <p className='text-base text-body-color dark:text-dark-6'>
                  Office
                </p>
                <p className='text-base font-medium'>{address}</p>
              </div>
            </div>
          </div>

          <div className='w-full px-4 lg:w-1/2 xl:w-7/12'>
            <div
              className={`rounded-[20px] ${
                darkTheme ? 'bg-gray-700' : 'bg-white'
              } p-8 shadow-xl sm:p-[52px] lg:p-8 xl:ml-16 xl:p-[52px]`}
            >
              <h3 className='mb-3 text-3xl font-bold'>{form[0].title}</h3>
              <p className='mb-10 text-lg'>{form[0].description}</p>

              <div className='-mx-4 flex flex-wrap'>
                {form[0].input?.map(({ type, label, placeholder }, index) => {
                  if (type === 'classic') {
                    return (
                      <div key={index} className='w-full px-4'>
                        <div className='mb-6'>
                          <label className='mb-2.5 block text-base font-medium'>
                            {label}
                          </label>
                          <input
                            type='text'
                            placeholder={placeholder}
                            className={`w-full rounded-lg border bg-transparent px-5 py-3 placeholder-opacity-50 outline-none duration-200 focus:border-${mainColor}`}
                          />
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className='w-full px-4'>
                        <div className='mb-6'>
                          <label className='mb-2.5 block text-base font-medium'>
                            {label}
                          </label>
                          <textarea
                            rows={6}
                            placeholder={placeholder}
                            className={`w-full rounded-lg border bg-transparent p-5 placeholder-dark-5 outline-none duration-200 focus:border-${mainColor}`}
                          ></textarea>
                        </div>
                      </div>
                    );
                  }
                })}

                <div className='w-full px-4'>
                  <Button
                    color={mainColor}
                    darkTheme={darkTheme}
                    className='flex w-full'
                  >
                    {form[0].buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- graphics --> */}
      <div className='absolute bottom-0 left-0 -z-10'>
        <img
          src='https://cdn.tailgrids.com/assets/images/application/contacts/contact-13/shape-1.svg'
          alt='shape-1'
        />
      </div>

      <div className='absolute right-0 top-0 -z-10'>
        <img
          src='https://cdn.tailgrids.com/assets/images/application/contacts/contact-13/shape-2.svg'
          alt='shape-2'
        />
      </div>

      <div className='absolute right-0 top-0 -z-10 max-lg:hidden dark:opacity-40'>
        <img
          src='https://cdn.tailgrids.com/assets/images/application/contacts/contact-13/line-1.svg'
          alt='line-1'
        />
      </div>

      <div className='absolute right-0 top-0 -z-10 max-lg:hidden dark:opacity-40'>
        <img
          src='https://cdn.tailgrids.com/assets/images/application/contacts/contact-13/line-2.svg'
          alt='line-2'
        />
      </div>
    </section>
  );
};
export default Contact;
