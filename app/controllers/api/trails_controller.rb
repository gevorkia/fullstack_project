class Api::TrailsController < ApplicationController

    def show
        @trail = Trail.find_by(id: params[:id])
        # debugger
        @tags = Tag.all
        render 'api/trails/show'
    end

    def index 
        # debugger
        @trails = Trail.where(park_id: params[:park_id])
        @park = Park.find_by(id: params[:park_id])
        # render `api/trails/index`
        render 'api/parks/show'
    end

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
            :lng,
            photos: []
        )
    end

end
