import React from 'react'
import { Layout } from 'antd'
import styles from './Content.module.scss'
import { Container } from '../container'

const { Content: AppContent } = Layout

export const Content: React.FC = ({ children }) => (
	<AppContent className={styles.content}>
		<Container>
			{children}
		</Container>
	</AppContent>
)
