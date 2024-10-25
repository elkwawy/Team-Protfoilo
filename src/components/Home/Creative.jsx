import { useTranslation } from 'react-i18next';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import i18n from '../../Languages/i18n';
import LazyImage from '../../utils/LazyImage';
import LoadingSpinner from '../../utils/LoadingSpinner';

const Creative = () => {
    const {t} = useTranslation();
    const prefix = {ar: "دوت كود", en :"Dot Code"};
    return (
        <div className='containerD flex flex-col-reverse gap-10 md:gap-0 md:flex-row items-center justify-between'>
            <div className='flex flex-col text-center items-center  md:items-start md:text-start gap-6 sm:gap-10'>
                <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl'>{t('creativeHomeSectionTitle')}</h1>
                <p className='text-gray-500 lg:text-lg lg:w-10/12'>{t('creativeHomeSectionText')} <span className=' text-main-color font-bold'>{i18n.language == 'ar' ? prefix.ar : prefix.en}</span>!</p>
                <Link to={'/aboutUs'} className='rounded-md bg-main-color w-fit hover:bg-hover-main-color px-5 trans py-1 text-white flex items-center gap-2'>
                    {t('creativeHomeSectionLink')}
                    <MdArrowForward className={`text-lg ${i18n.language == 'ar' ? "rotate-180" : "rotate-0"} mt-1 sm:mt-1.5`} />
                </Link>
            </div>
            <LazyImage src={'/assets/images/home/creative.webp'} className='w-64 min-[450px]:w-80 lg:w-96' loader={<div className='w-64 min-[450px]:w-80 lg:w-96 h-full flex items-center justify-center'><LoadingSpinner /></div>} />
        </div>
    )
}

export default Creative