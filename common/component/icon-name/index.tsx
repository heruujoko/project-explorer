import React from 'react';
import Link from 'next/link';
import css from './index.module.css';

interface IconNameProp {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    link?: string;
    active?: boolean;
}

const IconName: React.FC<IconNameProp> = ({ label, icon, onClick, link, active }) => {
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
            <div className={`${css.link} ${active ? css.active : ''}`}>
                <Link href={link}>{renderIconName()}</Link>
            </div>
        );
    }

    return renderIconName();
};

export default IconName;
