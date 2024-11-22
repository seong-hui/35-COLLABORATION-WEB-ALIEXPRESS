import {
	IcMapBlackStorke18,
	IcDeliveryBlack20,
	IcArrowrightSBlack24,
	IcShieldBlack20,
	IcCountdownGray18,
	IcCountupGray18,
} from '@assets/icons';
import {
	dividerStyle,
	orderBoxContinerStyle,
	orderInfoLayoutStyle,
	orderTitleWrapperStyle,
	korTitleStyle,
	adressStyle,
	orderInfoLayouttyle,
	freeOrderInfoWrapperStyle,
	flexBoxStyle,
	arrivalDateWrapperStyle,
	arriveTitleStyle,
	engTitleStyle,
	descriptionBoxStyle,
	privacyInfoLayoutStyle,
	privacyTitleBoxStyle,
	orderButtonsLayoutStyle,
	countButtonsStyle,
	iconWrapperStyle,
	engCaptionBoldStyle,
	orderBtnWrapperStyle,
	emojiBtnWrapperStyle,
} from '@components/orderBox/OrderboxStyle';
import TextBtn from '@components/button/textBtn/TextBtn';
import EmojiBtn from '@components/button/emojiBtn/EmojiBtn';
import LikeBtn from '@components/button/likeBtn/LikeBtn';

const OrderBox = () => (
	<article css={orderBoxContinerStyle}>
		<section css={orderInfoLayoutStyle}>
			<div css={orderTitleWrapperStyle}>
				<span css={korTitleStyle}>배송지:</span>
				<span css={adressStyle}>
					<IcMapBlackStorke18 />
					<span>Gangnam-gu, Seoul, Korea</span>
				</span>
			</div>
			<div css={dividerStyle} />
			<div css={orderInfoLayouttyle}>
				<div>
					<div css={freeOrderInfoWrapperStyle}>
						<div css={flexBoxStyle}>
							<IcDeliveryBlack20 />
							<span css={korTitleStyle}>무료 배송</span>
							{/* 영경이가 만든 무료 반품 버튼 넣기 */}
						</div>
						<IcArrowrightSBlack24 />
					</div>
					<div css={arrivalDateWrapperStyle}>
						<span css={arriveTitleStyle}>도착일:</span>
						<span css={engTitleStyle}>11 월 19 일-26 일</span>
					</div>
				</div>
				<div css={privacyInfoLayoutStyle}>
					<div css={privacyTitleBoxStyle}>
						<IcShieldBlack20 />
						<span css={korTitleStyle}>개인 정보 보호</span>
					</div>
					<div css={descriptionBoxStyle}>
						<div>안심 결제: 카드 정보는 안전하게 보호되며 유출되지 않습니다.</div>
						<div>개인정보 보호: 개인정보 보안을 최우선으로 생각합니다.</div>
					</div>
				</div>
			</div>
		</section>
		<div css={dividerStyle} />
		<section css={orderButtonsLayoutStyle}>
			<div css={korTitleStyle}>수량</div>
			<div css={countButtonsStyle}>
				<div css={iconWrapperStyle}>
					<IcCountdownGray18 />
				</div>
				<p css={engCaptionBoldStyle}>1</p>
				<div css={iconWrapperStyle}>
					<IcCountupGray18 />
				</div>
			</div>
			<section css={orderBtnWrapperStyle}>
				<TextBtn btnText="바로 구매" color="red" size="large" />
				<TextBtn btnText="장바구니 담기" color="black" size="large" />
				<div css={emojiBtnWrapperStyle}>
					<EmojiBtn type="seller" />
					<EmojiBtn type="share" />
					<LikeBtn />
				</div>
			</section>
		</section>
	</article>
);

export default OrderBox;
