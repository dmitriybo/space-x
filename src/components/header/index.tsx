import React from 'react'
import { Layout } from 'antd'
import styles from './Header.module.scss'
import { Container } from '../container'

const { Header: AppHeader } = Layout

export const Header: React.FC = ({ children }) => (
	<AppHeader className={styles.header}>
		<Container>
			{children}
		</Container>
	</AppHeader>
)
