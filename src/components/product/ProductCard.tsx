import { IcArrowrightGray12 } from '@assets/icons';

import FreeTag from './FreeTag';
import {
	couponBtnStyle,
	imageContainer,
	imageStyle,
	priceContainer,
	productContainer,
	productDiscountStyle,
	productInfoContainer,
	productInfoWrapper,
	productNameStyle,
	productPriceStyle,
	productWonStyle,
	productWrapper,
	tagContainer,
} from './ProductCardStyle';
import StarBtn from '@components/button/starBtn/StarBtn';

interface ProductProps {
	image: string;
	name: string;
	price: number;
	discountRate: number;
	hasCoupon?: boolean;
	rating: number;
	reviewCount: number;
	width?: string;
	hoverLarge?: boolean;
}

const ProductCard = ({
	image,
	name,
	price,
	discountRate,
	hasCoupon = false,
	rating,
	reviewCount,
	width = '20.2rem',
	hoverLarge = true,
}: ProductProps) => (
	<article css={(theme) => productContainer(theme, width, hoverLarge)}>
		<div css={productWrapper}>
			<div css={imageContainer(width)}>
				<img css={imageStyle} src={image} alt={name} />
			</div>
			<div css={productInfoContainer(width, hoverLarge)}>
				<div css={productInfoWrapper}>
					<span css={productNameStyle}>{name}</span>
					<StarBtn rating={rating} reviewCount={reviewCount} isRatingVisible={false} />
					<div css={priceContainer}>
						<span css={productWonStyle}>₩</span>
						<span css={productPriceStyle}>{price.toLocaleString()}</span>
						<span css={productDiscountStyle}>{discountRate}%</span>
					</div>
				</div>
				<ul css={tagContainer}>
					<li>
						<FreeTag text="무료 배송" color="red" />
					</li>
					<li>
						<FreeTag text="무료 반품" color="gray" />
					</li>
				</ul>
			</div>
			{hasCoupon && (
                <div css={(theme) => couponBtnStyle(theme, hoverLarge)}>
                    <button>
                        쿠폰 받기
                        <IcArrowrightGray12 />
                    </button>
                </div>
			)}
		</div>
	</article>
);

export default ProductCard;
