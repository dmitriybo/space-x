import React from 'react'
import { Title } from '../components/title'
import { FlightSchedule } from '../components/flightSchedule'
import { DraggableLayout } from '../layouts/draggableLayout'

export const Index: React.FC = () => (
	<DraggableLayout>
		<Title title="Расписание полетов"/>
		<FlightSchedule/>
	</DraggableLayout>
)
