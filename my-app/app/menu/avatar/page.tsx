import Image from 'next/image';

  export default function AvatarMain() {
     return (
    <div>
    <Image 
    src='/qa.png'
    width={150}
    height={150}
    alt="qa"
    className='rounded-full'
    />
    </div>
     
     )
  }