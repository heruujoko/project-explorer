import React from 'react';
import Image from 'next/image';
import css from './index.module.css';

const Header: React.FC = () => {
    return (
        <div className={css.navHeader}>
            <Image
                alt="logo"
                className={css.image}
                width={50}
                height={50}
                src="https://common-dev.henskristal.id/HK0.jpeg"
            />
        </div>
    );
};

export default Header;
