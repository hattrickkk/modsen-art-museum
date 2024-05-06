import React, { memo } from 'react'

const PaginationArrow = ({ isBack }: { isBack?: boolean }) => {
    return isBack ? (
        <svg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.49161 1.3992L8.09241 0L0.568935 7.52347L1.02675 7.98129L1.00403 8.00401L8.00003 15L9.50473 13.4953L3.45011 7.4407L9.49161 1.3992Z'
                fill='#393939'
            />
        </svg>
    ) : (
        <svg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.6008 13.6008L2 15L9.52347 7.47653L9.06565 7.01871L9.08837 6.99599L2.09237 -6.4447e-06L0.587679 1.50469L6.6423 7.5593L0.6008 13.6008Z'
                fill='#393939'
            />
        </svg>
    )
}

export default memo(PaginationArrow)
