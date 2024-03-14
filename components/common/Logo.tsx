import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from '../../hooks/useWindowSize';

const IMG_RATIO = 13;
export const Logo = () => {
    const { width } = useWindowSize();

    if (!width) {
        return null;
    }
    const imgSize = width / IMG_RATIO;
    return (
        <div id="logo">
            <Link href="/">
                <Image
                    priority
                    src={'/assets/team_logo.png'}
                    alt="Team logo"
                    width={imgSize}
                    height={imgSize}
                />
            </Link>
        </div>
    );
};
