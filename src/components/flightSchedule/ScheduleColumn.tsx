import React from 'react'
import { Col, Skeleton } from 'antd'
import styles from './FlightSchedule.module.scss'
import clsx from 'clsx'
import { ScheduleColumnEnum } from '../../redux/slices/launchesSlice'
import { useAppSelector } from '../../redux/configureStore'
import { LaunchCard } from '../launchCard'
import { Scroll } from '../scroll'

interface ScheduleColumnProps {
	title: string
	column: ScheduleColumnEnum
	isFetching?: boolean
	className?: string
	noDataText?: string
}

export const ScheduleColumn = React.forwardRef<HTMLDivElement, ScheduleColumnProps>(
	(
		{
			title,
			column,
			isFetching = false,
			className,
			noDataText,
		},
		ref
	) => {
		const launches = useAppSelector(state => state.launches[column])

		return (
			<Col span={8} className={clsx(styles.schedule__column, className)} ref={ref}>
				<h3>{title}</h3>
				<Scroll>
					{isFetching
						? <Skeleton avatar active={true} paragraph={{ rows: 10 }} />
						: (
								<>
									{!!launches.length
										? launches.map(launch => (
											<LaunchCard key={launch.id} launch={launch} column={column}/>
										))
										: <span className="gray">{noDataText}</span>
									}
								</>
							)
					}
				</Scroll>
			</Col>
		)
	})

ScheduleColumn.displayName = 'ScheduleColumn'
