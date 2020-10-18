class Api::TrailsController < ApplicationController

    def show
        @trail = Trail.find_by(id: params[:id])
        # debugger
        render 'api/trails/show'
    end

    # def index 
    #     @trails = Trail.all
    #     render `api/trails/index`
    # end

    private
    def trail_params 
        params.require(:trail).permit(
            :name, 
            :difficulty, 
            :summary, 
            :description, 
            :length, 
            :elevation_gain, 
            :route_type,
            :usage,
            :park_id,
            :lat,
            :lng
        )
    end

end
