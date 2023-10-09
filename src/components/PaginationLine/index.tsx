import React from 'react';
import cn from 'classnames';
import styles from './PaginationLine.module.scss';

type PaginationLineProps = {
    isActive?: boolean;
};

const PaginationLine: React.FC<PaginationLineProps> = ({ isActive }) => {
    return (
        <div className={cn(styles.paginationLine, {
            [styles.paginationLine__isActive]: isActive
        })}>
        </div>
    );
};

export default PaginationLine;
