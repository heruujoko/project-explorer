import React from 'react';
import Link from 'next/link';
import css from './index.module.css';
import { link } from 'fs';

interface IconNameProp {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    link?: string;
}

const IconName: React.FC<IconNameProp> = ({ label, icon, onClick, link }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const renderIconName = () => (
        <div className={css.wrapper} onClick={handleClick}>
            {icon}
            <span>{label}</span>
        </div>
    );

    if (link) {
        return (
            <div className={css.link}>
                <Link href={link}>{renderIconName()}</Link>
            </div>
        );
    }

    return renderIconName();
};

export default IconName;
