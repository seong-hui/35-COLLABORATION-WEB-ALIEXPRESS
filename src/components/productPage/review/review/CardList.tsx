import { Review } from '@apis/productPage/review/getReview';
import useReviewQueries from '@apis/productPage/review/reviewQueries';
import Card from '@components/productPage/review/review/Card';
import { reviewContainer, reviewLayout } from '@components/productPage/review/review/CardListStyle';

interface CardListProps {
	activeTab: string;
	isOriginal: boolean;
	productId: number;
}

const CardList = ({ activeTab, isOriginal, productId }: CardListProps) => {
	const { data, isError } = useReviewQueries({ productId });

	if (isError) {
		console.error(isError);
	}

	// 데이터가 없을 경우
	const goodReviews = data?.data?.goodReviews || [];
	const badReviews = data?.data?.badReviews || [];

	return (
		<div css={reviewContainer}>
			{/* 긍정 리뷰 */}
			{activeTab !== 'negative' && (
				<div css={reviewLayout(activeTab)}>
					{goodReviews.map((review: Review) => (
						<Card key={review.reviewId} review={review} isOriginal={isOriginal} />
					))}
				</div>
			)}

			{/* 비판 리뷰 */}
			{activeTab !== 'positive' && (
				<div css={reviewLayout(activeTab)}>
					{badReviews.map((review: Review) => (
						<Card key={review.reviewId} review={review} isOriginal={isOriginal} />
					))}
				</div>
			)}
		</div>
	);
};

export default CardList;
