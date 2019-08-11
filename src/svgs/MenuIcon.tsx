import React from 'react';
import { color } from '../helpers';
import { Icon, IconProps } from './Icon';

/** MenuIcon */
export const MenuIcon: React.SFC<IconProps> = (props) => {
	return (
		<Icon {...props} viewBox='0 0 18 18'>
			<title>menu</title>
			<g fill={color(props.fill)} fillRule='evenodd'>
				<path d='M3 3h12.026v1H3zM3 8.512h12.026V9.5H3zM3 13.996h12.026V15H3z' />
			</g>
		</Icon>
	);
};
