import { IcHamburgermenuBlack16, ImgVector7192 } from '@assets/icons/index';
import CategoryItemBtn from '@components/button/categoryItemBtn/CategoryItemBtn';
import {
	CategoryLayout,
	CategoryContainerStyle,
	TitleStyle,
	ScrollStyle,
} from '@components/header/productHeader/CategoryStyle';
import { CATEGORIES_EMOJI, CATEGORY_LABELS } from '@constants/categoryList';

const Category = () => (
	<div css={CategoryLayout}>
		<ImgVector7192 />
		<div css={CategoryContainerStyle}>
			<div css={TitleStyle}>
				<IcHamburgermenuBlack16 />
				<p>모든 카테고리</p>
			</div>
			<div css={ScrollStyle}>
				{CATEGORY_LABELS.map((label, index) => {
					const IconComponent = CATEGORIES_EMOJI[index];
					return <CategoryItemBtn key={label} btnText={label} size="medium" icon={<IconComponent />} />;
				})}
			</div>
		</div>
	</div>
);

export default Category;