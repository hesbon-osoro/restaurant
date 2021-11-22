import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { styles, Section, SectionButton } from '../../utils';
import styled from 'styled-components';

const Contact = () => {
	const [state, handleSubmit] = useForm('myyoggra');
	if (state.succeeded) {
		return <p>Thanks for contacting!</p>;
	}
	return (
		<Section>
			<ContactWrapper>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="wazimu hb"
							required
						/>
						<ValidationError prefix="Name" field="name" errors={state.errors} />
					</div>
					<div>
						<label htmlFor="email">email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="wazimu@gmail.com"
							required
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</div>
					<div>
						<label htmlFor="message">message</label>
						<textarea
							name="message"
							id="message"
							rows="10"
							placeholder="hello"
							required
						></textarea>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>
					</div>
					<div>
						<SectionButton>Submit</SectionButton>
					</div>
				</form>
			</ContactWrapper>
		</Section>
	);
};
export const ContactWrapper = styled.div`
	width: 80vw;
	margin: 0 auto;
	label {
		text-transform: capitalize;
		font-size: 1.2rem;
		display: block;
		margin-bottom: 0.5rem;
	}
	input,
	textarea {
		width: 100%;
		font-size: 1rem;
		margin-bottom: 1rem;
		padding: 0.375rem 0.75rem;
		border: 1px solid ${styles.colors.mainGrey};
		border-radius: 0.25rem;
		@media (min-width: 992px) {
			width: 50vw;
			margin: 0 auto;
		}
	}
`;
export default Contact;
