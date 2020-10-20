class Api::ParksController < ApplicationController

    def show
        @park = Park.find(params[:id]) 
        # debugger
        render 'api/parks/show'
    end

    def index
        @parks = Park.all
        render 'api/parks/index'
    end

    # def index
    #     # @park = Park.find_by(id: params[:id]).trails
    #     @trails = Trail.all.where(park_id: params[:id])
    #     # debugger
    #     render 'api/trails/index'
    # end 

    private
    def park_params 
        params.require(:park).permit(
            :name, 
            :summary, 
            :description, 
            :location, 
            :acreage, 
            :contact,
            :website,
            :lat,
            :lng, 
            photos: []
        )
    end

end
