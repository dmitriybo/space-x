import React from 'react'
import { Row } from 'antd'
import styles from './FlightSchedule.module.scss'
import { ScheduleColumn } from './ScheduleColumn'
import { ScheduleColumnEnum } from '../../redux/slices/launchesSlice'
import { spacexApi } from '../../api/spacexApi'
import { Drop } from '../drop'

export const FlightSchedule = () => {
	const { isFetching } = spacexApi.useGetLaunchesQuery(1)

	return (
		<Row className={styles.schedule}>
			<ScheduleColumn
				title="Прошедшие запуски"
				column={ScheduleColumnEnum.Past}
				isFetching={isFetching}
				noDataText="Прошедших запусков нет"
			/>
			<Drop type={ScheduleColumnEnum.Future}>
				<ScheduleColumn
					title="Предстоящие запуски"
					column={ScheduleColumnEnum.Future}
					isFetching={isFetching}
					noDataText="Предстоящих запусков нет"
				/>
			</Drop>
			<Drop type={ScheduleColumnEnum.Reserved}>
				<ScheduleColumn
					title="Забронированные запуски"
					column={ScheduleColumnEnum.Reserved}
					isFetching={isFetching}
					noDataText="Переместите карточку в эту колонку, чтобы&nbsp;забронировать запуск"
				/>
			</Drop>
		</Row>
	)
}
