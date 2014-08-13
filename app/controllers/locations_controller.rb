class LocationsController < ApplicationController
  def index

  	if params[:search] and params[:search] != "" 
  		@locations = Location.near(params[:search], 20, :units => :km)
  		@search_mode = true
  	else
		@locations = Location.all
		@search_mode = false
	end
  end

  def new

  	@locations = Location.new()

  end

  def create

  	@location = Location.create(location_params)
  	redirect_to root_path

  end

  private
  def location_params
	params.require(:location).permit(:title, :address)
  end

end
