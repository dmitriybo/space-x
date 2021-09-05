import React from 'react'
import styles from './Scroll.module.scss'

export const Scroll: React.FC = ({ children }) => (
	<div className={styles.scroll}>
		{children}
	</div>
)
