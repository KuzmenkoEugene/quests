import Image from 'next/image'
import twitter_icon from '../assets/icons/twitter.svg'
import youtube_icon from '../assets/icons/youTube.svg'
import instagram_icon from '../assets/icons/instagram.svg'

export default function Footer() {
    return (
        <footer className="fixed pointer-events-none w-[1366px] h-[147px] bottom-0 left-0 bg-footerBackground">
            <div className='flex pointer-events-auto flex-row gap-[19px] w-[97px] h-[20px] ml-[32px] mb-[32px] mt-[95px]'>
                <Image className='cursor-pointer w-[20px] h-[17px]' src={instagram_icon} alt='instagram icon'/>
                <Image className='cursor-pointer w-[20px] h-[17px]' src={twitter_icon} alt='twitter icon'/>
                <Image className='cursor-pointer w-[20px] h-[17px]' src={youtube_icon} alt='youtube icon'/>
            </div>
        </footer>
    )
}