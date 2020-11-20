class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in

    def index
        # find all reviews associated with a specific user
        @reviews = Review.includes(:taggables, :tags, :reviewer).where(user_id: params[:user_id])
        @tags = Tag.all
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy
    end

    private
    def review_params 
        params.require(:review).permit(
            :activity_date, 
            :rating, 
            :review, 
            :user_id, 
            :trail_id, 
            tag_ids: []
        )
    end
end
