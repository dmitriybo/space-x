import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../env'
import styles from './Logo.module.scss'

export const Logo = () => (
	<Link to={baseUrl}>
		<div className={styles.logo}/>
	</Link>
)
