class Api::ParksController < ApplicationController

    def show
        @park = Park.find(params[:id]) 
        render 'api/parks/show'
    end

    def index
        @parks = Park.all
        render 'api/parks/index'
    end

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
