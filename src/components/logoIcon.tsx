import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/ezpageIcon.svg'

export default function Logo() {
  return (
    <Link  href="/" aria-label="Cruip">
      <Image src={LogoImg} width={20} height={20} priority alt="Ezpage" />
    </Link>
  )
}