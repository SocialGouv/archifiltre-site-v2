import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from '../../hooks/useWindowSize';

const IMG_RATIO = 13;
export const Logo: React.FC = () => {
    const { width } = useWindowSize();

    if (!width) {
        return null;
    }
    const imgSize = width / IMG_RATIO;
    return (
        <div id="logo">
            <Link href="/">
                <a>
                    <Image
                        priority
                        src={'/assets/team_logo.png'}
                        alt="Team logo"
                        width={imgSize}
                        height={imgSize}
                    />
                </a>
            </Link>
        </div>
    );
};
