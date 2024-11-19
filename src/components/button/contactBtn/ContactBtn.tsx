import IcMessageBlack24 from '../../../assets/icons/ic_message_black_24.svg';

import { flexStyle, buttonStyle, fontStyle } from './ContactBtnStyle';

const ContactBtn = () => (
	<button type="button" css={[flexStyle, buttonStyle]}>
		<div css={flexStyle}>
			<IcMessageBlack24 css={fontStyle} />
			<p css={fontStyle}>문의하기</p>
		</div>
	</button>
);

export default ContactBtn;