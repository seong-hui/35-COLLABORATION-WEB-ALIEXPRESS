import { Theme, css } from '@emotion/react';

// 공통 FlexStyle
const CommonFlexStyle = css`
	display: flex;
	gap: 0.3rem;
	align-items: center;
	justify-content: center;

	white-space: nowrap;
`;

// 한글 및 아이콘 FlexStyle
export const FlexStyle = (theme: Theme) => css`
	${CommonFlexStyle};
	${theme.fonts.kor.captionMedium12};
`;

// 영문 FlexStyle
export const CountStyle = (theme: Theme) => css`
	${CommonFlexStyle};
	${theme.fonts.eng.captionMedium12};
`;

// 공통 버튼 스타일
const CommonBtnContainerStyle = css`
	display: flex;
	box-sizing: border-box;
	width: auto;
	min-width: 9.2rem;
	height: 2.4rem;
	padding: 0.4rem 0.8rem;

	border-radius: 4px;
`;

//버튼 클릭이 됐을때 스타일
export const ClickedBtnContainerStyle = (theme: Theme) => css`
	${CommonBtnContainerStyle};
	color: ${theme.colors.notificationPrimary};

	background-color: ${theme.colors.notificationBg};
	border: 1px solid ${theme.colors.notificationSecondary};

	&:hover {
		background-color: ${theme.colors.notificationSecondary};
	}
`;

// 버튼 클릭이 안됐을때 스타일
export const NonClickedBtnContainerStyle = (theme: Theme) => css`
	${CommonBtnContainerStyle};
	color: ${theme.colors.gray9};

	background-color: ${theme.colors.gray2};
	border: none;

	&:hover {
		background-color: ${theme.colors.gray3};
	}
`;

export const BtnStyleMap = {
	true: ClickedBtnContainerStyle,
	false: NonClickedBtnContainerStyle,
};