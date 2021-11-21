import React, { Component } from 'react';
import { Section, Title,SectionButton } from '../../utils';

export default class QuickInfo extends Component {
	render() {
		return (
			<Section>
				<Title message="let us tell you" title="our mission" />
				<SectionButton style={{margin:'2rem auto'}}>about</SectionButton>
			</Section>
		);
	}
}
