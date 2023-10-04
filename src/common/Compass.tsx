import { SVGProps } from 'react';

export const CompassIcon = (props: SVGProps<SVGSVGElement>) => {
    <svg
        xmlns="https://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill='none'
        {...props}
    >
        <path
            fill='currentColor'
            stroke='currentColor'
            d="M16.013 32v-16.017h-16.013l32-15.983-15.987 32z" />
    </svg>
}