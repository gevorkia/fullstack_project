class Api::ReviewsController < ApplicationController



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
