import React from "react";
import ReactStars from "react-rating-stars-component";

const FeedbackCard = () => {
  return (
    <div className="w-full px-4 my-3">
      <div className=" border py-4 px-4 md:px-8">
        <p className="text-[0.75rem] text-gray-500 mb-1">
          December 2, 2022 <span>by maxwell</span>
        </p>

        <ReactStars
          count={5}
          value={5}
          size={13}
          edit={false}
          activeColor="#ffd700"
        />

        <p className="text-[0.8rem] mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel minima
          suscipit, maiores cum eaque ipsum sit dicta voluptate quia, voluptates
          amet dignissimos natus obcaecati, culpa quidem qui corporis iste quis
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
