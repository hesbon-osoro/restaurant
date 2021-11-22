import React, { Component } from 'react';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { styles } from '../../utils/';
import { Link } from 'gatsby';
export default class QuickInfo extends Component {
	render() {
		return (
			<Section>
				<Title message="let us tell you" title="our mission" />
				<QuickInfoWrapper>
					<p className="text">
						Our mission is to serve you authetic dishes from north karnataka.
						these dishes are created by our top chefs, from the region. Some of
						our awesome dishes are - Menther kadabu, Pundi Soppu, Jolad Rotti,
						Rogi Ambali, Nargis Man Dak ki, Mudde, Girmit and many more.
					</p>
				</QuickInfoWrapper>
				<Link to="/about/" style={{ textDecoration: 'none' }}>
					<SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
				</Link>
			</Section>
		);
	}
}
const QuickInfoWrapper = styled.div`
	width: 90%;
	margin: 2rem auto;
	.text {
		line-height: 2em;
		color: ${styles.colors.mainGrey};
		word-spacing: 0.2rem;
	}
	@media (min-width: 768px) {
		width: 70%;
	}
	@media (min-width: 992px) {
		width: 60%;
	}
`;
