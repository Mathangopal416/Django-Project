const ReviewSection = ({ reviews }) => (
  <div className="reviews">
    <h3>Ratings & Reviews</h3>
    {reviews.map(review => (
      <div key={review.id} className="review">
        <strong>⭐ {review.rating}</strong>
        <p>{review.comment}</p>
      </div>
    ))}
  </div>
);
export default ReviewSection;
